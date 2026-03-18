"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Spatial Planning",
    tagline: "Form follows function, beautifully.",
    description:
      "Great interior design begins with a masterful understanding of space. Our spatial planning service covers comprehensive architectural analysis, traffic flow optimization, and bespoke zone allocation to create environments that feel both expansive and intimate. We use advanced 3D modelling to help you visualize every square metre before a single piece of furniture is moved.",
    image: "/images/service_concept_1773254216517.png",
    highlights: ["Floor plan & layout design", "Traffic flow analysis", "Lighting master plan", "3D space visualisation"],
  },
  {
    id: "02",
    title: "Interior Design",
    tagline: "Materiality meets mastery.",
    description:
      "The art of interior design lies in the harmonious selection and arrangement of materials, colours, textures, and light. Our designers draw from a curated global network of artisans and manufacturers to create environments that are uniquely yours. From hand-stitched upholstery to stone sourced directly from Italian quarries, every element is chosen with intention.",
    image: "/images/service_3d_1773254252336.png",
    highlights: ["Bespoke furniture design", "Material & palette curation", "Art advisory", "Lighting design"],
  },
  {
    id: "03",
    title: "Project Management",
    tagline: "Seamless from concept to reveal.",
    description:
      "We pride ourselves on flawless execution. Our project management team coordinates every contractor, artisan, and supplier to ensure your project is delivered on time, within budget, and to the highest possible standard. We provide regular progress reports, on-site supervision, and a concierge-level aftercare service once you move in.",
    image: "/images/service_execution_1773254236064.png",
    highlights: ["Full-scope coordination", "Budget management", "On-site supervision", "After-sales support"],
  },
];

export default function ServicesPageContent() {
  return (
    <main className="bg-cream text-charcoal">
      {/* Hero */}
      <section className="relative h-[60vh] bg-deep flex items-end overflow-hidden">
        <Image
          src="/images/hero_interior_1773249348213.png"
          fill
          className="object-cover opacity-40"
          alt="Services"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep to-transparent" />
        <div className="container mx-auto px-6 md:px-16 pb-24 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold font-mono uppercase tracking-[0.3em] text-xs mb-4"
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-serif text-white leading-tight"
          >
            Our <span className="italic text-gold font-light">Services</span>
          </motion.h1>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-16">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-36 ${!isEven ? "" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative h-[560px] overflow-hidden ${!isEven ? "lg:order-last" : ""}`}
                >
                  <Image src={service.image} fill alt={service.title} className="object-cover" />
                  <div className="absolute top-6 left-6 bg-deep/80 backdrop-blur-sm px-4 py-2">
                    <span className="text-gold font-mono text-xs">{service.id}</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-gold font-mono text-xs uppercase tracking-[0.3em] mb-4 italic">{service.tagline}</p>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed font-light text-lg mb-10">{service.description}</p>

                  <div className="space-y-3 mt-8 border-t border-gray-200 pt-8">
                    {service.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-4 font-mono text-xs text-gray-500 uppercase tracking-widest">
                        <div className="w-4 h-[1px] bg-gold" />
                        {h}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-charcoal text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 md:px-16 max-w-2xl"
        >
          <h2 className="text-5xl font-serif mb-6">
            Ready to Begin Your <span className="italic text-gold">Journey?</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm mb-12">Contact us today to schedule a private consultation.</p>
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-6 px-16 py-5 border border-gold/50 text-white font-mono text-xs uppercase tracking-[0.3em] overflow-hidden hover:border-gold transition-colors duration-500"
          >
            <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-deep transition-colors duration-300">Book a Consultation</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
