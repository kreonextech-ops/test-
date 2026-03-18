"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Image from "next/image";

type FormData = { name: string; email: string; phone: string; inquiry: string; budget: string; message: string; };

const officeInfo = [
  { label: "Studio Address", value: "142 Design Avenue, Suite 300\nLondon, UK · EC1A 1BB" },
  { label: "Email Us", value: "hello@urbansaaj.com" },
  { label: "Call Us", value: "+44 20 7946 0958" },
  { label: "Studio Hours", value: "Mon–Fri · 9:00am – 6:30pm\nSat · By appointment only" },
];

export default function ContactPageContent() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => { console.log(data); alert("Thank you! We'll be in touch within 48 hours."); };

  return (
    <main className="bg-cream text-charcoal">
      {/* Hero */}
      <section className="relative h-[50vh] bg-deep flex items-end overflow-hidden">
        <Image src="/images/hero_interior_1773249348213.png" fill className="object-cover opacity-30" alt="Contact" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep to-transparent" />
        <div className="container mx-auto px-6 md:px-16 pb-20 relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gold font-mono uppercase tracking-[0.3em] text-xs mb-4">Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-6xl md:text-8xl font-serif text-white leading-tight">
            Let's <span className="italic text-gold font-light">Connect.</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-24">
            {/* Info column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl font-serif mb-12">
                Begin Your <br /><span className="italic text-gray-400 font-light">Design Journey</span>
              </h2>

              <div className="space-y-10">
                {officeInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                  >
                    <div className="text-gold font-mono text-xs uppercase tracking-widest mb-2">{item.label}</div>
                    <p className="text-gray-600 font-light whitespace-pre-line">{item.value}</p>
                    <div className="mt-4 w-8 h-[1px] bg-gray-200" />
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-14"
              >
                <div className="text-gold font-mono text-xs uppercase tracking-widest mb-6">Follow Our Work</div>
                <div className="flex gap-8">
                  {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
                    <a key={s} href="#" className="font-mono text-xs text-gray-400 uppercase tracking-widest hover:text-gold transition-colors duration-300 border-b border-transparent hover:border-gold pb-1">
                      {s}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                  {[{ id: "name", label: "Full Name", type: "text" }, { id: "email", label: "Email Address", type: "email" }].map(({ id, label, type }) => (
                    <div key={id} className="relative">
                      <input id={id} type={type} placeholder=" " {...register(id as keyof FormData, { required: true })} className="peer w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-gold transition-colors" />
                      <label htmlFor={id} className="absolute left-0 top-4 text-gray-400 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gold cursor-text">{label}</label>
                      {errors[id as keyof FormData] && <span className="text-red-400 text-[10px] font-mono absolute -bottom-6 left-0">Required</span>}
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <input id="phone" type="tel" placeholder=" " {...register("phone")} className="peer w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-gold transition-colors" />
                  <label htmlFor="phone" className="absolute left-0 top-4 text-gray-400 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gold cursor-text">Phone Number (optional)</label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                  {[
                    { id: "inquiry", label: "Type of Project", options: ["Residential Design", "Commercial Design", "Consultation", "Other"] },
                    { id: "budget", label: "Budget Range", options: ["₹50L – ₹1Cr", "₹1Cr – ₹3Cr", "₹3Cr – ₹5Cr", "₹5Cr+"] },
                  ].map(({ id, label, options }) => (
                    <div key={id} className="relative">
                      <select id={id} {...register(id as keyof FormData, { required: true })} className="w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-gold font-mono text-xs uppercase tracking-widest text-gray-500 appearance-none transition-colors">
                        <option value="">{label}</option>
                        {options.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <div className="absolute right-0 top-5 pointer-events-none"><svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" /></svg></div>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <textarea id="message" placeholder=" " rows={5} {...register("message", { required: true })} className="peer w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-gold transition-colors resize-none" />
                  <label htmlFor="message" className="absolute left-0 top-4 text-gray-400 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gold cursor-text">Tell Us About Your Project</label>
                </div>

                <button type="submit" className="group relative inline-flex items-center gap-6 px-16 py-5 bg-charcoal text-white font-mono text-xs uppercase tracking-[0.3em] overflow-hidden w-full justify-center">
                  <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 group-hover:text-deep transition-colors duration-300">Send Your Inquiry</span>
                  <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>

                <p className="text-gray-400 font-mono text-xs text-center">We respond to all inquiries within 48 hours.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
