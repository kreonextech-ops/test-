import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Designer in Darjeeling & Kalimpong Hills | Urban Saajh",
  description:
    "Interior design for Darjeeling, Kalimpong & Kurseong hill homes. Heritage bungalows, compact hill apartments, tea estate properties — by Urban Saajh. Call +91-7602016708.",
  keywords: [
    "interior designer Darjeeling",
    "best interior designer Darjeeling hills",
    "interior design Kalimpong",
    "interior design Kurseong",
    "heritage home interior Darjeeling",
    "hill home interior design",
    "interior design consultancy Kalimpong",
  ],
  alternates: { canonical: "https://urbansaajh.com/darjeeling" },
  openGraph: {
    title: "Interior Designer in Darjeeling & Kalimpong Hills | Urban Saajh",
    description:
      "Hill-sensitive interior design for Darjeeling, Kalimpong & Kurseong. Heritage bungalows, compact hill apartments & tea estate properties.",
    url: "https://urbansaajh.com/darjeeling",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Interior Designer in Darjeeling Hills — Urban Saajh" }],
  },
};

export default function DarjeelingPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Darjeeling", item: "https://urbansaajh.com/darjeeling" },
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
            Darjeeling · Kalimpong · Kurseong
          </p>
          <h1 className="font-serif font-light text-white leading-tight" style={{ fontSize: "clamp(2rem, 6vw, 4.8rem)", marginBottom: "clamp(16px, 3vw, 32px)" }}>
            Interior Designer for<br />
            <em className="italic" style={{ color: "#C9A87C" }}>Darjeeling Hills</em>
          </h1>
          <p className="font-sans font-light leading-relaxed" style={{ fontSize: "clamp(12px, 1.8vw, 17px)", color: "rgba(255,255,255,0.75)", maxWidth: "680px", marginBottom: "clamp(24px, 4vw, 40px)" }}>
            The hills demand design that respects them. Heritage, climate, proportion, and material — all must align. We bring the discipline of luxury studio design to every hill home we touch.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-3 font-sans font-light uppercase tracking-[0.2em] transition-all duration-300 group"
            style={{ background: "#C9A87C", color: "#0D3B2E", padding: "clamp(10px, 2vw, 16px) clamp(20px, 4vw, 36px)", fontSize: "clamp(9px, 1.3vw, 11px)" }}>
            <span>Enquire for the Hills</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "14px" }}>
              Design for the Hills
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", marginBottom: "24px" }}>
              Where Heritage Meets<br /><em className="italic">Modern Comfort</em>
            </h2>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
              Darjeeling, Kalimpong, and Kurseong present some of the most beautiful and challenging interiors in all of North Bengal. Colonial-era bungalows with uneven floors, heritage cottages with low ceilings, and newer apartment blocks perched on steep slopes — each demands a different vocabulary.
            </p>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A", marginBottom: "1.2em" }}>
              We design around Darjeeling&apos;s cool, mist-laden climate — choosing materials that breathe, finishes that withstand humidity, and colour palettes that warm the space without fighting the mountain light. Every project in the hills starts with deep listening.
            </p>
            <p className="font-sans font-light leading-[1.9]" style={{ fontSize: "clamp(12px, 1.5vw, 15px)", color: "#6B4F3A" }}>
              We have worked on tea estate bungalows, hillside homestay properties, and boutique commercial spaces in Kalimpong town. Our understanding of the hill contractor ecosystem means we can manage execution remotely with full accountability — no surprises at handover.
            </p>
          </div>
          <div>
            <p className="uppercase font-sans font-light tracking-[0.25em]" style={{ fontSize: "clamp(8px, 1.2vw, 10px)", color: "#C9A87C", marginBottom: "14px" }}>
              Hill-Specific Services
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Heritage Home Interior Restoration",
                "Compact Hill Apartment Planning",
                "Boutique Homestay & Hotel Interiors",
                "Tea Estate Bungalow Redesign",
                "3D Visualization Before Execution",
                "Furniture Curation for Hill Climates",
              ].map((s) => (
                <li key={s} style={{ borderLeft: "2px solid #C9A87C", padding: "10px 16px", background: "rgba(201,168,124,0.06)", fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 300, fontSize: "clamp(11px, 1.5vw, 14px)", color: "#3D2B1F" }}>
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/bagdogra" className="font-sans font-light text-[#6B4F3A] underline-offset-2 hover:text-[#C9A87C] transition-colors" style={{ fontSize: "13px", textDecoration: "underline" }}>
                ← Bagdogra Studio
              </Link>
              <Link href="/sikkim-gangtok" className="font-sans font-light text-[#6B4F3A] underline-offset-2 hover:text-[#C9A87C] transition-colors" style={{ fontSize: "13px", textDecoration: "underline" }}>
                Also serving Sikkim & Gangtok →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0D3B2E", padding: "clamp(32px, 6vw, 64px) clamp(20px, 5vw, 80px)" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-serif font-light text-white" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)" }}>
            Let&apos;s design your Darjeeling home.
          </h3>
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
