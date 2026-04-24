"use client";

import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-16 sm:mb-20">
      <div className="relative bg-[#6200EE] from-primary to-tertiary-container rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 overflow-hidden text-center text-on-primary">
        
        {/* decorative blobs */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-7 sm:space-y-10">

          <h2 className="font-bold text-3xl sm:text-5xl md:text-7xl font-black text-[#F8F9FA] tracking-tight">
            Start Your Speaking Journey Today
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-primary-fixed max-w-2xl mx-auto text-[#F8F9FA]">
            Don't let your potential stay unheard. Join the next generation of academic and professional luminaries.
          </p>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center">

            {/* ROUTED BUTTON 1 */}
            <Link
              to="/programs"
              className="px-7 sm:px-10 py-3.5 sm:py-5 bg-white text-[#6200EE] text-primary rounded-full font-bold text-base sm:text-lg shadow-2xl hover:scale-105 transition-all text-center"
            >
              Explore All Programs
            </Link>

            {/* ROUTED BUTTON 2 */}
            <a
              href="https://wa.me/2340000000000?text=Hello%20MTA%20Academy%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noreferrer"
              className="px-7 sm:px-10 py-3.5 sm:py-5 bg-transparent border-2 border-white/40 text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all text-center"
            >
              Book a Consultation
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;