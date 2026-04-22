"use client";

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const StorySection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-16 items-center">
        
        {/* IMAGE */}
        <div className="flex-1 order-2 md:order-1">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwQGJw-ASISEwy1NwJdxhB6QYYrg2HrdDKea2-_4-y4lOzAvsKH0cF-Po0YX6ofO5SFZh4A9KFmtMerzXdrzWWsM5fGfTZoPfPEtof-jNpYpQncgRj895sZVz8Gk1z4dAHAfngcUSYTE5bxe8LFbCO3mldTrW8iXdb8oaPd5LfXN1-DDUUyIYlsVTqnQisqFDf5yK4kl-hvmoUapUVQfElKYOqg4GZgrkkgdIIe0MMjPRKDcYrVSW-Tj5Jf0DM6CjEQsHYVHOcLWbC"
              alt="Confident professional woman"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex-1 order-1 md:order-2 space-y-6 text-center md:text-left">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            From Silence to Influence
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Ten years ago, our founder stood at a podium, paralyzed by fear.
            That moment of silence sparked a decade-long obsession: breaking
            down the mechanics of human influence.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Today, MTA Academy isn't just a coaching center; it's a refinery.
            We take the raw energy of high-achievers and shape it into clarity,
            confidence, and presence.
          </p>

          {/* CTA (ROUTED) */}
          <div className="pt-2">
            <Link
              to="/story"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all"
            >
              Read the Full Story
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StorySection;