"use client";

import React from "react";

const HeaderPage: React.FC = () => {
  return (
    <header className="relative pt-14 sm:pt-16 md:pt-14 pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6 md:px-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
        <span className="font-label text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
          Academic Excellence
        </span>

        <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black max-w-4xl mb-6 md:mb-8 leading-[0.95] mx-auto md:mx-0">
          The Future of{" "}
          <span className="text-primary italic">Intelligence</span> Starts Here.
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8 md:mb-12 mx-auto md:mx-0">
          Explore our curated educational pathways designed for the modern
          luminary. From deep-dive cohorts to high-intensity bootcamps.
        </p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      
    </header>
  );
};

export default HeaderPage;