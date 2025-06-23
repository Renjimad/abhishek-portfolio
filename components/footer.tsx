"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Footer() {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal on Esc
  useEffect(() => {
    if (!showModal) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowModal(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [showModal])

  // Close modal on outside click
  useEffect(() => {
    if (!showModal) return
    function handleClick(e: MouseEvent) {
      if (modalRef.current && e.target instanceof Node && !modalRef.current.contains(e.target)) setShowModal(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [showModal])

  return (
    <>
      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-all">
          <div
            ref={modalRef}
            className="relative w-full max-w-md mx-auto bg-black text-white rounded-2xl shadow-2xl border border-gray-800 p-6 pt-7 animate-modal-in"
            style={{ top: '-3rem' }}
          >
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-3 text-white">No LinkedIn. Just Proof.</h3>
            <p className="text-neutral-200 text-base leading-relaxed">
              I don't use LinkedIn. I prefer real proof over polished platforms. You'll get a better idea of who I am from my work and thoughts — not from endorsements by people I haven't spoken to in years.
            </p>
          </div>
          <style jsx global>{`
            @keyframes modal-in {
              0% { opacity: 0; transform: scale(0.95) translateY(40px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-modal-in {
              animation: modal-in 0.25s cubic-bezier(.4,2,.6,1) both;
            }
          `}</style>
        </div>
      )}
      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-white text-xl font-bold">
              Abhishek<span className="text-gray-400">.dev</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/renjimad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none"
                aria-label="LinkedIn"
                onClick={() => setShowModal(true)}
              >
                <Linkedin size={24} />
              </button>
              <Link
                href="https://twitter.com/Kal_aata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://instagram.com/abhishekm825"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">© 2025 Abhishek Maddur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
