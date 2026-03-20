import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Designer in Bagdogra | Urban Saajh by Tej",
  description:
    "Looking for an interior designer in Bagdogra? Urban Saajh by Tej offers turnkey interiors, modular kitchens & 3D visualization at Bhogal Brothers, Bihar More. Call +91-7602016708.",
  keywords: [
    "interior designer Bagdogra",
    "interior design Bagdogra",
    "turnkey interior Bagdogra",
    "modular kitchen Bagdogra",
    "3D visualization Bagdogra",
    "home interior Bagdogra",
    "luxury interior design Bagdogra",
  ],
  alternates: { canonical: "https://urbansaajh.com/bagdogra" },
  openGraph: {
    title: "Interior Designer in Bagdogra | Urban Saajh by Tej",
    description:
      "Urban Saajh is Bagdogra's premier interior design studio. Turnkey homes, modular kitchens & 3D visualization at Bihar More.",
    url: "https://urbansaajh.com/bagdogra",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Interior Designer in Bagdogra — Urban Saajh" }],
  },
};

const services = [
  { title: "Turnkey Interior Projects", href: "/services#turnkey-interior-projects" },
  { title: "Interior Design Consultancy", href: "/services#interior-design-consultancy" },
  { title: "Modular Kitchen Solutions", href: "/services#modular-kitchen-solutions" },
  { title: "3D Visualization & Design", href: "/services#3d-visualization-design" },
  { title: "Space Planning", href: "/services#space-planning" },
];

export default function BagdograPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Bagdogra", item: "https://urbansaajh.com/bagdogra" },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#FAF5EC" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0D3B2E", padding: "clamp(80px, 15vw, 160px) clamp(20px, 5vw, 80px) clamp(40px, 8vw, 80px)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.3vw, 11px)", color: "#C9A87C", marginBottom: "clamp(8px, 2vw, 16px)" }}>
            Serving Bagdogra Since 2014
          </p>
          <h1 className="font-serif font-light text-white leading-tight" style={{ fontSize: "clamp(2rem, 6vw, 4.8rem)", marginBottom: "clamp(16px, 3vw, 32px)" }}>
            Interior Designer in Bagdogra
            <br /><em className="italic" style={{ color: "#C9A87C" }}>Urban Saajh by Tej</em>
          </h1>
          <p className="font-sans font-light leading-relaxed" style={{ fontSize: "clamp(12px, 1.8vw, 17px)", color: "rgba(255,255,255,0.75)", maxWidth: "680px", marginBottom: "clamp(24px, 4vw, 40px)" }}>
            Bagdogra is home. Our studio at Bhogal Brothers, Bihar More sits at the heart of North Bengal&apos;s fastest-growing residential corridor, and every project we take here is personal.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-3 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
            style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(10px, 2vw, 16px) clamp(20px, 4vw, 36px)", fontSize: "clamp(9px, 1.3vw, 11px)" }}>
            <span>Book a Consultation</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* About Bagdogra */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(8px, 1.5vw, 14px)" }}>
                Why Bagdogra
              </p>
              <h2 className="font-serif font-light text-[#3D2B1F] leading-tight" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", marginBottom: "clamp(16px, 3vw, 28px)" }}>
                Design That Understands<br /><em className="italic">the Local Context</em>
              </h2>
              <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
                Bagdogra sits at a unique junction — the entry point to Darjeeling Hills, the gateway to the Northeast, and a rapidly urbanising residential hub. Its climate, culture, and community are distinct, and good interior design here must acknowledge all three.
              </p>
              <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
                Our studio on Bihar More gives us deep roots in the local contractor ecosystem and supplier network. That means faster execution, tighter cost control, and results you can actually rely on.
              </p>
              <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A" }}>
                We have worked on apartments near the Bagdogra Airport corridor, independent bungalows in Civil Township, and commercial spaces along NH-31. Every project has deepened our understanding of what Bagdogra homes genuinely need — and what they don&apos;t.
              </p>
            </div>
            <div>
              <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "clamp(8px, 1.5vw, 14px)" }}>
                Services in Bagdogra
              </p>
              <h2 className="font-serif font-light text-[#3D2B1F] leading-tight" style={{ fontSize: "clamp(1.2rem, 2.8vw, 2rem)", marginBottom: "clamp(16px, 3vw, 28px)" }}>
                What We Do Here
              </h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 1.5vw, 14px)" }}>
                {services.map((s) => (
                  <li key={s.title}>
                    <Link href={s.href} className="flex items-center gap-3 group transition-all duration-200"
                      style={{ borderLeft: "2px solid #C9A87C", padding: "clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 18px)", background: "rgba(201,168,124,0.06)" }}>
                      <span className="font-sans font-light text-[#3D2B1F] group-hover:text-[#C9A87C] transition-colors" style={{ fontSize: "clamp(11px, 1.5vw, 14px)" }}>
                        {s.title}
                      </span>
                      <span className="ml-auto text-[#C9A87C] transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "clamp(20px, 4vw, 32px)", display: "flex", gap: "clamp(16px, 3vw, 28px)" }}>
                <div style={{ borderLeft: "2px solid #C9A87C", paddingLeft: "clamp(10px, 2vw, 16px)" }}>
                  <span className="font-serif font-light block" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", color: "#C9A87C", lineHeight: 1 }}>10+</span>
                  <span className="font-sans font-light text-[#6B4F3A]" style={{ fontSize: "clamp(9px, 1.2vw, 11px)" }}>Years in Bagdogra</span>
                </div>
                <div style={{ borderLeft: "2px solid #C9A87C", paddingLeft: "clamp(10px, 2vw, 16px)" }}>
                  <span className="font-serif font-light block" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", color: "#C9A87C", lineHeight: 1 }}>150+</span>
                  <span className="font-sans font-light text-[#6B4F3A]" style={{ fontSize: "clamp(9px, 1.2vw, 11px)" }}>Local Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: "#0D3B2E", padding: "clamp(32px, 6vw, 64px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-light text-white leading-tight" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)", marginBottom: "8px" }}>
              Ready to design your Bagdogra home?
            </h3>
            <p className="font-sans font-light" style={{ fontSize: "clamp(10px, 1.4vw, 13px)", color: "rgba(255,255,255,0.65)" }}>
              Studio: Bhogal Brothers, Bihar More, Bagdogra — 734014 &nbsp;|&nbsp; +91-7602016708
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/#contact" className="inline-flex items-center gap-2 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300"
              style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(9px, 1.8vw, 14px) clamp(16px, 3vw, 28px)", fontSize: "clamp(9px, 1.2vw, 10px)" }}>
              Contact Us
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300"
              style={{ border: "1px solid rgba(201,168,124,0.5)", color: "#C9A87C", padding: "clamp(9px, 1.8vw, 14px) clamp(16px, 3vw, 28px)", fontSize: "clamp(9px, 1.2vw, 10px)" }}>
              Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
