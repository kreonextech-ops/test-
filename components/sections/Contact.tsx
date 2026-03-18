"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  inquiry: string;
  message: string;
};

const fields = [
  { id: "name", label: "Your Name", type: "text" },
  { id: "email", label: "Email Address", type: "email" },
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => { console.log(data); alert("Inquiry sent!"); };

  return (
    <section id="contact" className="py-20 md:py-24 bg-luxury-ivory text-luxury-espresso relative overflow-hidden texture-linen">
      {/* Background grain texture handled globally */}

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

          {/* Left column */}
          <div>
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-luxury-gold font-sans uppercase tracking-[0.5em] text-[10px] font-bold"
              >
                Start a Conversation
              </motion.p>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-8xl font-serif leading-none tracking-tight"
              >
                Let&apos;s Create Something <span className="italic text-luxury-gold font-light">Timeless.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 mt-20"
            >
              <div>
                <div className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] mb-4 font-bold">Studio</div>
                <p className="text-luxury-espresso/70 font-sans text-xl font-light leading-relaxed">BHOGAL BROTHERS, BAGDOGRA,<br />BIHAR MORE, PIN CODE- 734014</p>
              </div>
              <div>
                <div className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] mb-4 font-bold">Inquiries</div>
                <p className="text-luxury-espresso/70 font-sans text-xl font-light leading-relaxed underline underline-offset-8 decoration-luxury-gold/30">info@urbansaajh.com<br />+91-7602016708</p>
              </div>
            </motion.div>

            {/* CTA to full contact page */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-20"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-8 font-sans text-[10px] uppercase tracking-[0.4em] border-b border-luxury-espresso/10 pb-4 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-700 font-bold"
              >
                Visit Our Studio
                <svg className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-3 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-10 md:p-16 shadow-2xl border border-luxury-espresso/5 shadow-luxury-espresso/[0.02] rounded-[3rem]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
              {fields.map(({ id, label, type }) => (
                <div key={id} className="relative group">
                  <input
                    id={id}
                    type={type}
                    placeholder=" "
                    {...register(id as keyof FormData, { required: true })}
                    className="peer w-full bg-transparent border-b border-luxury-espresso/10 py-5 focus:outline-none focus:border-luxury-gold transition-colors duration-700 text-luxury-espresso text-lg font-sans placeholder-shown:border-luxury-espresso/5"
                  />
                  <label
                    htmlFor={id}
                    className="absolute left-0 top-5 text-luxury-espresso/40 font-sans text-[10px] uppercase tracking-[0.4em] transition-all duration-700 font-bold peer-focus:-top-6 peer-focus:text-luxury-gold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-luxury-gold cursor-text"
                  >
                    {label}
                  </label>
                  {errors[id as keyof FormData] && (
                    <span className="text-red-400 text-[10px] font-sans absolute -bottom-6 left-0 uppercase tracking-widest font-bold">Required</span>
                  )}
                </div>
              ))}

              <div className="relative">
                <select
                  id="inquiry"
                  {...register("inquiry", { required: true })}
                  className="w-full bg-transparent border-b border-luxury-espresso/10 py-5 focus:outline-none focus:border-luxury-gold font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-espresso/40 appearance-none transition-colors duration-700"
                >
                  <option value="">Type of Inquiry</option>
                  <option value="residential">Home Interior Design</option>
                  <option value="commercial">Office Workspace Design</option>
                  <option value="consultation">General Consultation</option>
                </select>
                <div className="absolute right-0 top-6 pointer-events-none text-luxury-gold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  placeholder=" "
                  rows={4}
                  {...register("message", { required: true })}
                  className="peer w-full bg-transparent border-b border-luxury-espresso/10 py-5 focus:outline-none focus:border-luxury-gold transition-colors duration-700 resize-none text-luxury-espresso text-lg font-sans placeholder-shown:border-luxury-espresso/5"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-5 text-luxury-espresso/40 font-sans text-[10px] uppercase tracking-[0.4em] transition-all duration-700 font-bold peer-focus:-top-6 peer-focus:text-luxury-gold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-luxury-gold cursor-text"
                >
                  Tell us about your project...
                </label>
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-8 px-16 py-7 bg-luxury-espresso text-luxury-ivory font-sans text-[10px] uppercase tracking-[0.5em] overflow-hidden w-full justify-center transition-all duration-700 font-bold"
              >
                <span className="absolute inset-0 bg-luxury-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <span className="relative z-10 group-hover:text-luxury-espresso transition-colors duration-500">Send Message</span>
                <svg className="relative z-10 w-5 h-5 transition-transform duration-700 group-hover:translate-x-3 group-hover:text-luxury-espresso" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
