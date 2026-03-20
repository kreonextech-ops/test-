import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Designer in Sikkim & Gangtok | Urban Saajh by Tej",
  description:
    "Interior design for Sikkim and Gangtok — luxury residential homes, government-approved projects & eco-sensitive design. Urban Saajh by Tej. Call +91-7602016708.",
  keywords: [
    "interior designer Sikkim",
    "home interior designer Sikkim",
    "interior designer Gangtok",
    "turnkey interior Gangtok",
    "luxury home interior Gangtok",
    "interior design Sikkim",
    "interior design North Sikkim",
  ],
  alternates: { canonical: "https://urbansaajh.com/sikkim-gangtok" },
  openGraph: {
    title: "Interior Designer in Sikkim & Gangtok | Urban Saajh by Tej",
    description:
      "Luxury residential interiors for Sikkim — from Gangtok apartments to eco-sensitive hill retreats. Urban Saajh brings studio-grade design to the Eastern Himalayas.",
    url: "https://urbansaajh.com/sikkim-gangtok",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Interior Designer in Sikkim & Gangtok — Urban Saajh" }],
  },
};

export default function SikkimGangtokPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Sikkim & Gangtok", item: "https://urbansaajh.com/sikkim-gangtok" },
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
            Sikkim · Gangtok · Eastern Himalayas
          </p>
          <h1 className="font-serif font-light text-white leading-tight" style={{ fontSize: "clamp(2rem, 6vw, 4.8rem)", marginBottom: "clamp(16px, 3vw, 32px)" }}>
            Interior Designer in<br />
            <em className="italic" style={{ color: "#C9A87C" }}>Sikkim & Gangtok</em>
          </h1>
          <p className="font-sans font-light leading-relaxed" style={{ fontSize: "clamp(12px, 1.8vw, 17px)", color: "rgba(255,255,255,0.75)", maxWidth: "680px", marginBottom: "clamp(24px, 4vw, 40px)" }}>
            Sikkim&apos;s luxury residential market is one of North East India&apos;s fastest growing. We design spaces that honour the landscape — refined, intelligent, and built for the altitude.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-3 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
            style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(10px, 2vw, 16px) clamp(20px, 4vw, 36px)", fontSize: "clamp(9px, 1.3vw, 11px)" }}>
            <span>Start a Sikkim Project</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "14px" }}>
              Designing for Sikkim
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", marginBottom: "24px" }}>
              Studio Design.<br /><em className="italic">Himalayan Sensitivity.</em>
            </h2>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
              Gangtok&apos;s residential market has grown rapidly, with a new generation of homeowners seeking interior design that reflects their ambitions. From luxury apartments on the Tadong ridge to independent homes in Ranipool, the demand for quality interior design has never been higher.
            </p>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
              Sikkim&apos;s ecological sensitivity is both a constraint and a design opportunity. We work with materials that are durable at high altitudes, finishes that handle extreme temperature swings, and colour palettes inspired by the landscape rather than fighting it. Eco-sensitive design isn&apos;t a trend here — it&apos;s a responsibility.
            </p>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A" }}>
              Our base in Bagdogra — just two hours from Gangtok — means rapid site visits, seamless logistics, and real accountability throughout execution. We handle everything from initial design to final handover, with complete transparency on costs and timelines.
            </p>
          </div>
          <div>
            <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "14px" }}>
              Services for Sikkim
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {[
                "Luxury Residential Turnkey Projects",
                "Eco-Sensitive Interior Design",
                "3D Visualization & Pre-Approval Renders",
                "Boutique Hotel & Homestay Interiors",
                "Modular Furniture for Hill Properties",
                "Full Project Management from Bagdogra",
              ].map((s) => (
                <li key={s} style={{ borderLeft: "2px solid #C9A87C", padding: "10px 16px", background: "rgba(201,168,124,0.06)", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.5vw, 14px)", color: "#3D2B1F" }}>
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/darjeeling" className="font-sans font-light text-[#6B4F3A] underline-offset-2 hover:text-[#C9A87C] transition-colors" style={{ fontSize: "13px", textDecoration: "underline" }}>
                ← Darjeeling Hills
              </Link>
              <Link href="/bagdogra" className="font-sans font-light text-[#6B4F3A] underline-offset-2 hover:text-[#C9A87C] transition-colors" style={{ fontSize: "13px", textDecoration: "underline" }}>
                Our Bagdogra Studio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D3B2E", padding: "clamp(32px, 6vw, 64px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-light text-white" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)", marginBottom: "8px" }}>
              Ready to design your Gangtok home?
            </h3>
            <p className="font-sans font-light" style={{ fontSize: "clamp(10px, 1.4vw, 13px)", color: "rgba(255,255,255,0.65)" }}>
              Based in Bagdogra · Serving all of Sikkim · +91-7602016708
            </p>
          </div>
          <Link href="/#contact" className="inline-flex items-center gap-2 font-sans font-light uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300"
            style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(9px, 1.8vw, 14px) clamp(16px, 3vw, 28px)", fontSize: "clamp(9px, 1.2vw, 10px)" }}>
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
