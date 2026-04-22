"use client";

import React from "react";

const HeaderPage: React.FC = () => {
  return (
    <header className="relative pt-24 pb-20 px-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="font-label text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
          Academic Excellence
        </span>

        <h1 className="font-headline text-7xl md:text-8xl font-black tracking-tighter text-black max-w-4xl mb-8 leading-[0.9]">
          The Future of{" "}
          <span className="text-primary italic">Intelligence</span> Starts Here.
        </h1>

        <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
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