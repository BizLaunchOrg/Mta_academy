"use client";

import React from "react";
import PillArrowButton from "./ui/PillArrowButton";
import { whatsappLink } from "../utils/whatsapp";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-xs font-bold uppercase tracking-wider mb-4">
          Take the First Step
        </span>

        <h2 className="font-slab text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-900 mb-6 leading-tight">
          Start Your Speaking Journey Today
        </h2>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Don't let your potential stay unheard. Join the next generation of
          academic and professional luminaries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PillArrowButton href={whatsappLink("explorePrograms")} external variant="purple">
            Explore All Programs
          </PillArrowButton>

          <PillArrowButton href={whatsappLink("bookConsultation")} external variant="white">
            Book a Consultation
          </PillArrowButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
