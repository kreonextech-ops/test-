import Image from "next/image";

export default function About() {
  return (
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
          </div>

          {/* Right: text */}
          <div>
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
              {[
                { value: "12+", label: "Years" },
                { value: "200+", label: "Projects" },
                { value: "8", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[#3D2B1F] text-3xl font-light mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans font-light">
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
