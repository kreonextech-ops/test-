import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Designer in Bagdogra & Siliguri | Urban Saajh by Tej",
  description:
    "Luxury interior design studio in Bagdogra & Siliguri. Turnkey projects, 3D visualization & modular kitchens across North Bengal & Sikkim. Call +91-7602016708.",
  keywords: [
    "interior designer Bagdogra",
    "interior designer Siliguri",
    "luxury interior design North Bengal",
    "turnkey interior Bagdogra",
    "home interior design Siliguri",
  ],
  alternates: { canonical: "https://urbansaajh.com" },
  openGraph: {
    title: "Interior Designer in Bagdogra & Siliguri | Urban Saajh by Tej",
    description:
      "Luxury interior design studio in Bagdogra & Siliguri. Turnkey projects, 3D visualization & modular kitchens across North Bengal & Sikkim.",
    url: "https://urbansaajh.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Urban Saajh — Interior Design, Bagdogra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designer in Bagdogra & Siliguri | Urban Saajh",
    description: "Luxury interior design in Bagdogra, Siliguri & North Bengal.",
    images: ["/og-image.jpg"],
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
