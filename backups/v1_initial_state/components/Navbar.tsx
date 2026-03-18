"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atHero, setAtHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setAtHero(y < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const textColor = !scrolled && atHero ? "text-white" : "text-charcoal";
  const logoSecondColor = !scrolled && atHero ? "text-gold-light" : "text-gold";
  const hamColor = !scrolled && atHero ? "bg-white" : "bg-charcoal";

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? "py-4 bg-cream/95 backdrop-blur-md shadow-sm border-b border-cream/50"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
          <Link href="/" className={`text-2xl font-serif font-bold tracking-widest uppercase cursor-pointer transition-colors duration-500 ${textColor}`}>
            Urban <span className={`${logoSecondColor} transition-colors duration-500`}>Saaj</span>
          </Link>

          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`relative text-xs tracking-[0.2em] uppercase font-mono group transition-colors duration-500 ${textColor} hover:text-gold`}
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer z-50 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-[1px] transition-all duration-300 ${hamColor} ${menuOpen ? "rotate-45 translate-y-[7px] !bg-white" : ""}`} />
            <span className={`block w-6 h-[1px] transition-all duration-300 ${hamColor} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1px] transition-all duration-300 ${hamColor} ${menuOpen ? "-rotate-45 -translate-y-[7px] !bg-white" : ""}`} />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "ellipse(0% 0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "ellipse(150% 150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "ellipse(0% 0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-deep text-white flex flex-col items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle,_#B8943F_1px,_transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10 flex flex-col items-center space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-5xl md:text-7xl font-serif hover:text-gold transition-colors duration-300 text-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
