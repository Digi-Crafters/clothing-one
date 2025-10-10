"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronRight, ShoppingBag, Star, ArrowDown } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: any) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <div
      className="relative min-h-screen bg-black overflow-hidden font-mono"
      onMouseMove={handleMouseMove}
    >
      {/* SVG Wave Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wave-haikei.svg"
          alt="Hero Wave Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Main Hero Content */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-8 text-center pt-16 sm:pt-0 mt-10">
        <div
          className={`transition-all duration-1500 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tighter">
            <div className="relative inline-block">
              WELCOME TO
              <div className="absolute -inset-1 bg-white opacity-10 blur-xl"></div>
            </div>
            <br />
            <div className="relative inline-block mt-4">
              <span className="bg-white text-black px-4 py-2">OUR</span>
              <span className="ml-4">WORLD</span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            Your journey to excellence starts here. Discover timeless elegance
            meets contemporary innovation in every carefully crafted piece.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div
          className={`flex flex-col md:flex-row gap-6 transition-all duration-1500 delay-1300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden">
            <span className="relative z-10">EXPLORE COLLECTION</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="flex items-center space-x-2">
                <span>EXPLORE COLLECTION</span>
                <ChevronRight className="w-5 h-5" />
              </span>
            </span>
          </button>

          <button className="group bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden border-2 border-black">
            <span className="relative z-10">SHOP NOW</span>
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="flex items-center space-x-2">
                <span>SHOP NOW</span>
                <ShoppingBag className="w-5 h-5" />
              </span>
            </span>
          </button>
        </div>

        {/* Brand Stats */}
        <div
          className={`flex flex-wrap justify-center gap-8 md:gap-12 mt-16 transition-all duration-1500 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-black md:text-white">
              500K+
            </div>
            <div className="text-sm tracking-wide text-black md:text-gray-400">
              HAPPY CUSTOMERS
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-[#333333] ml-4">
              50+
            </div>
            <div className="text-sm  tracking-wide text-black ml-4">
              COUNTRIES
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-black">15</div>
            <div className="text-sm text-black tracking-wide">
              YEARS EXPERIENCE
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1500 delay-2000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-sm font-light tracking-widest">
            SCROLL
          </span>
          <ArrowDown className="w-4 h-4 text-white animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;