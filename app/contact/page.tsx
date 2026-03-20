"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const contactDetails = [
  {
    label: "Studio",
    value: "Bhogal Brothers, Bagdogra,\nBihar More, PIN 734014",
  },
  {
    label: "Phone",
    value: "+91 76020 16708",
  },
  {
    label: "Email",
    value: "urbansaajh@gmail.com",
  },
  {
    label: "Hours",
    value: "Mon — Sat\n10:00 AM — 7:00 PM",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="relative min-h-screen" style={{ background: "#FAF5EC" }}>
      <Navbar />

      {/* ── HERO — compact, no image, pure dark green ── */}
      <section className="relative overflow-hidden" style={{ background: "#0D3B2E", paddingTop: "clamp(80px, 14vw, 140px)", paddingBottom: "clamp(28px, 6vw, 64px)" }}>
        {/* Gold bars */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between pointer-events-none">
          <div style={{ width: "clamp(60px, 15vw, 160px)", height: "clamp(5px, 1vw, 8px)", background: "#C9A87C" }} />
          <div style={{ width: "clamp(60px, 15vw, 160px)", height: "clamp(5px, 1vw, 8px)", background: "#C9A87C" }} />
        </div>

        <div style={{ padding: "0 clamp(16px, 5vw, 80px)" }}>
          <p className="uppercase font-sans font-light tracking-[0.3em]"
            style={{ fontSize: "clamp(8px, 1.3vw, 11px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
            Get in Touch
          </p>
          <h1 className="font-serif font-light text-white leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}>
            Let&apos;s start a<br />
            <em className="italic" style={{ color: "#C9A87C" }}>conversation</em>
          </h1>
        </div>
      </section>

      {/* ── MAIN — form left, details right ── */}
      <section className="w-full overflow-hidden">
        <div className="grid grid-cols-2" style={{ minHeight: "clamp(480px, 100vw, 860px)" }}>

          {/* LEFT: cream — form ── */}
          <div className="relative flex flex-col justify-center"
            style={{ background: "#FAF5EC", padding: "clamp(28px, 6vw, 72px) clamp(16px, 4vw, 56px)" }}>
            <div className="absolute top-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="absolute bottom-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            <p className="uppercase font-sans font-light tracking-[0.25em]"
              style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(4px, 1vw, 10px)" }}>
              Send a Message
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)", marginBottom: "clamp(16px, 4vw, 36px)" }}>
              Tell us about<br /><em className="italic">your project</em>
            </h2>

            {submitted ? (
              <div style={{ background: "rgba(201,168,124,0.12)", borderLeft: "2px solid #C9A87C", padding: "clamp(12px, 2.5vw, 24px) clamp(14px, 3vw, 28px)", borderRadius: "0 4px 4px 0" }}>
                <p className="font-serif italic text-[#3D2B1F]"
                  style={{ fontSize: "clamp(12px, 2vw, 20px)", marginBottom: "clamp(4px, 1vw, 8px)", fontWeight: 300 }}>
                  Thank you.
                </p>
                <p className="font-sans font-light"
                  style={{ fontSize: "clamp(9px, 1.4vw, 13px)", color: "#6B4F3A" }}>
                  We&apos;ve received your message and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 2.5vw, 22px)" }}
              >
                {/* Name + Phone row */}
                <div className="grid grid-cols-2" style={{ gap: "clamp(10px, 2vw, 18px)" }}>
                  {[
                    { label: "Your Name", type: "text", placeholder: "Full name", required: true },
                    { label: "Phone", type: "tel", placeholder: "+91 00000 00000", required: false },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block uppercase font-sans font-light tracking-[0.2em]"
                        style={{ fontSize: "clamp(6px, 1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(3px, 0.7vw, 6px)" }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        className="w-full bg-transparent font-sans font-light placeholder-[#C8BBA8]/60 focus:outline-none transition-colors"
                        style={{
                          fontSize: "clamp(9px, 1.4vw, 13px)", color: "#3D2B1F",
                          borderBottom: "1px solid rgba(61,43,31,0.25)",
                          padding: "clamp(4px, 1vw, 10px) 0",
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div>
                  <label className="block uppercase font-sans font-light tracking-[0.2em]"
                    style={{ fontSize: "clamp(6px, 1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(3px, 0.7vw, 6px)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent font-sans font-light placeholder-[#C8BBA8]/60 focus:outline-none transition-colors"
                    style={{
                      fontSize: "clamp(9px, 1.4vw, 13px)", color: "#3D2B1F",
                      borderBottom: "1px solid rgba(61,43,31,0.25)",
                      padding: "clamp(4px, 1vw, 10px) 0",
                    }}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block uppercase font-sans font-light tracking-[0.2em]"
                    style={{ fontSize: "clamp(6px, 1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(3px, 0.7vw, 6px)" }}>
                    Service Required
                  </label>
                  <select
                    className="w-full bg-transparent font-sans font-light focus:outline-none appearance-none"
                    style={{
                      fontSize: "clamp(9px, 1.4vw, 13px)", color: "#3D2B1F",
                      borderBottom: "1px solid rgba(61,43,31,0.25)",
                      padding: "clamp(4px, 1vw, 10px) 0",
                    }}
                  >
                    <option value="">Select a service</option>
                    <option>Interior Design Consultancy</option>
                    <option>Space Planning</option>
                    <option>Residential & Commercial Execution</option>
                    <option>Turnkey Interior Projects</option>
                    <option>Customized Furniture & False Ceiling</option>
                    <option>3D Visualization & Design</option>
                    <option>Modular Kitchen Solutions</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block uppercase font-sans font-light tracking-[0.2em]"
                    style={{ fontSize: "clamp(6px, 1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(3px, 0.7vw, 6px)" }}>
                    Tell Us About Your Space
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your project, budget, and timeline..."
                    className="w-full bg-transparent font-sans font-light placeholder-[#C8BBA8]/60 focus:outline-none resize-none transition-colors"
                    style={{
                      fontSize: "clamp(9px, 1.4vw, 13px)", color: "#3D2B1F",
                      borderBottom: "1px solid rgba(61,43,31,0.25)",
                      padding: "clamp(4px, 1vw, 10px) 0",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group w-full"
                  style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(10px, 2vw, 16px)", fontSize: "clamp(8px, 1.3vw, 11px)" }}
                >
                  <span>Send Enquiry</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: dark green — contact details ── */}
          <div className="relative flex flex-col justify-between overflow-hidden"
            style={{ background: "#0D3B2E", padding: "clamp(28px, 6vw, 72px) clamp(16px, 4vw, 52px)" }}>
            <div className="absolute top-0 left-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
            <div className="absolute bottom-0 right-0"
              style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

            {/* Top: heading + details */}
            <div>
              <p className="uppercase font-sans font-light tracking-[0.25em]"
                style={{ fontSize: "clamp(7px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(6px, 1.5vw, 14px)" }}>
                Reach Us Directly
              </p>
              <h2 className="font-serif font-light text-white leading-tight"
                style={{ fontSize: "clamp(1.1rem, 3.5vw, 2.8rem)", marginBottom: "clamp(16px, 4vw, 40px)" }}>
                Urban Saajh<br /><em className="italic" style={{ color: "#C9A87C" }}>by Tej</em>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 3vw, 28px)" }}>
                {contactDetails.map((item) => (
                  <div key={item.label}
                    style={{ borderLeft: "2px solid rgba(201,168,124,0.3)", paddingLeft: "clamp(10px, 2vw, 18px)" }}>
                    <p className="uppercase font-sans font-light tracking-[0.2em]"
                      style={{ fontSize: "clamp(6px, 1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(3px, 0.7vw, 6px)" }}>
                      {item.label}
                    </p>
                    <p className="font-sans font-light"
                      style={{ fontSize: "clamp(9px, 1.4vw, 13px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: USP reminder */}
            <div style={{ marginTop: "clamp(20px, 5vw, 48px)", background: "rgba(201,168,124,0.1)", borderLeft: "2px solid #C9A87C", padding: "clamp(10px, 2vw, 18px) clamp(12px, 2.5vw, 20px)", borderRadius: "0 4px 4px 0" }}>
              <p className="uppercase font-sans font-light tracking-[0.2em]"
                style={{ fontSize: "clamp(6px, 1vw, 9px)", color: "#C9A87C", marginBottom: "clamp(4px, 1vw, 8px)" }}>
                Before You Reach Out
              </p>
              <p className="font-sans font-light leading-relaxed"
                style={{ fontSize: "clamp(8px, 1.3vw, 12px)", color: "rgba(255,255,255,0.65)" }}>
                We respond to every enquiry within 24 hours. Come with a rough idea of your
                space and budget — the more we know upfront, the better the conversation.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}