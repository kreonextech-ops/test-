"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
  {
    id: 0,
    label: "Core Philosophy",
    title: null,
    body: "Tejinder's approach is rooted in a simple truth — a home should feel like yours, not like a showroom. He designs for everyday life: real meals, real routines, real people — not for an Instagram grid.",
  },
  {
    id: 1,
    label: "Modern & Considered",
    title: "Modern & Considered",
    body: "Clean lines, purposeful choices, nothing unnecessary. Every element earns its place.",
  },
  {
    id: 2,
    label: "Minimal Luxury",
    title: "Minimal Luxury",
    body: "Luxury isn't about excess — it's restraint done beautifully. Quality over quantity, always.",
  },
  {
    id: 3,
    label: "Built for Living",
    title: "Built for Living",
    body: "Spaces that work as hard as you do. Comfortable, functional, and genuinely yours.",
  },
];

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("left");
  const slideRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);

  const goTo = (idx: number, d: "left" | "right") => {
    if (fading) return;
    setDir(d);
    setFading(true);
    setTimeout(() => {
      setActiveSlide((idx + slides.length) % slides.length);
      setFading(false);
    }, 250);
  };
  const prev = () => goTo(activeSlide - 1, "right");
  const next = () => goTo(activeSlide + 1, "left");

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };
  const onMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
    if (slideRef.current) slideRef.current.style.cursor = "grabbing";
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - mouseStartX.current;
    isDragging.current = false;
    if (slideRef.current) slideRef.current.style.cursor = "grab";
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  const slide = slides[activeSlide];
  const slideStyle: React.CSSProperties = {
    opacity: fading ? 0 : 1,
    transform: fading ? `translateX(${dir === "left" ? "-12px" : "12px"})` : "translateX(0)",
    transition: "opacity 0.25s ease, transform 0.25s ease",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().then(() => {
                setIsPlaying(true);
              }).catch(() => {
                // Browsers may block unmuted autoplay if no prior interaction
                setIsPlaying(false);
                console.log("Autoplay blocked — requires user interaction first.");
              });
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.1 } // Start as soon as it's slightly in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="founder" ref={sectionRef} className="w-full overflow-hidden">
      <div className="grid" style={{ minHeight: "clamp(380px, 90vw, 960px)", gridTemplateColumns: "1.3fr 1fr" }}>

        {/* ── LEFT: cream — video portrait ── */}
        <div
          className="relative flex flex-col"
          style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(14px, 3vw, 40px) clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px)" }}
        >
          {/* Gold accents */}
          <div className="absolute top-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div className="absolute bottom-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Video portrait — tall aspect ratio like a portrait photo */}
          <motion.div
            className="relative flex-1 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              borderRadius: "clamp(60px, 16vw, 180px) clamp(60px, 16vw, 180px) 0 0",
              minHeight: "clamp(280px, 70vw, 680px)",
            }}
          >
            <video
              ref={videoRef}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ filter: "brightness(0.92)" }}
            >
              {/* Attached video file */}
              <source src="/video.mp4" type="video/mp4" />
              {/* Fallback image if video not available */}
              <img
                src="/images/founder.jpg"
                alt="Tejinder Singh Bhogal — Founder, Urban Saajh"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </video>

            {/* Subtle warm tint */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(13,59,46,0.08)" }} />

            {/* Play/Pause Button Overlay */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none z-20 cursor-pointer"
            >
              <div
                className={`flex items-center justify-center rounded-full bg-black/20 border border-white/30 text-[#FAF5EC] backdrop-blur-md transition-all duration-300 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"} sm:opacity-0 sm:group-hover:opacity-100`}
                style={{ width: "clamp(48px, 12vw, 80px)", height: "clamp(48px, 12vw, 80px)" }}
              >
                {isPlaying ? (
                  <svg width="30%" height="30%" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="30%" height="30%" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "4%" }}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </div>
            </button>

            {/* Name badge at bottom of video */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
              style={{
                background: "linear-gradient(to top, rgba(13,59,46,0.85) 0%, rgba(13,59,46,0.4) 55%, transparent 100%)",
                padding: "clamp(32px, 8vw, 64px) clamp(14px, 3vw, 24px) clamp(14px, 3vw, 22px)",
              }}
            >
              <p
                className="uppercase font-sans font-light tracking-[0.2em]"
                style={{ fontSize: "clamp(7px, 1.1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(3px, 0.7vw, 6px)" }}
              >
                Founder & Principal Designer
              </p>
              <h3
                className="font-serif font-light text-white leading-tight"
                style={{ fontSize: "clamp(16px, 3.2vw, 32px)" }}
              >
                Tejinder Singh Bhogal
              </h3>
            </div>
          </motion.div>

          {/* Quote strip below video */}
          <div
            className="flex items-center"
            style={{ marginTop: "clamp(10px, 2.5vw, 20px)", gap: "clamp(8px, 2vw, 16px)" }}
          >
            <span style={{ width: "clamp(20px, 5vw, 40px)", height: "1px", background: "#C9A87C", flexShrink: 0 }} />
            <p
              className="font-serif italic"
              style={{ fontSize: "clamp(12px, 2vw, 18px)", color: "#6B4F3A", fontWeight: 300, lineHeight: 1.5 }}
            >
              &ldquo;Not a hotel. A home — for the way you actually live.&rdquo;
            </p>
          </div>
        </div>

        {/* ── RIGHT: dark green — founder story ── */}
        <div
          className="relative flex flex-col justify-center overflow-hidden"
          style={{ background: "#0D3B2E", padding: "clamp(28px, 5vw, 72px) clamp(16px, 4vw, 52px)" }}
        >
          {/* Gold accents */}
          <div className="absolute top-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div className="absolute bottom-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Label */}
          <p
            className="uppercase font-sans font-light tracking-[0.25em]"
            style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}
          >
            The Mind Behind
          </p>

          {/* Heading */}
          <h2
            className="font-serif font-light text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)", marginBottom: "clamp(12px, 3vw, 32px)" }}
          >
            Tejinder<br />
            <em className="italic">Singh Bhogal</em>
          </h2>

          <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(10px, 2.5vw, 24px)" }} />

          <div className="hidden md:block">
            {/* Core philosophy */}
            <p
              className="font-sans font-light leading-[1.85]"
              style={{ fontSize: "clamp(11px, 1.8vw, 17px)", color: "rgba(255,255,255,0.72)", marginBottom: "clamp(16px, 3.5vw, 32px)" }}
            >
              Tejinder&apos;s approach is rooted in a simple truth — a home should feel like
              yours, not like a showroom. He designs for everyday life: real meals, real
              routines, real people — not for an Instagram grid.
            </p>

            {/* Pillars */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 1.3vw, 11px)", marginBottom: "clamp(12px, 3vw, 24px)" }}
            >
              {[
                { title: "Modern & Considered", body: "Clean lines, purposeful choices, nothing unnecessary. Every element earns its place." },
                { title: "Minimal Luxury", body: "Luxury isn't about excess — it's restraint done beautifully. Quality over quantity, always." },
                { title: "Built for Living", body: "Spaces that work as hard as you do. Comfortable, functional, and genuinely yours." },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
                  }}
                  className="border-t border-white/20 pt-4"
                >
                  <div className="flex items-center" style={{ gap: "clamp(5px, 1vw, 8px)", marginBottom: "clamp(2px, 0.5vw, 4px)" }}>
                    <span style={{ width: "clamp(5px, 0.9vw, 7px)", height: "clamp(5px, 0.9vw, 7px)", background: "#C9A87C", flexShrink: 0, display: "block" }} />
                    <h4
                      className="font-serif italic text-white"
                      style={{ fontSize: "clamp(11px, 2vw, 18px)", fontWeight: 300 }}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    className="font-sans font-light leading-relaxed"
                    style={{ fontSize: "clamp(10px, 1.5vw, 14px)", color: "rgba(255,255,255,0.58)", paddingLeft: "clamp(10px, 1.9vw, 15px)" }}
                  >
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── MOBILE: swipeable slide ── */}
          <div className="flex md:hidden flex-col justify-center" style={{ flexGrow: 1 }}>
            <div
              ref={slideRef}
              style={{ cursor: "grab", touchAction: "pan-y", minHeight: "clamp(120px, 34vw, 240px)" }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            >
              <div style={slideStyle}>
                {slide.title ? (
                  <div style={{
                    background: "rgba(201,168,124,0.08)",
                    borderLeft: "2px solid #C9A87C",
                    padding: "clamp(8px, 2vw, 18px) clamp(10px, 2.5vw, 20px)",
                    borderRadius: "0 4px 4px 0"
                  }}>
                    <div className="flex items-center gap-2" style={{ marginBottom: "clamp(5px, 1.2vw, 10px)" }}>
                      <span style={{ width: "clamp(6px, 1vw, 8px)", height: "clamp(6px, 1vw, 8px)", background: "#C9A87C", flexShrink: 0 }} />
                      <h3 className="font-serif text-white/90 italic"
                        style={{ fontSize: "clamp(11px, 2.2vw, 18px)", fontWeight: 300 }}>
                        {slide.title}
                      </h3>
                    </div>
                    <p className="font-sans text-white/70 leading-relaxed"
                      style={{ fontSize: "clamp(10px, 2vw, 14px)", fontWeight: 300, paddingLeft: "clamp(12px, 2vw, 18px)" }}>
                      {slide.body}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="font-sans text-white/75 leading-relaxed"
                      style={{ fontSize: "clamp(11px, 2vw, 16px)", fontWeight: 300 }}>
                      {slide.body}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile nav */}
            <div className="flex items-center" style={{ gap: "clamp(5px, 1.5vw, 10px)", marginTop: "clamp(10px, 2.5vw, 18px)", marginBottom: "clamp(10px, 2.5vw, 18px)" }}>
              {[prev, next].map((fn, i) => (
                <button key={i} onClick={fn}
                  className="rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{ width: "clamp(20px, 5vw, 28px)", height: "clamp(20px, 5vw, 28px)", border: "1px solid rgba(201,168,124,0.5)", color: "#C9A87C", background: "transparent" }}>
                  <svg width="8" height="8" viewBox="0 0 14 14" fill="none">
                    <polyline points={i === 0 ? "9,2 4,7 9,12" : "5,2 10,7 5,12"}
                      stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
              <div style={{ width: "1px", height: "14px", background: "rgba(201,168,124,0.4)", flexShrink: 0 }} />
              <span className="font-sans font-light tabular-nums"
                style={{ fontSize: "clamp(8px, 1.8vw, 11px)", color: "#C9A87C" }}>
                <span style={{ color: "#fff" }}>{String(activeSlide + 1).padStart(2, "0")}</span>
                {" / "}{String(slides.length).padStart(2, "0")}
              </span>
              <div style={{ width: "1px", height: "14px", background: "rgba(201,168,124,0.4)", flexShrink: 0 }} />
              {/* Dots */}
              <div className="flex flex-row items-center" style={{ gap: "3px" }}>
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i, i > activeSlide ? "left" : "right")}
                    style={{ padding: "2px 0", background: "none", border: "none", cursor: "pointer" }}>
                    <span style={{
                      display: "block", borderRadius: "9999px", transition: "all 0.3s",
                      height: "clamp(3px, 0.7vw, 4px)",
                      width: i === activeSlide ? "clamp(10px, 2.5vw, 14px)" : "clamp(3px, 0.7vw, 4px)",
                      background: i === activeSlide ? "#C9A87C" : "rgba(201,168,124,0.3)",
                    }} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(10px, 2.5vw, 20px)" }} />

          {/* CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
            style={{
              gap: "clamp(6px, 1.5vw, 10px)",
              background: "#C9A87C",
              color: "#0D3B2E",
              padding: "clamp(10px, 2vw, 16px) clamp(16px, 4vw, 32px)",
              fontSize: "clamp(9px, 1.5vw, 13px)",
            }}
          >
            <span>Work with Tejinder</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
