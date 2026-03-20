import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Urban Saajh Interior Design Studio, Bagdogra",
  description:
    "Meet Urban Saajh by Tej — a clarity-first interior design studio in Bagdogra. Honest budgets, real design, no confusion. Serving all of North Bengal & Sikkim.",
  keywords: [
    "interior design studio Bagdogra",
    "about Urban Saajh",
    "interior designer North Bengal",
    "honest interior design Siliguri",
    "Tejinder Singh Bhogal",
  ],
  alternates: { canonical: "https://urbansaajh.com/about" },
  openGraph: {
    title: "About Urban Saajh — Interior Design Studio, Bagdogra",
    description:
      "Clarity-first interior design studio in Bagdogra. Honest budgets, turnkey execution, serving North Bengal & Sikkim.",
    url: "https://urbansaajh.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Urban Saajh — Interior Design Studio, Bagdogra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Urban Saajh — Interior Design Studio, Bagdogra",
    images: ["/og-image.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://urbansaajh.com/about" },
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
