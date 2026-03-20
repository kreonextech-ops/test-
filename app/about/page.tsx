"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    num: "01",
    title: "Intentionality",
    body: "Every choice we make is purposeful. We design for clarity and ease, ensuring every element has a reason to exist — nothing placed by default.",
  },
  {
    num: "02",
    title: "Craftsmanship",
    body: "We celebrate the hand of the maker. From custom joinery to hand-selected textiles, quality is woven into everything we deliver.",
  },
  {
    num: "03",
    title: "Honesty",
    body: "We talk budget upfront. We tell you when something won't work. Real guidance over polished promises — always.",
  },
];

const principles = [
  {
    title: "Space matters.",
    body: "You can't expect a 3BHK feel inside 1000 sq ft. Interiors are built on real dimensions, movement flow, and comfort. If the space is tight, something has to give — and we'll tell you that honestly.",
  },
  {
    title: "Designer vs. Contractor.",
    body: "Your contractor can \"manage\", but a designer brings planning, proportion, detailing, and long-term value. Skipping design saves money now, but costs more later.",
  },
  {
    title: "Built for living.",
    body: "Not a hotel. A home — for the way you actually live. Real meals, real routines, real people. Comfort and beauty that hold up every single day.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#FAF5EC" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 55vw, 560px)" }}>
        <Image
          src="/images/europa/Living 1.jpg"
          alt="Urban Saajh — Our Story"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: "brightness(0.5)" }}
        />
        {/* Neutral dark gradient — heavier at bottom where text sits */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)" }} />

        {/* Gold bottom bar only */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(60px, 15vw, 160px)", height: "clamp(5px, 1vw, 8px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(60px, 15vw, 160px)", height: "clamp(5px, 1vw, 8px)", background: "#C9A87C" }} />
        </div>

        {/* Content pinned to bottom */}
        <div className="absolute inset-0 flex flex-col justify-end"
          style={{ padding: "0 clamp(16px, 5vw, 80px) clamp(28px, 5vw, 60px)" }}>
          <p className="uppercase font-sans font-light tracking-[0.3em]"
            style={{ fontSize: "clamp(8px, 1.3vw, 11px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.2vw, 12px)" }}>
            Our Story
          </p>
          <h1 className="font-serif font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(1.8rem, 6vw, 5.5rem)" }}>
            Design with<br />
            <em className="italic" style={{ color: "#C9A87C" }}>Clarity &amp; Purpose</em>
          </h1>
        </div>
      </section>

      {/* ── ESSENCE — two col matching about section style ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2" style={{ minHeight: "clamp(360px, 80vw, 760px)" }}>

          {/* Left: cream with arch image */}
          <div className="relative flex flex-col"
            style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(14px, 3vw, 40px) clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <div className="relative flex-1 overflow-hidden"
              style={{
                borderTopRightRadius: "clamp(40px, 12vw, 140px)",
                borderTopLeftRadius: "clamp(40px, 12vw, 140px)",
                minHeight: "clamp(180px, 45vw, 520px)",
                marginBottom: "clamp(6px, 1.5vw, 12px)",
              }}>
              <Image
                src="/images/europa/Lounge Room 6.jpg"
                alt="Urban Saajh interior"
                fill className="object-cover object-center"
                sizes="50vw"
              />
            </div>

            {/* Two small images */}
            <div className="grid grid-cols-2" style={{ gap: "clamp(5px, 1.2vw, 10px)" }}>
              <div className="relative overflow-hidden" style={{ height: "clamp(50px, 13vw, 140px)" }}>
                <Image src="/images/europa/Living 1.jpg" alt="Detail 1"
                  fill className="object-cover object-center" sizes="25vw" />
              </div>
              <div className="relative overflow-hidden" style={{ height: "clamp(50px, 13vw, 140px)" }}>
                <Image src="/images/europa/Dining 1.jpg" alt="Detail 2"
                  fill className="object-cover object-center" sizes="25vw" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </div>

          {/* Right: dark green with text */}
          <div className="relative flex flex-col justify-center overflow-hidden"
            style={{ background: "#0D3B2E", padding: "clamp(28px, 5vw, 72px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
              The Essence of Urban Saajh
            </p>
            <h2 className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "clamp(1.2rem, 3.8vw, 3.2rem)", marginBottom: "clamp(10px, 2.5vw, 24px)" }}>
              Not a showroom.<br /><em className="italic" style={{ color: "#C9A87C" }}>A home.</em>
            </h2>
            <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(10px, 2.5vw, 24px)" }} />

            <p className="font-sans font-light leading-[1.9]"
              style={{ fontSize: "clamp(9px, 1.4vw, 14px)", color: "rgba(255,255,255,0.72)", marginBottom: "clamp(10px, 2.5vw, 22px)" }}>
              What started as a passion for redefining living spaces has evolved into a studio that prioritises authenticity and timelessness over fleeting trends. At Urban Saajh, we believe every corner of your home should reflect a piece of your journey.
            </p>
            <p className="font-sans font-light leading-[1.9]"
              style={{ fontSize: "clamp(9px, 1.4vw, 14px)", color: "rgba(255,255,255,0.72)", marginBottom: "clamp(14px, 3vw, 32px)" }}>
              Our approach is deeply personal. We don&apos;t just design rooms — we curate experiences. By blending natural materials, artisanal craftsmanship, and modern functionality, we create environments that breathe and evolve with you.
            </p>

            {/* USP block */}
            <div style={{ background: "rgba(201,168,124,0.12)", borderLeft: "2px solid #C9A87C", padding: "clamp(10px, 2vw, 18px) clamp(12px, 2.5vw, 20px)", borderRadius: "0 4px 4px 0" }}>
              <p className="uppercase font-sans font-light tracking-[0.2em]"
                style={{ fontSize: "clamp(7px, 1.1vw, 10px)", color: "#C9A87C", marginBottom: "clamp(4px, 1vw, 8px)" }}>
                Our USP
              </p>
              <p className="font-sans font-light leading-relaxed"
                style={{ fontSize: "clamp(9px, 1.4vw, 13px)", color: "#fff" }}>
                Clarity, honesty, and detailed planning isn&apos;t extra at{" "}
                <span style={{ color: "#C9A87C", fontWeight: 400 }}>Urban Saajh</span> — it&apos;s our foundation.
                We focus on every parameter that matters, so when you hire us, you&apos;re choosing{" "}
                <span style={{ color: "#C9A87C", fontWeight: 400 }}>smart design, zero confusion, and results that truly last.</span>
              </p>
            </div>

            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES — right image, left list ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2" style={{ minHeight: "clamp(360px, 80vw, 700px)" }}>

          {/* Left: dark green list */}
          <div className="relative flex flex-col justify-center overflow-hidden"
            style={{ background: "#0D3B2E", padding: "clamp(28px, 5vw, 72px) clamp(16px, 4vw, 52px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
              How We Think
            </p>
            <h2 className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "clamp(1.2rem, 3.8vw, 3rem)", marginBottom: "clamp(12px, 3vw, 28px)" }}>
              Our Principles
            </h2>
            <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(12px, 3vw, 28px)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 1.5vw, 14px)", marginBottom: "clamp(14px, 3vw, 32px)" }}>
              {principles.map((p) => (
                <div key={p.title}
                  style={{ background: "rgba(201,168,124,0.08)", borderLeft: "2px solid #C9A87C", padding: "clamp(8px, 1.8vw, 14px) clamp(10px, 2vw, 18px)", borderRadius: "0 3px 3px 0" }}>
                  <div className="flex items-center" style={{ gap: "clamp(5px, 1vw, 8px)", marginBottom: "clamp(3px, 0.8vw, 6px)" }}>
                    <span style={{ width: "clamp(5px, 0.9vw, 7px)", height: "clamp(5px, 0.9vw, 7px)", background: "#C9A87C", flexShrink: 0 }} />
                    <h3 className="font-serif italic text-white"
                      style={{ fontSize: "clamp(10px, 1.8vw, 16px)", fontWeight: 300 }}>
                      {p.title}
                    </h3>
                  </div>
                  <p className="font-sans font-light leading-relaxed"
                    style={{ fontSize: "clamp(8px, 1.3vw, 12px)", color: "rgba(255,255,255,0.6)", paddingLeft: "clamp(10px, 2vw, 15px)" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            <Link href="#contact"
              className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
              style={{ gap: "clamp(6px, 1.5vw, 10px)", background: "#C9A87C", color: "#0D3B2E", padding: "clamp(8px, 1.8vw, 14px) clamp(14px, 3vw, 26px)", fontSize: "clamp(7px, 1.2vw, 10px)" }}>
              <span>Book a Consultation</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <div className="absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </div>

          {/* Right: cream image */}
          <div className="relative flex flex-col"
            style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px) clamp(24px, 5vw, 64px) clamp(14px, 3vw, 40px)" }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <div className="relative flex-1 overflow-hidden"
              style={{ borderRadius: "clamp(40px, 12vw, 140px) clamp(40px, 12vw, 140px) 0 0", minHeight: "clamp(200px, 50vw, 580px)" }}>
              <Image
                src="/images/europa/Master Bedroom 1.jpg"
                alt="Urban Saajh principles"
                fill className="object-cover object-center"
                sizes="50vw"
              />
            </div>

            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </div>
        </div>
      </section>

      {/* ── VALUES — full width dark green ── */}
      <section className="relative overflow-hidden" style={{ background: "#0D3B2E", padding: "clamp(28px, 6vw, 80px) clamp(16px, 4vw, 56px)" }}>
        <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>

        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: "clamp(20px, 5vw, 52px)", textAlign: "center" }}>
            <p className="uppercase font-sans font-light tracking-[0.3em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 12px)" }}>
              Our Values
            </p>
            <h2 className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}>
              The Pillars of Our Practice
            </h2>
          </div>

          <div className="grid grid-cols-3" style={{ gap: "clamp(8px, 2.5vw, 28px)" }}>
            {values.map((v) => (
              <div key={v.num}
                style={{ border: "1px solid rgba(201,168,124,0.2)", padding: "clamp(14px, 3vw, 36px) clamp(12px, 2.5vw, 28px)", borderRadius: "0" }}>
                <div className="font-serif italic"
                  style={{ fontSize: "clamp(20px, 5vw, 48px)", color: "rgba(201,168,124,0.25)", lineHeight: 1, marginBottom: "clamp(8px, 2vw, 18px)" }}>
                  {v.num}
                </div>
                <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(8px, 2vw, 16px)" }} />
                <div className="flex items-center" style={{ gap: "clamp(5px, 1vw, 8px)", marginBottom: "clamp(5px, 1.2vw, 10px)" }}>
                  <span style={{ width: "6px", height: "6px", background: "#C9A87C", flexShrink: 0 }} />
                  <h3 className="font-serif italic text-white"
                    style={{ fontSize: "clamp(11px, 2vw, 20px)", fontWeight: 300 }}>
                    {v.title}
                  </h3>
                </div>
                <p className="font-sans font-light leading-relaxed"
                  style={{ fontSize: "clamp(8px, 1.3vw, 13px)", color: "rgba(255,255,255,0.58)", paddingLeft: "clamp(11px, 2vw, 14px)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2" style={{ minHeight: "clamp(200px, 40vw, 380px)" }}>

          {/* Left: cream */}
          <div className="relative flex flex-col justify-center"
            style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
              Ready to Begin?
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)", marginBottom: "clamp(10px, 2.5vw, 24px)" }}>
              Interested in how<br />
              <em className="italic" style={{ color: "#C9A87C" }}>we work?</em>
            </h2>
            <Link href="/services"
              className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
              style={{ gap: "clamp(6px, 1.5vw, 10px)", border: "1px solid rgba(61,43,31,0.4)", color: "#3D2B1F", padding: "clamp(8px, 1.8vw, 14px) clamp(14px, 3vw, 26px)", fontSize: "clamp(7px, 1.2vw, 10px)" }}>
              <span>Explore Our Services</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </div>

          {/* Right: dark green */}
          <div className="relative flex flex-col justify-center"
            style={{ background: "#0D3B2E", padding: "clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
              Start a Conversation
            </p>
            <h2 className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)", marginBottom: "clamp(10px, 2.5vw, 24px)" }}>
              Every great home<br />
              <em className="italic">begins with a brief.</em>
            </h2>
            <Link href="/#contact"
              className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
              style={{ gap: "clamp(6px, 1.5vw, 10px)", background: "#C9A87C", color: "#0D3B2E", padding: "clamp(8px, 1.8vw, 14px) clamp(14px, 3vw, 26px)", fontSize: "clamp(7px, 1.2vw, 10px)" }}>
              <span>Book a Consultation</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <div className="absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}