"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark" || scrolled;
  const textColor = isDark ? "text-[#3D2B1F]" : "text-[#FAF7F2]";
  const iconColor = isDark ? "#3D2B1F" : "#FAF7F2";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${
        scrolled 
          ? "bg-[#FAF7F2]/95 backdrop-blur-sm border-[#C8BBA8]/30" 
          : "bg-transparent border-[#FAF7F2]/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between"
        style={{ height: "clamp(40px, 8vw, 80px)", padding: "0 clamp(14px, 4vw, 48px)" }}>

        {/* Left links — fixed width via flex-1 */}
        <div className="hidden md:flex items-center flex-1" style={{ gap: "clamp(16px, 3vw, 32px)" }}>
          {["Services", "Portfolio", "About"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}
              className={`nav-link uppercase font-sans font-light transition-colors tracking-[0.2em] ${
                isDark ? "text-[#3D2B1F] hover:text-[#6B4F3A]" : "text-[#FAF7F2] hover:text-[#C9A87C]"
              }`}
              style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>{item}</Link>
          ))}
        </div>

        {/* Center logo — flex centered */}
        <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
          <svg width="10" height="13" viewBox="0 0 14 18" fill="none">
            <path d="M7 1C7 1 1 5 1 10C1 13.3137 3.68629 16 7 16C10.3137 16 13 13.3137 13 10C13 5 7 1 7 1Z"
              stroke={iconColor} strokeWidth="1" fill="none" />
            <line x1="7" y1="16" x2="7" y2="17" stroke={iconColor} strokeWidth="1" />
          </svg>
          <span className={`uppercase font-sans font-light tracking-[0.24em] transition-colors ${textColor}`} style={{ fontSize: "clamp(8px, 1.5vw, 12px)" }}>
            Urban Saajh <span className="font-normal">by</span> Tej
          </span>
        </Link>

        {/* Right links — fixed width via flex-1, justify-end */}
        <div className="hidden md:flex items-center justify-end flex-1" style={{ gap: "clamp(16px, 3vw, 32px)" }}>
          {["Founder", "Process", "Contact"].map((item) => (
            <Link key={item} href={item === "Process" ? "/#process" : `/${item.toLowerCase()}`}
              className={`nav-link uppercase font-sans font-light transition-colors tracking-[0.2em] ${
                isDark ? "text-[#3D2B1F] hover:text-[#6B4F3A]" : "text-[#FAF7F2] hover:text-[#C9A87C]"
              }`}
              style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>{item}</Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 transition-colors ${textColor}`} aria-label="Toggle menu">
          <div className="flex flex-col gap-1.5 items-end">
            <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-[1.5px] w-4 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#FAF7F2] border-b border-[#C8BBA8]/30 py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {["Services", "Portfolio", "About", "Founder", "Process", "Contact"].map((item) => (
              <Link key={item} href={item === "Process" ? "/#process" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="tracking-[0.22em] uppercase font-sans font-light text-[#3D2B1F]"
                style={{ fontSize: "clamp(9px, 1.5vw, 12px)" }}>
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
