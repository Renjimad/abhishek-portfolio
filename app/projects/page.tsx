"use client"

import type React from "react"

import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { ExternalLink, Github, Mail, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Placeholder component for projects without images
const ProjectPlaceholder = ({ title }: { title: string }) => (
  <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-3xl flex items-center justify-center">
    <div className="text-center">
      <div className="text-gray-400 text-4xl mb-2">📸</div>
      <p className="text-gray-300 text-sm font-medium">Coming Soon</p>
      <p className="text-gray-500 text-xs mt-1">{title}</p>
    </div>
    <div className="absolute inset-0 bg-black/30 rounded-t-3xl"></div>
  </div>
)

const projects = [
  {
    id: 1,
    title: "Storyline",
    description: "Instantly turn your ideas into comic stories — no drawing skills, just smart prompts and AI-generated visuals.",
    stack: [
      "AI Product UX",
      "Prompt → Visual Flow",
      "Rapid MVP Prototyping"
    ],
    image: "/assets/storyline.png",
    hasImage: true,
    liveDemo: "https://story-line-91zi2fc6f-abhishekmaddur04-gmailcoms-projects.vercel.app/",
  },
  {
    id: 2,
    title: "PixelBot",
    description: "Transform words into playful pixel art with AI — a micro-tool designed for creativity and fun UX testing.",
    stack: [
      "Tiny Tools, Big UX",
      "Pixel-Perfect Interfaces",
      "AI-Driven Design Playgrounds"
    ],
    image: "/assets/task-manager.png",
    hasImage: true,
    liveDemo: "https://pixel-bot-abhi.vercel.app/",
  },
  {
    id: 5,
    title: "BiteBudget",
    description: "Work in Progress — This case study shows the wireframe and UX thinking for a smart AI finance tool. Full UI coming soon.",
    stack: ["UX Strategy", "Figma Flows", "Smart AI Logic", "Budget UX", "Wireframes → Prototype"],
    image: "/assets/BiteBudget.png",
    hasImage: true,
    liveDemo: "https://www.figma.com/design/IHTPDNqPr62SvbI4HBnKuT/Project-addon?node-id=0-1&t=iD1Zkmo9P6fBDe6f-1",
  },
  {
    id: 4,
    title: "MindRack",
    description: "🧠 MindRack – A system to organize your brain. Paused, not abandoned.",
    stack: ["Visual Systems", "Idea Structuring", "Founder Thinking"],
    image: "",
    hasImage: false,
    liveDemo: "#",
  },
  {
    id: 3,
    title: "AnyWhereDoor",
    description: "Real-time weather tracking with OpenWeather API integration and a dynamic interface.",
    stack: ["JavaScript", "OpenWeather API", "CSS"],
    image: "",
    hasImage: false,
    liveDemo: "https://anywheredoor.abhishekmaddur.dev",
  },
]

export default function ProjectsPage() {
  const [isMindRackModalOpen, setIsMindRackModalOpen] = useState(false)
  const [isAnyWhereDoorModalOpen, setIsAnyWhereDoorModalOpen] = useState(false)

  const handleButtonHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget
    target.style.animation = "gradient-shift 0.8s ease-in-out infinite, flicker-glow 0.6s ease-in-out infinite"
    target.style.background = "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)"
    target.style.backgroundSize = "300% 300%"
    target.style.boxShadow = "0 0 15px rgba(255, 0, 110, 0.5), 0 0 30px rgba(131, 56, 236, 0.3)"
  }

  const handleButtonLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget
    target.style.animation = "none"
    target.style.background = "#111827"
    target.style.boxShadow = "none"
  }

  const handleMindRackClick = () => {
    setIsMindRackModalOpen(true)
  }

  const closeMindRackModal = () => {
    setIsMindRackModalOpen(false)
  }

  const handleAnyWhereDoorClick = () => {
    setIsAnyWhereDoorModalOpen(true)
  }

  const closeAnyWhereDoorModal = () => {
    setIsAnyWhereDoorModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-neutral-200">
      {/* Navigation */}
      <Navigation currentPage="projects" />

      {/* Projects Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Title */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">My Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={
                `bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl overflow-hidden transition-all duration-300 shadow-lg shadow-black/20 hover:scale-[1.03] hover:shadow-cyan-400/20 flex flex-col` +
                (idx >= 3 ? ' lg:col-span-1 lg:mx-auto' : '')
              }
            >
              {/* Project Image */}
              {project.hasImage ? (
                <div className="relative h-48 md:h-56 bg-gray-800">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                </div>
              ) : (
                <ProjectPlaceholder title={project.title} />
              )}

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-base leading-relaxed mb-4 flex-grow">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="inline-block bg-cyan-900/60 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full tracking-tight shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div>
                  {project.title === "Storyline" ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 project-demo-btn w-full text-center"
                    >
                      <ExternalLink size={18} />
                      <span>🔗 Live Demo</span>
                    </a>
                  ) : project.title === "BiteBudget" ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 project-demo-btn w-full text-center"
                    >
                      Read Wireframe Story
                    </a>
                  ) : project.title === "MindRack" ? (
                    <button
                      onClick={handleMindRackClick}
                      className="group inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 w-full text-center"
                    >
                      <span>💭 Learn More</span>
                    </button>
                  ) : project.title === "AnyWhereDoor" ? (
                    <button
                      onClick={handleAnyWhereDoorClick}
                      className="group inline-flex items-center justify-center gap-2 project-demo-btn w-full text-center"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                  ) : (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 project-demo-btn w-full text-center"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-gray-300 text-lg sm:text-xl mb-6 sm:mb-8">Like what you see? I can design yours too.</p>
          <Link
            href="mailto:abhishekmaddur04@gmail.com"
            className="group relative inline-flex items-center gap-3 bg-gray-900 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.animation =
                "gradient-shift 0.8s ease-in-out infinite, flicker-glow 0.6s ease-in-out infinite"
              e.currentTarget.style.background =
                "linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)"
              e.currentTarget.style.backgroundSize = "300% 300%"
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(131, 56, 236, 0.3), 0 0 60px rgba(58, 134, 255, 0.2)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animation = "none"
              e.currentTarget.style.background = "#111827"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <Mail size={20} />
            Email Me
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* MindRack Modal */}
      {isMindRackModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 relative border border-gray-700">
            <button
              onClick={closeMindRackModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Why I Paused MindRack</h3>
              
              <div className="text-gray-300 space-y-4 text-left">
                <p>
                  MindRack wasn't a failure. It was a vision ahead of its time.  
                  I paused development not because it didn't work — but because I realized I needed to sharpen my product design skills and build stronger foundations first.
                </p>
                
                <p>
                  The idea lives on — and it's coming back, smarter and bolder.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://yourdomain.com/mindrack-case-study" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Read the Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AnyWhereDoor Modal */}
      {isAnyWhereDoorModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 relative border border-gray-700">
            <button
              onClick={closeAnyWhereDoorModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚪</div>
              <h3 className="text-2xl font-bold text-white mb-6">Coming Soon!</h3>
              
              <div className="text-gray-300">
                <p className="text-lg">
                  This project is still in development. Stay tuned — it's coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes flicker-glow {
          0%, 100% { 
            box-shadow: 0 0 15px rgba(255, 0, 110, 0.5), 0 0 30px rgba(131, 56, 236, 0.3);
          }
          50% { 
            box-shadow: 0 0 25px rgba(255, 0, 110, 0.8), 0 0 50px rgba(131, 56, 236, 0.6);
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .project-demo-btn {
          background: #1e90ff;
          color: #fff;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          transition: background 0.2s, filter 0.2s, box-shadow 0.2s;
          box-shadow: none;
        }
        .project-demo-btn:hover, .project-demo-btn:focus {
          animation: project-btn-hue 1s linear infinite;
          filter: hue-rotate(30deg) brightness(1.1);
          box-shadow: 0 0 15px #1e90ff66, 0 0 30px #1e90ff33;
        }
        .project-demo-btn:not(:hover):not(:focus) {
          animation: none !important;
          filter: none !important;
          background: #1e90ff !important;
          box-shadow: none !important;
        }
        @keyframes project-btn-hue {
          0% { filter: hue-rotate(0deg) brightness(1.1); }
          100% { filter: hue-rotate(360deg) brightness(1.1); }
        }
      `}</style>
    </div>
  )
}
