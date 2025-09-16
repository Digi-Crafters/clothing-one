"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  History,
  MessageSquareQuote,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";

const BrandStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
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

  const storyMilestones = [
    {
      id: 1,
      year: "2008",
      title: "THE BEGINNING",
      description:
        "Founded in a small atelier in Milan with a vision to create timeless elegance that transcends seasonal trends.",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&h=500&fit=crop",
      stats: "1 STORE",
    },
    {
      id: 2,
      year: "2012",
      title: "INTERNATIONAL EXPANSION",
      description:
        "After success in Europe, we expanded to North America and Asia, bringing our distinctive aesthetic to new markets.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      stats: "15 STORES",
    },
    {
      id: 3,
      year: "2016",
      title: "SUSTAINABILITY COMMITMENT",
      description:
        "Launched our sustainability initiative, pledging to use only ethically sourced materials and fair labor practices.",
      image:
        "https://images.unsplash.com/photo-1491931968361-4a7e9444a657?w=800&h=500&fit=crop",
      stats: "30 STORES",
    },
    {
      id: 4,
      year: "2020",
      title: "DIGITAL TRANSFORMATION",
      description:
        "Embraced the digital revolution with our award-winning e-commerce platform and virtual styling experiences.",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=500&fit=crop",
      stats: "45 STORES",
    },
    {
      id: 5,
      year: "2025",
      title: "THE FUTURE IS NOW",
      description:
        "Setting new standards in fashion with innovation, sustainability, and a continued commitment to excellence.",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=500&fit=crop",
      stats: "100+ STORES",
    },
  ];

  const values = [
    {
      title: "QUALITY",
      description:
        "We never compromise on quality, selecting only the finest materials and craftspeople.",
    },
    {
      title: "INNOVATION",
      description:
        "Always looking forward, we blend tradition with cutting-edge design and technology.",
    },
    {
      title: "SUSTAINABILITY",
      description:
        "Committed to ethical practices that respect our planet and its people.",
    },
    {
      title: "TIMELESSNESS",
      description:
        "We create enduring designs that transcend trends and remain relevant year after year.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The attention to detail and craftsmanship is unmatched. Each piece tells a story of excellence.",
      author: "VOGUE MAGAZINE",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Not just fashion, but a lifestyle statement that resonates with the modern individual.",
      author: "GQ MAGAZINE",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Their commitment to sustainability sets a new standard for luxury fashion brands worldwide.",
      author: "SUSTAINABILITY ALLIANCE",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="brand-story"
      className="min-h-screen bg-black py-20 md:py-32 font-mono"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2 mb-6">
            <History className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">
              OUR LEGACY
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tighter">
            <span className="bg-white text-black px-4 py-2 inline-block mb-2">OUR</span>
            <br />
            BRAND STORY
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            From humble beginnings to global recognition, our journey has been
            defined by unwavering commitment to quality, innovation, and
            timeless elegance.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div
          className={`flex justify-center mb-12 overflow-x-auto scrollbar-hide transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex space-x-1 md:space-x-3">
            {storyMilestones.map((milestone, index) => (
              <button
                key={milestone.id}
                onClick={() => setActiveSlide(index)}
                className={`flex flex-col items-center px-3 md:px-5 py-3 transition-all duration-300 ${
                  activeSlide === index
                    ? "bg-white text-black"
                    : "bg-transparent text-white border border-white/30 hover:border-white"
                }`}
              >
                <span className="text-xs md:text-sm font-light tracking-wide">
                  YEAR
                </span>
                <span className="text-lg md:text-2xl font-black">
                  {milestone.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div
          className={`relative overflow-hidden mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {storyMilestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 absolute inset-0 ${
                activeSlide === index
                  ? "opacity-100 translate-x-0 z-10"
                  : activeSlide > index
                  ? "opacity-0 -translate-x-full z-0"
                  : "opacity-0 translate-x-full z-0"
              }`}
            >
              <div className="relative h-80 md:h-[500px] overflow-hidden">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black text-white px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-lg font-black">{milestone.year}</span>
                  </div>
                  <div className="mt-1 text-sm tracking-wide">
                    {milestone.stats}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center py-10 md:py-0">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                  {milestone.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                  {milestone.description}
                </p>
                <div className="border-t border-white/20 pt-6 mt-auto">
                  <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
                    <span className="text-sm font-medium tracking-wide">
                      LEARN MORE ABOUT THIS ERA
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="h-80 md:h-[500px] opacity-0">
            {/* Placeholder to maintain height */}
          </div>
        </div>

        {/* Our Values */}
        <div
          className={`mb-24 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              OUR <span className="bg-white text-black px-2">VALUES</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do, from design to
              customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 md:p-8 backdrop-blur-sm bg-white/5"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <h4 className="text-xl font-black text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-300 font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          className={`mb-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2 mb-6">
              <MessageSquareQuote className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">
                TESTIMONIALS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/20 p-6 md:p-8 flex flex-col"
                style={{ transitionDelay: `${1100 + index * 100}ms` }}
              >
                <div className="mb-6 text-xl text-white font-light italic leading-relaxed">
                  "{testimonial.quote}"
                </div>
                <div className="mt-auto flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-white font-bold tracking-wide text-sm">
                    {testimonial.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 mb-8">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium tracking-wide">
              GLOBAL PRESENCE
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
            100+ <span className="bg-white text-black px-2">STORES</span>{" "}
            WORLDWIDE
          </h3>

          <div className="relative h-60 md:h-80 overflow-hidden rounded-lg mb-8">
            <Image
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1200&h=400&fit=crop"
              alt="Global Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-black tracking-wider">
                ACROSS 50+ COUNTRIES
              </span>
            </div>
          </div>

          <button className="group bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto relative overflow-hidden">
            <span className="relative z-10">FIND YOUR NEAREST STORE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="flex items-center space-x-2">
                <span>FIND YOUR NEAREST STORE</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
