"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${
        scrolled 
          ? "bg-[#FAF7F2]/95 backdrop-blur-sm border-[#C8BBA8]/30" 
          : "bg-transparent border-[#FAF7F2]/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center" style={{ padding: "0 clamp(14px, 4vw, 48px)", height: "clamp(40px, 8vw, 80px)" }}>
        
        {/* Left Section: Spacing/Links */}
        <div className="flex-1 basis-0 flex items-center">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {["Services", "Portfolio", "About"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`}
                className={`nav-link tracking-[0.2em] uppercase font-sans font-light transition-colors ${scrolled ? "text-[#3D2B1F]" : "text-[#FAF7F2]"}`}
                style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Center Section: Logo (Always Middle) */}
        <Link href="/" className="flex items-center gap-1.5 whitespace-nowrap px-4 py-2 shrink-0">
          <svg width="11" height="15" viewBox="0 0 14 18" fill="none">
            <path d="M7 1C7 1 1 5 1 10C1 13.3137 3.68629 16 7 16C10.3137 16 13 13.3137 13 10C13 5 7 1 7 1Z"
              stroke={scrolled ? "#3D2B1F" : "#FAF7F2"} strokeWidth="1.2" fill="none" />
            <line x1="7" y1="16" x2="7" y2="17" stroke={scrolled ? "#3D2B1F" : "#FAF7F2"} strokeWidth="1.2" />
          </svg>
          <span className={`tracking-[0.24em] uppercase font-sans font-light transition-colors ${
            scrolled ? "text-[#3D2B1F]" : "text-[#FAF7F2]"
          }`} style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
            Urban Saajh <span className="font-normal text-[0.8em]">by</span> Tej
          </span>
        </Link>

        {/* Right Section: Spacing/Links/Hamburger */}
        <div className="flex-1 basis-0 flex items-center justify-end">
          <div className="hidden md:flex items-center gap-6 lg:gap-8 mr-6 lg:mr-8">
            {["Journal", "Process", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`}
                className={`nav-link tracking-[0.2em] uppercase font-sans font-light transition-colors ${scrolled ? "text-[#3D2B1F]" : "text-[#FAF7F2]"}`}
                style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
                {item}
              </Link>
            ))}
          </div>
          
          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#3D2B1F]" : "text-white"}`} aria-label="Toggle menu">
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-[1.5px] w-4 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`md:hidden bg-[#FAF7F2] border-t border-[#C8BBA8]/30 transition-all duration-400 overflow-hidden ${
        menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 py-6 px-6">
          {["Services", "Portfolio", "About", "Journal", "Process", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="tracking-[0.22em] uppercase font-sans font-light text-[#3D2B1F]"
              style={{ fontSize: "clamp(9px, 1.5vw, 12px)" }}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
