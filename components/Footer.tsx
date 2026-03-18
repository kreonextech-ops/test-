import Link from "next/link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Founder", href: "/#founder" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-luxury-espresso text-luxury-ivory overflow-hidden relative texture-linen after:opacity-10">
      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,_#C5A059_1px,_transparent_1px)] bg-[size:30px_30px]" />

      {/* Top strip */}
      <div className="border-b border-luxury-ivory/5 relative z-10">
        <div className="container mx-auto px-6 md:px-16 py-24 md:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 md:gap-24">

            {/* Brand */}
            <div className="col-span-1 sm:col-span-2">
              <Link href="/" className="inline-block">
                <h2 className="text-4xl font-serif mb-6 leading-none">
                  Urban <span className="text-luxury-gold italic">Saajh by Tej</span>
                </h2>
              </Link>
              <p className="text-luxury-ivory/50 max-w-sm mt-4 font-sans font-light text-lg leading-relaxed">
                Orchestrating silence and luxury through architectural precision and emotional intelligence. Every space is a curated legacy.
              </p>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-6 font-sans text-[10px] uppercase tracking-[0.4em] text-luxury-gold border-b border-luxury-gold/20 pb-2 hover:border-luxury-gold transition-all duration-700 font-bold"
                >
                  Curate Your Legacy
                  <svg className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-luxury-gold font-sans uppercase tracking-[0.4em] text-[10px] mb-10 font-bold">Archives</h4>
              <ul className="space-y-4">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-base text-luxury-ivory/60 hover:text-luxury-gold transition-colors duration-500 font-light font-sans tracking-wide">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <h4 className="text-luxury-gold font-sans uppercase tracking-[0.4em] text-[10px] mb-10 font-bold">Resonance</h4>
              <div className="space-y-4 text-base text-luxury-ivory/50 font-light font-sans mb-12">
                <p className="hover:text-luxury-gold transition-colors duration-500 cursor-pointer">info@urbansaajh.com</p>
                <p>+91-7602016708</p>
                <p className="text-[10px] uppercase tracking-widest text-luxury-ivory/20 font-bold">By Appointment Only</p>
              </div>
              <ul className="flex flex-wrap gap-8">
                {social.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-[10px] uppercase tracking-[0.3em] text-luxury-ivory/40 hover:text-luxury-gold transition-colors duration-500 font-bold font-sans" target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="container mx-auto px-6 md:px-16 py-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-luxury-ivory/20 font-sans uppercase tracking-[0.3em] font-bold relative z-10">
        <p>&copy; {new Date().getFullYear()} Urban Saajh by Tej. Modern Museum Editorial.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-luxury-gold transition-colors duration-500">Privacy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors duration-500">Legal</a>
        </div>
      </div>
    </footer>
  );
}
