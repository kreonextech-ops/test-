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
    <section id="contact" className="py-36 bg-charcoal text-white">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* Left column */}
          <div>
            <div className="overflow-hidden mb-4">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-gold font-mono uppercase tracking-[0.3em] text-xs"
              >
                Start a Conversation
              </motion.p>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl font-serif leading-tight"
              >
                Let's Create Something <span className="italic text-gold/60 font-light">Extraordinary.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8 mt-16 text-sm text-gray-500 font-mono"
            >
              <div>
                <div className="text-gold uppercase tracking-widest text-xs mb-2">Studio</div>
                <p className="text-gray-300 font-light">142 Design Avenue, Suite 300<br />London, UK · EC1A 1BB</p>
              </div>
              <div>
                <div className="text-gold uppercase tracking-widest text-xs mb-2">Contact</div>
                <p className="text-gray-300 font-light">hello@urbansaaj.com<br />+44 20 7946 0958</p>
              </div>
            </motion.div>

            {/* CTA to full contact page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] border-b border-white/40 pb-2 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Full Contact Details & Studio Visit
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-14">
              {fields.map(({ id, label, type }) => (
                <div key={id} className="relative group">
                  <input
                    id={id}
                    type={type}
                    placeholder=" "
                    {...register(id as keyof FormData, { required: true })}
                    className="peer w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors duration-300 text-white"
                  />
                  <label
                    htmlFor={id}
                    className="absolute left-0 top-4 text-gray-400 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gold cursor-text"
                  >
                    {label}
                  </label>
                  {errors[id as keyof FormData] && (
                    <span className="text-red-400 text-[10px] font-mono absolute -bottom-6 left-0">Required</span>
                  )}
                </div>
              ))}

              <div className="relative">
                <select
                  id="inquiry"
                  {...register("inquiry", { required: true })}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold font-mono text-xs uppercase tracking-widest text-gray-400 appearance-none transition-colors duration-300"
                >
                  <option value="">Nature of Inquiry</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="consultation">Consultation</option>
                </select>
                <div className="absolute right-0 top-5 pointer-events-none">
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  id="message"
                  placeholder=" "
                  rows={4}
                  {...register("message", { required: true })}
                  className="peer w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors duration-300 resize-none text-white"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-gray-400 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gold cursor-text"
                >
                  Project Details
                </label>
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-6 px-14 py-5 bg-white text-charcoal font-mono text-xs uppercase tracking-[0.3em] overflow-hidden w-full justify-center"
              >
                <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover:text-deep transition-colors duration-300">Send Inquiry</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
