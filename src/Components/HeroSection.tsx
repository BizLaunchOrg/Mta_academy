"use client";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-violet-100 overflow-hidden px-6 md:px-10 pt-10 pb-16 flex flex-col justify-between">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-violet-200 blur-[120px] rounded-full opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-10">
        {/* Label */}
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6200EE] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
          Premium Communication Coaching
        </span>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-tighter text-gray-900">
              Master the
              <br />
              Art of
              <br />
              <span className="text-[#6200EE] italic">Speaking</span>
              <br />
              with Confidence
            </h1>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
              Forge your voice into a tool of clarity and influence. Join the
              elite top 1% of communicators who lead with presence.
            </p>

            {/* Buttons */}
           <div className="flex items-center gap-4 flex-wrap">
  <Link
    to="/cohorts"
    className="group inline-block bg-violet-600 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl active:scale-95"
  >
    Join a Cohort
  </Link>

  <Link
    to="/apply"
    className="group inline-block bg-white text-[#212121] font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:-translate-y-1 hover:bg-violet-600 hover:text-white active:scale-95"
  >
    Apply Now
  </Link>
</div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-100 flex-wrap">
              <div>
                <p className="text-xl md:text-2xl font-black text-gray-900">
                  5000+
                </p>
                <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400 mt-0.5">
                  Students Trained
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-gray-900">
                  Top 1%
                </p>
                <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400 mt-0.5">
                  Global Ranking
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative lg:w-1/2 flex justify-center">
            {/* Image */}
            <div
              className="w-full max-w-[520px] rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #2d1b4e 0%, #1a0a2e 40%, #3b1f6b 100%)",
                minHeight: 380,
              }}
            >
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-56 opacity-60"
                  style={{
                    background:
                      "radial-gradient(ellipse at top, #a855f7 0%, transparent 70%)",
                  }}
                />

                {/* SVG */}
                <div className="relative z-10 flex items-end h-full">
                  <svg
                    viewBox="0 0 200 340"
                    width="180"
                    className="opacity-80"
                  >
                    <ellipse cx="100" cy="52" rx="28" ry="32" fill="#c4a882" />
                    <path d="M60 120 Q65 90 100 85 Q135 90 140 120 L148 260 Q100 270 52 260 Z" fill="#2a2a3e"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* TESTIMONIAL CARD */}
            <div className="absolute bottom-[-20px] md:bottom-[-30px] left-4 md:-left-6 bg-white rounded-2xl shadow-xl p-5 w-[200px] md:w-[230px] border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" fill="#f59e0b">
                    <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
                  </svg>
                ))}
              </div>

              <p className="text-xs text-gray-600 italic mb-3">
                "The transformation in my executive presence was immediate."
              </p>

              <p className="text-xs font-bold text-gray-800">
                — David Chen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}