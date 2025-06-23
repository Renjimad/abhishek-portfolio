"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo/Name */}
          <Link
            href="/"
            scroll={true}
            className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide hover:text-gray-200 transition-colors"
            onClick={closeMenu}
          >
            Abhishek
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8 lg:space-x-12">
              <Link
                href="/projects"
                scroll={true}
                className={`transition-colors text-base font-medium ${
                  currentPage === "projects" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/about"
                scroll={true}
                className={`transition-colors text-base font-medium ${
                  currentPage === "about" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/comics"
                scroll={true}
                className={`transition-colors text-base font-medium ${
                  currentPage === "comics" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Comics
              </Link>
              <Link
                href="/writing-a-book"
                scroll={true}
                className={`transition-colors text-base font-medium ${
                  currentPage === "writing-a-book" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Writing a Book
              </Link>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="mailto:abhishekmaddur04@gmail.com"
              className="group relative inline-flex items-center gap-2 bg-gray-900 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 text-sm overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.animation =
                  "gradient-shift 0.8s ease-in-out infinite, flicker-glow 0.6s ease-in-out infinite"
                e.currentTarget.style.background =
                  "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)"
                e.currentTarget.style.backgroundSize = "300% 300%"
                e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 0, 110, 0.5), 0 0 30px rgba(131, 56, 236, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animation = "none"
                e.currentTarget.style.background = "#111827"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Let's build together
            </Link>
            <a
              href="https://calendly.com/abhishekmaddur04/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            >
              30-Min Meeting
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-200 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="py-4 space-y-2">
              <Link
                href="/projects"
                scroll={true}
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  currentPage === "projects"
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                href="/about"
                scroll={true}
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  currentPage === "about"
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/comics"
                scroll={true}
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  currentPage === "comics"
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                onClick={closeMenu}
              >
                Comics
              </Link>
              <Link
                href="/writing-a-book"
                scroll={true}
                className={`block px-4 py-2 text-base font-medium transition-colors ${
                  currentPage === "writing-a-book"
                    ? "text-white bg-gray-800"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                onClick={closeMenu}
              >
                Writing a Book
              </Link>

              {/* Separator */}
              <div className="border-t border-gray-700 my-4" />

              {/* CTAs as buttons */}
              <Link
                href="mailto:abhishekmaddur04@gmail.com"
                className="block w-full text-center px-4 py-3 mb-2 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 text-white font-semibold rounded-lg shadow transition-all duration-200 hover:from-pink-700 hover:to-cyan-600"
                onClick={closeMenu}
              >
                📩 Let's Build Together
              </Link>
              <a
                href="https://calendly.com/abhishekmaddur04/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow transition-all duration-200"
                onClick={closeMenu}
              >
                📅 30-Min Meeting
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
