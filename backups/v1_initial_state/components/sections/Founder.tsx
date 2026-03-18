"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={containerRef}
      id="founder"
      className="py-24 md:py-36 bg-deep text-white overflow-hidden relative"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#D4AF7A_1px,_transparent_1px)] bg-[size:36px_36px]" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Portrait */}
          <div className="relative order-2 lg:order-1">
            {/* Art‑frame corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t border-l border-gold/60 z-10" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b border-r border-gold/60 z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[480px] sm:h-[580px] lg:h-[680px] overflow-hidden"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-[-6%] w-[112%] h-[112%]">
                <Image
                  src="/images/founder_tej_portrait.png"
                  fill
                  alt="Tej — Founder of Urban Saaj"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Floating award badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-6 left-6 z-20 bg-gold px-5 py-3"
            >
              <div className="text-deep font-mono text-[10px] uppercase tracking-widest">Design Awards</div>
              <div className="text-deep text-2xl font-serif font-bold">12+</div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">

            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-gold font-mono uppercase tracking-[0.3em] text-xs"
              >
                The Vision Behind Urban Saaj
              </motion.p>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight"
              >
                Tej <span className="italic text-gold font-light">Saaj</span>
              </motion.h2>
            </div>

            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-gold/70 font-mono uppercase tracking-[0.2em] text-xs"
              >
                Founder &amp; Creative Director
              </motion.p>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-300 leading-relaxed font-light text-lg"
              >
                &ldquo;I founded Urban Saaj with a single belief &mdash; that your home should
                be a portrait of who you are at your very best. Not just beautiful,
                but deeply, authentically <em>you</em>.&rdquo;
              </motion.p>
            </div>

            <div className="space-y-5">
              {[
                "With a background spanning architecture and spatial design, Tej spent years working across leading studios before founding Urban Saaj — built on the belief that great design should be honest, practical, and built for real life.",
                "Today, Urban Saaj is an award-winning studio that fuses considered aesthetics with zero-compromise planning — producing spaces that are globally informed, rooted in context, and built to last.",
              ].map((para, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.p
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gray-400 leading-relaxed font-light"
                  >
                    {para}
                  </motion.p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10 flex items-center gap-6 flex-wrap"
            >
              <div>
                <div className="font-serif italic text-4xl text-gold/80 tracking-wide leading-none">Tej</div>
                <div className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] mt-2">Founder &amp; Principal Designer · Urban Saaj</div>
              </div>
              <div className="ml-auto flex flex-wrap gap-4">
                {["12+ Years", "150 Projects", "Award-Winning"].map((badge) => (
                  <span key={badge} className="border border-white/10 text-gray-500 font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
