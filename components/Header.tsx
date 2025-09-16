"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'FEATURED CATEGORIES', href: '#featured-categories' },
    { name: 'TRENDING', href: '#trending' },
    { name: 'SPECIAL OFFERS', href: '#special-offers' },
    { name: 'BRAND STORY', href: '#brand-story' },
    { name: 'TESTIMONIALS', href: '#testimonials' }
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 font-mono transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white font-black text-xl md:text-2xl tracking-tighter">
              <span className="bg-white text-black px-2 py-1">OUR</span>
              <span className="ml-2">WORLD</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group relative text-white text-sm font-medium tracking-wide hover:text-gray-300 transition-colors duration-300"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-8 space-y-6">
            {/* Mobile Navigation Links */}
            <nav className="space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white text-lg font-medium tracking-wide hover:text-gray-300 transition-colors duration-300 border-b border-white/10 pb-3"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header