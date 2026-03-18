"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const displayFont = { fontFamily: '"Cormorant Garamond", "Cormorant", "Didot", "Times New Roman", serif' };

const services = [
  {
    title: "Interior Design Consultancy",
    description: "We provide expert guidance to turn your ideas into a beautiful, practical reality. We pay attention to every detail, ensuring the final design matches your lifestyle perfectly.",
    image: "/images/services/consultancy.png",
    colSpan: "md:col-span-3",
    layout: "flex-row",
  },
  {
    title: "Space Planning",
    description: "We plan your layout to make the best use of every square foot. Our goal is to ensure easy movement, good flow, and plenty of natural light in your home.",
    image: "/images/services/planning.png",
    colSpan: "md:col-span-2",
    layout: "flex-col",
  },
  {
    title: "Residential & Commercial Execution",
    description: "We bring designs to life with precise construction and skilled craftsmanship. Our team manages the on-site work closely to guarantee high-quality results for homes and offices.",
    image: "/images/services/execution.png",
    colSpan: "md:col-span-5",
    layout: "flex-row-reverse",
  },
  {
    title: "Turnkey Interior Projects",
    description: "We handle everything from start to finish. From the first idea to buying materials and final construction, we manage the entire project so you can relax and enjoy the final result.",
    image: "/images/services/turnkey.png",
    colSpan: "md:col-span-2",
    layout: "flex-col",
  },
  {
    title: "Bespoke Furniture & False Ceilings",
    description: "We create custom wooden furniture and beautifully designed ceilings that fit your home perfectly, adding a unique touch of luxury that lasts for years.",
    image: "/images/services/furniture_ceiling.png",
    colSpan: "md:col-span-3",
    layout: "flex-row",
  },
  {
    title: "3D Visualization & Design",
    description: "We create highly realistic 3D pictures of your design. This allows you to clearly see and understand exactly how your home will look before any construction work begins.",
    image: "/images/services/3d_viz.png",
    colSpan: "md:col-span-3",
    layout: "flex-row-reverse",
  },
  {
    title: "Modular Kitchen Solutions",
    description: "We design modern, highly efficient kitchens. Our modular solutions look beautiful while making cooking and storage much easier for your everyday use.",
    image: "/images/services/modular_kitchen.png",
    colSpan: "md:col-span-2",
    layout: "flex-col",
  },
];

const benefits = [
  "Budget-Friendly Packages",
  "Timely Project Delivery",
  "Personalized Design Solutions",
  "Premium Quality Materials",
  "Hassle-Free Experience",
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#DFD9CD] text-luxury-espresso relative overflow-hidden texture-linen border-t border-luxury-espresso/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 pl-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold font-sans uppercase tracking-[0.55em] text-[10px] font-bold mb-6"
          >
            Our Expertise
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-light tracking-tight leading-tight"
              style={displayFont}
            >
              Curated Services<br />
              <span className="italic text-luxury-gold">Intelligently Designed.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-md text-luxury-espresso/60 font-sans text-sm md:text-base leading-relaxed"
            >
              Synthesizing architecture and interiors into a singular, cohesive narrative. We manage every detail from concept to final reveal with an editor&apos;s eye for elegance.
            </motion.p>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${service.colSpan} rounded-[2.5rem] bg-luxury-ivory border border-luxury-espresso/8 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-700 flex flex-col ${service.layout === 'flex-row' ? 'md:flex-row' : service.layout === 'flex-row-reverse' ? 'md:flex-row-reverse' : 'md:flex-col'} h-auto min-h-[420px] md:min-h-[480px]`}
            >
              {/* Image Pane */}
              <div className={`relative w-full ${service.layout.includes('row') ? 'md:w-1/2 md:h-full' : 'h-64 md:h-[280px]'} overflow-hidden h-64`}>
                <Image
                  src={service.image}
                  fill
                  alt={service.title}
                  className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-luxury-espresso/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Text Pane */}
              <div className={`p-8 md:p-12 flex flex-col justify-center ${service.layout.includes('row') ? 'md:w-1/2' : 'w-full flex-grow'}`}>
                <div className="text-luxury-gold font-sans text-[8px] tracking-[0.4em] font-bold mb-4 uppercase">
                  Service {i < 9 ? `0${i + 1}` : i + 1}
                </div>
                <h3 className="text-2xl md:text-3xl mb-5 font-light leading-tight group-hover:text-luxury-gold transition-colors duration-500" style={displayFont}>
                  {service.title}
                </h3>
                <p className="text-luxury-espresso/70 font-sans font-light text-base md:text-lg leading-[1.8] md:leading-[1.9] tracking-wide">
                  {service.description}
                </p>
                
                {/* Visual Accent */}
                <div className="mt-8 h-px w-0 bg-luxury-gold group-hover:w-12 transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us / Benefits Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#1C1F1A] p-8 md:px-12 md:py-8 border border-white/5 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
        >
          {/* Subtle noise/texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,_#C5A059_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="relative z-10 flex-shrink-0 text-center lg:text-left">
            <h4 className="text-lg md:text-xl font-light text-luxury-ivory tracking-wide" style={displayFont}>Why Choose Urban Saajh by Tej?</h4>
          </div>
          
          <div className="relative z-10 flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-[3px] h-[3px] rounded-full bg-luxury-gold/50" />
                <span className="text-luxury-ivory/70 font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium transition-colors hover:text-luxury-ivory">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
