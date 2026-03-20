import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a130b] border-t border-[#3D2B1F]/50" style={{ padding: "clamp(16px, 4vw, 80px) 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(14px, 4vw, 48px)" }}>
        {/* Always 4 columns */}
        <div className="grid grid-cols-4" style={{ gap: "clamp(8px, 2.5vw, 40px)", marginBottom: "clamp(40px, 8vw, 64px)" }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-3 sm:mb-5">
              <svg width="10" height="13" viewBox="0 0 14 18" fill="none">
                <path d="M7 1C7 1 1 5 1 10C1 13.3137 3.68629 16 7 16C10.3137 16 13 13.3137 13 10C13 5 7 1 7 1Z"
                  stroke="#C8BBA8" strokeWidth="0.8" fill="none" />
                <line x1="7" y1="16" x2="7" y2="17" stroke="#C8BBA8" strokeWidth="0.8" />
              </svg>
              <span className="text-[8px] sm:text-[11px] tracking-[0.2em] uppercase font-sans font-light text-[#C8BBA8]">
                Urban Saajh
              </span>
            </div>
            <p className="font-sans font-light text-[#6B4F3A] leading-relaxed hidden sm:block"
              style={{ fontSize: "clamp(7px, 1.2vw, 12px)", marginBottom: "8px" }}>
              Artfully curated, naturally inspired interior design studio.
            </p>
            <div className="hidden sm:block space-y-1">
              <p className="font-sans font-light text-[#6B4F3A]/80 uppercase tracking-wider" style={{ fontSize: "clamp(6px, 1vw, 10px)" }}>
                +91-7602016708
              </p>
              <p className="font-sans font-light text-[#6B4F3A]/80 leading-tight" style={{ fontSize: "clamp(6px, 1vw, 10px)" }}>
                Bhogal Brothers, Bagdogra, Bihar More, 734014
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[7px] sm:text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-3 sm:mb-5">
              Services
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {["Full Service", "Consultation", "Curation", "Management"].map((item) => (
                <li key={item}>
                  <Link href="#"
                    className="font-sans font-light text-[#C8BBA8]/70 hover:text-[#C8BBA8] transition-colors"
                    style={{ fontSize: "clamp(7px, 1.2vw, 12px)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <p className="text-[7px] sm:text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-3 sm:mb-5">
              Studio
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {["Portfolio", "About", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`}
                    className="font-sans font-light text-[#C8BBA8]/70 hover:text-[#C8BBA8] transition-colors"
                    style={{ fontSize: "clamp(7px, 1.2vw, 12px)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[7px] sm:text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-3 sm:mb-5">
              Follow
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {["Instagram", "Pinterest", "LinkedIn", "Houzz"].map((item) => (
                <li key={item}>
                  <Link href="#"
                    className="font-sans font-light text-[#C8BBA8]/70 hover:text-[#C8BBA8] transition-colors"
                    style={{ fontSize: "clamp(7px, 1.2vw, 12px)" }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-[#3D2B1F]/50 pt-5 sm:pt-8">
          <p className="text-[#6B4F3A] font-sans font-light"
            style={{ fontSize: "clamp(7px, 1.2vw, 12px)" }}>
            © 2026 Urban Saajh by Tej.
          </p>
          <div className="flex items-center gap-3 sm:gap-6">
            {["Privacy", "Terms"].map((item) => (
              <Link key={item} href="#"
                className="text-[#6B4F3A] font-sans font-light hover:text-[#C8BBA8] transition-colors"
                style={{ fontSize: "clamp(7px, 1.2vw, 12px)" }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
