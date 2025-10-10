"use client";
import React from "react";
import { Home, ArrowLeft, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Error Code */}
        <div className="mb-8">
          <div className="text-9xl md:text-[12rem] font-black text-white mb-4 leading-none tracking-tighter">
            <span className="bg-white text-black px-4 py-2">404</span>
          </div>
        </div>

        {/* Premium Collection Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 mb-8 rounded-full border border-white/20">
          <ShoppingBag className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-light tracking-wide">
            PREMIUM COLLECTION 2025
          </span>
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none tracking-tighter">
          PAGE NOT FOUND
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
          The page you're looking for seems to have wandered off into the void. 
          Perhaps it's exploring our exclusive collection elsewhere.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link 
            href="/"
            className="group bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>BACK TO HOME</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center space-x-2">
                <Home className="w-5 h-5" />
                <span>BACK TO HOME</span>
              </span>
            </span>
          </Link>
        </div>

        {/* Brand Stats - Matching Hero */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-white">500K+</div>
            <div className="text-sm tracking-wide text-gray-400">HAPPY CUSTOMERS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-white">50+</div>
            <div className="text-sm tracking-wide text-gray-400">COUNTRIES</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-black text-white">15</div>
            <div className="text-sm tracking-wide text-gray-400">YEARS EXPERIENCE</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white rounded-full opacity-20 animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-32 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
    </div>
  );
};

export default NotFound;