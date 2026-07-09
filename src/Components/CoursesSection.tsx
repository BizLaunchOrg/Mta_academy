"use client";

import React from "react";
import PillArrowButton from "./ui/PillArrowButton";
import { whatsappLink } from "../utils/whatsapp";

type Course = {
  id: string;
  title: string;
  price: string;
  rating: string;
  reviews: number;
  image: string;
};

const courses: Course[] = [
  {
    id: "public-speaking",
    title: "Public Speaking",
    price: "Enroll Now",
    rating: "4.8",
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=384&fit=crop&q=80",
  },
  {
    id: "communication-strategy",
    title: "Communication Strategy",
    price: "Enroll Now",
    rating: "4.9",
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=384&fit=crop&q=80",
  },
  {
    id: "diction",
    title: "Diction",
    price: "Enroll Now",
    rating: "4.9",
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=384&fit=crop&q=80",
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-xs font-bold uppercase tracking-wider mb-2">
            Our Course
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

              <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
                <span>★</span>
                <span className="text-gray-700 font-medium">{course.rating}</span>
                <span className="text-gray-400">({course.reviews})</span>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-4 line-clamp-2 flex-grow">
                {course.title}
              </h3>

              <div className="flex items-center justify-end border-t border-gray-100 pt-4 mt-auto">
                <span className="font-bold text-[#6200EE]">{course.price}</span>
              </div>
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
