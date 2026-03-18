"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  { id: 1, title: "The Onyx Villa", category: "Full Interior", location: "Dubai", image: "/images/europa-villa/Check 4.jpg.jpeg", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Celestial Dining", category: "Furniture Selection", location: "London", image: "/images/europa-villa/Dining 1.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Aura Master Suite", category: "Residential", location: "Paris", image: "/images/europa-villa/Master Bedroom 1.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Lumina Kitchen", category: "Renovation", location: "New York", image: "/images/europa-villa/Kitchen 3.jpg", span: "md:col-span-1 md:row-span-2" },
  { id: 5, title: "Emerald Lounge", category: "Curation", location: "Milan", image: "/images/europa-villa/Lounge Room 6.jpg", span: "md:col-span-1 md:row-span-1" },
  { id: 6, title: "Obsidian Entryway", category: "Architecture", location: "Singapore", image: "/images/europa-villa/Check 5.jpg.jpeg", span: "md:col-span-2 md:row-span-1" },
  { id: 7, title: "Marble Haven", category: "Styling", location: "Venice", image: "/images/europa-villa/Check 6.jpg.jpeg", span: "md:col-span-1 md:row-span-1" },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 md:py-24 bg-luxury-ivory text-luxury-espresso relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">

        {/* Section header */}
        <div className="mb-24">
          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-luxury-gold font-sans uppercase tracking-[0.5em] text-[10px] font-semibold"
            >
              Curated Portfolio
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-serif tracking-tight"
            >
              Signature <span className="italic text-luxury-sand/80 font-light">Spaces</span>
            </motion.h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[320px] gap-4">
          {portfolioProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden cursor-pointer ${project.span} bg-luxury-sand/20 rounded-[2.5rem] border border-luxury-espresso/5 shadow-2xl shadow-luxury-espresso/[0.02] transition-all duration-700 hover:shadow-luxury-espresso/[0.05]`}
              onClick={() => setSelectedImage(project.image)}
            >
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-espresso/90 via-luxury-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 md:p-12 backdrop-blur-[2px]">
                <div className="overflow-hidden">
                  <p className="text-luxury-gold font-sans text-[10px] uppercase tracking-[0.4em] mb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 font-bold">
                    {project.category} · {project.location}
                  </p>
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-luxury-ivory text-3xl md:text-4xl font-serif translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-[1px] bg-luxury-gold mt-8 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-24 flex justify-center"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-8 px-20 py-6 border border-luxury-espresso/10 text-luxury-espresso font-sans text-[10px] uppercase tracking-[0.5em] overflow-hidden hover:border-luxury-gold transition-all duration-700 font-semibold"
          >
            <span className="absolute inset-x-0 bottom-0 h-0 bg-luxury-gold group-hover:h-full transition-all duration-700 ease-in-out opacity-10" />
            <span className="relative z-10 transition-colors duration-500">Discover More Collections</span>
            <svg className="relative z-10 w-4 h-4 transition-all duration-700 group-hover:translate-x-3 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
