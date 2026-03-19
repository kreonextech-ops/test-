"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Full Service Interior Design",
    description:
      "Comprehensive design across the residential and commercial space, from concept development to final installation. Tailored to bring your vision to life with a discerning, sophisticated approach.",
    image:
      "/images/europa/living-1.jpg",
  },
  {
    id: 2,
    title: "Design Consultation",
    description:
      "Focused one-on-one sessions to refine your vision, resolve design challenges, and develop a clear direction for your space. Ideal for those who want expert guidance.",
    image:
      "/images/europa/kitchen-1.jpg",
  },
  {
    id: 3,
    title: "Furniture & Material Curation",
    description:
      "Sourcing and selection of exceptional furniture, textiles, and materials that reflect your aesthetic. Every piece considered for its beauty, quality, and longevity.",
    image:
      "/images/europa/dining-1.jpg",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");
  const [slideIn, setSlideIn] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const touchStartX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);
  const archRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number, dir: "left" | "right") => {
    if (fading) return;
    if (!hasInteracted) {
      setHasInteracted(true);
      setShowHint(false);
    }
    setSlideDir(dir);
    setFading(true);
    setTimeout(() => {
      setActiveIndex((idx + services.length) % services.length);
      setSlideIn(true);
      setTimeout(() => {
        setFading(false);
        setSlideIn(false);
      }, 400);
    }, 300);
  };

  const prev = () => goTo(activeIndex - 1, "right");
  const next = () => goTo(activeIndex + 1, "left");

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  const onMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
    if (archRef.current) archRef.current.style.cursor = "grabbing";
  };

  useEffect(() => {
    const onMouseUp = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - mouseStartX.current;
      isDragging.current = false;
      if (archRef.current) archRef.current.style.cursor = "grab";
      if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    };
    window.addEventListener("mouseup", onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  });

  const getImgStyle = (): React.CSSProperties => {
    if (fading) {
      return {
        opacity: 0,
        transform: `translateX(${slideDir === "left" ? "-20px" : "20px"})`,
        transition: "opacity 0.3s ease, transform 0.3s ease",
      };
    }
    return {
      opacity: 1,
      transform: "translateX(0)",
      transition: "opacity 0.4s ease, transform 0.4s ease",
    };
  };

  return (
    <section id="services" className="bg-[#F2EDE4] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-stretch">

          {/* Left: Services panel */}
          <div className="flex flex-col">
            <div className="mb-10 md:mb-14">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light mb-4">
                What We Offer
              </p>
              <h2
                className="font-serif font-light text-[#3D2B1F] leading-tight"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
              >
                Our Services
              </h2>
            </div>

            {/* Arch image with swipe support */}
            <div
              ref={archRef}
              className="relative w-full select-none"
              style={{ height: "420px", cursor: "grab", touchAction: "pan-y" }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
            >
              {/* SVG arch clip definition */}
              <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                  <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
                    <path d="M0,1 L0,0.35 Q0,0 0.5,0 Q1,0 1,0.35 L1,1 Z" />
                  </clipPath>
                </defs>
              </svg>

              {/* Arch placeholder bg */}
              <div
                className="absolute inset-0 bg-[#C8BBA8]/20"
                style={{ clipPath: "url(#arch-clip)" }}
              />

              {/* Arch image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: "url(#arch-clip)" }}
              >
                <Image
                  key={activeIndex}
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={getImgStyle()}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-[#3D2B1F]/[0.08]" />
              </div>

              {/* Swipe hint — disappears after first interaction */}
              <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none transition-opacity duration-500"
                style={{ opacity: showHint ? 0.55 : 0 }}
              >
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                  <line x1="1" y1="6" x2="31" y2="6" stroke="#3D2B1F" strokeWidth="1" strokeLinecap="round" />
                  <polyline points="5,2 1,6 5,10" stroke="#3D2B1F" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="27,2 31,6 27,10" stroke="#3D2B1F" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[9px] tracking-[0.2em] uppercase font-sans font-light text-[#3D2B1F]">
                  Swipe
                </span>
              </div>
            </div>

            {/* Navigation bar */}
            <div className="flex items-center gap-3 mt-6 mb-5">
              {/* ← Prev */}
              <button
                onClick={prev}
                aria-label="Previous service"
                className="w-9 h-9 rounded-full border border-[#3D2B1F]/25 flex items-center justify-center text-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-[#F2EDE4] hover:border-[#3D2B1F] transition-all duration-200 flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <polyline points="9,2 4,7 9,12" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* → Next */}
              <button
                onClick={next}
                aria-label="Next service"
                className="w-9 h-9 rounded-full border border-[#3D2B1F]/25 flex items-center justify-center text-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-[#F2EDE4] hover:border-[#3D2B1F] transition-all duration-200 flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <polyline points="5,2 10,7 5,12" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="w-px h-6 bg-[#C8BBA8]/50 flex-shrink-0" />

              {/* Counter */}
              <span className="text-[11px] tracking-[0.15em] text-[#C8BBA8] font-sans font-light tabular-nums whitespace-nowrap">
                <span className="text-[#3D2B1F]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(services.length).padStart(2, "0")}
              </span>

              <div className="w-px h-6 bg-[#C8BBA8]/50 flex-shrink-0" />

              {/* Horizontal dot pills */}
              <div className="flex flex-row gap-1.5 items-center">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > activeIndex ? "left" : "right")}
                    aria-label={`Go to service ${i + 1}`}
                    className="flex items-center py-1"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 h-1.5 ${
                        i === activeIndex
                          ? "w-4 bg-[#3D2B1F]"
                          : "w-1.5 bg-[#C8BBA8]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Service info */}
            <div className="max-w-sm">
              <h3
                className="font-serif font-light text-[#3D2B1F] text-xl mb-3"
                style={{
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                {services[activeIndex].title}
              </h3>
              <p
                className="font-sans font-light text-[#6B4F3A] text-[13px] leading-relaxed mb-5"
                style={{
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                {services[activeIndex].description}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#3D2B1F]/40 text-[#3D2B1F] px-5 py-2.5 text-[10px] tracking-[0.18em] uppercase font-sans font-light hover:bg-[#3D2B1F] hover:text-[#FAF7F2] transition-all duration-300 group"
              >
                <span>Learn More</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right: Large feature photo */}
          <div className="hidden md:block relative min-h-[600px] overflow-hidden group">
            <Image
              src="/images/europa/lounge-5.jpg"
              alt="Europa Villa - Lounge Room luxury interior"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-[#3D2B1F]/5" />
          </div>

        </div>
      </div>
    </section>
  );
}
