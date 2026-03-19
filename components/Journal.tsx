import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    category: "Design Notes",
    title: "On the Art of Negative Space in Interior Design",
    date: "March 2026",
    image: "/images/europa/check-1.jpg",
    excerpt:
      "Why leaving room to breathe is the most powerful design decision you can make.",
  },
  {
    id: 2,
    category: "Material Stories",
    title: "Natural Stone: Choosing the Right Surface for Your Home",
    date: "February 2026",
    image: "/images/europa/check-4.jpg",
    excerpt:
      "A guide to marble, travertine, and limestone — and how each tells a different story.",
  },
  {
    id: 3,
    category: "Studio Life",
    title: "The Process Behind a Full-Service Interior Project",
    date: "January 2026",
    image: "/images/europa/check-7.jpg",
    excerpt:
      "From first consultation to final reveal — how we approach a project end to end.",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-[#FAF7F2] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8BBA8] font-sans font-light mb-4">
              Ideas & Perspectives
            </p>
            <h2
              className="font-serif font-light text-[#3D2B1F] leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              Journal
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#6B4F3A] text-[11px] tracking-[0.2em] uppercase font-sans font-light hover:text-[#3D2B1F] transition-colors group"
          >
            <span>All Articles</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group">
              {/* Image */}
              <div className="relative h-56 md:h-64 img-zoom overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#C8BBA8] font-sans font-light">
                  {post.category}
                </span>
                <span className="w-4 h-px bg-[#C8BBA8]/50 inline-block" />
                <span className="text-[9px] tracking-[0.15em] text-[#C8BBA8] font-sans font-light">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif font-light text-[#3D2B1F] text-lg leading-snug mb-3 group-hover:text-[#6B4F3A] transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="font-sans font-light text-[#6B4F3A] text-[12px] leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Read link */}
              <Link
                href="#"
                className="text-[10px] tracking-[0.18em] uppercase font-sans font-light text-[#3D2B1F] border-b border-[#3D2B1F]/30 pb-0.5 hover:border-[#3D2B1F] transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
