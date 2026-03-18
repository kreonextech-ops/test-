import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, DM_Mono, Pinyon_Script } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const pinyon = Pinyon_Script({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0D0D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://urbansaajh.com"),
  title: {
    default: "Urban Saajh by Tej | Premium Luxury Interior Design",
    template: "%s — Urban Saajh by Tej",
  },
  description:
    "Award-winning luxury interior design studio crafting bespoke residential and commercial spaces across India. From concept to transformational reveal.",
  keywords: [
    "luxury interior design India",
    "premium interior design studio",
    "bespoke interior architecture",
    "urban saajh by tej",
    "interior designer Mumbai",
    "high-end home design",
    "commercial interior design",
    "residential design India",
  ],
  authors: [{ name: "Urban Saajh by Tej", url: "https://urbansaajh.com" }],
  creator: "Urban Saajh by Tej",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${pinyon.variable} ${jost.variable} ${dmMono.variable} font-sans antialiased bg-cream text-charcoal`}
      >
        <SmoothScroll>
          <CustomCursor />
          <JsonLd />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
