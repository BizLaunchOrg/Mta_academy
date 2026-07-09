"use client";

import React from "react";

const stats = [
  {
    value: "10+",
    label: "Years of Communication",
    sublabel: "Coaching Excellence",
  },
  {
    value: "5000+",
    label: "Students Enrolled in",
    sublabel: "MTA Academy Programs",
  },
  {
    value: "3",
    label: "Expert Coaches",
    sublabel: "Dedicated to Your Growth",
  },
  {
    value: "Top 1%",
    label: "Global Ranking in",
    sublabel: "Communication Training",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#7C4DFF] text-xs font-bold uppercase tracking-wider mb-4">
          About Us
        </span>

        <h2 className="font-slab text-3xl md:text-4xl font-bold mb-12 text-gray-900 leading-tight uppercase tracking-wide">
          We are passionate about empowering learners worldwide with
          high-quality, accessible communication coaching. Our mission is to
          transform raw potential into clarity, confidence, and commanding
          presence.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.value} className="px-4">
              <div className="text-4xl font-extrabold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
                <br />
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
