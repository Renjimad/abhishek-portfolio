"use client"

import Navigation from "./components/navigation"
import Footer from "./components/footer"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <main className="w-full relative">
        <section className="min-h-[80vh] flex flex-col justify-center items-center py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 via-transparent to-cyan-50 opacity-40"></div>

          {/* Animated Gradient Orbs - Responsive */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

          <div className="max-w-4xl w-full mx-auto text-center relative z-10 flex flex-col items-center justify-center">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-4 sm:mb-6 text-center">
              I design with AI. <br className="hidden sm:block" />I ship with soul.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 text-center">
              Crafting fast, future-facing websites with modern tools, bold visuals, and obsession-worthy UX.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
