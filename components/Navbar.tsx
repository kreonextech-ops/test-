"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Bento Pill Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 md:px-0"
      >
        <div
          className={`w-[calc(100%-2.5rem)] md:w-[calc(100%-4rem)] transition-all duration-700 ease-in-out rounded-2xl md:rounded-full px-6 md:px-10 py-3 md:py-4 flex items-center justify-between gap-6 shadow-2xl
            ${scrolled
              ? "bg-luxury-ivory/60 backdrop-blur-3xl border border-luxury-espresso/10 ring-1 ring-inset ring-luxury-gold/20 shadow-luxury-espresso/[0.08]"
              : "bg-luxury-ivory/40 backdrop-blur-xl border border-luxury-espresso/5 ring-1 ring-inset ring-luxury-gold/10 shadow-luxury-espresso/[0.04]"
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-xl font-serif font-semibold tracking-tight text-luxury-espresso shrink-0"
          >
            Urban{" "}
            <span className="italic text-luxury-gold font-light">Saajh by Tej</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="relative text-[9px] tracking-[0.35em] uppercase font-sans font-bold text-luxury-espresso hover:text-luxury-gold transition-colors duration-500 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-luxury-gold transition-all duration-700 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-luxury-espresso text-luxury-ivory text-[9px] tracking-[0.3em] uppercase font-bold rounded-full hover:bg-luxury-gold hover:text-luxury-espresso transition-all duration-500"
            >
              Enquire
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] bg-luxury-espresso transition-all duration-500 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-luxury-espresso transition-all duration-500 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-luxury-espresso transition-all duration-500 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 3%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 3%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 3%)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-luxury-espresso text-luxury-ivory flex flex-col items-center justify-center"
          >
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_#C5A059_1px,_transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            {/* Close X */}
            <button
              className="absolute top-7 right-7 w-10 h-10 flex items-center justify-center group"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="absolute w-6 h-[1.5px] bg-luxury-ivory rotate-45 group-hover:bg-luxury-gold transition-colors duration-500" />
              <span className="absolute w-6 h-[1.5px] bg-luxury-ivory -rotate-45 group-hover:bg-luxury-gold transition-colors duration-500" />
            </button>

            <nav className="relative z-10 flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.08,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-4xl sm:text-6xl font-serif font-light tracking-tight text-center hover:text-luxury-gold transition-colors duration-500"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.7 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex items-center px-10 py-4 border border-luxury-gold/40 text-luxury-gold text-[10px] tracking-[0.4em] uppercase font-bold rounded-full hover:bg-luxury-gold hover:text-luxury-espresso transition-all duration-500"
                >
                  Begin Your Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
