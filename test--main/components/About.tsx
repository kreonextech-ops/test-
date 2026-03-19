import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#F2EDE4] overflow-hidden" style={{ padding: "clamp(20px, 5vw, 128px) 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(14px, 4vw, 48px)" }}>
        {/* Always two columns — scaled proportionally */}
        <div className="grid grid-cols-2 items-center" style={{ gap: "clamp(20px, 6vw, 96px)" }}>

          {/* Left: image stack */}
          <div className="relative">
            <div className="relative img-zoom overflow-hidden" style={{ height: "clamp(160px, 42vw, 600px)" }}>
              <Image
                src="/images/europa/Lounge Room 6.jpg"
                alt="Urban Saajh designer at work"
                fill className="object-cover object-center"
                sizes="50vw"
              />
            </div>
            {/* Floating accent image */}
            <div className="absolute img-zoom overflow-hidden border-2 sm:border-4 border-[#F2EDE4] shadow-lg"
              style={{
                bottom: "clamp(-16px, -3vw, -32px)",
                right: "clamp(-10px, -2vw, -24px)",
                width: "clamp(52px, 13vw, 208px)",
                height: "clamp(66px, 16vw, 256px)",
              }}>
              <Image
                src="/images/europa/P2.jpg"
                alt="Detail of curated interior objects"
                fill className="object-cover object-center"
                sizes="200px"
              />
            </div>
            {/* Decorative corner lines */}
            <div className="absolute w-px bg-[#C8BBA8]/50 hidden sm:block"
              style={{ top: "clamp(-20px,-4vw,-32px)", left: "clamp(-12px,-2vw,-24px)", height: "clamp(40px,8vw,96px)" }} />
            <div className="absolute h-px bg-[#C8BBA8]/50 hidden sm:block"
              style={{ top: "clamp(-20px,-4vw,-32px)", left: "clamp(-12px,-2vw,-24px)", width: "clamp(20px,4vw,40px)" }} />
          </div>

          {/* Right: text */}
          <div>
            <p className="tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light" style={{ fontSize: "clamp(8px, 1.3vw, 11px)", marginBottom: "clamp(12px, 3vw, 24px)" }}>
              About Urban Saajh
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(0.9rem, 3vw, 2.8rem)", marginBottom: "clamp(16px, 4vw, 32px)" }}>
              Crafting spaces with intention and quiet confidence
            </h2>

            <div className="w-6 sm:w-8 h-px bg-[#C8BBA8] mb-4 sm:mb-8" />

            <p className="font-sans font-light text-[#6B4F3A] leading-[1.9] hidden sm:block"
              style={{ fontSize: "clamp(9px, 1.4vw, 14px)", marginBottom: "clamp(12px, 3vw, 24px)" }}>
              Urban Saajh by Tej was founded on the belief that great design is not
              about filling a room — it is about editing, restraining, and
              allowing a space to breathe.
            </p>
            <p className="font-sans font-light text-[#6B4F3A] leading-[1.9]"
              style={{ fontSize: "clamp(9px, 1.4vw, 14px)", marginBottom: "clamp(20px, 5vw, 40px)" }}>
              Our approach is rooted in natural materials, considered
              proportions, and a deep respect for craftsmanship.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 border-t border-[#C8BBA8]/40" style={{ gap: "clamp(8px, 2vw, 24px)", paddingTop: "clamp(16px, 4vw, 32px)" }}>
              {[
                { value: "12+", label: "Years" },
                { value: "200+", label: "Projects" },
                { value: "8", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[#3D2B1F] font-light"
                    style={{ fontSize: "clamp(1rem, 3vw, 1.875rem)", marginBottom: "clamp(2px, 0.5vw, 4px)" }}>
                    {stat.value}
                  </p>
                  <p className="text-[7px] sm:text-[10px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
