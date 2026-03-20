import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tejinder Singh Bhogal — Interior Designer & Founder, Bagdogra",
  description:
    "Meet Tejinder Singh Bhogal, founder & principal interior designer at Urban Saajh. 10+ years designing luxury spaces across Bagdogra, Siliguri & North Bengal.",
  keywords: [
    "Tejinder Singh Bhogal interior designer",
    "interior designer founder Bagdogra",
    "best interior designer Darjeeling hills",
    "interior architect North Bengal",
    "Urban Saajh founder",
  ],
  alternates: { canonical: "https://urbansaajh.com/founder" },
  openGraph: {
    title: "Tejinder Singh Bhogal — Interior Designer & Founder | Urban Saajh",
    description:
      "10+ years designing luxury interiors in Bagdogra, Siliguri, Darjeeling & Sikkim. Meet the founder of Urban Saajh.",
    url: "https://urbansaajh.com/founder",
    images: [{ url: "/image.jpeg", width: 800, height: 1000, alt: "Tejinder Singh Bhogal — Founder, Urban Saajh, Bagdogra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejinder Singh Bhogal — Interior Designer & Founder, Bagdogra",
    images: ["/image.jpeg"],
  },
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Founder", item: "https://urbansaajh.com/founder" },
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
