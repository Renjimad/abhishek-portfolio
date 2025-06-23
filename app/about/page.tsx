import Image from "next/image"
import Navigation from "../../components/navigation"
import FooterMinimal from "../../components/footer-minimal"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navigation Bar */}
      <Navigation currentPage="about" />

      {/* About Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-center lg:text-left">
          Get to know me
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start">
          {/* Avatar Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 relative rounded-lg overflow-hidden">
              <Image
                src="/profile-avatar.png"
                alt="Abhishek's avatar illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-2">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Hey, I'm Abhishek — a design thinker, pixel perfectionist, and AI-native creator. I blend creative
              instinct with systems logic to craft interfaces that feel alive — not just functional. From minimalist UX
              to experimental web builds, my work lives where design, automation, and storytelling collide.
            </p>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Right now, I'm building a portfolio that's more than just pretty screens. It's proof of process, product
              thinking, and fast iteration. Whether I'm designing clean flows, hacking tools with AI, or turning wild
              ideas into working prototypes — I go deep, move fast, and ship with soul.
            </p>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              I believe great design doesn't just look good. It thinks. It adapts. It earns attention. That's the
              standard I build by.
            </p>
          </div>
        </div>
      </main>

      {/* The Unconventional Resume Section */}
      <section className="relative max-w-2xl mx-auto mt-16 mb-12 px-6 py-10 rounded-xl bg-gradient-to-br from-[#101928] to-[#181f2a] shadow-xl shadow-black/40 border-l-4 border-cyan-400">
        <h2 className="text-3xl font-bold text-white mb-6 font-sans">The Unconventional Resume</h2>
        <div className="space-y-5 text-neutral-200 text-base sm:text-lg leading-relaxed font-sans">
          <p>I didn't take the traditional route — I dropped out of college, and I don't have years of corporate job experience.<br/>What I do have?</p>
          <ul className="space-y-2 ml-1">
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" /><span>A sharp design sense.</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" /><span>An addiction to creative problem-solving.</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" /><span>Real projects built with real deadlines.</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" /><span>An unfiltered obsession with shipping fast and smart.</span></li>
          </ul>
          <p>I've worked solo, with AI, across tools, platforms, and stacks — not because I had to.<br/>Because I wanted to see what's possible when design meets momentum.</p>
          <p className="italic text-neutral-400">If you're here looking for a resume —<br/>you'll get a better idea of what I bring by scrolling this site than opening a PDF.</p>
        </div>
        <div className="mt-8">
          <a href="mailto:abhishekmaddur04@gmail.com" className="inline-block font-semibold text-cyan-300 hover:text-cyan-200 transition-colors text-base sm:text-lg underline underline-offset-4">
            Want to talk about what we could build? &rarr; Get in touch
          </a>
        </div>
      </section>

      <FooterMinimal />
    </div>
  )
}
