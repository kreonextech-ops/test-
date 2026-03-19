"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    slug: "interior-design-consultancy",
    title: "Interior Design Consultancy",
    description: "Expert guidance from concept to completion. We assess your space, understand your lifestyle, and deliver a clear design roadmap before a single nail is hammered.",
    image: "/images/services/consultancy.png",
    icon: "01",
  },
  {
    id: 2,
    slug: "space-planning",
    title: "Space Planning",
    description: "Every square foot matters. We map movement flow, furniture placement, and functional zones so your space feels larger, smarter, and more liveable.",
    image: "/images/services/space-planning.png",
    icon: "02",
  },
  {
    id: 3,
    slug: "residential-commercial-execution",
    title: "Residential & Commercial Execution",
    description: "Full end-to-end interior execution for homes, offices, retail, and hospitality spaces — managed with precision and delivered on time.",
    image: "/images/services/execution.png",
    icon: "03",
  },
  {
    id: 4,
    slug: "turnkey-interior-projects",
    title: "Turnkey Interior Projects",
    description: "Hand us the keys. We handle design, procurement, labour coordination, and handover. Zero stress, single point of contact, complete accountability.",
    image: "/images/services/turnkey.png",
    icon: "04",
  },
  {
    id: 5,
    slug: "customized-furniture-false-ceiling",
    title: "Customized Furniture & False Ceiling",
    description: "Built-to-measure furniture and ceiling work crafted to your exact space dimensions — no compromise on proportion, finish, or detailing.",
    image: "/images/services/service-5-refined.png",
    icon: "05",
  },
  {
    id: 6,
    slug: "3d-visualization-design",
    title: "3D Visualization & Design",
    description: "See your space before it's built. Photorealistic 3D renders and walkthroughs so you approve every detail with complete confidence.",
    image: "/images/services/visualization.png",
    icon: "06",
  },
  {
    id: 7,
    slug: "modular-kitchen-solutions",
    title: "Modular Kitchen Solutions",
    description: "Ergonomic, elegant, and built to last. We design modular kitchens around how you cook — layout, storage, finish, and fitting all included.",
    image: "/images/services/kitchen.png",
    icon: "07",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");
  const [showHint, setShowHint] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const touchStartX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);
  const archRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number, dir: "left" | "right") => {
    if (fading) return;
    if (!hasInteracted) { setHasInteracted(true); setShowHint(false); }
    setSlideDir(dir);
    setFading(true);
    setTimeout(() => {
      setActiveIndex((idx + services.length) % services.length);
      setTimeout(() => setFading(false), 400);
    }, 300);
  };

  const prev = () => goTo(activeIndex - 1, "right");
  const next = () => goTo(activeIndex + 1, "left");

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
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

  const imgStyle: React.CSSProperties = {
    opacity: fading ? 0 : 1,
    transform: fading ? `translateX(${slideDir === "left" ? "-18px" : "18px"})` : "translateX(0)",
    transition: "opacity 0.4s ease, transform 0.4s ease",
  };

  return (
    <section id="services" className="w-full overflow-hidden">
      <div className="grid grid-cols-2" style={{ minHeight: "clamp(480px, 100vw, 900px)" }}>

        {/* ── RIGHT: dark green side with services list ── */}
        <div className="relative flex flex-col justify-center overflow-hidden"
          style={{ background: "#0D3B2E", padding: "clamp(28px, 5vw, 72px) clamp(16px, 4vw, 52px)" }}>

          {/* Gold accent top-right */}
          <div className="absolute top-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Active service title only */}
          <div style={{ marginBottom: "clamp(10px, 2.5vw, 22px)" }}>
            <div className="flex items-center" style={{ gap: "clamp(6px, 1.5vw, 12px)" }}>
              <span style={{ width: "clamp(6px, 1vw, 8px)", height: "clamp(6px, 1vw, 8px)", background: "#C9A87C", flexShrink: 0, display: "block" }} />
              <h3 className="font-serif italic"
                style={{
                  fontSize: "clamp(14px, 2.8vw, 26px)", color: "#fff", fontWeight: 300,
                  opacity: fading ? 0 : 1, transition: "opacity 0.3s"
                }}>
                {services[activeIndex].title}
              </h3>
            </div>
          </div>

          <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(10px, 2.5vw, 22px)" }} />

          {/* All services list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3px, 1vw, 8px)" }}>
            {services.map((svc, i) => (
              <button key={svc.id} onClick={() => goTo(i, i > activeIndex ? "left" : "right")}
                className="text-left w-full flex items-center transition-all duration-200 group"
                style={{
                  gap: "clamp(6px, 1.5vw, 14px)",
                  padding: "clamp(5px, 1.2vw, 10px) clamp(8px, 1.8vw, 16px)",
                  background: i === activeIndex ? "rgba(201,168,124,0.12)" : "transparent",
                  borderLeft: i === activeIndex ? "2px solid #C9A87C" : "2px solid transparent",
                  borderRadius: "0 4px 4px 0",
                  cursor: "pointer",
                  border: "none",
                  borderLeftWidth: "2px",
                  borderLeftStyle: "solid",
                  borderLeftColor: i === activeIndex ? "#C9A87C" : "transparent",
                }}>
                <span className="font-serif font-light flex-shrink-0"
                  style={{ fontSize: "clamp(11px, 2vw, 18px)", color: i === activeIndex ? "#C9A87C" : "rgba(201,168,124,0.4)" }}>
                  {svc.icon}
                </span>
                <span className="font-sans font-light"
                  style={{ fontSize: "clamp(11px, 1.8vw, 18px)", color: i === activeIndex ? "#fff" : "rgba(255,255,255,0.5)", transition: "color 0.2s" }}>
                  {svc.title}
                </span>
                {i === activeIndex && (
                  <span style={{ marginLeft: "auto", color: "#C9A87C", fontSize: "clamp(11px, 1.8vw, 17px)", flexShrink: 0 }}>→</span>
                )}
              </button>
            ))}
          </div>

          <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", margin: "clamp(10px, 2.5vw, 22px) 0" }} />

          {/* CTA */}
          <Link href="#contact"
            className="inline-flex items-center self-start transition-all duration-300 group font-sans font-light uppercase tracking-[0.2em]"
            style={{
              gap: "clamp(8px, 1.8vw, 14px)",
              border: "1px solid rgba(201,168,124,0.5)", color: "#C9A87C",
              padding: "clamp(8px, 1.8vw, 16px) clamp(16px, 3.5vw, 32px)",
              fontSize: "clamp(10px, 1.5vw, 14px)"
            }}>
            <span>Book a Consultation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          {/* Gold accent bottom-left */}
          <div className="absolute bottom-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>
        {/* ── LEFT: cream side with arch image ── */}
        <div className="relative flex flex-col"
          style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(14px, 3vw, 40px) clamp(24px, 5vw, 64px) clamp(14px, 4vw, 56px)" }}>

          {/* Gold accent top-left */}
          <div className="absolute top-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Section label + heading */}
          <div style={{ marginBottom: "clamp(16px, 4vw, 36px)" }}>
            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(9px, 1.5vw, 13px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 12px)" }}>
              What We Offer
            </p>
            <h2 className="font-serif font-light leading-tight" style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)", color: "#3D2B1F" }}>
              Our Services
            </h2>
          </div>

          {/* Arch image */}
          <div ref={archRef} className="relative w-full select-none flex-1"
            style={{ minHeight: "clamp(140px, 38vw, 420px)", cursor: "grab", touchAction: "pan-y" }}
            onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onMouseDown={onMouseDown}>
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
                  <path d="M0,1 L0,0.35 Q0,0 0.5,0 Q1,0 1,0.35 L1,1 Z" />
                </clipPath>
              </defs>
            </svg>
            <div className="absolute inset-0" style={{ clipPath: "url(#arch-clip)", background: "rgba(201,168,124,0.2)" }} />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "url(#arch-clip)" }}>
              <Image key={activeIndex} src={services[activeIndex].image}
                alt={services[activeIndex].title} fill
                className="object-cover object-center" sizes="50vw"
                style={imgStyle} draggable={false} />
              <div className="absolute inset-0" style={{ background: "rgba(13,59,46,0.12)" }} />
            </div>

            {/* Service number badge on image */}
            <div className="absolute" style={{ top: "clamp(8px, 2vw, 16px)", left: "clamp(8px, 2vw, 16px)", zIndex: 10 }}>
              <span className="font-serif font-light" style={{ fontSize: "clamp(20px, 5vw, 48px)", color: "rgba(255,255,255,0.6)", lineHeight: 1 }}>
                {services[activeIndex].icon}
              </span>
            </div>

            {/* Description overlay — bottom of arch image */}
            <div className="absolute inset-x-0 pointer-events-none"
              style={{
                bottom: 0,
                background: "linear-gradient(to top, rgba(13,59,46,0.92) 0%, rgba(13,59,46,0.6) 60%, transparent 100%)",
                padding: "clamp(24px, 6vw, 48px) clamp(14px, 3vw, 28px) clamp(12px, 3vw, 24px)",
                clipPath: "url(#arch-clip)",
                zIndex: 10,
              }}>
              <p className="font-sans font-light leading-relaxed"
                style={{
                  fontSize: "clamp(11px, 1.8vw, 17px)",
                  color: "rgba(255,255,255,0.88)",
                  opacity: fading ? 0 : 1,
                  transition: "opacity 0.4s",
                }}>
                {services[activeIndex].description}
              </p>
            </div>

            {/* Swipe hint */}
            <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 flex items-center gap-1 pointer-events-none transition-opacity duration-500"
              style={{ opacity: showHint ? 0.6 : 0 }}>
              <svg width="20" height="9" viewBox="0 0 32 12" fill="none">
                <line x1="1" y1="6" x2="31" y2="6" stroke="#FAF5EC" strokeWidth="1" strokeLinecap="round" />
                <polyline points="5,2 1,6 5,10" stroke="#FAF5EC" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="27,2 31,6 27,10" stroke="#FAF5EC" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="uppercase font-sans font-light tracking-[0.2em]"
                style={{ fontSize: "clamp(6px, 1vw, 8px)", color: "#FAF5EC" }}>Swipe</span>
            </div>
          </div>

          {/* Nav bar */}
          <div className="flex items-center" style={{ gap: "clamp(5px, 1.5vw, 12px)", marginTop: "clamp(10px, 2.5vw, 20px)" }}>
            {[prev, next].map((fn, i) => (
              <button key={i} onClick={fn} aria-label={i === 0 ? "Previous" : "Next"}
                className="rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  width: "clamp(20px, 4.5vw, 34px)", height: "clamp(20px, 4.5vw, 34px)",
                  border: "1px solid rgba(201,168,124,0.5)", color: "#3D2B1F",
                  background: "transparent"
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C9A87C"; (e.currentTarget as HTMLElement).style.color = "#FAF5EC"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#3D2B1F"; }}>
                <svg width="9" height="9" viewBox="0 0 14 14" fill="none">
                  <polyline points={i === 0 ? "9,2 4,7 9,12" : "5,2 10,7 5,12"}
                    stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
            <div style={{ width: "1px", height: "clamp(16px, 3vw, 24px)", background: "rgba(201,168,124,0.4)", flexShrink: 0 }} />
            <span className="font-sans font-light tabular-nums whitespace-nowrap"
              style={{ fontSize: "clamp(10px, 1.6vw, 15px)", color: "#C9A87C" }}>
              <span style={{ color: "#3D2B1F" }}>{String(activeIndex + 1).padStart(2, "0")}</span>
              {" / "}{String(services.length).padStart(2, "0")}
            </span>
            <div style={{ width: "1px", height: "clamp(16px, 3vw, 24px)", background: "rgba(201,168,124,0.4)", flexShrink: 0 }} />
            {/* Dot pills */}
            <div className="flex flex-row items-center" style={{ gap: "clamp(3px, 0.7vw, 5px)" }}>
              {services.map((_, i) => (
                <button key={i} onClick={() => goTo(i, i > activeIndex ? "left" : "right")}
                  aria-label={`Service ${i + 1}`}
                  style={{ padding: "3px 0", background: "none", border: "none", cursor: "pointer" }}>
                  <span style={{
                    display: "block", borderRadius: "9999px", transition: "all 0.3s",
                    height: "clamp(3px, 0.6vw, 5px)",
                    width: i === activeIndex ? "clamp(8px, 2vw, 14px)" : "clamp(3px, 0.6vw, 5px)",
                    background: i === activeIndex ? "#C9A87C" : "rgba(201,168,124,0.35)"
                  }} />
                </button>
              ))}
            </div>
          </div>

          {/* View Details button */}
          <div style={{ marginTop: "clamp(10px, 2.5vw, 20px)" }}>
            <Link
              href={`/services/${services[activeIndex].slug}`}
              className="inline-flex items-center gap-2 w-full justify-center font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
              style={{
                background: "#C9A87C",
                color: "#FAF5EC",
                padding: "clamp(10px, 2vw, 16px) clamp(16px, 4vw, 32px)",
                fontSize: "clamp(9px, 1.5vw, 13px)",
                opacity: fading ? 0.6 : 1,
                transition: "opacity 0.3s, background 0.3s",
              }}
            >
              <span>View Details</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Gold accent bottom-right */}
          <div className="absolute bottom-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>


      </div>
    </section>
  );
}
