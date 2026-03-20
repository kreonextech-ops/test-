"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Testimonials() {
  const [activeTestimony, setActiveTestimony] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Urban Saajh didn't just design a room; they designed a feeling. The clarity they brought to our budget and the honesty about what would work in our space made all the difference.",
      author: "Priya Sharma",
      project: "Residential Client, Siliguri"
    },
    {
      id: 2,
      quote: "The 3D visualizations were spot on. What we saw in the renders is exactly what we got. Smart design, zero confusion — truly their USP.",
      author: "Vikram Mehra",
      project: "Commercial Project, Bagdogra"
    }
  ];

  const [fading, setFading] = useState(false);
  const [dir, setDir] = useState<"left" | "right">("left");
  const slideRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const goTo = (idx: number, d: "left" | "right") => {
    if (fading) return;
    setDir(d);
    setFading(true);
    setTimeout(() => {
      setActiveTestimony((idx + testimonials.length) % testimonials.length);
      setFading(false);
    }, 250);
  };

  const next = () => goTo(activeTestimony + 1, "left");
  const prev = () => goTo(activeTestimony - 1, "right");

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  };

  const slideStyle: React.CSSProperties = {
    opacity: fading ? 0 : 1,
    transform: fading ? `translateX(${dir === "left" ? "-12px" : "12px"})` : "translateX(0)",
    transition: "opacity 0.25s ease, transform 0.25s ease",
  };

  return (
    <section id="testimonials" className="w-full overflow-hidden" style={{ background: "#FAF5EC" }}>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(250px, 35vw, 480px)" }}>
        
        {/* ── LEFT: Video blocks ── */}
        <div 
          className="relative flex flex-col justify-center bg-[#FAF5EC]"
          style={{ padding: "clamp(20px, 3vw, 48px) clamp(16px, 3vw, 48px)" }}
        >
          {/* Gold Accents */}
          <div className="absolute top-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div className="absolute bottom-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                style={{
                  borderRadius: "clamp(40px, 10vw, 120px) 0 clamp(40px, 10vw, 120px) 0",
                  aspectRatio: "3/4",
                  background: "#0D3B2E"
                }}
              >
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
                
                {/* Video text hint */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] tracking-widest uppercase text-[#C9A87C] font-light">
                    Client Story {i}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Written Testimony ── */}
        <div 
          className="relative flex flex-col justify-center text-white"
          style={{ background: "#0D3B2E", padding: "clamp(20px, 4vw, 56px) clamp(16px, 3.5vw, 48px)" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute top-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div className="absolute bottom-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full justify-center"
          >
            <p className="uppercase font-sans font-light tracking-[0.25em] text-[#C9A87C]"
              style={{ fontSize: "clamp(7px, 1.1vw, 10px)", marginBottom: "clamp(12px, 2vw, 20px)" }}>
              Testimonials
            </p>
            
            <h2 className="font-serif font-light leading-tight mb-6" 
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}>
              Kind Words from<br />
              <em className="italic">Our Clients</em>
            </h2>

            <div className="relative overflow-hidden" style={{ minHeight: "clamp(140px, 20vw, 200px)" }}>
              <div style={slideStyle}>
                <p className="font-serif italic leading-relaxed text-[#FAF5EC]"
                  style={{ fontSize: "clamp(12px, 1.6vw, 17px)", marginBottom: "clamp(10px, 1.5vw, 20px)" }}>
                  &ldquo;{testimonials[activeTestimony].quote}&rdquo;
                </p>
                <div>
                  <p className="font-sans font-medium text-[#C9A87C]" style={{ fontSize: "clamp(11px, 1.3vw, 14px)" }}>
                    {testimonials[activeTestimony].author}
                  </p>
                  <p className="font-sans font-light text-[#FAF5EC]/60" style={{ fontSize: "clamp(9px, 1.1vw, 12px)" }}>
                    {testimonials[activeTestimony].project}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > activeTestimony ? "left" : "right")}
                  className="group relative h-6 w-6 flex items-center justify-center"
                >
                  <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === activeTestimony ? "w-6 bg-[#C9A87C]" : "w-1.5 bg-[#C9A87C]/30"}`} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
