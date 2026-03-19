"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AboutUrbanSaajh from "@/components/AboutUrbanSaajh";
import Founder from "@/components/Founder";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Cursor is client-only, avoid SSR
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* 1. Hero — moody full-screen with rustic shelf photography */}
        <Hero />

        {/* 2. About Urban Saajh — clarity, honesty, USP (Moved from below) */}
        <AboutUrbanSaajh />

        {/* 3. Services — arch slider + large feature image */}
        <Services />

        {/* 4. Portfolio grid — editorial masonry-style project showcase */}
        <Portfolio />

        {/* 6. Founder — Tejinder Singh Bhogal portrait & story */}
        <Founder />

        {/* 7. Journal */}
        <Journal />

        {/* 8. Contact form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
