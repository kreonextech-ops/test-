"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allImages = [
  // LIVING & DINING
  { id: "l1", category: "Living", title: "Grand Living Room", path: "/images/portfolio/living-1.jpg" },
  { id: "l2", category: "Living", title: "Modern Living Space", path: "/images/portfolio/living-2.jpg" },
  { id: "le", category: "Living", title: "Aura Living Detail", path: "/images/portfolio/living-extra.jpg" },
  { id: "lr1", category: "Living", title: "Lounge Concept I", path: "/images/portfolio/lounge-room-1.jpg" },
  { id: "lr2", category: "Living", title: "Lounge Concept II", path: "/images/portfolio/lounge-room-2.jpg" },
  { id: "lr3", category: "Living", title: "Lounge Concept III", path: "/images/portfolio/lounge-room-3.jpg" },
  { id: "lr4", category: "Living", title: "Lounge Concept IV", path: "/images/portfolio/lounge-room-4.jpg" },
  { id: "lr5", category: "Living", title: "Lounge Concept V", path: "/images/portfolio/lounge-room-5.jpg" },
  { id: "lr6", category: "Living", title: "Lounge Concept VI", path: "/images/portfolio/lounge-room-6.jpg" },
  { id: "lr7", category: "Living", title: "Lounge Concept VII", path: "/images/portfolio/lounge-room-7.jpg" },
  { id: "d1", category: "Living", title: "Minimalist Dining", path: "/images/portfolio/dining-1.jpg" },

  // SLEEPING QUARTERS
  { id: "mb1", category: "Sleeping", title: "Master Suite I", path: "/images/portfolio/master-bedroom-1.jpg" },
  { id: "mb2", category: "Sleeping", title: "Master Suite II", path: "/images/portfolio/master-bedroom-2.jpg" },
  { id: "mb3", category: "Sleeping", title: "Master Suite III", path: "/images/portfolio/master-bedroom-3.jpg" },
  { id: "mb4", category: "Sleeping", title: "Master Suite IV", path: "/images/portfolio/master-bedroom-4.jpg" },
  { id: "mb5", category: "Sleeping", title: "Master Suite V", path: "/images/portfolio/master-bedroom-5.jpg" },
  { id: "kr1", category: "Sleeping", title: "Kids Room I", path: "/images/portfolio/kids-room-1.jpg" },
  { id: "kr2", category: "Sleeping", title: "Kids Room II", path: "/images/portfolio/kids-room-2.jpg" },
  { id: "kr3", category: "Sleeping", title: "Kids Room III", path: "/images/portfolio/kids-room-3.jpg" },
  { id: "pr1", category: "Sleeping", title: "Parents Room I", path: "/images/portfolio/parents-room-1.jpg" },
  { id: "pr2", category: "Sleeping", title: "Parents Room II", path: "/images/portfolio/parents-room-2.jpg" },
  { id: "pr3", category: "Sleeping", title: "Parents Room III", path: "/images/portfolio/parents-room-3.jpg" },

  // FUNCTIONAL SPACES
  { id: "k1", category: "Functional", title: "Contemporary Kitchen I", path: "/images/portfolio/kitchen-1.jpg" },
  { id: "k2", category: "Functional", title: "Contemporary Kitchen II", path: "/images/portfolio/kitcehn-2.jpg" },
  { id: "k3", category: "Functional", title: "Contemporary Kitchen III", path: "/images/portfolio/kitchen-3.jpg" },
  { id: "s1", category: "Functional", title: "Grand Staircase", path: "/images/portfolio/staircase.jpg" },
  { id: "s2", category: "Functional", title: "Staircase Detail", path: "/images/portfolio/staircase-2.jpg" },
  { id: "kc1", category: "Functional", title: "Kids Closet I", path: "/images/portfolio/kids-closet-1.jpg" },
  { id: "kc2", category: "Functional", title: "Kids Closet II", path: "/images/portfolio/kids-closet-2.jpg" },
  { id: "pc1", category: "Functional", title: "Parents Closet I", path: "/images/portfolio/parents-closet-1.jpg" },
  { id: "pc2", category: "Functional", title: "Parents Closet II", path: "/images/portfolio/parents-closet-2.jpg" },

  // DETAILS & ART
  { id: "p1", category: "Details", title: "Aesthetic Piece I", path: "/images/portfolio/p1.jpg" },
  { id: "p2", category: "Details", title: "Aesthetic Piece II", path: "/images/portfolio/p2.jpg" },
  { id: "p3", category: "Details", title: "Aesthetic Piece III", path: "/images/portfolio/p3.jpg" },
  { id: "c1", category: "Details", title: "Texture Study I", path: "/images/portfolio/check-1.jpg" },
  { id: "c2", category: "Details", title: "Texture Study II", path: "/images/portfolio/check-2.jpg" },
  { id: "c3", category: "Details", title: "Texture Study III", path: "/images/portfolio/check-3.jpg" },
  { id: "c4", category: "Details", title: "Texture Study IV", path: "/images/portfolio/check-4.jpg" },
  { id: "c5", category: "Details", title: "Texture Study V", path: "/images/portfolio/check-5.jpg" },
  { id: "c6", category: "Details", title: "Texture Study VI", path: "/images/portfolio/check-6.jpg" },
  { id: "c7", category: "Details", title: "Texture Study VII", path: "/images/portfolio/check-7.jpg" },
  { id: "c8", category: "Details", title: "Texture Study VIII", path: "/images/portfolio/check-8.jpg" },
  { id: "c9", category: "Details", title: "Texture Study IX", path: "/images/portfolio/check-9.jpg" },
];

const categories = ["All", "Living", "Sleeping", "Functional", "Details"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = useMemo(() => {
    return activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="relative min-h-screen bg-[#FAF5EC]">
      <Navbar theme="dark" />

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-8 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-[#3D2B1F] leading-tight mb-8 relative inline-block text-center" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -left-8 top-4 w-3 h-3 rounded-full border border-[#C9A87C] flex items-center justify-center"
            >
              <div className="w-1 h-1 bg-[#C9A87C] rounded-full" />
            </motion.span>
            A Legacy of <br />
            <em className="italic text-[#C9A87C]">Timeless Interiors</em>
          </h1>
          <div className="w-24 h-px bg-[#C9A87C] mx-auto mb-12" />
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 relative py-2 ${
                activeCategory === cat ? "text-[#3D2B1F]" : "text-[#3D2B1F]/40"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A87C]"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY GRID ── */}
      <section className="px-6 md:px-12 pb-32">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.05,
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                className="relative group cursor-pointer break-inside-avoid"
              >
                <div className="relative overflow-hidden bg-[#0D3B2E]/5 rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <Image
                    src={img.path}
                    alt={img.title}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-[#C9A87C] uppercase tracking-[0.2em] text-[10px] mb-2"
                    >
                      {img.category}
                    </motion.p>
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white font-serif text-xl italic"
                    >
                      {img.title}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
