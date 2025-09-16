"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { TrendingUp, Eye, Heart, ShoppingCart, Star, ArrowRight } from 'lucide-react'

const Trending = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filters = ['ALL', 'WATCHES', 'FASHION', 'TECH', 'JEWELRY']

  const trendingProducts = [
    {
      id: 1,
      name: 'OMEGA SEAMASTER DIVER',
      category: 'WATCHES',
      price: '$4,200',
      originalPrice: '$4,800',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop',
      badge: 'TRENDING #1',
      views: '12.5K',
      likes: '2.8K',
      rating: 4.9,
      discount: 12
    },
    {
      id: 2,
      name: 'ITALIAN LEATHER JACKET',
      category: 'FASHION',
      price: '$890',
      originalPrice: '$1,100',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
      badge: 'TRENDING #2',
      views: '8.9K',
      likes: '1.9K',
      rating: 4.8,
      discount: 19
    },
    {
      id: 3,
      name: 'MACBOOK PRO M3 MAX',
      category: 'TECH',
      price: '$3,499',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=600&fit=crop',
      badge: 'TRENDING #3',
      views: '15.2K',
      likes: '3.1K',
      rating: 5.0,
      discount: 0
    },
    {
      id: 4,
      name: 'DIAMOND TENNIS BRACELET',
      category: 'JEWELRY',
      price: '$2,850',
      originalPrice: '$3,200',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop',
      badge: 'TRENDING #4',
      views: '6.7K',
      likes: '2.2K',
      rating: 4.9,
      discount: 11
    },
    {
      id: 5,
      name: 'PREMIUM SILK SUIT',
      category: 'FASHION',
      price: '$1,250',
      originalPrice: '$1,450',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop',
      badge: 'TRENDING #5',
      views: '9.3K',
      likes: '1.7K',
      rating: 4.7,
      discount: 14
    },
    {
      id: 6,
      name: 'ROLEX SUBMARINER',
      category: 'WATCHES',
      price: '$8,950',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=600&fit=crop',
      badge: 'TRENDING #6',
      views: '18.7K',
      likes: '4.2K',
      rating: 5.0,
      discount: 0
    }
  ]

  const filteredProducts = activeFilter === 'ALL' 
    ? trendingProducts 
    : trendingProducts.filter(product => product.category === activeFilter)

  return (
    <section 
      ref={sectionRef}
      id="trending" 
      className="min-h-screen bg-black py-20 md:py-32 font-mono"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white text-black px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">WHAT'S HOT NOW</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tighter">
            <span className="bg-white text-black px-4 py-2 inline-block mb-2">TRENDING</span>
            <br />
            RIGHT NOW
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            The most coveted pieces that are setting trends and capturing hearts worldwide. 
            Limited availability, unlimited style.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 md:mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 font-medium tracking-wide transition-all duration-300 border-2 ${
                activeFilter === filter
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white/30 hover:border-white/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Trending Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative overflow-hidden bg-white">
                
                {/* Product Image */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Trending Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-black text-white px-3 py-1 text-xs font-bold tracking-wide">
                      {product.badge}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold tracking-wide rounded-full">
                        -{product.discount}%
                      </div>
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="bg-white text-black p-3 hover:bg-gray-100 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-black p-3 hover:bg-gray-100 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-black p-3 hover:bg-gray-100 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500 tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-black text-black mb-3 tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-black text-black">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{product.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{product.likes}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-black text-white py-3 font-bold tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>ADD TO CART</span>
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 md:mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto relative overflow-hidden">
            <span className="relative z-10">VIEW ALL TRENDING ITEMS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <span className="flex items-center space-x-2">
                <span>VIEW ALL TRENDING ITEMS</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Trending