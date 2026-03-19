"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Parallax effect: background moves down half as fast as you scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ height: "clamp(380px, 75vw, 100vh)" }}>
      <motion.div 
        className="absolute inset-0 origin-center" 
        style={{ y: backgroundY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <Image
          src="/images/europa/lounge Room 4.jpg"
          alt="Artfully curated interior - Urban Saajh by Tej"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a130b]/60 via-[#1a130b]/40 to-[#1a130b]/70" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto" style={{ paddingLeft: "clamp(14px, 4vw, 48px)", paddingRight: "clamp(14px, 4vw, 48px)", paddingBottom: "clamp(20px, 5vw, 112px)" }}>
        <div className="max-w-xl">
          <motion.div 
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="divider bg-[#C8BBA8]/60" />
            <span className="tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light" style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
              Luxury Interior Design
            </span>
          </motion.div>

          <motion.h1 
            className="font-serif font-light text-[#FAF7F2] body-tight mb-6 sm:mb-8"
            style={{ fontSize: "clamp(1.6rem, 5vw, 4.5rem)" }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Artfully Curated,
            <br />
            <em className="italic font-light">Naturally Inspired</em>
            <br />
            Interiors
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link href="#services"
              className="inline-flex items-center gap-2 sm:gap-3 border border-[#FAF7F2]/50 text-[#FAF7F2] tracking-[0.2em] uppercase font-sans font-light hover:bg-[#FAF7F2] hover:text-[#3D2B1F] transition-all duration-400 group"
              style={{ fontSize: "clamp(8px, 1.3vw, 11px)", padding: "clamp(8px, 1.5vw, 12px) clamp(14px, 3vw, 28px)" }}>
              <span>Work with Us</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <motion.div 
        className="hidden sm:flex absolute bottom-8 right-6 md:right-16 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C8BBA8]/60 to-transparent" />
      </motion.div>
    </section>
  );
}
