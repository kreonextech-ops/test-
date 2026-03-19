import Image from "next/image";

export default function About() {
  return (
<<<<<<< HEAD
    <section id="about" className="bg-[#F2EDE4] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: image stack */}
          <div className="relative">
            {/* Main image */}
            <div className="relative h-[500px] md:h-[600px] img-zoom overflow-hidden">
              <Image
                src="/images/europa/parents-room-1.jpg"
                alt="Urban Saajh by Tej designer at work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-6 w-44 h-56 md:w-52 md:h-64 img-zoom overflow-hidden border-4 border-[#F2EDE4] shadow-xl">
              <Image
                src="/images/europa/master-bedroom-4.jpg"
                alt="Detail of curated interior"
                fill
                className="object-cover object-center"
                sizes="200px"
              />
            </div>
            {/* Decorative line element */}
            <div className="absolute -top-8 -left-6 w-px h-24 bg-[#C8BBA8]/50" />
            <div className="absolute -top-8 -left-6 w-10 h-px bg-[#C8BBA8]/50" />
=======
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
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
          </div>

          {/* Right: text */}
          <div>
<<<<<<< HEAD
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light mb-6">
              About the Studio
            </p>
            <h2
              className="font-serif font-light text-[#3D2B1F] leading-tight mb-8"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Crafting spaces with intention and quiet confidence
            </h2>

            <div className="w-8 h-px bg-[#C8BBA8] mb-8" />

            <p className="font-sans font-light text-[#6B4F3A] text-[14px] leading-[1.9] mb-6">
              <span className="font-medium text-[#3D2B1F]">Urban Saajh</span> by Tej was founded on the belief that great design is not
              about filling a room — it is about editing, restraining, and
              allowing a space to breathe. We work closely with each client to
              understand not just how they live, but how they want to feel in
              their home.
            </p>
            <p className="font-sans font-light text-[#6B4F3A] text-[14px] leading-[1.9] mb-10">
              Our approach is rooted in natural materials, considered
              proportions, and a deep respect for craftsmanship. We source from
              artisans and makers whose work carries a sense of history and
              place.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-[#C8BBA8]/40 pt-8">
=======
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
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
              {[
                { value: "12+", label: "Years" },
                { value: "200+", label: "Projects" },
                { value: "8", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
<<<<<<< HEAD
                  <p className="font-serif text-[#3D2B1F] text-3xl font-light mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans font-light">
=======
                  <p className="font-serif text-[#3D2B1F] font-light"
                    style={{ fontSize: "clamp(1rem, 3vw, 1.875rem)", marginBottom: "clamp(2px, 0.5vw, 4px)" }}>
                    {stat.value}
                  </p>
                  <p className="text-[7px] sm:text-[10px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans font-light">
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
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
