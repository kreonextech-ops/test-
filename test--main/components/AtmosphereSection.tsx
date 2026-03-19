import Image from "next/image";
import Link from "next/link";

export default function AtmosphereSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(260px, 60vw, 80vh)" }}>
      <Image
        src="/images/europa/Lounge room 5.jpg"
        alt="Atmospheric interior with fireplace and artful ceramics"
        fill className="object-cover object-center" sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A1F14]/30 via-[#2A1F14]/20 to-[#2A1F14]/75" />
      <div className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto" style={{ paddingLeft: "clamp(14px, 4vw, 48px)", paddingRight: "clamp(14px, 4vw, 48px)", paddingBottom: "clamp(40px, 8vw, 96px)" }}>
        <div className="max-w-lg">
          <p className="text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light mb-3 sm:mb-4">
            The Urban Saajh Approach
          </p>
          <h2 className="font-serif font-light text-[#FAF7F2] leading-[1.1] mb-4 sm:mb-6"
            style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}>
            Spaces that hold <em className="italic">memory</em>,
            <br /> light, and quiet beauty
          </h2>
          <p className="font-sans font-light text-[#C8BBA8] text-[11px] sm:text-[13px] leading-relaxed mb-5 sm:mb-8 max-w-sm">
            We believe a home should be a reflection of the people who live in
            it — layered, personal, and unhurried. Every project begins with listening.
          </p>
          <Link href="#about"
            className="inline-flex items-center gap-2 sm:gap-3 border border-[#FAF7F2]/40 text-[#FAF7F2] px-5 sm:px-7 py-2.5 sm:py-3 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans font-light hover:bg-[#FAF7F2] hover:text-[#3D2B1F] transition-all duration-400 group">
            <span>Our Philosophy</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
