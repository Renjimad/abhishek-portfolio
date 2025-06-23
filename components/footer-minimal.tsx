"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function FooterMinimal() {
  return (
    <footer className="bg-black py-6 sm:py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Brand */}
          <div className="text-white text-lg sm:text-xl font-bold order-1 sm:order-1">
            Abhishek<span className="text-gray-400">.dev</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6 order-2 sm:order-2">
            <Link
              href="https://github.com/renjimad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/abhishekmaddur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://twitter.com/Kal_aata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="https://instagram.com/abhishekm825"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">© 2025 Abhishek Maddur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
