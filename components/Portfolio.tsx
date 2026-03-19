import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Europa Villa — Lounge",
    category: "Full Service Design",
    location: "Europa Villa",
    image: "/images/europa/lounge-3.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "Europa Villa — Master Bedroom",
    category: "Premium Design",
    location: "Europa Villa",
    image: "/images/europa/master-bedroom-2.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Europa Villa — Kitchen",
    category: "Curation",
    location: "Europa Villa",
    image: "/images/europa/kitchen-3.jpg",
    span: "col-span-1 row-span-1",
=======
    title: "The Aldgate Residence",
    category: "Full Service",
    location: "London",
    image: "/images/europa/Master Bedroom 1.jpg",
  },
  {
    id: 2,
    title: "Maison Provençal",
    category: "Consultation",
    location: "France",
    image: "/images/europa/Lounge Room 3.jpg",
  },
  {
    id: 3,
    title: "The Stone House",
    category: "Curation",
    location: "Cotswolds",
    image: "/images/europa/Kitchen 1.jpg",
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
  },
];

export default function Portfolio() {
  return (
<<<<<<< HEAD
    <section id="portfolio" className="bg-[#FAF7F2] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light mb-4">
              Selected Work
            </p>
            <h2
              className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              Portfolio
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#6B4F3A] text-[11px] tracking-[0.2em] uppercase font-sans font-light hover:text-[#3D2B1F] transition-colors group"
          >
=======
    <section id="portfolio" className="bg-[#FAF7F2]" style={{ padding: "clamp(20px, 5vw, 128px) 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(14px, 4vw, 48px)" }}>
        {/* Header */}
        <div className="flex items-end justify-between" style={{ marginBottom: "clamp(32px, 8vw, 64px)" }}>
          <div>
            <p className="tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light" style={{ fontSize: "clamp(8px, 1.3vw, 11px)", marginBottom: "clamp(8px, 2vw, 16px)" }}>
              Selected Work
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4.5vw, 3.2rem)" }}>
              Portfolio
            </h2>
          </div>
          <Link href="#"
            className="inline-flex items-center text-[#6B4F3A] tracking-[0.2em] uppercase font-sans font-light hover:text-[#3D2B1F] transition-colors group whitespace-nowrap"
            style={{ fontSize: "clamp(9px, 1.4vw, 12px)", gap: "clamp(4px, 1vw, 8px)" }}>
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
            <span>View All Projects</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

<<<<<<< HEAD
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Large left image */}
          <div className="md:col-span-1 md:row-span-2 relative h-72 md:h-auto md:min-h-[560px] img-zoom group overflow-hidden">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans mb-1">
                {projects[0].category} · {projects[0].location}
              </p>
              <h3 className="font-serif text-[#FAF7F2] text-xl font-light">
=======
        {/* Grid — always 3 cols, scaled proportionally */}
        <div className="grid grid-cols-3" style={{ gridTemplateRows: "auto auto", gap: "clamp(4px, 1.2vw, 20px)" }}>
          {/* Left tall image — spans 2 rows */}
          <div className="row-span-2 relative img-zoom group overflow-hidden" style={{ minHeight: "clamp(140px, 36vw, 560px)" }}>
            <Image src={projects[0].image} alt={projects[0].title} fill
              className="object-cover object-center" sizes="33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p className="tracking-[0.15em] uppercase text-[#C8BBA8] font-sans" style={{ fontSize: "clamp(7px, 1.2vw, 10px)", marginBottom: "clamp(2px, 0.5vw, 6px)" }}>
                {projects[0].category} · {projects[0].location}
              </p>
              <h3 className="font-serif text-[#FAF7F2] font-light leading-tight" style={{ fontSize: "clamp(11px, 2vw, 20px)" }}>
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
                {projects[0].title}
              </h3>
            </div>
          </div>

<<<<<<< HEAD
          {/* Right top */}
          <div className="md:col-span-2 relative h-64 md:h-auto img-zoom group overflow-hidden">
            <Image
              src={projects[1].image}
              alt={projects[1].title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans mb-1">
                {projects[1].category} · {projects[1].location}
              </p>
              <h3 className="font-serif text-[#FAF7F2] text-xl font-light">
=======
          {/* Right top — spans 2 cols */}
          <div className="col-span-2 relative img-zoom group overflow-hidden" style={{ height: "clamp(70px, 18vw, 272px)" }}>
            <Image src={projects[1].image} alt={projects[1].title} fill
              className="object-cover object-center" sizes="66vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p className="tracking-[0.15em] uppercase text-[#C8BBA8] font-sans" style={{ fontSize: "clamp(7px, 1.2vw, 10px)", marginBottom: "clamp(2px, 0.5vw, 6px)" }}>
                {projects[1].category} · {projects[1].location}
              </p>
              <h3 className="font-serif text-[#FAF7F2] font-light leading-tight" style={{ fontSize: "clamp(11px, 2vw, 20px)" }}>
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
                {projects[1].title}
              </h3>
            </div>
          </div>

<<<<<<< HEAD
          {/* Right bottom */}
          <div className="md:col-span-2 relative h-64 md:h-auto img-zoom group overflow-hidden">
            <Image
              src={projects[2].image}
              alt={projects[2].title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans mb-1">
                {projects[2].category} · {projects[2].location}
              </p>
              <h3 className="font-serif text-[#FAF7F2] text-xl font-light">
=======
          {/* Right bottom — spans 2 cols */}
          <div className="col-span-2 relative img-zoom group overflow-hidden" style={{ height: "clamp(70px, 18vw, 272px)" }}>
            <Image src={projects[2].image} alt={projects[2].title} fill
              className="object-cover object-center" sizes="66vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a130b]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
              <p className="tracking-[0.15em] uppercase text-[#C8BBA8] font-sans" style={{ fontSize: "clamp(7px, 1.2vw, 10px)", marginBottom: "clamp(2px, 0.5vw, 6px)" }}>
                {projects[2].category} · {projects[2].location}
              </p>
              <h3 className="font-serif text-[#FAF7F2] font-light leading-tight" style={{ fontSize: "clamp(11px, 2vw, 20px)" }}>
>>>>>>> aa52090 (Initial commit with Europa Villa Renders and mobile responsiveness)
                {projects[2].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
