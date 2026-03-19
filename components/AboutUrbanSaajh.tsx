"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const slides = [
  {
    id: 0,
    label: "Our Approach",
    title: null,
    body: `I keep things simple — clarity first. We talk budget upfront, because Pinterest rooms and luxury finishes aren't "low-cost". If you want that look, the investment has to match. I don't sugarcoat; I guide.`,
  },
  {
    id: 1,
    label: "Space matters.",
    title: "Space matters.",
    body: `You can't expect a 3BHK feel inside 1000 sq ft. Interiors are built on real dimensions, movement flow, and comfort. If the space is tight, something has to give — and I'll tell you that honestly.`,
  },
  {
    id: 2,
    label: "Designer vs. Contractor.",
    title: "Designer vs. Contractor.",
    body: `Your contractor can "manage", but a designer brings planning, proportion, detailing, and long-term value. Skipping design saves money now, but costs more later.`,
  },
  {
    id: 3,
    label: "Our USP",
    title: "Our USP",
    body: null,
    usp: true,
  },
];

export default function AboutUrbanSaajh() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [fading, setFading] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("left");
  const touchStartX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);
  const slideRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" className="w-full overflow-hidden" style={{ background: "#FAF5EC" }}>
      <div className="grid grid-cols-2" style={{ minHeight: "clamp(380px, 90vw, 900px)" }}>

        {/* ── LEFT: cream side with images ── */}
        <motion.div 
          className="relative flex flex-col"
          style={{ background: "#FAF5EC", padding: "clamp(20px, 5vw, 64px) clamp(10px, 3vw, 40px) clamp(20px, 5vw, 64px) clamp(12px, 4vw, 56px)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          <div className="absolute top-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Main arch image */}
          <div className="relative flex-1 overflow-hidden"
            style={{
              borderTopRightRadius: "clamp(40px, 12vw, 140px)",
              borderTopLeftRadius: "clamp(40px, 12vw, 140px)",
              minHeight: "clamp(140px, 38vw, 480px)",
              marginBottom: "clamp(5px, 1.2vw, 12px)",
            }}>
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Urban Saajh interior design"
              fill className="object-cover object-center"
              sizes="50vw"
            />
          </div>

          {/* Two small images */}
          <div className="grid grid-cols-2" style={{ gap: "clamp(4px, 1.2vw, 10px)" }}>
            <div className="relative overflow-hidden" style={{ height: "clamp(50px, 13vw, 160px)" }}>
              <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
                alt="Interior detail 1" fill className="object-cover object-center" sizes="25vw" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "clamp(50px, 13vw, 160px)" }}>
              <Image src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&q=80"
                alt="Interior detail 2" fill className="object-cover object-center" sizes="25vw" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </motion.div>

        {/* ── RIGHT: dark green side ── */}
        <motion.div 
          className="relative flex flex-col justify-center overflow-hidden"
          style={{ background: "#0D3B2E", padding: "clamp(20px, 5vw, 72px) clamp(12px, 3.5vw, 56px) clamp(16px, 4vw, 56px) clamp(10px, 3vw, 48px)" }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          <div className="absolute top-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Heading — always visible */}
          <div className="flex flex-col" style={{ gap: "clamp(8px, 2vw, 20px)" }}>
            <div style={{ overflow: "hidden" }}>
              <motion.h2 
                className="font-serif text-white leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 4.8rem)", marginBottom: "clamp(8px, 2vw, 20px)", fontWeight: 300 }}
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                Design with<br />Clarity & Purpose
              </motion.h2>
            </div>

            {/* ── DESKTOP: full content stacked ── */}
            <div className="hidden md:block">
              <p className="font-sans text-white/75 leading-relaxed"
                style={{ fontSize: "clamp(11px, 1.5vw, 17px)", marginBottom: "clamp(12px, 2.5vw, 28px)", fontWeight: 300 }}>
                I keep things simple — clarity first. We talk budget upfront, because Pinterest rooms and
                luxury finishes aren&apos;t &ldquo;low-cost&rdquo;. If you want that look, the investment has to match.
                I don&apos;t sugarcoat; I guide.
              </p>

              {[
                {
                  title: "Space matters.",
                  body: "You can't expect a 3BHK feel inside 1000 sq ft. Interiors are built on real dimensions, movement flow, and comfort. If the space is tight, something has to give — and I'll tell you that honestly.",
                },
                {
                  title: "Designer vs. Contractor.",
                  body: `Your contractor can "manage", but a designer brings planning, proportion, detailing, and long-term value. Skipping design saves money now, but costs more later.`,
                },
              ].map((pt) => (
                <div key={pt.title} style={{ marginBottom: "clamp(10px, 2vw, 18px)" }}>
                  <div className="flex items-center gap-2" style={{ marginBottom: "clamp(4px, 1vw, 10px)" }}>
                    <span style={{ width: "clamp(7px, 1.1vw, 10px)", height: "clamp(7px, 1.1vw, 10px)", background: "#C9A87C", flexShrink: 0 }} />
                    <h3 className="font-serif text-white/90 italic"
                      style={{ fontSize: "clamp(12px, 1.8vw, 22px)", fontWeight: 300 }}>
                      {pt.title}
                    </h3>
                  </div>
                  <p className="font-sans text-white/65 leading-relaxed"
                    style={{ fontSize: "clamp(9px, 1.4vw, 16px)", fontWeight: 300, paddingLeft: "clamp(12px, 2vw, 24px)" }}>
                    {pt.body}
                  </p>
                  <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginTop: "clamp(10px, 2vw, 18px)" }} />
                </div>
              ))}

              {/* USP block */}
              <div style={{ background: "rgba(201,168,124,0.12)", borderLeft: "2px solid #C9A87C", padding: "clamp(8px, 1.8vw, 18px) clamp(10px, 2vw, 20px)", borderRadius: "0 4px 4px 0" }}>
                <p className="uppercase font-sans font-light tracking-[0.2em]"
                  style={{ fontSize: "clamp(8px, 1.1vw, 13px)", color: "#C9A87C", marginBottom: "clamp(4px, 1vw, 8px)" }}>
                  Our USP
                </p>
                <p className="font-sans text-white leading-relaxed"
                  style={{ fontSize: "clamp(9px, 1.4vw, 16px)", fontWeight: 300 }}>
                  At <span style={{ color: "#C9A87C", fontWeight: 400 }}>Urban Saajh</span>, clarity, honesty,
                  and detailed planning isn&apos;t extra — it&apos;s our USP. We focus on every parameter that
                  actually matters, so when you hire us, you&apos;re choosing{" "}
                  <span style={{ color: "#C9A87C", fontWeight: 400 }}>smart design, zero confusion,
                  and results that truly last.</span>
                </p>
              </div>
            </div>

            {/* ── MOBILE: swipeable slide ── */}
            <div className="md:hidden">
              {/* Slide content */}
              <div
                ref={slideRef}
                style={{ cursor: "grab", touchAction: "pan-y", minHeight: "clamp(100px, 28vw, 200px)" }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
              >
                <div style={slideStyle}>
                  {slide.usp ? (
                    <div style={{ background: "rgba(201,168,124,0.12)", borderLeft: "2px solid #C9A87C", padding: "clamp(8px, 2vw, 18px) clamp(10px, 2.5vw, 20px)", borderRadius: "0 4px 4px 0" }}>
                      <p className="uppercase font-sans font-light tracking-[0.2em]"
                        style={{ fontSize: "clamp(7px, 1vw, 10px)", color: "#C9A87C", marginBottom: "clamp(4px, 1vw, 8px)" }}>
                        Our USP
                      </p>
                      <p className="font-sans text-white leading-relaxed"
                        style={{ fontSize: "clamp(9px, 2vw, 14px)", fontWeight: 300 }}>
                        At <span style={{ color: "#C9A87C", fontWeight: 400 }}>Urban Saajh</span>, clarity, honesty,
                        and detailed planning isn&apos;t extra — it&apos;s our USP. We focus on every parameter that
                        actually matters, so when you hire us, you&apos;re choosing{" "}
                        <span style={{ color: "#C9A87C", fontWeight: 400 }}>smart design, zero confusion, and results that truly last.</span>
                      </p>
                    </div>
                  ) : (
                    <div>
                      {slide.title && (
                        <div className="flex items-center gap-2" style={{ marginBottom: "clamp(5px, 1.2vw, 10px)" }}>
                          <span style={{ width: "clamp(6px, 1vw, 8px)", height: "clamp(6px, 1vw, 8px)", background: "#C9A87C", flexShrink: 0 }} />
                          <h3 className="font-serif text-white/90 italic"
                            style={{ fontSize: "clamp(11px, 2.2vw, 18px)", fontWeight: 300 }}>
                            {slide.title}
                          </h3>
                        </div>
                      )}
                      <p className="font-sans text-white/70 leading-relaxed"
                        style={{ fontSize: "clamp(9px, 2vw, 14px)", fontWeight: 300, paddingLeft: slide.title ? "clamp(12px, 2vw, 18px)" : 0 }}>
                        {slide.body}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile nav */}
              <div className="flex items-center" style={{ gap: "clamp(5px, 1.5vw, 10px)", marginTop: "clamp(10px, 2.5vw, 18px)" }}>
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
                {/* Slide label */}
                <span className="font-sans font-light italic ml-auto"
                  style={{ fontSize: "clamp(8px, 1.8vw, 10px)", color: "rgba(201,168,124,0.6)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {slides[activeSlide].label}
                </span>
              </div>
            </div>
          </div>


          {/* CTA — opens full about page */}
          <Link
            href="/about"
            className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
            style={{
              gap: "clamp(5px, 1.2vw, 10px)",
              background: "#C9A87C",
              color: "#0D3B2E",
              padding: "clamp(7px, 1.5vw, 12px) clamp(12px, 2.5vw, 22px)",
              fontSize: "clamp(7px, 1.2vw, 10px)",
              marginTop: "clamp(10px, 2.5vw, 24px)",
            }}
          >
            <span>Read Our Full Story</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <div className="absolute bottom-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </motion.div>

      </div>
    </section>
  );
}
