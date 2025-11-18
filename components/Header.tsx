'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📍 Your Address Here</span>
              <span>📞 Your Phone Number</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-primary-200 transition">Facebook</a>
              <a href="#" className="hover:text-primary-200 transition">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary-700 block">
              Unity Care Living
            </Link>
            <p className="text-sm text-gray-600 italic mt-1">Our Space. Our Home.</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-700 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-700 transition font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-700 transition font-medium">
              Services
            </Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-primary-700 transition font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-700 transition">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-700 transition">
              About
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-primary-700 transition">
              Services
            </Link>
            <Link href="/contact-us" className="block py-2 text-gray-700 hover:text-primary-700 transition">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

