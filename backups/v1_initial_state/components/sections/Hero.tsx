"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic reveal
      gsap.to(imageRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power4.inOut",
      });

      // Parallax scrub — only on non-reduced-motion
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(imageRef.current, {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Hero — Urban Saaj Luxury Interior Design"
      className="relative w-full h-[100svh] min-h-[560px] overflow-hidden bg-deep"
    >
      {/* Hero image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
      >
        <Image
          src="/images/hero_interior_1773249348213.png"
          fill
          alt="A strikingly beautiful luxury living room — Urban Saaj interior design"
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/20 via-transparent to-deep/70" />
      </div>

      {/* Content centre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-24 pb-8">
        <div className="overflow-hidden max-w-6xl w-full text-center">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif leading-none tracking-tight"
          >
            Curated{" "}
            <span className="italic text-gold font-light">Elegance.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white/75 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mt-6 sm:mt-10 max-w-sm text-center px-4"
        >
          Exclusive interior architecture for the modern sophisticate.
        </motion.p>

        {/* CTA pair */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-4 border border-white/40 text-white font-mono text-xs uppercase tracking-[0.2em] overflow-hidden hover:border-gold transition-colors duration-500"
          >
            <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-deep transition-colors duration-300">Our Work</span>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-4 px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white/20 transition-colors duration-500"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center"
      >
        <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            className="w-full h-1/2 bg-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
