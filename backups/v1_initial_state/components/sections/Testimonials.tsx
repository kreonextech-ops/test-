"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    text: "Urban Saaj completely transformed our penthouse into a serene, luxurious oasis. Their attention to detail and material knowledge is simply unparalleled.",
    author: "Elena R.",
    role: "Private Client · Mumbai",
  },
  {
    text: "The perfect balance of form and function. They understood our vision immediately and elevated it far beyond our expectations.",
    author: "Marcus T.",
    role: "Residential Client · New Delhi",
  },
  {
    text: "Meticulous execution and absolute professionalism throughout. The custom materials they sourced completely redefined our living spaces.",
    author: "Sophia L.",
    role: "Private Client · London",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-36 bg-cream text-charcoal relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle,_#8B6914_1px,_transparent_1px)] bg-[size:40px_40px]" />

      {/* Large decorative quote */}
      <div
        className="absolute top-0 right-8 md:right-16 text-[240px] font-serif leading-none select-none pointer-events-none"
        style={{ color: "rgba(139,105,20,0.07)", lineHeight: 0.8 }}
      >
        &ldquo;
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-5xl">

        {/* Section label */}
        <div className="overflow-hidden mb-16">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-gold font-mono uppercase tracking-[0.3em] text-xs"
          >
            Client Voices
          </motion.p>
        </div>

        {/* Quote slides */}
        <div className="min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-3xl md:text-5xl font-serif italic leading-relaxed text-charcoal/90 mb-14">
                &ldquo;{reviews[current].text}&rdquo;
              </p>
              <div className="flex items-center gap-6">
                <div className="w-10 h-[1px] bg-gold" />
                <div>
                  <h4 className="font-mono uppercase tracking-[0.2em] text-gold-dark text-sm">{reviews[current].author}</h4>
                  <p className="text-xs text-gray-500 font-mono mt-1">{reviews[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center gap-8">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-12 h-12 border border-charcoal/20 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${i === current ? "w-8 h-[2px] bg-gold" : "w-2 h-[2px] bg-charcoal/20 hover:bg-charcoal/50"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="w-12 h-12 border border-charcoal/20 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
