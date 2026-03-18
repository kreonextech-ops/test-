"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Discovery & Concept",
    desc: "We begin with a deep dive into your lifestyle, preferences, and the architectural possibilities of your space.",
    image: "/images/about_studio_1773249365789.png",
  },
  {
    num: "02",
    title: "Design Development",
    desc: "Concepts are refined into detailed layouts, material palettes, and 3D visualizations for your approval.",
    image: "/images/service_3d_1773254252336.png",
  },
  {
    num: "03",
    title: "Procurement & Artisan Briefs",
    desc: "Sourcing bespoke furnishings and coordinating with master craftsmen for every custom element.",
    image: "/images/service_execution_1773254236064.png",
  },
  {
    num: "04",
    title: "Execution & Handover",
    desc: "Flawless on-site management leading to a transformational reveal of your entirely new world.",
    image: "/images/service_concept_1773254216517.png",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-36 bg-deep text-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-28 text-center">
          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold font-mono uppercase tracking-[0.3em] text-xs"
            >
              The Journey
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif"
            >
              Our <span className="italic text-gold/60 font-light">Process</span>
            </motion.h2>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative h-[420px] overflow-hidden ${!isEven ? "[direction:ltr]" : ""}`}
                >
                  <Image
                    src={step.image}
                    fill
                    alt={step.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
                  {/* Step number overlay */}
                  <div className="absolute top-6 right-6 text-7xl font-serif text-white/15 leading-none select-none">
                    {step.num}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={!isEven ? "[direction:ltr]" : ""}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-gold font-mono text-xs mb-4 tracking-widest">{step.num} / {String(steps.length).padStart(2, "0")}</div>
                    <h3 className="text-3xl md:text-4xl font-serif mb-6 text-white">{step.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-lg">{step.desc}</p>
                    <div className="mt-8 w-16 h-[1px] bg-gold" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
