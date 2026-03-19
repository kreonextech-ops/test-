export default function Contact() {
  return (
    <section id="contact" className="bg-[#2A1F14] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: contact text */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#6B4F3A] font-sans font-light mb-6">
              Let&apos;s Begin
            </p>
            <h2
              className="font-serif font-light text-[#FAF7F2] leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              Start a
              <br />
              <em className="italic">Conversation</em>
            </h2>
            <p className="font-sans font-light text-[#C8BBA8] text-[14px] leading-[1.9] mb-10 max-w-sm">
              Every project begins with a conversation. Tell us about your space,
              your vision, and how you want to feel when you walk through the
              door.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { label: "Email", value: "hello@urbansaajh.com" },
                { label: "Studio", value: "London, United Kingdom" },
                { label: "Enquiries", value: "+44 (0) 20 7946 0958" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light w-16 pt-0.5 flex-shrink-0">
                    {item.label}
                  </span>
                  <span className="font-sans font-light text-[#C8BBA8] text-[13px]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-[#6B4F3A]/50 text-[#FAF7F2] font-sans font-light text-[13px] py-3 px-0 placeholder-[#6B4F3A]/60 focus:outline-none focus:border-[#C8BBA8] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-[#6B4F3A]/50 text-[#FAF7F2] font-sans font-light text-[13px] py-3 px-0 placeholder-[#6B4F3A]/60 focus:outline-none focus:border-[#C8BBA8] transition-colors"
                />
              </div>

              {/* Project type */}
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-2">
                  Project Type
                </label>
                <select className="w-full bg-transparent border-b border-[#6B4F3A]/50 text-[#C8BBA8] font-sans font-light text-[13px] py-3 px-0 focus:outline-none focus:border-[#C8BBA8] transition-colors appearance-none">
                  <option value="" className="bg-[#2A1F14]">Select a service</option>
                  <option value="full" className="bg-[#2A1F14]">Full Service Design</option>
                  <option value="consult" className="bg-[#2A1F14]">Design Consultation</option>
                  <option value="curation" className="bg-[#2A1F14]">Furniture Curation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your space, budget, and timeline..."
                  className="w-full bg-transparent border-b border-[#6B4F3A]/50 text-[#FAF7F2] font-sans font-light text-[13px] py-3 px-0 placeholder-[#6B4F3A]/60 focus:outline-none focus:border-[#C8BBA8] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button className="inline-flex items-center gap-3 border border-[#FAF7F2]/30 text-[#FAF7F2] px-8 py-3.5 text-[10px] tracking-[0.2em] uppercase font-sans font-light hover:bg-[#FAF7F2] hover:text-[#2A1F14] transition-all duration-400 group w-full justify-center md:w-auto md:justify-start">
                  <span>Send Enquiry</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
