"use client";
import { Link } from "react-router-dom";
import { FaBookOpen, FaGraduationCap, FaMedal } from "react-icons/fa";
import { IoSparkles, IoTrendingUp } from "react-icons/io5";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-50 to-indigo-100 overflow-hidden px-6 md:px-10 pt-12 pb-16 flex flex-col justify-between">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-violet-200 blur-[120px] rounded-full opacity-60 pointer-events-none" />
      <div className="absolute -left-20 top-20 w-64 h-64 bg-purple-300/35 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-24 w-72 h-72 bg-indigo-200/45 blur-3xl rounded-full pointer-events-none" />
      <div className="hero-mesh pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <span className="hero-float hero-float-1">
          <FaGraduationCap />
        </span>
        <span className="hero-float hero-float-2">
          <FaBookOpen />
        </span>
        <span className="hero-float hero-float-3">
          <FaMedal />
        </span>
        <span className="hero-float hero-float-4">
          <IoSparkles />
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-10">
        {/* Label */}
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#6200EE] flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
          Premium Communication Coaching
        </span>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:w-1/2 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-[2.9rem] sm:text-6xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-gray-900">
              Master the
              <br />
              <span className="text-[#4b1bb3]">Art of</span>
              <br />
              <span className="text-[#6200EE] italic">Speaking</span>
              <br />
              with Confidence
            </h1>

            <p className="text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed max-w-xl">
              Forge your voice into a tool of{" "}
              <span className="text-[#6200EE] font-semibold">clarity</span> and{" "}
              <span className="text-[#6200EE] font-semibold">influence</span>. Join
              the elite top 1% of communicators who lead with presence.
            </p>

            {/* Buttons */}
           <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
  <Link
    to="/programs"
    className="group inline-block bg-violet-600 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl active:scale-95"
  >
    Join a Cohort
  </Link>

  <Link
    to="/enrollment"
    className="group inline-block bg-white text-[#212121] font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:-translate-y-1 hover:bg-violet-600 hover:text-white active:scale-95"
  >
    Apply Now
  </Link>
</div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 border-t border-gray-100 flex-wrap w-full lg:w-auto">
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

            <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap pt-1">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-[#6200EE] border border-violet-200">
                Live Coaching
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-[#6200EE] border border-violet-200">
                Career-Ready Curriculum
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/80 text-[#6200EE] border border-violet-200">
                Elite Community
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            {/* Image */}
            <div
              className="hero-image-wrap w-full max-w-[520px] rounded-3xl overflow-hidden border border-white/35 shadow-[0_28px_70px_rgba(38,17,79,0.35)]"
              style={{
                background:
                  "linear-gradient(135deg, #2d1b4e 0%, #1a0a2e 40%, #3b1f6b 100%)",
                minHeight: 380,
              }}
            >
              <img
                src="/MTA2.jpeg"
                alt="MTA Academy hero"
                className="w-full h-full min-h-[380px] object-cover object-center"
              />
            </div>

            <div className="absolute top-5 right-2 md:right-0 rounded-xl bg-white/90 backdrop-blur-sm border border-violet-100 px-3 py-2 shadow-md">
              <p className="text-[10px] uppercase tracking-widest text-violet-500 font-bold">
                Outcomes
              </p>
              <p className="text-sm font-bold text-gray-900 flex items-center gap-1">
                <IoTrendingUp className="text-violet-600" />
                Confidence Up
              </p>
            </div>

            {/* TESTIMONIAL CARD */}
            <div className="absolute bottom-[-20px] md:bottom-[-30px] left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 bg-white rounded-2xl shadow-xl p-5 w-[200px] md:w-[230px] border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              
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