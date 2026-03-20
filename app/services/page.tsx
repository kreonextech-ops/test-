"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    slug: "interior-design-consultancy",
    icon: "01",
    title: "Interior Design Consultancy",
    subtitle: "Expert Guidance, Zero Confusion",
    description: "Before a single nail is hammered, we sit down and talk. We assess your space, understand your lifestyle, and deliver a clear design roadmap — with honest budget guidance built in.",
    features: ["Site assessment & space audit", "Lifestyle brief development", "Concept direction & mood boarding", "Budget planning & cost guidance", "Vendor & contractor recommendations"],
    image: "/images/europa/Living 1.jpg",
  },
  {
    id: 2,
    slug: "space-planning",
    icon: "02",
    title: "Space Planning",
    subtitle: "Every Square Foot Accounted For",
    description: "Great design starts with a great layout. We map movement flow, furniture placement, and functional zones so your space feels larger, smarter, and more liveable — before anything is purchased.",
    features: ["Floor plan analysis & measurement", "Furniture layout & zoning", "Traffic flow & movement mapping", "Storage integration planning", "Scale drawings & AutoCAD plans"],
    image: "/images/europa/Dining 1.jpg",
  },
  {
    id: 3,
    slug: "residential-commercial-execution",
    icon: "03",
    title: "Residential & Commercial Execution",
    subtitle: "Designed and Delivered End to End",
    description: "From approved design to final handover — we coordinate contractors, manage timelines, and ensure every detail is executed exactly as planned. One point of contact. Complete accountability.",
    features: ["End-to-end project management", "Contractor coordination & supervision", "Timeline & milestone management", "Quality checks at every stage", "Final snagging & handover"],
    image: "/images/europa/Master Bedroom 1.jpg",
  },
  {
    id: 4,
    slug: "turnkey-interior-projects",
    icon: "04",
    title: "Turnkey Interior Projects",
    subtitle: "Hand Us the Keys. We Handle Everything.",
    description: "Design, procurement, civil work, carpentry, electrical, painting, soft furnishings — we manage every single element. No chasing vendors, no coordinating contractors. We own the outcome.",
    features: ["Full design development", "Material & product procurement", "Civil, carpentry & MEP coordination", "Painting, flooring & finishing", "Soft furnishing, styling & handover"],
    image: "/images/europa/Lounge Room 3.jpg",
  },
  {
    id: 5,
    slug: "customized-furniture-false-ceiling",
    icon: "05",
    title: "Customized Furniture & False Ceiling",
    subtitle: "Built for Your Space, Not the Showroom",
    description: "Every wardrobe, bed, storage unit, and cabinet built to fit your exact dimensions. Our false ceiling work adds architectural quality — from layered gypsum details to cove lighting integration.",
    features: ["Custom wardrobe & storage design", "Beds, units & built-in furniture", "Gypsum & POP false ceiling design", "Cove lighting integration", "Material & finish specification"],
    image: "/images/europa/P1.jpg",
  },
  {
    id: 6,
    slug: "3d-visualization-design",
    icon: "06",
    title: "3D Visualization & Design",
    subtitle: "See It Before You Build It",
    description: "Photorealistic renders of every room — accurate materials, lighting conditions, furniture scale, and spatial relationships. You approve every detail with complete confidence before work begins.",
    features: ["Photorealistic room renders", "Material & finish visualisation", "Multiple camera angles per room", "Revision rounds until approved", "Animated 3D walkthroughs (optional)"],
    image: "/images/europa/Living 2.jpg",
  },
  {
    id: 7,
    slug: "modular-kitchen-solutions",
    icon: "07",
    title: "Modular Kitchen Solutions",
    subtitle: "Designed Around How You Actually Cook",
    description: "Ergonomic, elegant, and built to last. We design modular kitchens around your cooking habits, family size, and storage requirements — then specify the right system, hardware, countertop, and finish.",
    features: ["Kitchen layout & workflow planning", "Modular unit design & specification", "Countertop, shutter & hardware selection", "Appliance integration planning", "Professional fitting & installation"],
    image: "/images/europa/Kitchen 1.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <main className="relative min-h-screen" style={{ background: "#FAF5EC" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#0D3B2E", paddingTop: "clamp(80px, 14vw, 140px)", paddingBottom: "clamp(24px, 5vw, 56px)" }}>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.3 }} style={{ originX: 0, width: "clamp(60px, 15vw, 160px)", height: "clamp(5px, 1vw, 8px)", background: "#C9A87C" }} />
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.3 }} style={{ originX: 1, width: "clamp(60px, 15vw, 160px)", height: "clamp(5px, 1vw, 8px)", background: "#C9A87C" }} />
        </div>
        <div style={{ padding: "0 clamp(16px, 5vw, 80px)" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase font-sans font-light tracking-[0.3em]"
            style={{ fontSize: "clamp(10px, 1.4vw, 13px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 12px)" }}>
            Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}>
            What We<br />
            <em className="italic" style={{ color: "#C9A87C" }}>Offer</em>
          </motion.h1>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="w-full">
        <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr]" style={{ minHeight: "clamp(600px, 110vw, 1000px)" }}>

          <div className="relative flex flex-col md:h-full z-20"
            style={{ 
              background: "#0D3B2E", 
              padding: "clamp(16px, 4vw, 56px) clamp(14px, 3.5vw, 48px)",
              position: "sticky",
              top: "0",
            }}>
            <div className="hidden md:block absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="hidden md:block absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(9px, 1.3vw, 12px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
              Our Services
            </p>
            <div className="hidden md:block" style={{ height: "1px", background: "rgba(201,168,124,0.3)", marginBottom: "clamp(10px, 2.5vw, 20px)" }} />

            {/* Mobile Scrollable Tabs */}
            <div className="flex md:hidden overflow-x-auto no-scrollbar gap-4 pb-4 -mx-4 px-4">
              {services.map((svc, i) => (
                <button
                  key={svc.id}
                  onClick={() => {
                    setActiveIndex(i);
                    // Scroll to detail on mobile
                    document.getElementById("service-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="whitespace-nowrap flex-shrink-0 font-sans font-light transition-all duration-300"
                  style={{
                    fontSize: "12px",
                    color: i === activeIndex ? "#C9A87C" : "rgba(255,255,255,0.4)",
                    borderBottom: `1px solid ${i === activeIndex ? "#C9A87C" : "transparent"}`,
                    paddingBottom: "4px",
                    tracking: "0.1em"
                  }}
                >
                  {svc.title}
                </button>
              ))}
            </div>

            {/* Desktop Vertical List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex flex-col gap-2 flex-1"
            >
              {services.map((svc, i) => (
                <motion.button
                  key={svc.id}
                  variants={itemVariants}
                  onClick={() => setActiveIndex(i)}
                  className="text-left w-full flex items-center transition-all duration-200 group"
                  style={{
                    gap: "clamp(8px, 1.8vw, 16px)",
                    padding: "clamp(8px, 1.5vw, 14px) clamp(10px, 2vw, 18px)",
                    background: i === activeIndex ? "rgba(201,168,124,0.12)" : "transparent",
                    borderLeft: `2px solid ${i === activeIndex ? "#C9A87C" : "transparent"}`,
                    borderRadius: "0 4px 4px 0",
                    cursor: "pointer",
                  }}
                >
                  <span className="font-serif font-light flex-shrink-0"
                    style={{ fontSize: "clamp(12px, 1.8vw, 16px)", color: i === activeIndex ? "#C9A87C" : "rgba(201,168,124,0.3)" }}>
                    {svc.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p className="font-sans font-light truncate"
                      style={{ fontSize: "clamp(12px, 1.6vw, 16px)", color: i === activeIndex ? "#fff" : "rgba(255,255,255,0.42)", transition: "color 0.2s" }}>
                      {svc.title}
                    </p>
                    <p className="font-sans font-light truncate"
                      style={{ fontSize: "clamp(9px, 1.1vw, 12px)", color: i === activeIndex ? "rgba(201,168,124,0.7)" : "rgba(255,255,255,0.22)", transition: "color 0.2s" }}>
                      {svc.subtitle}
                    </p>
                  </div>
                  {i === activeIndex && (
                    <span style={{ color: "#C9A87C", fontSize: "clamp(12px, 1.6vw, 16px)", flexShrink: 0 }}>→</span>
                  )}
                </motion.button>
              ))}
            </motion.div>

            <div className="hidden md:block" style={{ height: "1px", background: "rgba(201,168,124,0.3)", margin: "clamp(10px, 2.5vw, 20px) 0" }} />

            {/* Counter + CTA (Desktop only) */}
            <div className="hidden md:flex items-center justify-between">
              <span className="font-sans font-light tabular-nums"
                style={{ fontSize: "clamp(10px, 1.4vw, 13px)", color: "#C9A87C" }}>
                <span style={{ color: "#fff" }}>{String(activeIndex + 1).padStart(2, "0")}</span>
                {" / "}{String(services.length).padStart(2, "0")}
              </span>
              <Link href="/portfolio"
                className="inline-flex items-center font-sans font-light uppercase tracking-[0.18em] transition-all duration-300 group"
                style={{ gap: "clamp(5px, 1.2vw, 8px)", background: "#C9A87C", color: "#0D3B2E", padding: "clamp(8px, 1.6vw, 14px) clamp(14px, 3vw, 24px)", fontSize: "clamp(8px, 1.2vw, 11px)" }}>
                <span>View Portfolio</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Active Detail */}
          <div id="service-detail" className="relative flex flex-col"
            style={{ 
              background: "#FAF5EC", 
              padding: "clamp(32px, 8vw, 56px) clamp(20px, 4vw, 52px) clamp(40px, 8vw, 56px) clamp(16px, 4vw, 36px)" 
            }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ minHeight: "clamp(200px, 42vw, 500px)", marginBottom: "clamp(16px, 3.5vw, 28px)" }}>
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover object-center"
                    sizes="60vw"
                  />
                  {/* Overlay with ghost number */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(13,59,46,0.88) 0%, rgba(13,59,46,0.3) 40%, transparent 70%)" }} />
                  <div className="absolute inset-x-0 bottom-0"
                    style={{ padding: "clamp(32px, 7vw, 64px) clamp(18px, 4vw, 32px) clamp(16px, 3vw, 24px)" }}>
                    <span className="font-serif font-light block"
                      style={{ fontSize: "clamp(36px, 8vw, 80px)", color: "rgba(255,255,255,0.15)", lineHeight: 1, marginBottom: "clamp(2px, 0.5vw, 5px)" }}>
                      {active.icon}
                    </span>
                    <p className="uppercase font-sans font-light tracking-[0.2em]"
                      style={{ fontSize: "clamp(10px, 1.3vw, 12px)", color: "#C9A87C", marginBottom: "clamp(4px, 0.8vw, 8px)" }}>
                      {active.subtitle}
                    </p>
                    <h3 className="font-serif font-light text-white leading-tight"
                      style={{ fontSize: "clamp(18px, 3vw, 32px)" }}>
                      {active.title}
                    </h3>
                  </div>
                </div>

                {/* Description + features (Mobile Swipe / Desktop Grid) */}
                <div className="flex flex-col md:grid md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 36px)" }}>
                  <div className="max-w-prose">
                    <p className="uppercase font-sans font-light tracking-[0.22em]"
                      style={{ fontSize: "clamp(9px, 1.2vw, 11px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.2vw, 12px)" }}>
                      Overview
                    </p>
                    <p className="font-sans font-light leading-[1.85] text-[#6B4F3A]"
                      style={{ fontSize: "clamp(14px, 1.6vw, 16px)" }}>
                      {active.description}
                    </p>
                  </div>

                  {/* Horizontal Scroll for features on mobile? Or just a clean list. The user mentioned "description should be swiped". 
                      I'll put the features in a horizontal swipeable section on mobile to save space. */}
                  <div className="relative">
                    <p className="uppercase font-sans font-light tracking-[0.22em]"
                      style={{ fontSize: "clamp(9px, 1.2vw, 11px)", color: "#C9A87C", marginBottom: "clamp(10px, 1.2vw, 14px)" }}>
                      What&apos;s Included
                    </p>
                    <div className="flex md:flex-col overflow-x-auto no-scrollbar gap-4 md:gap-3 px-1 -mx-1"
                      style={{ paddingBottom: "10px" }}>
                      {active.features.map((f, idx) => (
                          <motion.div
                            key={f}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start flex-shrink-0 w-[70vw] md:w-auto"
                            style={{ 
                              gap: "10px", 
                              background: "rgba(201,168,124,0.06)", 
                              padding: "12px", 
                              borderLeft: "2px solid #C9A87C",
                              borderRadius: "0 4px 4px 0"
                            }}
                          >
                            <span className="font-sans font-light text-[#3D2B1F]"
                              style={{ fontSize: "13px", lineHeight: 1.5 }}>
                              {f}
                            </span>
                          </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── USP STRIP ── */}
      <section className="relative overflow-hidden" style={{ background: "#0D3B2E", padding: "clamp(36px, 7vw, 84px) clamp(16px, 5vw, 80px)" }}>
        <div className="absolute top-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { num: "01", title: "Transparent Pricing", body: "We talk budget upfront. No surprises at handover. You know the number before the first wall is touched." },
            { num: "02", title: "Single Point of Contact", body: "One number. One email. One person who owns every decision from design to delivery." },
            { num: "03", title: "Real-Life Ready", body: "We design for how you actually live — not for a showroom or a photoshoot." },
          ].map((u, i) => (
            <motion.div
              key={u.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{ borderLeft: "2px solid #C9A87C", padding: "clamp(12px, 2.8vw, 24px) clamp(14px, 3vw, 28px)" }}
            >
              <span className="font-serif font-light block"
                style={{ fontSize: "clamp(24px, 6vw, 56px)", color: "rgba(201,168,124,0.2)", lineHeight: 1, marginBottom: "clamp(6px, 1.5vw, 12px)" }}>
                {u.num}
              </span>
              <div className="flex items-center" style={{ gap: "clamp(6px, 1.2vw, 10px)", marginBottom: "clamp(6px, 1.2vw, 10px)" }}>
                <span style={{ width: "clamp(6px, 1vw, 8px)", height: "clamp(6px, 1vw, 8px)", background: "#C9A87C", flexShrink: 0 }} />
                <h4 className="font-serif italic text-white"
                  style={{ fontSize: "clamp(14px, 2vw, 20px)", fontWeight: 300 }}>
                  {u.title}
                </h4>
              </div>
              <p className="font-sans font-light leading-relaxed"
                style={{ fontSize: "clamp(12px, 1.5vw, 14px)", color: "rgba(255,255,255,0.55)", paddingLeft: "clamp(14px, 2.2vw, 20px)" }}>
                {u.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2" style={{ minHeight: "clamp(180px, 30vw, 300px)" }}>
          <div className="relative flex flex-col justify-center"
            style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 56px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <h3 className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(1.2rem, 3.5vw, 2.6rem)", marginBottom: "clamp(14px, 3vw, 28px)" }}>
              See the work<br /><em className="italic" style={{ color: "#C9A87C" }}>behind the services.</em>
            </h3>
            <Link href="/portfolio"
              className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
              style={{ gap: "clamp(6px, 1.5vw, 10px)", border: "1px solid rgba(61,43,31,0.4)", color: "#3D2B1F", padding: "clamp(10px, 1.8vw, 16px) clamp(16px, 3vw, 32px)", fontSize: "clamp(9px, 1.3vw, 12px)" }}>
              <span>View Portfolio</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
          </div>

          <div className="relative flex flex-col justify-center"
            style={{ background: "#0D3B2E", padding: "clamp(24px, 5vw, 56px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <h3 className="font-serif font-light text-white leading-tight"
              style={{ fontSize: "clamp(1.2rem, 3.5vw, 2.6rem)", marginBottom: "clamp(14px, 3vw, 28px)" }}>
              Ready to begin<br /><em className="italic" style={{ color: "#C9A87C" }}>your project?</em>
            </h3>
            <Link href="/#contact"
              className="inline-flex items-center self-start font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
              style={{ gap: "clamp(6px, 1.5vw, 10px)", background: "#C9A87C", color: "#0D3B2E", padding: "clamp(10px, 1.8vw, 16px) clamp(16px, 3vw, 32px)", fontSize: "clamp(9px, 1.3vw, 12px)" }}>
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
