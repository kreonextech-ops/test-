"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "150", label: "Projects Completed" },
  { value: "40+", label: "Design Awards" },
  { value: "22", label: "Countries Served" },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="about" ref={containerRef} className="py-36 bg-cream text-charcoal overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          {/* Image column with borderline art frame */}
          <div className="relative h-[680px] w-full">
            {/* Decorative gold corner frames */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold z-10" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 overflow-hidden"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-[-8%] w-[116%] h-[116%]">
                <Image
                  src="/images/about_studio_1773249365789.png"
                  fill
                  alt="Our Studio"
                  className="object-cover"
                />
                {/* Colour wash overlay that fades on reveal */}
                <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
              </motion.div>
            </motion.div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-deep text-white px-6 py-4 z-20"
            >
              <div className="text-gold font-mono text-xs uppercase tracking-widest mb-1">Est.</div>
              <div className="text-3xl font-serif">2012</div>
            </motion.div>
          </div>

          {/* Content column */}
          <motion.div style={{ y: textY }} className="flex flex-col justify-center">
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-gold font-mono uppercase tracking-[0.3em] text-xs"
              >
                The Studio
              </motion.p>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl font-serif leading-tight"
              >
                Designing Spaces <br /> That <span className="italic text-gray-400 font-light">Speak</span>
              </motion.h2>
            </div>

            <div className="overflow-hidden mb-10">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-500 leading-relaxed font-light text-lg"
              >
                At Urban Saaj, we believe that luxury is found in the details.
                Our approach goes beyond aesthetics — crafting environments that intuitively
                respond to the way you live. From bespoke furnishings to meticulous
                architecture, every element is curated with intention.
              </motion.p>
            </div>

            <div className="overflow-hidden mb-12">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="#services"
                  className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] border-b border-charcoal pb-2 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Explore Our Services
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl font-serif text-deep">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mt-2 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
