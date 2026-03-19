import Image from "next/image";

export default function AboutUrbanSaajh() {
  return (
    <section id="about" className="w-full overflow-hidden" style={{ background: "#FAF5EC" }}>
      <div className="grid grid-cols-2" style={{ minHeight: "clamp(480px, 100vw, 900px)" }}>

        {/* ── LEFT: cream side with images ── */}
        <div className="relative flex flex-col" style={{ background: "#FAF5EC", padding: "clamp(24px, 5vw, 64px) clamp(14px, 3vw, 40px) clamp(24px, 5vw, 64px) clamp(14px, 4vw, 56px)" }}>

          {/* Top-right gold accent bar */}
          <div className="absolute top-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Main arch image */}
          <div className="relative flex-1 overflow-hidden"
            style={{
              borderTopRightRadius: "clamp(40px, 12vw, 140px)",
              borderTopLeftRadius: "clamp(40px, 12vw, 140px)",
              minHeight: "clamp(160px, 40vw, 480px)",
              marginBottom: "clamp(6px, 1.5vw, 12px)"
            }}>
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Urban Saajh interior design"
              fill className="object-cover object-center"
              sizes="50vw"
            />
          </div>

          {/* Two small images side by side */}
          <div className="grid grid-cols-2" style={{ gap: "clamp(5px, 1.2vw, 10px)" }}>
            <div className="relative overflow-hidden" style={{ height: "clamp(60px, 15vw, 160px)" }}>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80"
                alt="Interior detail 1"
                fill className="object-cover object-center"
                sizes="25vw"
              />
            </div>
            <div className="relative overflow-hidden" style={{ height: "clamp(60px, 15vw, 160px)" }}>
              <Image
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&q=80"
                alt="Interior detail 2"
                fill className="object-cover object-center"
                sizes="25vw"
              />
            </div>
          </div>

          {/* Bottom-left gold accent bar */}
          <div className="absolute bottom-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>

        {/* ── RIGHT: dark green side with content ── */}
        <div className="relative flex flex-col justify-center overflow-hidden"
          style={{ background: "#0D3B2E", padding: "clamp(28px, 5vw, 72px) clamp(16px, 4vw, 56px) clamp(28px, 5vw, 72px) clamp(14px, 3.5vw, 48px)" }}>

          {/* Top-left gold accent bar */}
          <div className="absolute top-0 left-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />

          {/* Heading */}
          <h2 className="font-serif text-white leading-tight"
            style={{ fontSize: "clamp(1.4rem, 4.5vw, 3.5rem)", marginBottom: "clamp(10px, 2.5vw, 28px)", fontWeight: 300 }}>
            Interior<br />Design
          </h2>

          {/* Intro paragraph */}
          <p className="font-sans text-white/75 leading-relaxed"
            style={{ fontSize: "clamp(8px, 1.5vw, 13px)", marginBottom: "clamp(12px, 3vw, 28px)", fontWeight: 300 }}>
            I keep things simple — clarity first. We talk budget upfront, because Pinterest rooms and
            luxury finishes aren&apos;t &ldquo;low-cost&rdquo;. If you want that look, the investment has to match.
            I don&apos;t sugarcoat; I guide.
          </p>

          {/* Point 1 */}
          <div style={{ marginBottom: "clamp(10px, 2.5vw, 20px)" }}>
            <div className="flex items-center gap-2" style={{ marginBottom: "clamp(4px, 1vw, 8px)" }}>
              <span style={{ width: "clamp(6px, 1vw, 8px)", height: "clamp(6px, 1vw, 8px)", background: "#C9A87C", flexShrink: 0, display: "block" }} />
              <h3 className="font-serif text-white/90 italic"
                style={{ fontSize: "clamp(10px, 1.8vw, 17px)", fontWeight: 300 }}>
                Space matters.
              </h3>
            </div>
            <p className="font-sans text-white/65 leading-relaxed"
              style={{ fontSize: "clamp(7px, 1.3vw, 12px)", fontWeight: 300, paddingLeft: "clamp(10px, 2vw, 18px)" }}>
              You can&apos;t expect a 3BHK feel inside 1000 sq ft. Interiors are built on real dimensions,
              movement flow, and comfort. If the space is tight, something has to give — and I&apos;ll tell you that honestly.
            </p>
          </div>

          <div style={{ height: "1px", background: "rgba(201,168,124,0.35)", marginBottom: "clamp(10px, 2.5vw, 20px)" }} />

          {/* Point 2 */}
          <div style={{ marginBottom: "clamp(10px, 2.5vw, 20px)" }}>
            <div className="flex items-center gap-2" style={{ marginBottom: "clamp(4px, 1vw, 8px)" }}>
              <span style={{ width: "clamp(6px, 1vw, 8px)", height: "clamp(6px, 1vw, 8px)", background: "#C9A87C", flexShrink: 0, display: "block" }} />
              <h3 className="font-serif text-white/90 italic"
                style={{ fontSize: "clamp(10px, 1.8vw, 17px)", fontWeight: 300 }}>
                Designer vs. Contractor.
              </h3>
            </div>
            <p className="font-sans text-white/65 leading-relaxed"
              style={{ fontSize: "clamp(7px, 1.3vw, 12px)", fontWeight: 300, paddingLeft: "clamp(10px, 2vw, 18px)" }}>
              Your contractor can &ldquo;manage&rdquo;, but a designer brings planning, proportion, detailing,
              and long-term value. Skipping design saves money now, but costs more later.
            </p>
          </div>

          <div style={{ height: "1px", background: "rgba(201,168,124,0.35)", marginBottom: "clamp(12px, 3vw, 24px)" }} />

          {/* USP — highlighted block */}
          <div className="relative"
            style={{
              background: "rgba(201,168,124,0.12)",
              borderLeft: "clamp(2px, 0.4vw, 3px) solid #C9A87C",
              padding: "clamp(8px, 2vw, 18px) clamp(10px, 2.5vw, 20px)",
              borderRadius: "0 4px 4px 0"
            }}>
            <p className="uppercase text-[#C9A87C] font-sans font-light tracking-[0.2em]"
              style={{ fontSize: "clamp(6px, 1vw, 9px)", marginBottom: "clamp(4px, 1vw, 8px)" }}>
              Our USP
            </p>
            <p className="font-sans text-white leading-relaxed"
              style={{ fontSize: "clamp(7px, 1.3vw, 12px)", fontWeight: 300 }}>
              At <span style={{ color: "#C9A87C", fontWeight: 400 }}>Urban Saajh</span>, clarity, honesty,
              and detailed planning isn&apos;t extra — it&apos;s our USP. We focus on every parameter that
              actually matters, so when you hire us, you&apos;re choosing{" "}
              <span style={{ color: "#C9A87C", fontWeight: 400 }}>smart design, zero confusion,
              and results that truly last.</span>
            </p>
          </div>

          {/* Bottom-right gold accent bar */}
          <div className="absolute bottom-0 right-0"
            style={{ width: "clamp(40px, 12vw, 120px)", height: "clamp(5px, 1vw, 10px)", background: "#C9A87C" }} />
        </div>

      </div>
    </section>
  );
}
