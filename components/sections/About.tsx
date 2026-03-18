"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// Cormorant Garamond loaded via CSS or Google Fonts in layout.
// Using inline style fallback for immediate effect.
const displayFont = { fontFamily: '"Cormorant Garamond", "Cormorant", "Didot", "Times New Roman", serif' };

const stats = [
  { value: "3+", label: "Years of Refinement" },
  { value: "40+", label: "Spaces Composed" },
];

const principles = [
  {
    num: "01",
    title: "Honesty is Luxury",
    content: "We discuss every detail with you. Our pricing is clear and upfront. Careful planning starts long before we begin any actual work.",
  },
  {
    num: "02",
    title: "Space Designed for You",
    content: "A room is more than just furniture. We carefully arrange the layout, lighting, and movement so the space feels perfectly balanced.",
  },
  {
    num: "03",
    title: "Design with Value",
    content: "Every choice we make is about improving how you feel every day. Good design isn't just a cost—it's an investment in your well-being.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 md:py-32 bg-luxury-ivory text-luxury-espresso relative overflow-hidden texture-linen"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 pl-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold font-sans uppercase tracking-[0.55em] text-[9px] font-bold mb-5"
          >
            The Studio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light tracking-tight leading-tight"
            style={displayFont}
          >
            Space is not just furnished.<br />
            <span className="italic text-luxury-gold">It is carefully designed.</span>
          </motion.h2>
        </div>

        {/* Asymmetrical Bento Grid — Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">

          {/* Block 1: Main Image — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative md:col-span-3 h-[420px] md:h-[580px] overflow-hidden rounded-[2.5rem] border border-luxury-espresso/8 group"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-[-6%] w-[112%] h-[112%]">
              <Image
                src="/images/europa-villa/Check 1.jpg.jpeg"
                fill
                alt="Urban Saaj Studio"
                className="object-cover transition-all duration-1000 group-hover:scale-[1.02]"
                style={{ filter: "sepia(10%) contrast(1.05)" }}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {/* Gradient vignette at bottom for badge contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>

            {/* Est. badge */}
            <div className="absolute bottom-8 left-8 z-20">
              <div className="font-sans text-[8px] text-luxury-gold uppercase tracking-[0.5em] mb-1 font-bold opacity-80">Est.</div>
              <div className="text-5xl font-light text-white/90" style={displayFont}>2023</div>
            </div>
          </motion.div>

          {/* Block 2: Studio ethos — deep charcoal, spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="md:col-span-2 rounded-[2.5rem] bg-[#1C1F1A] text-luxury-ivory p-10 md:p-14 flex flex-col justify-between h-[420px] md:h-[580px] relative overflow-hidden border border-white/5 shadow-2xl"
          >
            {/* Subtle gold dot texture */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_#C5A059_1px,_transparent_1px)] bg-[size:36px_36px] pointer-events-none" />
            {/* Thin gold line accent */}
            <div className="absolute top-0 left-10 right-10 h-px bg-luxury-gold/20" />

            <div className="relative z-10">
              <p className="text-luxury-gold font-sans text-[8px] uppercase tracking-[0.55em] font-bold mb-8">The Modern Ethos</p>
              <h3
                className="text-3xl md:text-4xl font-light text-luxury-ivory leading-snug mb-8"
                style={displayFont}
              >
                We are a young studio<br />with{" "}
                <span className="italic text-luxury-gold">timeless instincts.</span>
              </h3>
               <p className="text-luxury-ivory/60 font-sans font-light text-sm md:text-base leading-[1.9] tracking-wide">
                <span className="text-luxury-gold">Urban Saajh by Tej</span> was built on a simple idea: creating homes that are beautiful, comfortable, and timeless. We don&apos;t chase fast trends; we design spaces that feel perfectly suited to you and your lifestyle.
              </p>
            </div>

            {/* Stats */}
            <div className="relative z-10 flex gap-10 pt-8 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-light text-luxury-ivory mb-1" style={displayFont}>{stat.value}</div>
                  <div className="text-[8px] font-sans uppercase tracking-[0.3em] text-luxury-gold/70 max-w-[90px] leading-[1.5]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Blocks 3, 4, 5 — Principle row spans full 5 columns */}
          <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12 }}
                className="border border-luxury-espresso/8 rounded-[2rem] p-8 md:p-10 bg-[#F2EDE4] hover:bg-[#1C1F1A] text-luxury-espresso hover:text-luxury-ivory hover:border-luxury-gold/20 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Thin gold top rule */}
                <div className="absolute top-0 left-8 right-8 h-px bg-luxury-gold/20 group-hover:bg-luxury-gold/40 transition-colors duration-500" />

                <div className="text-luxury-gold font-sans text-[9px] tracking-[0.45em] font-bold mb-6">{p.num}</div>
                <h4
                  className="text-2xl md:text-3xl mb-5 font-light text-luxury-espresso group-hover:text-luxury-gold transition-colors duration-500"
                  style={displayFont}
                >
                  {p.title}
                </h4>
                <p className="text-luxury-espresso/70 group-hover:text-luxury-ivory/70 font-sans font-light text-sm leading-[1.9] tracking-wide transition-colors duration-500">
                  {p.content}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
