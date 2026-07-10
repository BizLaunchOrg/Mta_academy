"use client";

import React from "react";
import PillArrowButton from "./ui/PillArrowButton";
import { whatsappLink } from "../utils/whatsapp";

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const courses: Course[] = [
  {
    id: "public-speaking",
    title: "Public Speaking",
    description:
      "Build stage confidence, structure compelling talks, and deliver with clarity in any room.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=384&fit=crop&q=80",
  },
  {
    id: "communication-strategy",
    title: "Communication Strategy",
    description:
      "Learn to plan messages, influence audiences, and communicate with purpose across settings.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=384&fit=crop&q=80",
  },
  {
    id: "diction",
    title: "Diction",
    description:
      "Sharpen pronunciation, tone, and word choice so every sentence lands with precision.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=384&fit=crop&q=80",
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-xs font-bold uppercase tracking-wider mb-2">
            Our Courses
          </span>
          <h2 className="font-slab text-4xl font-bold uppercase tracking-wide text-gray-900">
            Explore Our Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  alt={course.title}
                  className="w-full h-full object-cover"
                  src={course.image}
                  loading="lazy"
                />
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                {course.description}
              </p>

              <a
                href={whatsappLink("seeAllCourses")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-slab text-xs font-semibold uppercase tracking-wider text-[#6200EE] border border-violet-200 rounded-full py-2.5 hover:bg-violet-50 transition-colors mt-auto"
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <PillArrowButton href={whatsappLink("seeAllCourses")} external variant="purple">
            See All Courses
          </PillArrowButton>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
