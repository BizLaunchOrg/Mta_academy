const sideCards = [
  {
    id: 1,
    tag: "WEEKEND INTENSIVE",
    title: "Prompt Architecture",
    description: "Mastering the logic of Generative AI for industrial output.",
  },
  {
    id: 2,
    tag: "1-DAY WORKSHOP",
    title: "VC Pitch Intensive",
    description:
      "Crafting the narrative that captures venture capital attention.",
  },
];

function SideCard({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
      <span className="text-xs font-bold tracking-widest text-violet-600 uppercase">
        {tag}
      </span>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      <button className="flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors mt-1 group w-fit">
        Learn More
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
}

function EventHero() {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full">
      {/* Featured Hero Card */}
      <div
        className="relative rounded-3xl overflow-hidden flex flex-col justify-end p-8 md:w-[62%] min-h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse at 60% 30%, #1a1040 0%, #0d0d1a 70%)",
        }}
      >
        {/* Decorative script text background */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ zIndex: 0 }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(80px, 14vw, 160px)",
              fontWeight: 900,
              fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "1px rgba(180,140,60,0.18)",
              background:
                "linear-gradient(135deg, rgba(200,160,70,0.35) 0%, rgba(160,110,40,0.15) 60%, transparent 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              letterSpacing: "-2px",
              lineHeight: 1,
              userSelect: "none",
              transform: "rotate(-5deg) translateY(10px)",
              whiteSpace: "nowrap",
            }}
          >
            Bootcamp
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
              48-HOUR SPRINT
            </span>
            <span className="text-gray-300 text-sm">• 15-17 November</span>
          </div>

          <h2
            className="text-white font-black leading-none"
            style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
          >
            The 48-Hour Keynote
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            Zero to stage-ready. An ultra-intensive workshop where you build,
            design, and rehearse your signature talk with professional coaching.
          </p>

          <button className="w-fit mt-2 bg-violet-600 hover:bg-violet-700 active:scale-95 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-violet-500/30 text-sm">
            Secure Your Spot
          </button>
        </div>
      </div>

      {/* Side Cards */}
      <div className="flex flex-col gap-5 md:w-[38%]">
        {sideCards.map((card) => (
          <SideCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default function BootcampPage() {
  return (
    <div
      className="min-h-screen flex items-start justify-center p-8 pt-12"
      style={{ background: "#f0eef8" }}
    >
      <div className="max-w-5xl w-full flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Google Meet
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            Accelerated Mastery Bootcamps
          </h1>
        </div>

        {/* Hero + Side Cards */}
        <EventHero />
      </div>
    </div>
  );
}