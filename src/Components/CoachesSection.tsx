"use client";

import React from "react";
import PillArrowButton from "./ui/PillArrowButton";
import { whatsappLink } from "../utils/whatsapp";

type Coach = {
  id: string;
  name: string;
  image: string;
};

const coaches: Coach[] = [
  {
    id: "coach-1",
    name: "Moridiyah Temitope Abdulquadri",
    image: "/coach-1.jpeg",
  },
  {
    id: "coach-2",
    name: "Rahmat Abisola Alade",
    image: "/coach-2.jpeg",
  },
  {
    id: "coach-3",
    name: "Kelvin Chukwuemeke Osadebe",
    image: "/coach-3.jpeg",
  },
];

const CoachesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-xs font-bold uppercase tracking-wider mb-2">
            Our Faculty
          </span>
          <h2 className="font-slab text-3xl md:text-4xl font-bold uppercase text-gray-900 tracking-wide">
            Meet Our Expert Coaches
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <article
              key={coach.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {coach.name}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <PillArrowButton href={whatsappLink("bookCoachSession")} external variant="white">
            Book a Session with a Coach
          </PillArrowButton>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
