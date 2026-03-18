"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const completedProjects = [
  { id: 1, title: "The Onyx Penthouse", category: "Residential", location: "Mumbai", image: "/images/project_penthouse_1773249456323.png", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Lumina Kitchen", category: "Interior", location: "New Delhi", image: "/images/project_kitchen_1773249402936.png", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Aura Master Suite", category: "Residential", location: "Goa", image: "/images/project_bedroom_1773249383807.png", span: "md:col-span-1 md:row-span-1" },
];

const ongoingProjects = [
  { id: 4, title: "Executive Office", category: "Commercial", location: "Bangalore", image: "/images/project_office_1773249422556.png", span: "md:col-span-1 md:row-span-2" },
  { id: 5, title: "Wellness Bathroom", category: "Interior", location: "Chennai", image: "/images/project_bathroom_1773249438550.png", span: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Sunset Terrace", category: "Exterior", location: "Jaipur", image: "/images/project_terrace_1773249473653.png", span: "md:col-span-2 md:row-span-1" },
];

export default function Portfolio() {
  const [tab, setTab] = useState<"completed" | "ongoing">("completed");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = tab === "completed" ? completedProjects : ongoingProjects;

  return (
    <section id="projects" className="py-36 bg-cream text-charcoal">
      <div className="container mx-auto px-6 md:px-16">

        {/* Section header */}
        <div className="mb-20">
          <div className="overflow-hidden mb-3">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold font-mono uppercase tracking-[0.3em] text-xs"
            >
              Our Portfolio
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif"
            >
              Signature <span className="italic text-gray-400 font-light">Projects</span>
            </motion.h2>
          </div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex gap-1 mb-16 border-b border-gray-200"
        >
          {(["completed", "ongoing"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative pb-4 px-2 mr-10 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                tab === t ? "text-charcoal" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t === "completed" ? "Completed" : "Ongoing"}
              {tab === t && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gold"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-3"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group overflow-hidden cursor-pointer ${project.span}`}
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-gold font-mono text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category} · {project.location}
                  </p>
                  <h3 className="text-white text-2xl font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h3>
                </div>
                {/* Ongoing badge */}
                {tab === "ongoing" && (
                  <div className="absolute top-4 left-4 bg-gold text-deep text-[10px] font-mono uppercase tracking-widest px-3 py-1">
                    In Progress
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-6 px-16 py-5 bg-charcoal text-white font-mono text-xs uppercase tracking-[0.3em] overflow-hidden hover:bg-deep transition-colors duration-500"
          >
            <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-deep transition-colors duration-300">View All Projects</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl aspect-video"
            >
              <Image src={selectedImage} fill alt="Project" className="object-contain" />
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white font-mono text-xs tracking-widest uppercase border border-white/20 hover:border-white/60 px-4 py-2 transition-all"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
