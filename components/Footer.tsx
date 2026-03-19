import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a130b] py-14 md:py-20 border-t border-[#3D2B1F]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <svg width="12" height="16" viewBox="0 0 14 18" fill="none">
                <path
                  d="M7 1C7 1 1 5 1 10C1 13.3137 3.68629 16 7 16C10.3137 16 13 13.3137 13 10C13 5 7 1 7 1Z"
                  stroke="#C8BBA8"
                  strokeWidth="0.8"
                  fill="none"
                />
                <line x1="7" y1="16" x2="7" y2="17" stroke="#C8BBA8" strokeWidth="0.8" />
                <path d="M7 5C7 5 5 7.5 5 10" stroke="#C8BBA8" strokeWidth="0.6" strokeLinecap="round" />
              </svg>
              <span className="text-[11px] tracking-[0.25em] uppercase font-sans font-light text-[#C8BBA8]">
                <span className="font-bold text-[#FAF7F2]">Urban Saajh</span> by Tej
              </span>
            </div>
            <p className="font-sans font-light text-[#6B4F3A] text-[12px] leading-relaxed max-w-[200px]">
              Artfully curated, naturally inspired interior design studio.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {["Full Service Design", "Consultation", "Curation", "Project Management"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans font-light text-[#C8BBA8]/70 text-[12px] hover:text-[#C8BBA8] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-5">
              Studio
            </p>
            <ul className="space-y-3">
              {["Portfolio", "About", "Journal", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="font-sans font-light text-[#C8BBA8]/70 text-[12px] hover:text-[#C8BBA8] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#6B4F3A] font-sans font-light mb-5">
              Follow
            </p>
            <ul className="space-y-3">
              {["Instagram", "Pinterest", "LinkedIn", "Houzz"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-sans font-light text-[#C8BBA8]/70 text-[12px] hover:text-[#C8BBA8] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#3D2B1F]/50 pt-8">
          <p className="text-[10px] tracking-[0.12em] text-[#6B4F3A] font-sans font-light">
            © 2026 Urban Saajh by Tej. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] tracking-[0.12em] text-[#6B4F3A] font-sans font-light hover:text-[#C8BBA8] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
