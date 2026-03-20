import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book an Interior Design Consultation, Bagdogra",
  description:
    "Book a luxury interior design consultation in Bagdogra, Siliguri or across North Bengal. Contact Urban Saajh at +91-7602016708 or hello@urbansaajh.com.",
  keywords: [
    "book interior designer Bagdogra",
    "interior design consultation Siliguri",
    "contact Urban Saajh",
    "interior design enquiry North Bengal",
    "interior designer contact Gangtok",
  ],
  alternates: { canonical: "https://urbansaajh.com/contact" },
  openGraph: {
    title: "Contact Urban Saajh — Interior Design Consultation, Bagdogra",
    description:
      "Book an interior design consultation in Bagdogra, Siliguri & North Bengal. Call +91-7602016708.",
    url: "https://urbansaajh.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Urban Saajh — Interior Design, Bagdogra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Urban Saajh — Bagdogra Interior Design Studio",
    images: ["/og-image.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urbansaajh.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://urbansaajh.com/contact" },
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
