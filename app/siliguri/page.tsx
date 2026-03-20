import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Designer in Siliguri | Urban Saajh by Tej",
  description:
    "Top-rated interior designer in Siliguri for residential & commercial projects. Modular kitchens, turnkey interiors & 3D renders. Urban Saajh — call +91-7602016708.",
  keywords: [
    "interior designer Siliguri",
    "home interior design Siliguri",
    "modular kitchen Siliguri",
    "luxury interior Siliguri",
    "interior design company Siliguri",
    "commercial interior Siliguri",
  ],
  alternates: { canonical: "https://urbansaajh.com/siliguri" },
  openGraph: {
    title: "Interior Designer in Siliguri | Urban Saajh by Tej",
    description:
      "Top-rated interior design studio serving Siliguri — residential, commercial, modular kitchens & turnkey projects.",
    url: "https://urbansaajh.com/siliguri",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Interior Designer in Siliguri — Urban Saajh" }],
  },
};

export default function SiliguriPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Siliguri", item: "https://urbansaajh.com/siliguri" },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#FAF5EC" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0D3B2E", padding: "clamp(80px, 15vw, 160px) clamp(20px, 5vw, 80px) clamp(40px, 8vw, 80px)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.3vw, 11px)", color: "#C9A87C", marginBottom: "clamp(8px, 2vw, 16px)" }}>
            North Bengal&apos;s Design Hub
          </p>
          <h1 className="font-serif font-light text-white leading-tight" style={{ fontSize: "clamp(2rem, 6vw, 4.8rem)", marginBottom: "clamp(16px, 3vw, 32px)" }}>
            Interior Designer in Siliguri
            <br /><em className="italic" style={{ color: "#C9A87C" }}>Luxury. Clarity. Results.</em>
          </h1>
          <p className="font-sans font-light leading-relaxed" style={{ fontSize: "clamp(12px, 1.8vw, 17px)", color: "rgba(255,255,255,0.75)", maxWidth: "680px", marginBottom: "clamp(24px, 4vw, 40px)" }}>
            Siliguri is North Bengal&apos;s commercial heartbeat — and its residential aspirations are growing rapidly. We bring big-city design sensibility with an honest, local approach.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-3 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
            style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(10px, 2vw, 16px) clamp(20px, 4vw, 36px)", fontSize: "clamp(9px, 1.3vw, 11px)" }}>
            <span>Start a Project in Siliguri</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "14px" }}>
              Siliguri — Design Context
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", marginBottom: "24px" }}>
              Design for a City<br /><em className="italic">That Never Slows Down</em>
            </h2>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
              Siliguri&apos;s dense urban fabric — from the Hill Cart Road corridors to the sprawling newer townships near Matigara and Sevoke — presents unique spatial challenges. Apartments here are rarely large, so intelligent space planning isn&apos;t a luxury. It is the design.
            </p>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
              We help Siliguri homeowners and business owners max out every square foot — from modular kitchens that actually function the way you cook, to compact living rooms that feel twice their size through strategic furniture, lighting, and materiality.
            </p>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A" }}>
              Commercial clients across NH-10 and City Centre areas trust us for retail fit-outs, office interiors, and hospitality spaces that attract customers — because the design speaks before your team does.
            </p>
          </div>
          <div>
            <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "14px" }}>
              Our Siliguri Services
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight" style={{ fontSize: "clamp(1.2rem, 2.8vw, 2rem)", marginBottom: "24px" }}>
              What We Offer
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { title: "Modular Kitchen Design", href: "/services#modular-kitchen-solutions" },
                { title: "Residential Turnkey Execution", href: "/services#turnkey-interior-projects" },
                { title: "Commercial Interior Design", href: "/services#residential-commercial-execution" },
                { title: "3D Visualization", href: "/services#3d-visualization-design" },
                { title: "Space Planning for Compact Homes", href: "/services#space-planning" },
              ].map((s) => (
                <li key={s.title}>
                  <Link href={s.href} className="flex items-center gap-3 group transition-all duration-200"
                    style={{ borderLeft: "2px solid #C9A87C", padding: "10px 16px", background: "rgba(201,168,124,0.06)" }}>
                    <span className="font-sans font-light text-[#3D2B1F] group-hover:text-[#C9A87C] transition-colors" style={{ fontSize: "clamp(11px, 1.5vw, 14px)" }}>
                      {s.title}
                    </span>
                    <span className="ml-auto text-[#C9A87C] transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-8">
              <Link href="/bagdogra" className="font-sans font-light text-[#6B4F3A] underline-offset-2 hover:text-[#C9A87C] transition-colors" style={{ fontSize: "13px", textDecoration: "underline" }}>
                Also serving Bagdogra →
              </Link>
              <Link href="/darjeeling" className="font-sans font-light text-[#6B4F3A] underline-offset-2 hover:text-[#C9A87C] transition-colors" style={{ fontSize: "13px", textDecoration: "underline" }}>
                Darjeeling Hills →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D3B2E", padding: "clamp(32px, 6vw, 64px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-serif font-light text-white" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)" }}>
            Ready to transform your Siliguri space?
          </h3>
          <Link href="/#contact" className="inline-flex items-center gap-2 font-sans font-light uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300"
            style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(9px, 1.8vw, 14px) clamp(16px, 3vw, 28px)", fontSize: "clamp(9px, 1.2vw, 10px)" }}>
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
