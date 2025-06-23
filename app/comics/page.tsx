"use client"

import Navigation from "@/components/navigation"
import FooterMinimal from "@/components/footer-minimal"
import { Link as LinkIcon } from "lucide-react"

export default function ComicsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation currentPage="comics" />

      <main className="py-12 md:py-20">
        <header className="max-w-3xl mx-auto text-center px-4 mb-12 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Comics I Co-Created with AI
          </h1>
          <p className="text-gray-400 sm:text-lg md:text-xl leading-relaxed">
            Tiny stories. Life loops. Late-night realizations.
            <br />
            Each comic here is made with AI — but the thoughts are mine.
            <br />
            Not perfect, not polished. Just personal.
          </p>
        </header>

        {/* Comic Block 1 */}
        <section className="max-w-3xl mx-auto py-12 md:py-16 px-4 border-b border-neutral-800">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">
              "MindStack"
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              4-panel comic — a developer's daily drama.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <img
              src="/comics/1/Working.png"
              alt="Panel 1: Everything is working perfectly."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/1/BugAppear.png"
              alt="Panel 2: A wild bug suddenly appears."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/1/Debugging.png"
              alt="Panel 3: Deep in the debugging rabbit hole."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/1/BugFixed.png"
              alt="Panel 4: The bug is finally fixed, relief."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
          </div>

          <a
            href="https://x.com/Kal_Aata/status/1934484408930541830"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3"
          >
            <LinkIcon className="w-4 h-4 mt-1 flex-shrink-0 text-gray-500 group-hover:text-cyan-400 transition-colors" />
            <div className="text-gray-400 italic text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              <p>Just another day fighting bugs in MindStack.</p>
              <p>Built it clean, tested it twice…</p>
              <p>and then ChapTE(Chat GPT) A came in clutch</p>
            </div>
          </a>
        </section>

        {/* Comic Block 2 */}
        <section className="max-w-3xl mx-auto py-12 md:py-16 px-4 border-b border-neutral-800">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">"Iteration"</h3>
            <p className="text-gray-500 text-sm mt-1">
              4-Panel Comic — The Daily Loop We All Live In.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <img
              src="/comics/2/Thinking.png"
              alt="Panel 1: A new idea sparking."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/2/Working.png"
              alt="Panel 2: Deep in focus, bringing the idea to life."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/2/MessedUp.png"
              alt="Panel 3: The idea becomes complicated and messy."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/2/Keeping.png"
              alt="Panel 4: Shelving the idea, but keeping the learnings."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
          </div>

          <a
            href="https://x.com/Kal_Aata/status/1935905703958282714"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3"
          >
            <LinkIcon className="w-4 h-4 mt-1 flex-shrink-0 text-gray-500 group-hover:text-cyan-400 transition-colors" />
            <div className="text-gray-400 italic text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              <p>Every idea feels like the one — until it doesn't.</p>
              <p className="mt-2">Confusion hits. You shelve it.</p>
              <p>The shelf grows.</p>
              <p className="mt-2">But every time you start again, you're not starting from zero.</p>
              <p>You're building on everything you once almost gave up.</p>
            </div>
          </a>
        </section>

        {/* Comic Block 3 */}
        <section className="max-w-3xl mx-auto py-12 md:py-16 px-4 border-b border-neutral-800">
          <div className="mb-8">
            <h3 className="text-2xl font-bold">"From Spark to Drive"</h3>
            <p className="text-gray-500 text-sm mt-1">
              4-Panel Comic — How Ideas Become Engines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <img
              src="/comics/3/Thinking.png"
              alt="Panel 1: A tiny spark of an idea."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/3/RawIdea.png"
              alt="Panel 2: The raw, unformed idea is captured."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/3/Idea.png"
              alt="Panel 3: The idea is refined and structured."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
            <img
              src="/comics/3/WorkingOnIdea.png"
              alt="Panel 4: The idea becomes a functional engine, ready to drive progress."
              className="rounded-xl shadow-sm aspect-square object-cover bg-gray-900"
            />
          </div>

          <a
            href="https://x.com/Kal_Aata/status/1935415691470864493"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3"
          >
            <LinkIcon className="w-4 h-4 mt-1 flex-shrink-0 text-gray-500 group-hover:text-cyan-400 transition-colors" />
            <div className="text-gray-400 italic text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              <p>Some ideas come as sparks.</p>
              <p>Fast. Fleeting. Easy to lose.</p>
              <p className="mt-2">But MindStack doesn't just catch them.</p>
              <p>It turns them into something usable.</p>
              <p>Something drivable.</p>
            </div>
          </a>
        </section>

        {/* Add more <section> blocks for other comics here */}

      </main>

      <FooterMinimal />
    </div>
  )
} 