import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Luxury Interiors, Bagdogra & Darjeeling Hills",
  description:
    "Explore our portfolio of luxury interior design projects across Bagdogra, Siliguri, and Darjeeling Hills. Real homes, real results — by Urban Saajh by Tej.",
  keywords: [
    "interior design portfolio Bagdogra",
    "luxury interiors Darjeeling",
    "best interior design North Bengal",
    "interior design portfolio Siliguri",
    "home interior Gangtok",
  ],
  alternates: { canonical: "https://urbansaajh.com/portfolio" },
  openGraph: {
    title: "Portfolio — Luxury Interiors, Bagdogra & Darjeeling | Urban Saajh",
    description:
      "Luxury residential and commercial interior projects across North Bengal and Sikkim by Urban Saajh by Tej.",
    url: "https://urbansaajh.com/portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Interior Design Portfolio — Bagdogra & Darjeeling, Urban Saajh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Luxury Interiors, Bagdogra & Darjeeling Hills",
    images: ["/og-image.jpg"],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://urbansaajh.com/portfolio" },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
