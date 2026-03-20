import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Services in Siliguri & Bagdogra",
  description:
    "7 professional interior design services in Siliguri, Bagdogra & North Bengal — consultancy, space planning, turnkey, modular kitchens & 3D visualization.",
  keywords: [
    "interior design services Siliguri",
    "modular kitchen Siliguri",
    "turnkey interior Bagdogra",
    "3D visualization interior Bagdogra",
    "interior design consultancy Kalimpong",
    "space planning Bagdogra",
  ],
  alternates: { canonical: "https://urbansaajh.com/services" },
  openGraph: {
    title: "Interior Design Services in Siliguri & Bagdogra | Urban Saajh",
    description:
      "Expert interior design services in Siliguri, Bagdogra & North Bengal. Turnkey, modular kitchens, 3D visualization and more.",
    url: "https://urbansaajh.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Interior Design Services — Urban Saajh, Siliguri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services in Siliguri & Bagdogra",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://urbansaajh.com/services" },
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
