"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  { 
    src: "/images/europa-villa/Living 1.jpg", 
    color: "text-luxury-espresso", 
    accentColor: "text-luxury-gold",
    subColor: "text-luxury-espresso/80",
    taglineColor: "text-charcoal" // High contrast for light background
  },
  { 
    src: "/images/europa-villa/Lounge Room 6.jpg", 
    color: "text-luxury-ivory", 
    accentColor: "text-luxury-gold",
    subColor: "text-luxury-ivory/80",
    taglineColor: "text-luxury-gold" // Gold pops on dark green
  },
  { 
    src: "/images/europa-villa/Dining 1.jpg", 
    color: "text-charcoal", 
    accentColor: "text-luxury-gold",
    subColor: "text-charcoal/80",
    taglineColor: "text-luxury-espresso" 
  },
  { 
    src: "/images/europa-villa/Check 4.jpg.jpeg", 
    color: "text-charcoal", 
    accentColor: "text-luxury-gold",
    subColor: "text-charcoal/80",
    taglineColor: "text-luxury-espresso"
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000); // Slower timing as requested
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic reveal
      gsap.to(imageRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power4.inOut",
      });

      // Parallax scrub
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(imageRef.current, {
          yPercent: 20,
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

  const current = heroImages[index];

  return (
    <section
      ref={containerRef}
      aria-label="Hero — Urban Saajh by Tej Luxury Interior Design"
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-luxury-ivory"
    >
      {/* Hero Carousel - Bento Style */}
      <div className="absolute inset-0 px-4 pt-20 pb-4 md:px-8 md:pt-24 md:pb-8 flex items-center justify-center pointer-events-none">
        <div
          ref={imageRef}
          className="relative w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={current.src}
                fill
                alt="Luxury Interior Design"
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle noise/texture for premium feel instead of haze */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          
          {/* Bento border overlay */}
          <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border border-luxury-espresso/10 pointer-events-none" />
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-24 pb-8 pointer-events-none">
        <div className="overflow-hidden max-w-7xl w-full text-center">
          <motion.h1
            key={`h1-${index}`}
            initial={{ y: "40%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className={`${current.color} text-5xl sm:text-7xl md:text-[8rem] lg:text-[9.5rem] font-serif leading-[0.85] tracking-tight drop-shadow-sm transition-colors duration-1000`}
          >
            Curated{" "}
            <span 
              className={`font-pinyon ${current.accentColor} font-normal text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] inline-block mt-4 lg:mt-0 lg:-ml-8 transition-colors duration-1000`}
              style={{ verticalAlign: 'baseline' }}
            >
              Elegance.
            </span>
          </motion.h1>
        </div>

        <motion.p
          key={`p-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`${current.taglineColor} font-sans text-xs sm:text-sm uppercase tracking-[0.7em] mt-8 sm:mt-12 max-w-2xl text-center px-4 font-black drop-shadow-md transition-colors duration-1000`}
        >
          Premium Interiors, Thoughtfully Designed for You
        </motion.p>

        {/* CTA pair */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 mt-12 pointer-events-auto"
        >
          <Link
            href="#projects"
            className={`group relative inline-flex items-center justify-center gap-4 px-12 py-5 border ${current.color === 'text-luxury-ivory' ? 'border-luxury-ivory/20 text-luxury-ivory' : 'border-luxury-espresso/20 text-luxury-espresso'} font-sans text-xs uppercase tracking-[0.3em] overflow-hidden rounded-[2rem] hover:border-luxury-gold transition-colors duration-500`}
          >
            <span className="absolute inset-0 bg-luxury-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            <span className="relative z-10 group-hover:text-luxury-ivory transition-colors duration-500 font-bold">View Portfolio</span>
          </Link>
          <Link
            href="/contact"
            className={`group inline-flex items-center justify-center gap-4 px-12 py-5 ${current.color === 'text-luxury-ivory' ? 'bg-white/10 text-luxury-ivory border-white/10' : 'bg-luxury-espresso/5 text-luxury-espresso border-luxury-espresso/10'} backdrop-blur-xl border rounded-[2rem] hover:bg-luxury-gold hover:text-luxury-ivory transition-all duration-500 font-bold`}
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center"
      >
        <span className={`${current.subColor} text-[9px] font-sans font-bold uppercase tracking-[0.4em] mb-4 transition-colors duration-1000`}>Scroll</span>
        <div className={`w-[1px] h-14 ${current.color === 'text-luxury-ivory' ? 'bg-white/20' : 'bg-luxury-espresso/10'} overflow-hidden relative transition-colors duration-1000`}>
          <motion.div
            animate={{ y: [0, 56] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-luxury-gold absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
