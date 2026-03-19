"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    category: "Design Notes",
    title: "On the Art of Negative Space in Interior Design",
    date: "March 2026",
    image: "/images/europa/Master Bedroom 2.jpg",
    excerpt: "Why leaving room to breathe is the most powerful design decision you can make.",
  },
  {
    id: 2,
    category: "Material Stories",
    title: "Natural Stone: Choosing the Right Surface",
    date: "February 2026",
    image: "/images/europa/Staircase 2.jpg",
    excerpt: "A guide to marble, travertine, and limestone — and how each tells a different story.",
  },
  {
    id: 3,
    category: "Studio Life",
    title: "The Process Behind a Full-Service Interior Project",
    date: "January 2026",
    image: "/images/europa/Parents Room 1.jpg",
    excerpt: "From first consultation to final reveal — how we approach a project end to end.",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-[#FAF7F2]" style={{ padding: "clamp(20px, 5vw, 128px) 0" }}>
      <div className="max-w-7xl mx-auto" style={{ padding: "0 clamp(14px, 4vw, 48px)" }}>
        {/* Header */}
        <motion.div 
          className="flex items-end justify-between" 
          style={{ marginBottom: "clamp(32px, 8vw, 64px)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <p className="tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light" style={{ fontSize: "clamp(8px, 1.3vw, 11px)", marginBottom: "clamp(8px, 2vw, 16px)" }}>
              Ideas & Perspectives
            </p>
            <h2 className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4.5vw, 3.2rem)" }}>
              Journal
            </h2>
          </div>
          <Link href="#"
            className="inline-flex items-center text-[#6B4F3A] tracking-[0.2em] uppercase font-sans font-light hover:text-[#3D2B1F] transition-colors group whitespace-nowrap"
            style={{ fontSize: "clamp(9px, 1.4vw, 12px)", gap: "clamp(4px, 1vw, 8px)" }}>
            <span>All Articles</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Always 3 columns */}
        <motion.div 
          className="grid grid-cols-3" 
          style={{ gap: "clamp(12px, 3.5vw, 40px)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {posts.map((post) => (
            <motion.article 
              key={post.id} 
              className="group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <div className="relative img-zoom overflow-hidden"
                style={{ height: "clamp(70px, 18vw, 256px)", marginBottom: "clamp(12px, 3vw, 20px)" }}>
                <Image src={post.image} alt={post.title} fill
                  className="object-cover object-center" sizes="33vw" />
              </div>

              <div className="flex items-center gap-2 mb-1.5 sm:mb-3">
                <span className="text-[7px] sm:text-[9px] tracking-[0.15em] uppercase text-[#C8BBA8] font-sans font-light">
                  {post.category}
                </span>
                <span className="hidden sm:inline-block w-3 h-px bg-[#C8BBA8]/50" />
                <span className="hidden sm:inline text-[9px] tracking-[0.12em] text-[#C8BBA8] font-sans font-light">
                  {post.date}
                </span>
              </div>

              <h3 className="font-serif font-light text-[#3D2B1F] leading-snug group-hover:text-[#6B4F3A] transition-colors"
                style={{ fontSize: "clamp(9px, 1.8vw, 18px)", marginBottom: "clamp(8px, 2vw, 12px)" }}>
                {post.title}
              </h3>

              <p className="font-sans font-light text-[#6B4F3A] leading-relaxed mb-2 sm:mb-4 hidden sm:block"
                style={{ fontSize: "clamp(9px, 1.3vw, 12px)" }}>
                {post.excerpt}
              </p>

              <Link href="#"
                className="text-[8px] sm:text-[10px] tracking-[0.15em] uppercase font-sans font-light text-[#3D2B1F] border-b border-[#3D2B1F]/30 pb-0.5 hover:border-[#3D2B1F] transition-colors">
                Read More
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}