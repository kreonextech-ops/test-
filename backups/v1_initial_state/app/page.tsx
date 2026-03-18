import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import Services from "@/components/sections/Services";
import Philosophy from "@/components/sections/Philosophy";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Urban Saaj | Premium Luxury Interior Design",
  description:
    "Urban Saaj is an award-winning luxury interior design studio crafting bespoke residential and commercial spaces across India and beyond. Explore our services, projects, and design philosophy.",
  keywords: [
    "luxury interior design India",
    "premium interior design studio",
    "bespoke interior architecture",
    "urban saaj",
    "interior designer Mumbai",
    "high-end home design",
    "commercial interior design",
  ],
  authors: [{ name: "Urban Saaj", url: "https://urbansaaj.com" }],
  creator: "Urban Saaj",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://urbansaaj.com",
    siteName: "Urban Saaj",
    title: "Urban Saaj | Premium Luxury Interior Design",
    description:
      "Award-winning luxury interior design studio. Bespoke residential & commercial spaces crafted with intention.",
    images: [
      {
        url: "/images/hero_interior_1773249348213.png",
        width: 1200,
        height: 630,
        alt: "Urban Saaj — Luxury Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Saaj | Premium Luxury Interior Design",
    description: "Award-winning luxury interior design studio.",
    images: ["/images/hero_interior_1773249348213.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Services />
      <Philosophy />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
