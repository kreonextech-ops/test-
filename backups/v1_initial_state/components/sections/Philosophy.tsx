"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const principles = [
  {
    num: "01",
    title: "Clarity First",
    content:
      'We talk budget upfront, because Pinterest rooms and luxury finishes aren\'t "low-cost". If you want that look, the investment has to match. I don\'t sugarcoat; I guide.',
  },
  {
    num: "02",
    title: "Space is Real",
    content:
      "You can't expect a spacious 3BHK feel inside 1000 sq ft. Interiors are built on real dimensions, movement flow, and comfort. If the space is tight, something has to give — and I'll tell you that honestly.",
  },
  {
    num: "03",
    title: "Design Pays For Itself",
    content:
      'Your contractor or carpenter can "manage", but a designer brings planning, proportion, detailing, and long-term value. Skipping design saves money now, but costs more later.',
  },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="py-24 md:py-40 bg-charcoal text-white overflow-hidden relative"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#D4AF7A_1px,_transparent_1px)] bg-[size:36px_36px]" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold font-mono uppercase tracking-[0.3em] text-xs"
            >
              How We Work
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight"
            >
              I keep things{" "}
              <span className="italic text-gold font-light">simple.</span>
            </motion.h2>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Principles left column */}
          <div className="lg:col-span-3 space-y-0">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group border-b border-white/10 py-10 flex gap-8 items-start hover:border-gold/40 transition-colors duration-500"
              >
                <div className="text-gold/40 font-mono text-xs tracking-widest pt-1 shrink-0">{p.num}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:text-gold transition-colors duration-500">{p.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">{p.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Sign-off line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="pt-12"
            >
              <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed mb-4">
                &ldquo;This is how I work &mdash; transparent, practical, and focused on what actually works in real homes.&rdquo;
              </p>
              <p className="text-gray-500 font-light">
                If you want real guidance before you build or design, you&apos;re in the right place.
              </p>
            </motion.div>
          </div>

          {/* Portrait right column */}
          <div className="relative lg:col-span-2 lg:sticky lg:top-32">
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t border-r border-gold/40 z-10" />
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b border-l border-gold/40 z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[420px] sm:h-[520px] overflow-hidden"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-[-5%] w-[110%] h-[110%]">
                <Image
                  src="/images/founder_tej_portrait.png"
                  fill
                  alt="Tej — Founder of Urban Saaj"
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              </motion.div>
              <div className="absolute bottom-6 left-6 z-10">
                <div className="text-gold font-mono text-xs uppercase tracking-widest mb-1">Founder &amp; Principal Designer</div>
                <div className="text-white text-2xl font-serif">Tej</div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* USP conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-28 border border-gold/20 p-8 md:p-14 bg-white/[0.02]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-14 items-start">
            <div className="text-gold font-mono text-xs uppercase tracking-widest md:pt-1 whitespace-nowrap">Urban Saajh USP</div>
            <div>
              <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed mb-6">
                At Urban Saajh, clarity, honesty, and detailed planning isn&apos;t extra &mdash; it&apos;s our USP.
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                We focus on every parameter that actually matters, so when you hire us, you&apos;re choosing{" "}
                <span className="text-white">smart design</span>,{" "}
                <span className="text-white">zero confusion</span>, and{" "}
                <span className="text-white">results that truly last</span>.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
