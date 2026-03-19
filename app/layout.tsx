import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Saajh by Tej — Artfully Curated, Naturally Inspired",
  description:
    "Comprehensive interior design services crafting spaces that tell a cohesive, considered story. Tailored design, personal approach.",
  keywords: "interior design, luxury interiors, natural design, curated spaces",
  openGraph: {
    title: "Urban Saajh by Tej",
    description: "Artfully Curated, Naturally Inspired Interiors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
