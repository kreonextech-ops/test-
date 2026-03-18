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

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const displayFont = { fontFamily: '"Cormorant Garamond", "Cormorant", "Didot", "Times New Roman", serif' };

  return (
    <section
      ref={containerRef}
      id="founder"
      className="py-16 md:py-24 bg-luxury-sand text-luxury-espresso overflow-hidden relative"
    >
      {/* Subtle texture layers */}
      <div className="absolute inset-0 texture-linen opacity-20 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,_#C5A059_1px,_transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Label */}
        <div className="mb-12 pl-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold font-sans uppercase tracking-[0.55em] text-[10px] font-bold"
          >
            The Visionary
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Block 1: Title Block (Spans Full Width Top) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-12 rounded-[2rem] bg-luxury-espresso p-8 md:p-12 flex flex-col justify-center items-center text-center border border-luxury-espresso/10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-luxury-gold/5 pointer-events-none" />
            <p className="text-luxury-gold/80 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 relative z-10">Founder & Lead Designer</p>
            <h2 className="text-4xl md:text-6xl text-luxury-ivory tracking-wide relative z-10" style={displayFont}>
              Tejinder <span className="italic text-luxury-gold">Singh Bhogal</span>
            </h2>
          </motion.div>

          {/* Block 2: Image (Spans Left 4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12 lg:col-span-4 relative h-[350px] md:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden border border-luxury-espresso/10 group shadow-lg"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
              <Image
                src="/images/founder.jpeg"
                fill
                alt="Tejinder Singh Bhogal"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-espresso/40 via-transparent to-transparent opacity-40 mix-blend-multiply" />
            </motion.div>
          </motion.div>

          {/* Block 3: Philosophy (Spans Right 8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:col-span-12 lg:col-span-8 rounded-[2rem] bg-white p-10 md:p-16 border border-luxury-espresso/5 shadow-xl flex flex-col justify-center"
          >
            <div className="space-y-8 text-luxury-espresso/80 font-sans text-base md:text-lg leading-[1.8] max-w-3xl m-auto text-center lg:text-left">
              <p>
                My focus has always been simple: creating beautiful homes that bring <span className="text-luxury-gold font-medium">genuine peace and luxury</span> into your everyday life. A home should never feel like a showroom; it should be a place where you <span className="text-luxury-gold font-medium">truly belong</span>.
              </p>
              <p>
                For me, <span className="text-luxury-gold font-medium italic">Urban Saajh</span> is more than just design—it is about <span className="text-luxury-gold font-medium">helping people</span>. By crafting completely personalized environments, we remove the stress of chaotic spaces and give you a sanctuary. When you feel completely comfortable in your own home, it positively changes how you live, work, and connect with your family.
              </p>
              <p>
                When we design a space, we carefully decide what belongs and what doesn&apos;t. Every single detail has a clear reason for being there. We are committed to giving you a lifestyle that fits you perfectly, <span className="text-luxury-gold font-medium">built to last</span>.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
