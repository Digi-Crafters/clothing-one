"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const FeaturedCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
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

  const categories = [
    {
      id: 1,
      name: "LUXURY WATCHES",
      description: "Timeless precision meets contemporary design",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop",
      featured: true,
      itemCount: "120+",
    },
    {
      id: 2,
      name: "PREMIUM FASHION",
      description: "Curated collection of elite fashion pieces",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop",
      featured: false,
      itemCount: "350+",
    },
    {
      id: 3,
      name: "ELITE ACCESSORIES",
      description: "Sophisticated accessories for the discerning",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
      featured: true,
      itemCount: "200+",
    },
    {
      id: 4,
      name: "LUXURY TECH",
      description: "Where innovation meets premium craftsmanship",
      image:
        "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&h=800&fit=crop",
      featured: false,
      itemCount: "80+",
    },
    {
      id: 5,
      name: "FINE JEWELRY",
      description: "Exquisite pieces for extraordinary moments",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop",
      featured: true,
      itemCount: "150+",
    },
    {
      id: 6,
      name: "ARTISAN CRAFTS",
      description: "Handcrafted excellence from master artisans",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false,
      itemCount: "95+",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="featured-categories"
      className="min-h-screen bg-white py-20 md:py-32 font-mono"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">
              CURATED EXCELLENCE
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6 leading-none tracking-tighter">
            <span className="mr-2">FEATURED</span>
            <br />
            <span className="bg-black text-white px-4 py-2 mt-2 inline-block">
              CATEGORIES
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Discover our meticulously curated categories, each representing the
            pinnacle of quality, craftsmanship, and contemporary luxury.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Card */}
              <div className="relative overflow-hidden bg-black h-96 md:h-[500px]">
                {/* Category Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredCategory === category.id
                        ? "scale-110"
                        : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                      hoveredCategory === category.id
                        ? "opacity-30"
                        : "opacity-50"
                    }`}
                  ></div>
                </div>

                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-white text-black px-3 py-1 text-xs font-bold tracking-wide">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Item Count */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="text-white text-sm font-light tracking-wide opacity-80">
                    {category.itemCount} ITEMS
                  </div>
                </div>

                {/* Category Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <div
                    className={`transition-all duration-500 ${
                      hoveredCategory === category.id
                        ? "translate-y-0"
                        : "translate-y-4"
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tighter">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed tracking-wide mb-4">
                      {category.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      className={`group/btn flex items-center space-x-2 text-white font-medium tracking-wide transition-all duration-300 ${
                        hoveredCategory === category.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-70 -translate-x-2"
                      }`}
                    >
                      <span className="border-b border-white pb-1">
                        EXPLORE COLLECTION
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          hoveredCategory === category.id
                            ? "translate-x-2"
                            : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div
                  className={`absolute inset-0 border-4 border-white transition-all duration-500 ${
                    hoveredCategory === category.id
                      ? "opacity-20 scale-95"
                      : "opacity-0 scale-100"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 md:mt-24 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group bg-black text-white px-8 py-4 font-bold tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto relative overflow-hidden">
            <span className="relative z-10">VIEW ALL CATEGORIES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="flex items-center space-x-2">
                <span>VIEW ALL CATEGORIES</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
