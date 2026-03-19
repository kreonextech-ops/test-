"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import AtmosphereSection from "@/components/AtmosphereSection";
import About from "@/components/About";
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

        {/* 2. Services — arch slider + large feature image (matches screenshot middle) */}
        <Services />

        {/* 3. Portfolio grid — editorial masonry-style project showcase */}
        <Portfolio />

        {/* 4. Atmospheric full-width section — dark room/fireplace (matches screenshot bottom) */}
        <AtmosphereSection />

        {/* 5. About the studio */}
        <About />

        {/* 6. Journal */}
        <Journal />

        {/* 7. Contact form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
