"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
<<<<<<< HEAD
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background image - rustic shelf with ceramic vases */}
      <div className="absolute inset-0">
        <Image
          src="/images/europa/lounge-room-4.jpg"
          alt="Europa Villa - Lounge Room 4 luxury interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay - warmer tone to match the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a130b]/60 via-[#1a130b]/40 to-[#1a130b]/70" />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-20"
=======
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(380px, 75vw, 100vh)" }}>
      <div className="absolute inset-0">
        <Image
          src="/images/europa/lounge Room 4.jpg"
          alt="Artfully curated interior - Urban Saajh by Tej"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a130b]/60 via-[#1a130b]/40 to-[#1a130b]/70" />
        <div className="absolute inset-0 opacity-20"
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
      </div>

<<<<<<< HEAD
      {/* Hero content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          {/* Pre-heading */}
          <div
            className="flex items-center gap-3 mb-6 opacity-0 animate-fadeIn delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <span className="divider bg-[#C8BBA8]/60" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light">
=======
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto" style={{ paddingLeft: "clamp(14px, 4vw, 48px)", paddingRight: "clamp(14px, 4vw, 48px)", paddingBottom: "clamp(20px, 5vw, 112px)" }}>
        <div className="max-w-xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 opacity-0 animate-fadeIn delay-200"
            style={{ animationFillMode: "forwards" }}>
            <span className="divider bg-[#C8BBA8]/60" />
            <span className="tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light" style={{ fontSize: "clamp(8px, 1.3vw, 11px)" }}>
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
              Luxury Interior Design
            </span>
          </div>

<<<<<<< HEAD
          {/* Main heading */}
          <h1
            className="font-serif font-light text-[#FAF7F2] leading-[1.08] mb-8 opacity-0 animate-fadeInUp delay-300"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              animationFillMode: "forwards",
            }}
          >
=======
          <h1 className="font-serif font-light text-[#FAF7F2] leading-[1.08] mb-6 sm:mb-8 opacity-0 animate-fadeInUp delay-300"
            style={{ fontSize: "clamp(1.6rem, 5vw, 4.5rem)", animationFillMode: "forwards" }}>
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
            Artfully Curated,
            <br />
            <em className="italic font-light">Naturally Inspired</em>
            <br />
            Interiors
          </h1>

<<<<<<< HEAD
          {/* CTA Button */}
          <div
            className="opacity-0 animate-fadeInUp delay-500"
            style={{ animationFillMode: "forwards" }}
          >
            <Link
              href="#services"
              className="inline-flex items-center gap-3 border border-[#FAF7F2]/50 text-[#FAF7F2] px-7 py-3 text-[10px] tracking-[0.2em] uppercase font-sans font-light hover:bg-[#FAF7F2] hover:text-[#3D2B1F] transition-all duration-400 group"
            >
              <span>Work with Us</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
=======
          <div className="opacity-0 animate-fadeInUp delay-500" style={{ animationFillMode: "forwards" }}>
            <Link href="#services"
              className="inline-flex items-center gap-2 sm:gap-3 border border-[#FAF7F2]/50 text-[#FAF7F2] tracking-[0.2em] uppercase font-sans font-light hover:bg-[#FAF7F2] hover:text-[#3D2B1F] transition-all duration-400 group"
              style={{ fontSize: "clamp(8px, 1.3vw, 11px)", padding: "clamp(8px, 1.5vw, 12px) clamp(14px, 3vw, 28px)" }}>
              <span>Work with Us</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
            </Link>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-0 animate-fadeIn delay-700"
        style={{ animationFillMode: "forwards" }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C8BBA8]/60 to-transparent" />
=======
      {/* Scroll indicator — hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-8 right-6 md:right-16 flex-col items-center gap-2 opacity-0 animate-fadeIn delay-700"
        style={{ animationFillMode: "forwards" }}>
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C8BBA8]/60 to-transparent" />
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
      </div>
    </section>
  );
}
