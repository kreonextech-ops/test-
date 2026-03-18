"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  { id: 1, title: "The Onyx Penthouse", category: "Residential", location: "Mumbai", year: "2023", status: "completed", image: "/images/project_penthouse_1773249456323.png", desc: "A 4,500 sq.ft. penthouse transformation featuring bespoke Venetian plaster walls and a fully custom kitchen by a Milan artisan collective." },
  { id: 2, title: "Lumina Kitchen", category: "Interior", location: "New Delhi", year: "2023", status: "completed", image: "/images/project_kitchen_1773249402936.png", desc: "A complete kitchen redesign using sage cabinetry, book-matched Calacatta marble, and integrated ambient lighting throughout." },
  { id: 3, title: "Aura Master Suite", category: "Residential", location: "Goa", year: "2024", status: "completed", image: "/images/project_bedroom_1773249383807.png", desc: "A boutique master retreat blending raw linen textures, teak accents, and layered lighting for a resort-like ambience." },
  { id: 4, title: "Executive Office", category: "Commercial", location: "Bangalore", year: "2025", status: "ongoing", image: "/images/project_office_1773249422556.png", desc: "A 12,000 sq.ft. commercial fit-out for a leading private equity firm. Currently in procurement phase." },
  { id: 5, title: "Wellness Bathroom", category: "Interior", location: "Chennai", year: "2025", status: "ongoing", image: "/images/project_bathroom_1773249438550.png", desc: "A spa-inspired bathroom featuring a hand-carved stone vessel basin and wet room with full oak panelling." },
  { id: 6, title: "Sunset Terrace", category: "Exterior", location: "Jaipur", year: "2025", status: "ongoing", image: "/images/project_terrace_1773249473653.png", desc: "A luxury roof terrace transformation with bespoke teak seating and a landscape design incorporating local flora." },
];

export default function ProjectsPageContent() {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const visible = allProjects.filter(p => filter === "all" || p.status === filter);

  return (
    <main className="bg-cream text-charcoal">
      {/* Hero */}
      <section className="relative h-[60vh] bg-deep flex items-end overflow-hidden">
        <Image src="/images/project_penthouse_1773249456323.png" fill className="object-cover opacity-40" alt="Projects" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep to-transparent" />
        <div className="container mx-auto px-6 md:px-16 pb-24 relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gold font-mono uppercase tracking-[0.3em] text-xs mb-4">Our Portfolio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-6xl md:text-8xl font-serif text-white leading-tight">
            Signature <span className="italic text-gold font-light">Projects</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex gap-2 border-b border-gray-200 mb-16">
            {(["all", "completed", "ongoing"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative pb-4 px-2 mr-8 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${filter === f ? "text-charcoal" : "text-gray-400 hover:text-gray-600"}`}
              >
                {f === "all" ? "All Projects" : f === "completed" ? "Completed" : "Ongoing"}
                {filter === f && <motion.div layoutId="projects-tab" className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gold" />}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visible.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-[380px] overflow-hidden mb-6">
                    <Image src={project.image} fill alt={project.title} className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {project.status === "ongoing" && (
                      <div className="absolute top-4 left-4 bg-gold text-deep text-[10px] font-mono uppercase tracking-widest px-3 py-1">In Progress</div>
                    )}
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white font-mono text-xs uppercase tracking-widest border-b border-gold pb-1">View Details</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-serif mb-1">{project.title}</h3>
                      <p className="text-gray-400 font-mono text-xs">{project.category} · {project.location}</p>
                    </div>
                    <span className="text-gray-300 font-mono text-xs">{project.year}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            >
              <div className="relative h-64 md:h-auto">
                <Image src={selectedProject.image} fill alt={selectedProject.title} className="object-cover" />
              </div>
              <div className="p-10 flex flex-col justify-between">
                <div>
                  <p className="text-gold font-mono text-xs uppercase tracking-widest mb-4">{selectedProject.category} · {selectedProject.location} · {selectedProject.year}</p>
                  <h2 className="text-3xl font-serif mb-6">{selectedProject.title}</h2>
                  <p className="text-gray-500 font-light leading-relaxed">{selectedProject.desc}</p>
                </div>
                <div className="mt-10 flex gap-4 items-center">
                  <span className={`font-mono text-xs uppercase tracking-widest px-3 py-1 ${selectedProject.status === "ongoing" ? "bg-gold text-deep" : "border border-gray-300 text-gray-500"}`}>
                    {selectedProject.status === "ongoing" ? "In Progress" : "Completed"}
                  </span>
                  <button onClick={() => setSelectedProject(null)} className="ml-auto font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-charcoal transition-colors">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
