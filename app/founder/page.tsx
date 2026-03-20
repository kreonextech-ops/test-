"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Origins",
    body: "Trained in traditional arts but driven by modern functionality, Tejinder bridges the gap between old-world craftsmanship and new-age living.",
  },
  {
    title: "Vision",
    body: "Urban Saajh was born from a desire to provide transparency and clarity in an industry often clouded by confusion and delays.",
  },
  {
    title: "Future",
    body: "As we grow, our focus remains singular: to keep pushing the boundaries of what luxury interior can mean in contemporary India.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function FounderPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#FAF5EC" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(480px, 100vw, 900px)", gridTemplateColumns: "3fr 2fr" }}>

          {/* Left: Tej's portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden"
          >
            <Image
              src="/image.jpeg"
              alt="Tejinder Singh Bhogal — Founder, Urban Saajh"
              fill priority
              className="object-cover object-top"
              sizes="60vw"
              style={{ filter: "brightness(0.88)" }}
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,59,46,0.92) 0%, rgba(13,59,46,0.35) 40%, transparent 65%)" }} />

            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute"
              style={{ top: "clamp(16px, 4vw, 40px)", right: "clamp(16px, 4vw, 40px)", width: "clamp(36px, 8vw, 64px)", height: "clamp(36px, 8vw, 64px)", background: "#C9A87C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="font-serif italic"
                style={{ fontSize: "clamp(12px, 2.5vw, 22px)", color: "#0D3B2E", fontWeight: 300 }}>
                TB
              </span>
            </motion.div>

            <div className="absolute inset-x-0 bottom-0"
              style={{ padding: "clamp(36px, 8vw, 72px) clamp(16px, 4vw, 48px) clamp(16px, 4vw, 32px)" }}>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="uppercase font-sans font-light tracking-[0.25em]"
                style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(4px, 1vw, 8px)" }}>
                Founder &amp; Principal Designer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="font-serif font-light text-white leading-tight"
                style={{ fontSize: "clamp(1.4rem, 4vw, 3.6rem)" }}>
                Tejinder Singh<br />
                <em className="italic" style={{ color: "#C9A87C" }}>Bhogal</em>
              </motion.h1>
            </div>
          </motion.div>

          {/* Right: dark green intro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col justify-center overflow-hidden"
            style={{ background: "#0D3B2E", padding: "clamp(28px, 6vw, 72px) clamp(16px, 4vw, 52px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
              The Soul of Urban Saajh
            </p>
            <h2 className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)", marginBottom: "clamp(10px, 2.5vw, 24px)" }}>
              Design is a<br /><em className="italic" style={{ color: "#C9A87C" }}>Silent Language.</em>
            </h2>

            <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(10px, 2.5vw, 24px)" }} />

            <div className="space-y-6 mb-12">
              <p className="font-sans font-light leading-[1.9]"
                style={{ fontSize: "clamp(9px, 1.4vw, 13px)", color: "rgba(255,255,255,0.72)" }}>
                For over a decade, I have been obsessed with the idea of &ldquo;Saajh&rdquo; — a union. A union between
                functionality and aesthetics, between the space and the soul that inhabits it. At Urban Saajh,
                we don&apos;t just build interiors; we curate legacies.
              </p>
              <p className="font-sans font-light leading-[1.9]"
                style={{ fontSize: "clamp(9px, 1.4vw, 13px)", color: "rgba(255,255,255,0.72)" }}>
                Every project I undertake is a personal commitment. I involve myself in the minute
                details — from the grain of the wood to the temperature of the light. Because it&apos;s
                the details that turn a project into a home.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ background: "rgba(201,168,124,0.1)", borderLeft: "2px solid #C9A87C", padding: "clamp(8px, 1.8vw, 16px) clamp(10px, 2vw, 18px)", borderRadius: "0 4px 4px 0" }}>
              <p className="font-serif italic"
                style={{ fontSize: "clamp(10px, 1.6vw, 15px)", color: "rgba(255,255,255,0.85)", fontWeight: 300, lineHeight: 1.6 }}>
                &ldquo;A home should breathe — tell the story of where you&apos;ve been and where you&apos;re going.&rdquo;
              </p>
              <div className="flex items-center" style={{ gap: "clamp(6px, 1.5vw, 12px)", marginTop: "clamp(6px, 1.2vw, 10px)" }}>
                <span style={{ width: "clamp(16px, 4vw, 32px)", height: "1px", background: "#C9A87C", flexShrink: 0 }} />
                <p className="font-sans font-light uppercase tracking-[0.15em]"
                  style={{ fontSize: "clamp(6px, 1vw, 8px)", color: "#C9A87C" }}>
                  Tejinder Singh Bhogal
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(360px, 80vw, 760px)" }}>

          {/* Left: dark green content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center overflow-hidden"
            style={{ background: "#0D3B2E", padding: "clamp(28px, 6vw, 72px) clamp(16px, 4vw, 52px)" }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
              The Design Philosophy
            </p>
            <h2 className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)", marginBottom: "clamp(14px, 3vw, 32px)" }}>
              How Tejinder<br /><em className="italic">thinks</em>
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: "clamp(6px, 1.5vw, 12px)", marginBottom: "clamp(16px, 4vw, 36px)" }}
            >
              {[
                { title: "Modern & Considered", body: "Clean lines, purposeful choices, nothing unnecessary. Every element earns its place before it enters the room." },
                { title: "Minimal Luxury", body: "Luxury isn't about excess — it's restraint done beautifully. Quality over quantity, always. Less, but better." },
                { title: "Built for Living", body: "Not a hotel. A home — for the way you actually live. Real meals, real routines, real people. Every day." },
                { title: "Honest by Default", body: "Budget, space, and expectations — all addressed upfront. No sugarcoating. Just real guidance that protects you." },
              ].map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeInUp}
                  style={{ background: "rgba(201,168,124,0.08)", borderLeft: "2px solid #C9A87C", padding: "clamp(7px, 1.6vw, 14px) clamp(10px, 2vw, 18px)", borderRadius: "0 3px 3px 0" }}>
                  <div className="flex items-center" style={{ gap: "clamp(5px, 1vw, 8px)", marginBottom: "clamp(2px, 0.6vw, 5px)" }}>
                    <span style={{ width: "clamp(5px, 0.9vw, 7px)", height: "clamp(5px, 0.9vw, 7px)", background: "#C9A87C", flexShrink: 0 }} />
                    <h3 className="font-serif italic text-white"
                      style={{ fontSize: "clamp(10px, 1.8vw, 15px)", fontWeight: 300 }}>
                      {p.title}
                    </h3>
                  </div>
                  <p className="font-sans font-light leading-relaxed"
                    style={{ fontSize: "clamp(8px, 1.2vw, 11px)", color: "rgba(255,255,255,0.58)", paddingLeft: "clamp(10px, 1.9vw, 15px)" }}>
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <Link href="/#contact"
              className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
              style={{ gap: "clamp(6px, 1.5vw, 10px)", background: "#C9A87C", color: "#0D3B2E", padding: "clamp(8px, 1.8vw, 14px) clamp(14px, 3vw, 26px)", fontSize: "clamp(7px, 1.2vw, 10px)" }}>
              <span>Work with Tejinder</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Right: cream with arch image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col"
            style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px) clamp(24px, 5vw, 64px) clamp(14px, 3vw, 40px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <div className="relative flex-1 overflow-hidden"
              style={{ borderRadius: "clamp(40px, 12vw, 140px) clamp(40px, 12vw, 140px) 0 0", minHeight: "clamp(200px, 50vw, 580px)" }}>
              <Image
                src="/images/europa/Lounge Room 6.jpg"
                alt="Tejinder's design work"
                fill className="object-cover object-center"
                sizes="40vw"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(13,59,46,0.65) 0%, transparent 50%)" }} />
              <div className="absolute bottom-0 inset-x-0"
                style={{ padding: "clamp(16px, 4vw, 32px) clamp(14px, 3vw, 24px)" }}>
                <p className="uppercase font-sans font-light tracking-[0.2em]"
                  style={{ fontSize: "clamp(6px, 1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(3px, 0.6vw, 5px)" }}>
                  On Inspiration
                </p>
                <p className="font-serif italic text-white"
                  style={{ fontSize: "clamp(10px, 1.8vw, 16px)", fontWeight: 300, lineHeight: 1.5 }}>
                  &ldquo;I find inspiration in quiet moments — the way morning light hits a wall.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDING QUOTE ── */}
      <section className="relative overflow-hidden" style={{ background: "#0D3B2E", padding: "clamp(36px, 7vw, 96px) clamp(16px, 5vw, 80px)" }}>
        <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center" style={{ marginBottom: "clamp(12px, 3vw, 28px)" }}>
            <svg width="clamp(24px,5vw,40px)" height="clamp(24px,5vw,40px)" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.4 }}>
              <path d="M10 25H5L10 15V10H20V20C20 25.5228 15.5228 30 10 30V25ZM30 25H25L30 15V10H40V20C40 25.5228 35.5228 30 30 30V25Z" fill="#C9A87C" />
            </svg>
          </div>
          <h3 className="font-serif italic text-white leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 3.2vw, 2.4rem)", fontWeight: 300, marginBottom: "clamp(16px, 3.5vw, 32px)" }}>
            &ldquo;Good design is obvious. Great design is transparent. It&apos;s about how the space makes you feel when you&apos;re not even thinking about it.&rdquo;
          </h3>
          <div style={{ width: "clamp(32px, 6vw, 56px)", height: "1px", background: "#C9A87C", margin: "0 auto clamp(6px, 1.5vw, 12px)" }} />
          <p className="uppercase font-sans font-light tracking-[0.25em]"
            style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C" }}>
            Founding Philosophy — Urban Saajh
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="relative overflow-hidden" style={{ background: "#FAF5EC", padding: "clamp(28px, 6vw, 80px) clamp(16px, 4vw, 56px)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between" style={{ marginBottom: "clamp(20px, 4vw, 48px)" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="uppercase font-sans font-light tracking-[0.25em]"
                style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(4px, 1vw, 10px)" }}>
                The Journey
              </p>
              <h2 className="font-serif font-light text-[#3D2B1F] leading-tight"
                style={{ fontSize: "clamp(1.2rem, 3.8vw, 3rem)" }}>
                Origins, Vision &amp; Future
              </h2>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "clamp(8px, 2.5vw, 24px)" }}
          >
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                style={{ background: "#0D3B2E", padding: "clamp(16px, 3.5vw, 36px) clamp(14px, 3vw, 28px)" }}>
                <div className="font-serif italic"
                  style={{ fontSize: "clamp(28px, 7vw, 56px)", color: "rgba(201,168,124,0.2)", lineHeight: 1, marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(8px, 2vw, 16px)" }} />
                <div className="flex items-center" style={{ gap: "clamp(5px, 1vw, 8px)", marginBottom: "clamp(5px, 1.2vw, 10px)" }}>
                  <span style={{ width: "6px", height: "6px", background: "#C9A87C", flexShrink: 0 }} />
                  <h3 className="font-serif italic text-white"
                    style={{ fontSize: "clamp(11px, 2vw, 20px)", fontWeight: 300 }}>
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans font-light leading-relaxed"
                  style={{ fontSize: "clamp(8px, 1.3vw, 13px)", color: "rgba(255,255,255,0.58)", paddingLeft: "clamp(11px, 2vw, 14px)" }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "clamp(180px, 35vw, 320px)" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center"
            style={{ background: "#0D3B2E", padding: "clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <div className="grid grid-cols-2" style={{ gap: "clamp(10px, 3vw, 32px)" }}>
              {[
                { num: "10+", label: "Years of Experience" },
                { num: "150+", label: "Projects Completed" },
                { num: "100%", label: "Turnkey Accountability" },
                { num: "1", label: "Point of Contact — Always" },
              ].map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  style={{ borderLeft: "2px solid #C9A87C", paddingLeft: "clamp(8px, 2vw, 18px)" }}>
                  <span className="font-serif font-light block"
                    style={{ fontSize: "clamp(1.2rem, 4vw, 3rem)", color: "#C9A87C", lineHeight: 1, marginBottom: "clamp(2px, 0.5vw, 5px)" }}>
                    {s.num}
                  </span>
                  <span className="font-sans font-light"
                    style={{ fontSize: "clamp(7px, 1.2vw, 11px)", color: "rgba(255,255,255,0.55)" }}>
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center"
            style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <h3 className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(1rem, 3vw, 2.2rem)", marginBottom: "clamp(10px, 2.5vw, 22px)" }}>
              Ready to build your<br /><em className="italic" style={{ color: "#C9A87C" }}>dream space?</em>
            </h3>
            <div className="flex items-center" style={{ gap: "clamp(8px, 2vw, 16px)" }}>
              <Link href="/#contact"
                className="inline-flex items-center font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
                style={{ gap: "clamp(5px, 1.2vw, 8px)", background: "#C9A87C", color: "#0D3B2E", padding: "clamp(7px, 1.5vw, 12px) clamp(12px, 2.5vw, 22px)", fontSize: "clamp(7px, 1.2vw, 10px)" }}>
                <span>Book Consultation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
                style={{ gap: "clamp(5px, 1.2vw, 8px)", border: "1px solid rgba(61,43,31,0.4)", color: "#3D2B1F", padding: "clamp(7px, 1.5vw, 12px) clamp(12px, 2.5vw, 22px)", fontSize: "clamp(7px, 1.2vw, 10px)" }}>
                <span>View Portfolio</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
