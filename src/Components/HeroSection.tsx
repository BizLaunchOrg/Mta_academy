"use client";

import { whatsappLink } from "../utils/whatsapp";

export default function HeroSection() {
  return (
    <section className="relative hero-shell overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute top-1/3 -left-16 w-72 h-72 rounded-full bg-fuchsia-100/40 blur-3xl" />
        <span className="absolute top-[18%] right-[12%] w-3 h-3 rounded-full bg-[#6200EE]/40" />
        <span className="absolute top-[42%] right-[28%] w-2 h-2 rounded-full bg-[#7C4DFF]/50" />
        <span className="absolute bottom-[38%] left-[8%] w-2.5 h-2.5 rounded-full bg-[#6200EE]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-sm font-semibold mb-6 font-slab uppercase tracking-wider">
              Premium Communication Coaching
            </span>

            <h1 className="font-slab text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-[1.08] mb-6 text-gray-900">
              Master the
              <br />
              Art of
              <br />
              <span className="text-[#6200EE]">Speaking</span>
              <br />
              with Confidence
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Forge your voice into a tool of clarity and influence. Join the
              elite top 1% of communicators who lead with presence.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <a
                href={whatsappLink("joinCohort")}
                target="_blank"
                rel="noreferrer"
                className="font-slab uppercase tracking-wider bg-[#7C4DFF] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#6200EE] transition-colors flex items-center gap-2 text-sm shadow-md shadow-violet-200/50"
              >
                Join a Cohort
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </a>

              <a
                href={whatsappLink("applyNow")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-800 font-medium hover:text-[#6200EE] transition-colors group font-slab uppercase tracking-wide text-sm"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-md border border-violet-100 flex items-center justify-center text-[#6200EE] group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4l12 6-12 6z" />
                  </svg>
                </div>
                Apply Now
              </a>
            </div>
          </div>

          <div className="relative h-[460px] sm:h-[520px] lg:h-[560px] flex justify-center items-end lg:items-center">
            <div className="hero-rings" aria-hidden />

            <div
              className="absolute bottom-[18%] right-[8%] w-44 h-44 sm:w-52 sm:h-52 z-[1] opacity-90"
              aria-hidden
            >
              <div className="absolute inset-0 bg-[#6200EE]/20 rotate-12 rounded-2xl skew-y-3" />
            </div>
            <div
              className="absolute top-[22%] left-[6%] w-36 h-36 sm:w-44 sm:h-44 z-[1] opacity-80"
              aria-hidden
            >
              <div className="absolute inset-0 bg-[#7C4DFF]/25 -rotate-6 rounded-3xl" />
            </div>

            <div className="absolute inset-0 hero-shape-bg opacity-60 z-[2] rounded-full scale-90" />

            <img
              src="/MTA2.jpeg"
              alt="MTA Academy hero"
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl rounded-3xl hero-image-mask translate-y-4 lg:translate-y-0"
            />

            <div className="absolute top-16 right-6 sm:right-10 glass-card p-3 rounded-xl shadow-lg z-20 flex items-center gap-2 animate-[fadeUp_0.8s_ease-out_both]">
              <img
                src="/MTA.jpeg"
                alt="MTA Academy"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-violet-100"
              />
            </div>

            <div className="absolute bottom-28 left-4 sm:left-10 glass-card px-3 py-2.5 rounded-xl shadow-lg z-20 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-sm font-bold shrink-0">
                ✓
              </div>
              <span className="text-xs font-semibold text-gray-700 pr-1">
                Confidence Up
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-fade" aria-hidden />
    </section>
  );
}
