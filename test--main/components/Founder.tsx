"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      { threshold: 0.4 } // Tweak threshold as needed for when it should start
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
      <div className="grid grid-cols-2" style={{ minHeight: "clamp(580px, 110vw, 960px)" }}>

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
          <div
            className="relative flex-1 overflow-hidden"
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
                className="flex items-center justify-center rounded-full bg-black/20 border border-white/30 text-[#FAF5EC] backdrop-blur-md transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100"
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
          </div>

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
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 1.3vw, 11px)", marginBottom: "clamp(12px, 3vw, 24px)" }}>
            {[
              {
                title: "Modern & Considered",
                body: "Clean lines, purposeful choices, nothing unnecessary. Every element earns its place.",
              },
              {
                title: "Minimal Luxury",
                body: "Luxury isn't about excess — it's restraint done beautifully. Quality over quantity, always.",
              },
              {
                title: "Built for Living",
                body: "Spaces that work as hard as you do. Comfortable, functional, and genuinely yours.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(201,168,124,0.08)",
                  borderLeft: "2px solid #C9A87C",
                  padding: "clamp(7px, 1.6vw, 13px) clamp(10px, 2vw, 16px)",
                  borderRadius: "0 3px 3px 0",
                }}
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
              </div>
            ))}
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
