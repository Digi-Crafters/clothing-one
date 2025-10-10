"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Gift,
  Percent,
  Clock,
  Star,
  ShoppingCart,
  ArrowRight,
  Timer,
} from "lucide-react";

const SpecialOffers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const specialOffers = [
    {
      id: 1,
      title: "FLASH SALE",
      subtitle: "LUXURY WATCHES",
      description: "Up to 40% off premium timepieces",
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=600&fit=crop",
      discount: "40%",
      originalPrice: "$2,500",
      salePrice: "$1,499",
      badge: "LIMITED TIME",
      urgency: "Ends in 24 hours",
    },
    {
      id: 2,
      title: "EXCLUSIVE DEAL",
      subtitle: "DESIGNER COLLECTION",
      description: "Handpicked luxury fashion pieces",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      discount: "30%",
      originalPrice: "$899",
      salePrice: "$629",
      badge: "VIP MEMBERS",
      urgency: "72 pieces left",
    },
    {
      id: 3,
      title: "MEGA OFFER",
      subtitle: "TECH BUNDLE",
      description: "Premium gadgets & accessories",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop",
      discount: "25%",
      originalPrice: "$1,299",
      salePrice: "$974",
      badge: "BUNDLE DEAL",
      urgency: "Save $325",
    },
    {
      id: 4,
      title: "EARLY ACCESS",
      subtitle: "JEWELRY VAULT",
      description: "Rare gems & precious metals",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
      discount: "50%",
      originalPrice: "$3,200",
      salePrice: "$1,599",
      badge: "INSIDER DEAL",
      urgency: "Members only",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="special-offers"
      className="min-h-screen bg-black py-20 md:py-32 font-mono relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 mb-6">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">
              EXCLUSIVE DEALS
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 leading-none tracking-tighter">
            SPECIAL
            <span className="bg-white text-black px-4 py-2 lg:mt-6 ml-8">OFFERS</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide mb-8">
            Exceptional savings on our most coveted luxury items. Limited time,
            limited quantities.
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8 bg-black/50 backdrop-blur-sm px-6 py-4 inline-flex">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-red-500">
                {timeLeft.hours}
              </div>
              <div className="text-xs text-gray-400 tracking-wide">HOURS</div>
            </div>
            <div className="text-red-500 text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-red-500">
                {timeLeft.minutes}
              </div>
              <div className="text-xs text-gray-400 tracking-wide">MINUTES</div>
            </div>
            <div className="text-red-500 text-2xl">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-red-500">
                {timeLeft.seconds}
              </div>
              <div className="text-xs text-gray-400 tracking-wide">SECONDS</div>
            </div>
          </div>
        </div>

        {/* Special Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {specialOffers.map((offer, index) => (
            <div
              key={offer.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200 + 500}ms` }}
            >
              {/* Offer Card */}
              <div className="relative overflow-hidden bg-white h-96 md:h-[450px] group-hover:shadow-2xl transition-all duration-500">
                {/* Offer Image */}
                <div className="absolute inset-0">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-red-600 text-white px-4 py-2 font-black text-xl">
                    -{offer.discount}
                  </div>
                </div>

                {/* Offer Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wide">
                    {offer.badge}
                  </div>
                </div>

                {/* Offer Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                    <span className="text-red-400 text-sm font-medium tracking-wide">
                      {offer.title}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tighter">
                      {offer.subtitle}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed tracking-wide mb-4">
                      {offer.description}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-2xl md:text-3xl font-black text-white">
                        {offer.salePrice}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {offer.originalPrice}
                      </span>
                    </div>

                    {/* Urgency Text */}
                    <div className="flex items-center space-x-2 mb-6">
                      <Clock className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-sm font-medium">
                        {offer.urgency}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <button className="group/btn bg-white text-black px-6 py-3 font-bold tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center space-x-2 w-full justify-center">
                      <span>CLAIM OFFER</span>
                      <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
