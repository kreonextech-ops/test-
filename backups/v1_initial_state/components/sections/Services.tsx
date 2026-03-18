"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Spatial Planning",
    tagline: "Form follows function, beautifully.",
    description: "Architectural blueprinting and layout optimization ensuring flow and function.",
    image: "/images/service_concept_1773254216517.png"
  },
  {
    id: "02",
    title: "Interior Design",
    tagline: "Materiality meets mastery.",
    description: "Bespoke furnishings, custom materials, and meticulous aesthetic styling.",
    image: "/images/service_3d_1773254252336.png"
  },
  {
    id: "03",
    title: "Project Management",
    tagline: "Seamless from concept to reveal.",
    description: "End-to-end execution, artisan coordination, and meticulous on-site detailing.",
    image: "/images/service_execution_1773254236064.png"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-36 bg-cream text-charcoal relative overflow-hidden">
      {/* Background grid texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,_#8B6914_1px,_transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between mb-24 items-end gap-10">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif leading-tight"
            >
              Our <br /><span className="italic text-gold font-light">Expertise</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-sm"
          >
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              We cover every phase of your project, seamlessly transitioning from concept to execution with uncompromising quality.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="text-gold/60 font-mono mb-3 text-xs tracking-widest">{service.id}</div>

              <div className="overflow-hidden mb-4">
                <motion.h3
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl font-serif text-charcoal group-hover:text-gold transition-colors duration-500"
                >
                  {service.title}
                </motion.h3>
              </div>

              <p className="text-gold font-mono text-xs italic mb-6">{service.tagline}</p>

              <div className="relative w-full h-[350px] mb-8 overflow-hidden">
                <Image
                  src={service.image}
                  fill
                  alt={service.title}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed font-light mb-8">{service.description}</p>

              <div className="h-[1px] w-full bg-gray-200 relative">
                <div className="h-full bg-gold w-0 group-hover:w-full transition-all duration-700 ease-out absolute top-0 left-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-6 px-16 py-5 border border-gold/60 text-charcoal font-mono text-xs uppercase tracking-[0.3em] overflow-hidden hover:border-gold transition-colors duration-500"
          >
            <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-deep transition-colors duration-300">Explore All Services</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
