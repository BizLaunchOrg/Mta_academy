"use client";

import React from "react";
import { MdOutlineRecordVoiceOver, MdSchool } from "react-icons/md";
import { whatsappLink } from "../utils/whatsapp";

const ChoosePathSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfbf9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-slab text-3xl md:text-4xl font-bold uppercase text-gray-900 tracking-wide">
            What Are You Looking For?
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            We're building a platform that gives you the flexibility to learn
            with world-class coaches or share your expertise with the next
            generation of communicators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6">
              <MdOutlineRecordVoiceOver className="text-3xl text-[#6200EE]" />
            </div>
            <h3 className="font-slab text-xl md:text-2xl font-bold uppercase text-gray-900 tracking-wide mb-4">
              Do You Want to Coach Here?
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Join our faculty and use MTA Academy's tools to mentor leaders,
              run cohorts, and shape the future of communication coaching.
            </p>
            <a
              href={whatsappLink("coachHere")}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-slab uppercase tracking-wider text-sm bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          <div className="bg-[#6200EE] rounded-2xl p-8 md:p-10 shadow-lg shadow-violet-300/30 hover:shadow-xl transition-shadow text-white">
            <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-6">
              <MdSchool className="text-3xl text-white" />
            </div>
            <h3 className="font-slab text-xl md:text-2xl font-bold uppercase tracking-wide mb-4">
              Do You Want to Learn Here?
            </h3>
            <p className="text-violet-100 text-sm leading-relaxed mb-8">
              Access cohort programs, weekend bootcamps, and live coaching
              designed to sharpen your voice and elevate your professional
              presence.
            </p>
            <a
              href={whatsappLink("learnHere")}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-slab uppercase tracking-wider text-sm bg-white text-[#6200EE] px-8 py-3 rounded-full font-semibold hover:bg-violet-50 transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePathSection;
