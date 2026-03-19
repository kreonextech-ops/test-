export default function Contact() {
  return (
    <section id="contact" className="bg-[#2A1F14]" style={{ padding: "clamp(20px, 5vw, 128px) 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(14px, 4vw, 48px)" }}>
        {/* Always two columns */}
        <div className="grid grid-cols-2" style={{ gap: "clamp(24px, 6vw, 96px)" }}>

          {/* Left */}
          <div>
            <p className="text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-[#6B4F3A] font-sans font-light mb-3 sm:mb-6">
              Let&apos;s Begin
            </p>
            <h2 className="font-serif font-light text-[#FAF7F2] leading-tight"
              style={{ fontSize: "clamp(1.1rem, 4vw, 3.2rem)", marginBottom: "clamp(16px, 4vw, 32px)" }}>
              Start a
              <br />
              <em className="italic">Conversation</em>
            </h2>

            <p className="font-sans font-light text-[#C8BBA8] leading-[1.9] mb-5 sm:mb-10 hidden sm:block"
              style={{ fontSize: "clamp(11px, 1.5vw, 14px)" }}>
              Every project begins with a conversation. Tell us about your space,
              your vision, and how you want to feel when you walk through the door.
            </p>

            <div className="space-y-3 sm:space-y-5">
              {[
                { label: "Email", value: "hello@urbansaajh.com" },
                { label: "Studio", value: "London, United Kingdom" },
                { label: "Tel", value: "+44 20 7946 0958" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2 sm:gap-4">
                  <span className="text-[7px] sm:text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light pt-0.5 flex-shrink-0 w-10 sm:w-16">
                    {item.label}
                  </span>
                  <span className="font-sans font-light text-[#C8BBA8]"
                    style={{ fontSize: "clamp(9px, 1.5vw, 13px)" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="space-y-4 sm:space-y-6">
              {[
                { label: "Your Name", type: "text", placeholder: "Full name" },
                { label: "Email Address", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-[7px] sm:text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-1 sm:mb-2">
                    {field.label}
                  </label>
                  <input type={field.type} placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-[#6B4F3A]/50 text-[#FAF7F2] font-sans font-light py-2 sm:py-3 px-0 placeholder-[#6B4F3A]/60 focus:outline-none focus:border-[#C8BBA8] transition-colors"
                    style={{ fontSize: "clamp(10px, 1.5vw, 13px)" }}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[7px] sm:text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-1 sm:mb-2">
                  Project Type
                </label>
                <select className="w-full bg-transparent border-b border-[#6B4F3A]/50 text-[#C8BBA8] font-sans font-light py-2 sm:py-3 px-0 focus:outline-none focus:border-[#C8BBA8] transition-colors appearance-none"
                  style={{ fontSize: "clamp(10px, 1.5vw, 13px)" }}>
                  <option value="" className="bg-[#2A1F14]">Select a service</option>
                  <option value="full" className="bg-[#2A1F14]">Full Service Design</option>
                  <option value="consult" className="bg-[#2A1F14]">Design Consultation</option>
                  <option value="curation" className="bg-[#2A1F14]">Furniture Curation</option>
                </select>
              </div>

              <div className="hidden sm:block">
                <label className="block text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-2">
                  Tell Us About Your Project
                </label>
                <textarea rows={4} placeholder="Describe your space, budget, and timeline..."
                  className="w-full bg-transparent border-b border-[#6B4F3A]/50 text-[#FAF7F2] font-sans font-light text-[13px] py-3 px-0 placeholder-[#6B4F3A]/60 focus:outline-none focus:border-[#C8BBA8] transition-colors resize-none"
                />
              </div>

              <div className="pt-1 sm:pt-2">
                <button className="inline-flex items-center gap-2 sm:gap-3 border border-[#FAF7F2]/30 text-[#FAF7F2] tracking-[0.2em] uppercase font-sans font-light hover:bg-[#FAF7F2] hover:text-[#2A1F14] transition-all duration-400 group w-full justify-center"
                  style={{ padding: "clamp(8px, 1.8vw, 14px)", fontSize: "clamp(8px, 1.4vw, 10px)" }}>
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
