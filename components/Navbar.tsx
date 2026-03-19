"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
<<<<<<< HEAD
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#C8BBA8]/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Left nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#services"
            className="nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
          >
            About
          </Link>
        </div>

        {/* Center logo */}
        <Link
          href="/"
          className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2"
        >
          {/* Decorative leaf icon */}
          <span className="text-[#3D2B1F] opacity-70">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path
                d="M7 1C7 1 1 5 1 10C1 13.3137 3.68629 16 7 16C10.3137 16 13 13.3137 13 10C13 5 7 1 7 1Z"
                stroke="#3D2B1F"
                strokeWidth="0.8"
                fill="none"
              />
              <line
                x1="7"
                y1="16"
                x2="7"
                y2="17"
                stroke="#3D2B1F"
                strokeWidth="0.8"
              />
              <path
                d="M7 5C7 5 5 7.5 5 10"
                stroke="#3D2B1F"
                strokeWidth="0.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span
            className={`text-[12px] tracking-[0.28em] uppercase font-sans font-light transition-colors ${
              scrolled ? "text-[#3D2B1F]" : "text-[#FAF7F2]"
            }`}
          >
            <span className="font-bold text-[#C8BBA8]">Urban Saajh</span>{" "}
            <span className="text-[10px] lowercase tracking-widest text-current/80">by Tej</span>
          </span>
        </Link>

        {/* Right nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#journal"
            className="nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
          >
            Journal
          </Link>
          <Link
            href="#process"
            className="nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
          >
            Process
          </Link>
          <Link
            href="#contact"
            className="nav-link text-[11px] tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto text-[#3D2B1F] p-2"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
=======
        scrolled ? "bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#C8BBA8]/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between" style={{ padding: "0 clamp(14px, 4vw, 48px)", height: "clamp(40px, 8vw, 80px)" }}>
        {/* Left nav — hidden on small, shown md+ */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["Services", "Portfolio", "About"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              className="nav-link tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
              style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
              {item}
            </Link>
          ))}
        </div>

        {/* Center logo — always visible */}
        <Link href="/" className="flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
          <svg width="11" height="15" viewBox="0 0 14 18" fill="none">
            <path d="M7 1C7 1 1 5 1 10C1 13.3137 3.68629 16 7 16C10.3137 16 13 13.3137 13 10C13 5 7 1 7 1Z"
              stroke={scrolled ? "#3D2B1F" : "#FAF7F2"} strokeWidth="0.8" fill="none" />
            <line x1="7" y1="16" x2="7" y2="17" stroke={scrolled ? "#3D2B1F" : "#FAF7F2"} strokeWidth="0.8" />
          </svg>
          <span className={`tracking-[0.24em] uppercase font-sans font-light transition-colors ${
            scrolled ? "text-[#3D2B1F]" : "text-[#FAF7F2]"
          }`} style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
            Urban Saajh <span className="font-normal">by</span> Tej
          </span>
        </Link>

        {/* Right nav — hidden on small */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["Journal", "Process", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              className="nav-link tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F] hover:text-[#6B4F3A] transition-colors"
              style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto text-[#3D2B1F] p-2" aria-label="Toggle menu">
          <div className="flex flex-col gap-1">
            <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
          </div>
        </button>
      </nav>

<<<<<<< HEAD
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#FAF7F2] border-t border-[#C8BBA8]/30 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-6 px-6 gap-5">
          {["Services", "Portfolio", "About", "Journal", "Process", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[11px] tracking-[0.25em] uppercase font-sans font-light text-[#3D2B1F]"
              >
                {item}
              </Link>
            )
          )}
=======
      {/* Mobile dropdown */}
      <div className={`md:hidden bg-[#FAF7F2] border-t border-[#C8BBA8]/30 transition-all duration-400 overflow-hidden ${
        menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-5 px-6">
          {["Services", "Portfolio", "About", "Journal", "Process", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="tracking-[0.22em] uppercase font-sans font-light text-[#3D2B1F]"
              style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
              {item}
            </Link>
          ))}
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
        </div>
      </div>
    </header>
  );
}
