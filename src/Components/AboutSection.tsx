"use client";

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const StorySection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-violet-50/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            From Silence to Influence
          </h2>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-violet-100">
            <img
              src="/MTA.jpeg"
              alt="MTA Academy"
              className="w-full h-[320px] sm:h-[400px] md:h-[500px] object-cover object-center"
            />
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Ten years ago, our founder stood at a podium, paralyzed by fear.
            That moment of silence sparked a decade-long obsession: breaking
            down the mechanics of human influence.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Today, MTA Academy isn't just a coaching center; it's a refinery.
            We take the raw energy of high-achievers and shape it into clarity,
            confidence, and presence.
          </p>

          {/* CTA (ROUTED) */}
          <div className="pt-2">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:gap-3 transition-all"
            >
              Read the Full Story
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
      </div>
    </section>
  );
};

export default StorySection;