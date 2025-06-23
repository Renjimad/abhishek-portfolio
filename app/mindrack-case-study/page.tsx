"use client"

import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { ArrowLeft, Brain, Lightbulb, Target, Clock, Zap } from "lucide-react"
import Link from "next/link"

export default function MindRackCaseStudyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation currentPage="projects" />

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Hero Content */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              MindRack Case Study
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A system to organize your brain. Paused, not abandoned.
            </p>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Brain className="text-cyan-400" size={32} />
                The Vision
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  MindRack was born from a simple observation: our thoughts are scattered across countless apps, 
                  notes, and devices. We have brilliant ideas, but they get lost in the noise.
                </p>
                <p>
                  The vision was to create a unified system that could capture, organize, and connect your thoughts 
                  in a way that felt natural — like having a second brain that actually works.
                </p>
                <p>
                  Not just another note-taking app. A visual thinking system that helps you see connections, 
                  patterns, and opportunities you might otherwise miss.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Core Principles</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Visual thinking over linear notes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Connections over collections</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Action over archiving</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Clarity over complexity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Was Paused Section */}
      <section className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
              <Clock className="text-yellow-400" size={32} />
              Why I Paused MindRack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This isn't a story of failure. It's a story of strategic patience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-xl font-bold mb-4 text-red-400">The Reality Check</h3>
              <div className="space-y-3 text-gray-300">
                <p>MindRack wasn't failing. It was working too well.</p>
                <p>The concept was solid, the vision was clear, but I realized something crucial: I needed to build stronger foundations first.</p>
                <p>Product design skills, user research, technical architecture — these weren't just nice-to-haves. They were essential for building something truly transformative.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-xl font-bold mb-4 text-green-400">The Strategic Pause</h3>
              <div className="space-y-3 text-gray-300">
                <p>Instead of rushing to market with a half-baked solution, I chose to step back and level up.</p>
                <p>This meant diving deeper into UX research, mastering new tools, and understanding the psychology of thought organization.</p>
                <p>Sometimes the best way forward is to build the foundation that will make your vision truly possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned Section */}
      <section className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Lightbulb className="text-purple-400" size={32} />
            What I Learned
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Focus Matters</h3>
              <p className="text-gray-400">
                A clear vision needs clear execution. Sometimes that means stepping back to see the bigger picture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Skills Compound</h3>
              <p className="text-gray-400">
                Every skill I've built since pausing MindRack will make the final product exponentially better.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Patience is Power</h3>
              <p className="text-gray-400">
                Great ideas don't expire. They evolve. MindRack will be back, smarter and bolder than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future Section */}
      <section className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">What's Next?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              MindRack isn't dead. It's evolving.
            </p>
            
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 border border-cyan-500/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">The Comeback</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  When MindRack returns, it won't just be a better version of the original vision. 
                  It will be something entirely new — built on the foundation of everything I've learned since.
                </p>
                <p>
                  Think of it as MindRack 2.0: A visual thinking system that doesn't just organize your thoughts, 
                  but helps you think better.
                </p>
                <p className="font-semibold text-white">
                  The best ideas are worth waiting for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Want to be the first to know when MindRack makes its comeback? 
            I'll share updates on the evolution of this project.
          </p>
          
          <Link
            href="mailto:abhishekmaddur04@gmail.com?subject=MindRack Updates"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium px-8 py-4 rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-lg"
          >
            Get Updates on MindRack
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 