"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    slug: "europa-living",
    title: "Europa Living Room",
    category: "Turnkey",
    location: "Mumbai",
    image: "/images/europa/Living 1.jpg",
  },
  {
    id: 2,
    slug: "europa-master-bedroom",
    title: "Master Bedroom Suite",
    category: "Full Service",
    location: "Mumbai",
    image: "/images/europa/Master Bedroom 1.jpg",
  },
  {
    id: 3,
    slug: "europa-dining",
    title: "Dining Space",
    category: "Consultation",
    location: "Mumbai",
    image: "/images/europa/Dining 1.jpg",
  },
  {
    id: 4,
    slug: "europa-lounge",
    title: "Lounge Room",
    category: "Full Service",
    location: "Mumbai",
    image: "/images/europa/Lounge Room 3.jpg",
  },
  {
    id: 5,
    slug: "europa-kitchen",
    title: "Modular Kitchen",
    category: "Kitchen",
    location: "Mumbai",
    image: "/images/europa/Kitchen 1.jpg",
  },
  {
    id: 6,
    slug: "europa-living-2",
    title: "Living — Alternate View",
    category: "Turnkey",
    location: "Mumbai",
    image: "/images/europa/Living 2.jpg",
  },
  {
    id: 7,
    slug: "europa-passage",
    title: "Passage & Entry",
    category: "Full Service",
    location: "Mumbai",
    image: "/images/europa/P1.jpg",
  },
  {
    id: 8,
    slug: "europa-bedroom-2",
    title: "Guest Bedroom",
    category: "Curation",
    location: "Mumbai",
    image: "/images/europa/Master Bedroom 1.jpg",
  },
  {
    id: 9,
    slug: "europa-lounge-2",
    title: "Lounge — Evening Light",
    category: "Consultation",
    location: "Mumbai",
    image: "/images/europa/Lounge Room 3.jpg",
  },
];

// Desktop grid layout: defines position of each card
// pattern: col-span, row-span for a 3-col grid
const gridLayout = [
  { colSpan: 1, rowSpan: 2 }, // 0 — left tall
  { colSpan: 2, rowSpan: 1 }, // 1 — right wide
  { colSpan: 2, rowSpan: 1 }, // 2 — right wide
  { colSpan: 2, rowSpan: 1 }, // 3 — right wide
  { colSpan: 1, rowSpan: 2 }, // 4 — left tall
  { colSpan: 1, rowSpan: 1 }, // 5 — small
  { colSpan: 1, rowSpan: 1 }, // 6 — small
  { colSpan: 1, rowSpan: 1 }, // 7 — small
  { colSpan: 2, rowSpan: 1 }, // 8 — wide
];

function ProjectCard({ project, colSpan, rowSpan }: {
  project: typeof projects[0];
  colSpan: number;
  rowSpan: number;
}) {
  const heightStyle = rowSpan === 2
    ? { minHeight: "clamp(140px, 36vw, 560px)" }
    : { height: "clamp(70px, 18vw, 272px)" };

  return (
    <div
      className="relative img-zoom group overflow-hidden"
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        ...heightStyle,
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover object-center"
        sizes={`${colSpan === 2 ? "66vw" : "33vw"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div
        className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-start"
        style={{ padding: "clamp(12px, 3vw, 32px)" }}
      >
        <p
          className="tracking-[0.15em] uppercase text-[#C8BBA8] font-sans"
          style={{ fontSize: "clamp(7px, 1.2vw, 11px)", marginBottom: "clamp(4px, 1vw, 8px)" }}
        >
          {project.category}
        </p>
        <h3
          className="font-serif text-[#FAF7F2] font-light leading-tight"
          style={{ fontSize: "clamp(11px, 2.5vw, 24px)", marginBottom: "clamp(8px, 2vw, 20px)" }}
        >
          {project.title}
        </h3>
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-2 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group/btn"
          style={{
            background: "#C9A87C",
            color: "#FAF5EC",
            padding: "clamp(6px, 1.3vw, 12px) clamp(12px, 3vw, 24px)",
            fontSize: "clamp(7px, 1.2vw, 10px)",
          }}
        >
          <span>View Project</span>
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const isDragging = useRef(false);
  const mouseStartX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goPrev = () => setMobileIndex((i) => Math.max(0, i - 1));
  const goNext = () => setMobileIndex((i) => Math.min(projects.length - 1, i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? goNext() : goPrev();
  };
  const onMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
    if (carouselRef.current) carouselRef.current.style.cursor = "grabbing";
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - mouseStartX.current;
    isDragging.current = false;
    if (carouselRef.current) carouselRef.current.style.cursor = "grab";
    if (Math.abs(dx) > 40) dx < 0 ? goNext() : goPrev();
  };

  return (
    <section id="portfolio" className="bg-[#FAF5EC]" style={{ padding: "clamp(20px, 5vw, 128px) 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(14px, 4vw, 48px)" }}>

        {/* Header */}
        <div className="flex items-end justify-between" style={{ marginBottom: "clamp(20px, 5vw, 56px)" }}>
          <div>
            <p
              className="tracking-[0.25em] uppercase font-sans font-light"
              style={{ fontSize: "clamp(7px, 1.3vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}
            >
              Selected Work
            </p>
            <h2
              className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(1.4rem, 4.5vw, 3.2rem)" }}
            >
              Portfolio
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center text-[#6B4F3A] tracking-[0.2em] uppercase font-sans font-light hover:text-[#3D2B1F] transition-colors group whitespace-nowrap"
            style={{ fontSize: "clamp(8px, 1.3vw, 11px)", gap: "clamp(4px, 1vw, 8px)" }}
          >
            <span>View All Projects</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ── DESKTOP GRID (hidden on mobile) ── */}
        <div
          className="hidden sm:grid grid-cols-3"
          style={{ gap: "clamp(4px, 1.2vw, 16px)" }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              colSpan={gridLayout[i].colSpan}
              rowSpan={gridLayout[i].rowSpan}
            />
          ))}
        </div>

        {/* ── MOBILE CAROUSEL (visible only on mobile) ── */}
        <div className="sm:hidden">
          {/* Swipe area */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden select-none"
            style={{ height: "clamp(220px, 75vw, 380px)", cursor: "grab", touchAction: "pan-y" }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="absolute inset-0 transition-opacity duration-400"
                style={{ opacity: i === mobileIndex ? 1 : 0, pointerEvents: i === mobileIndex ? "auto" : "none" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
                {/* Gradient + label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/80 via-transparent to-transparent" />
                <div className="absolute" style={{ bottom: "clamp(16px, 5vw, 32px)", left: "clamp(16px, 5vw, 32px)", right: "16px" }}>
                  <p className="tracking-[0.15em] uppercase text-[#C8BBA8] font-sans font-light" style={{ fontSize: "10px", marginBottom: "6px" }}>
                    {project.category}
                  </p>
                  <h3 className="font-serif text-[#FAF7F2] font-light leading-tight" style={{ fontSize: "20px", marginBottom: "12px" }}>
                    {project.title}
                  </h3>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 font-sans font-light uppercase tracking-[0.2em]"
                    style={{
                      background: "#C9A87C",
                      color: "#FAF5EC",
                      padding: "8px 16px",
                      fontSize: "9px",
                    }}
                  >
                    <span>View Project</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* Swipe hint */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none transition-opacity duration-500"
              style={{ opacity: mobileIndex === 0 ? 0.55 : 0 }}
            >
              <svg width="24" height="10" viewBox="0 0 32 12" fill="none">
                <line x1="1" y1="6" x2="31" y2="6" stroke="#FAF5EC" strokeWidth="1" strokeLinecap="round" />
                <polyline points="5,2 1,6 5,10" stroke="#FAF5EC" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="27,2 31,6 27,10" stroke="#FAF5EC" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[#FAF5EC] font-sans font-light uppercase tracking-[0.2em]" style={{ fontSize: "8px" }}>Swipe</span>
            </div>
          </div>

          {/* Mobile nav bar */}
          <div className="flex items-center gap-3 mt-4">
            {/* Prev */}
            <button
              onClick={goPrev}
              disabled={mobileIndex === 0}
              className="rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200"
              style={{
                width: "32px", height: "32px",
                borderColor: mobileIndex === 0 ? "rgba(201,168,124,0.2)" : "rgba(201,168,124,0.6)",
                color: mobileIndex === 0 ? "rgba(61,43,31,0.3)" : "#3D2B1F",
                background: "transparent",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <polyline points="9,2 4,7 9,12" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={goNext}
              disabled={mobileIndex === projects.length - 1}
              className="rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200"
              style={{
                width: "32px", height: "32px",
                borderColor: mobileIndex === projects.length - 1 ? "rgba(201,168,124,0.2)" : "rgba(201,168,124,0.6)",
                color: mobileIndex === projects.length - 1 ? "rgba(61,43,31,0.3)" : "#3D2B1F",
                background: "transparent",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <polyline points="5,2 10,7 5,12" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Divider */}
            <div style={{ width: "1px", height: "18px", background: "rgba(201,168,124,0.4)", flexShrink: 0 }} />

            {/* Counter */}
            <span className="font-sans font-light tabular-nums" style={{ fontSize: "10px", color: "#C8BBA8" }}>
              <span style={{ color: "#3D2B1F" }}>{String(mobileIndex + 1).padStart(2, "0")}</span>
              {" / "}{String(projects.length).padStart(2, "0")}
            </span>

            {/* Divider */}
            <div style={{ width: "1px", height: "18px", background: "rgba(201,168,124,0.4)", flexShrink: 0 }} />

            {/* Dot pills */}
            <div className="flex flex-row items-center gap-1 flex-1 overflow-hidden">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  style={{ padding: "3px 0", background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}
                >
                  <span
                    style={{
                      display: "block",
                      borderRadius: "9999px",
                      height: "4px",
                      transition: "all 0.3s",
                      width: i === mobileIndex ? "14px" : "4px",
                      background: i === mobileIndex ? "#C9A87C" : "rgba(201,168,124,0.35)",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
