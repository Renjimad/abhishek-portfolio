import Image from "next/image"
import Navigation from "../../components/navigation"
import FooterMinimal from "../../components/footer-minimal"

export default function WritingABookPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation currentPage="writing-a-book" />

      {/* 1. Book Intro (Hero) - #0f0f0f - clean start, no border */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: "#0f0f0f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Writing a Book</h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Exploring how AI tools shape our habits, behaviors, and creative thinking.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why This Book - #161616 - top border or label */}
      <section
        className="py-8 sm:py-12 md:py-16 lg:py-20 border-t border-gray-800"
        style={{ backgroundColor: "#161616" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/ai-hooked-book-cover.png"
                  alt="AI HOOKED book cover"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">🧠 Why This Book?</h2>
              <p className="mb-4 italic text-gray-300 text-base sm:text-lg leading-relaxed">
                This book explores how AI tools are reshaping human habits, creativity, and productivity. It's for
                creators, builders, and anyone curious about the new psychology of AI-driven behavior.
              </p>

              <div className="space-y-3 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>How we went from opening Photoshop… to opening ChatGPT.</p>
                <p>Something changed — not just in tech, but in us.</p>
                <p>
                  We no longer open apps to create. We <em className="text-cyan-400">prompt</em> them.
                  <br />
                  We don't brainstorm. We <em className="text-pink-400">co-think</em>.<br />
                  We don't finish work. We <em className="text-purple-400">iterate through infinite outputs</em> until
                  one feels right.
                </p>
              </div>

              <p className="mb-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                This book explores the real psychological loop behind that shift — how AI tools have quietly hijacked
                our creative behavior using the same loops Nir Eyal described in{" "}
                <em className="text-gray-100">Hooked</em>… but more powerful, more addictive, and more decentralized.
              </p>

              <div className="mb-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  If you've ever told yourself <em className="text-cyan-300">"Just one more Midjourney render..."</em>
                </p>
                <p>
                  Or <em className="text-pink-300">"Let me refine this prompt one more time..."</em>
                </p>
                <p className="mt-2">You're in the loop already.</p>
              </div>

              <p className="mb-6 font-medium text-white text-base sm:text-lg leading-relaxed">
                Let's make it visible. Let's make it usable. Let's design with it — and against it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You'll Discover - #1c1c1c - grain bg + padding */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative" style={{ backgroundColor: "#1c1c1c" }}>
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">🧠 What You'll Discover</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h4 className="font-bold text-white mb-3 text-lg">🔁 The Loop Behind the Prompt</h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                How AI tools hijack our habits using reward cycles, frictionless action, and invisible feedback — and
                what it means for our brains.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h4 className="font-bold text-white mb-3 text-lg">🧩 Designing With (and Against) the Machine</h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Not just how to work with AI — but when to resist it. Learn the boundaries of delegation, attention, and
                creative ownership.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h4 className="font-bold text-white mb-3 text-lg">🎯 Prompting as a Psychological Act</h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Prompts aren't just commands — they're reflections of desire, uncertainty, and identity. We'll unpack
                the psychology of input/output behavior.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h4 className="font-bold text-white mb-3 text-lg">💡 Redefining Creativity in the AI Era</h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                What happens when the work is infinite, instant, and never "done"? Understand how creative closure,
                satisfaction, and originality are shifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Writing Progress CTA - #121212 - visual break with card layout or label */}
      <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Writing Progress - Left */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2">📝 Writing in Progress</h3>
              <p className="text-gray-400">
                Currently exploring Chapters 4–6
                <br />
                Bonus sections and frameworks being added live.
              </p>
            </div>

            {/* Get Early Access - Right */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-4">Get Early Access</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Be the first to read "AI HOOKED" when it's released. Join the waitlist for exclusive updates and early
                access opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-start justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 w-full sm:w-64"
                />
                <button className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white font-medium px-6 py-3 rounded-lg hover:from-cyan-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterMinimal />
    </div>
  )
}
