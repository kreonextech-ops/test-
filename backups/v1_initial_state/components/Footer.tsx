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
    <footer className="bg-deep text-white">
      {/* Top strip */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 md:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="col-span-1 sm:col-span-2">
              <Link href="/" className="inline-block">
                <h2 className="text-3xl font-serif mb-4">
                  Urban <span className="text-gold">Saaj</span>
                </h2>
              </Link>
              <p className="text-gray-400 max-w-xs mt-4 font-light text-sm leading-relaxed">
                Curating exclusive spaces that blend architectural elegance with
                modern functionality — bringing simplicity and luxury to your
                everyday living.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300"
                >
                  Begin Your Project
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-gold font-mono uppercase tracking-widest text-xs mb-6">Navigate</h4>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-gray-300 hover:text-gold transition-colors duration-300 font-light">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <h4 className="text-gold font-mono uppercase tracking-widest text-xs mb-6">Connect</h4>
              <div className="space-y-3 text-sm text-gray-400 font-light mb-8">
                <p>hello@urbansaaj.com</p>
                <p>+44 20 7946 0958</p>
                <p className="text-gray-600 text-xs">Mon–Fri · 9am – 6:30pm</p>
              </div>
              <ul className="space-y-3">
                {social.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-gray-300 hover:text-gold transition-colors duration-300 font-light" target="_blank" rel="noopener noreferrer">
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
      <div className="container mx-auto px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600 font-mono">
        <p>&copy; {new Date().getFullYear()} Urban Saaj. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
