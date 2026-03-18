"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allRenders = [
  "Check 1.jpg.jpeg", "Check 2.jpg.jpeg", "Check 3.jpg.jpeg", "Check 4.jpg.jpeg", 
  "Check 5.jpg.jpeg", "Check 6.jpg.jpeg", "Check 7.jpg.jpeg", "Check 8.jpg.jpeg", "Check 9.jpg.jpeg",
  "Dining 1.jpg", "Kids Closet 1.jpg", "Kids Room 1.jpg", "Kids Room 2.jpg", "Kids Room 3.jpg",
  "Kitcehn 2.jpg", "Kitchen 1.jpg", "Kitchen 3.jpg", "Living 1.jpg", "Living 2.jpg",
  "Lounge Room 1.jpg", "Lounge Room 3.jpg", "Lounge Room 6.jpg", "Lounge room 2.jpg",
  "Lounge room 5.jpg", "Lounge room 7.jpg", "Master Bedroom 1.jpg", "Master Bedroom 2.jpg",
  "Master Bedroom 3.jpg", "Master Bedroom 4.jpg", "Master Bedroom 5.jpg", "P1.jpg", "P2.jpg",
  "P3.jpg", "Parents Closet 1.jpg", "Parents Closet 2.jpg", "Parents Room 1.jpg",
  "Parents Room 2.jpg", "Parents Room 3.jpg", "Staircase 2.jpg", "Staircase.jpg",
  "kids closet 2.jpg", "living Extra.jpg", "lounge Room 4.jpg"
].map((name, i) => ({
  id: i,
  image: `/images/europa-villa/${name}`,
  title: name.replace(/\.jpg|\.jpeg/g, "").replace(/Check \d/, "Architectural Preview"),
}));

export default function ProjectsPage() {
  return (
    <main className="bg-luxury-ivory min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 container mx-auto px-6 md:px-16">
        <div className="max-w-4xl mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-luxury-gold font-sans uppercase tracking-[0.5em] text-[10px] font-bold mb-6"
          >
            Full Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-serif tracking-tight leading-none mb-12"
          >
            Europa <span className="italic text-luxury-gold/50 font-light">Villa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-luxury-espresso/60 font-sans text-xl font-light leading-relaxed max-w-2xl"
          >
            A comprehensive study in modern luxury. Explore the complete collection of architectural renders from our flagship Europa Villa project.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {allRenders.map((render, i) => (
            <motion.div
              key={render.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i % 3 * 0.1, duration: 1 }}
              className="relative group overflow-hidden rounded-[2rem] border border-luxury-espresso/5 shadow-xl hover:shadow-2xl transition-all duration-700 break-inside-avoid"
            >
              <Image
                src={render.image}
                alt={render.title}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/80 font-serif italic text-lg">{render.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-8 px-20 py-6 bg-luxury-espresso text-luxury-ivory font-sans text-[10px] uppercase tracking-[0.4em] overflow-hidden hover:bg-luxury-gold transition-all duration-700 font-bold"
          >
            <span className="absolute inset-0 bg-luxury-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
            <span className="relative z-10 group-hover:text-luxury-espresso transition-colors duration-500">Start Your Project</span>
            <svg className="relative z-10 w-4 h-4 transition-all duration-700 group-hover:translate-x-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
