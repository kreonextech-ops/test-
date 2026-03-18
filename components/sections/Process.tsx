"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Planning Together",
    desc: "We talk about your ideas, lifestyle, and budget to create the perfect plan for your home.",
    image: "/images/project_office_1773249422556.png",
  },
  {
    num: "02",
    title: "Designing the Look",
    desc: "We show you beautiful 3D pictures of your rooms so you can see exactly how everything will look before we start.",
    image: "/images/service_3d_1773254252336.png",
  },
  {
    num: "03",
    title: "Quality Building",
    desc: "Our expert builders and carpenters create your furniture and interiors using the highest quality materials.",
    image: "/images/service_execution_1773254236064.png",
  },
  {
    num: "04",
    title: "The Handover",
    desc: "We check every small detail and hand over the keys to your beautiful, ready-to-move-in new home.",
    image: "/images/project_penthouse_1773249456323.png",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="process" className="py-20 md:py-24 bg-luxury-sand text-luxury-espresso relative overflow-hidden texture-linen">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="mb-32 text-center">
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-luxury-gold font-sans uppercase tracking-[0.5em] text-[10px] font-bold"
            >
              The Orchestration
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-serif leading-none tracking-tight"
            >
              Our <span className="italic text-luxury-gold font-light">Process</span>
            </motion.h2>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:auto-rows-[450px]">
          
          {/* Step 1: Planning Together (Spans Left 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-12 lg:col-span-5 rounded-[2.5rem] bg-luxury-espresso text-luxury-ivory p-10 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-50">
              <Image src={steps[0].image} fill alt="" className="object-cover group-hover:scale-105 transition-transform duration-[5s]" />
              <div className="absolute inset-0 bg-gradient-to-b from-luxury-espresso/80 via-luxury-espresso/40 to-luxury-espresso" />
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <span className="text-luxury-gold font-sans text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">{steps[0].num} / 04</span>
              <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{steps[0].title}</h3>
              <p className="text-luxury-ivory/70 font-medium leading-[1.7] text-base md:text-lg max-w-sm">{steps[0].desc}</p>
            </div>
          </motion.div>

          {/* Step 2: Designing the Look (Spans Right 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-12 lg:col-span-7 rounded-[2.5rem] bg-luxury-espresso text-luxury-ivory p-10 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-40">
              <Image src={steps[1].image} fill alt="" className="object-cover group-hover:scale-105 transition-transform duration-[5s]" />
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-espresso via-luxury-espresso/80 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-full">
              <span className="text-luxury-gold font-sans text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">{steps[1].num} / 04</span>
              <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{steps[1].title}</h3>
              <p className="text-luxury-ivory/60 font-medium leading-[1.7] text-base md:text-lg max-w-sm">{steps[1].desc}</p>
            </div>
          </motion.div>

          {/* Step 3: Quality Building (Spans Left 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-12 lg:col-span-7 rounded-[2.5rem] bg-luxury-espresso text-luxury-ivory p-10 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-40">
              <Image src={steps[2].image} fill alt="" className="object-cover group-hover:scale-105 transition-transform duration-[5s]" />
              <div className="absolute inset-0 bg-gradient-to-l from-luxury-espresso via-luxury-espresso/80 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col justify-center h-full items-end text-right ml-auto">
              <span className="text-luxury-gold font-sans text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">{steps[2].num} / 04</span>
              <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{steps[2].title}</h3>
              <p className="text-luxury-ivory/60 font-medium leading-[1.7] text-base md:text-lg max-w-sm">{steps[2].desc}</p>
            </div>
          </motion.div>

          {/* Step 4: The Handover (Spans Right 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-12 lg:col-span-5 rounded-[2.5rem] bg-luxury-espresso text-luxury-ivory p-10 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-50">
              <Image src={steps[3].image} fill alt="" className="object-cover group-hover:scale-105 transition-transform duration-[5s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-espresso/90 via-luxury-espresso/60 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="text-luxury-gold font-sans text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">{steps[3].num} / 04</span>
                <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{steps[3].title}</h3>
                <p className="text-luxury-ivory/60 font-medium leading-[1.7] text-base md:text-lg">{steps[3].desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                 <div className="w-8 h-[1px] bg-luxury-gold" />
                 <span className="text-luxury-gold font-sans text-[8px] uppercase tracking-widest font-bold">Your journey complete</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
