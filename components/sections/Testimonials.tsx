"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    text: "Urban Saajh by Tej transformed our home into a peaceful, luxurious space. Their attention to detail and knowledge of materials is unmatched.",
    author: "Elena R.",
    role: "Private Client · Mumbai",
  },
  {
    text: "They perfectly understood what we wanted and made our home look even better than we imagined. Everything is both beautiful and practical.",
    author: "Marcus T.",
    role: "Residential Client · New Delhi",
  },
  {
    text: "The work was done perfectly from start to finish. The custom materials they used completely changed the look and feel of our home.",
    author: "Sophia L.",
    role: "Private Client · London",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-luxury-ivory text-luxury-espresso relative overflow-hidden texture-linen">
      {/* Background grain handles texture */}

      <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-7xl">
        {/* Section label */}
        <div className="overflow-hidden mb-12 text-center">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-luxury-gold font-sans uppercase tracking-[0.5em] text-[10px] font-bold"
          >
            Kindred Spirits
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video Placeholders */}
          <div className="grid grid-cols-2 gap-4 h-full min-h-[300px]">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[9/16] bg-luxury-espresso/5 rounded-3xl border border-luxury-espresso/10 overflow-hidden flex items-center justify-center group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-espresso/5 to-transparent group-hover:opacity-100 transition-opacity duration-500 opacity-0" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-4 h-4 text-luxury-gold fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-luxury-gold font-bold">Client Video 01</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-[9/16] bg-luxury-espresso/5 rounded-3xl border border-luxury-espresso/10 overflow-hidden flex items-center justify-center group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-espresso/5 to-transparent group-hover:opacity-100 transition-opacity duration-500 opacity-0" />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-4 h-4 text-luxury-gold fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-luxury-gold font-bold">Client Video 02</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Written Testimonials */}
          <div className="flex flex-col justify-center gap-12">
            <div className="min-h-[250px] relative">
               <div className="absolute -top-10 -left-6 text-[120px] font-serif leading-none select-none pointer-events-none opacity-[0.05] text-luxury-gold">
                &ldquo;
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="text-2xl md:text-4xl font-serif leading-snug text-luxury-espresso italic mb-10 tracking-tight">
                    {reviews[current].text}
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-[1px] bg-luxury-gold" />
                    <div>
                      <h4 className="font-sans uppercase tracking-[0.4em] text-luxury-gold text-[10px] font-bold">{reviews[current].author}</h4>
                      <p className="text-[8px] text-luxury-espresso/40 font-sans uppercase tracking-widest mt-1 font-bold">{reviews[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-8">
              <button
                onClick={prev}
                aria-label="Previous"
                className="group w-12 h-12 border border-luxury-espresso/10 hover:border-luxury-gold text-luxury-espresso hover:text-luxury-gold flex items-center justify-center transition-all duration-500 rounded-full"
              >
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </button>

              <div className="flex gap-3">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-700 h-[1px] ${i === current ? "w-10 bg-luxury-gold" : "w-3 bg-luxury-espresso/10 hover:bg-luxury-gold/30"}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="group w-12 h-12 border border-luxury-espresso/10 hover:border-luxury-gold text-luxury-espresso hover:text-luxury-gold flex items-center justify-center transition-all duration-500 rounded-full"
              >
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
