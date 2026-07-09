"use client";

import React from "react";
import PillArrowButton from "./ui/PillArrowButton";
import { whatsappLink } from "../utils/whatsapp";

type Coach = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  focus: string[];
  image: string;
};

const coaches: Coach[] = [
  {
    id: "coach-1",
    name: "Dr. Amara Okafor",
    title: "Lead Executive Coach",
    specialty: "Executive Presence & Leadership",
    bio: "Former corporate communications director with 15 years of experience coaching C-suite leaders across Africa and Europe.",
    focus: ["Executive Presence", "Leadership", "Cohort Programs"],
    image: "/coach-1.jpeg",
  },
  {
    id: "coach-2",
    name: "Sarah Chen",
    title: "Narrative Strategy Coach",
    specialty: "Storytelling & Persuasive Influence",
    bio: "Brand strategist and narrative architect who helps founders and executives turn complex ideas into stories that move audiences to action.",
    focus: ["Storytelling", "Persuasive Influence", "Brand Narrative"],
    image: "/coach-2.jpeg",
  },
  {
    id: "coach-3",
    name: "James Whitfield",
    title: "Senior Speaking Coach",
    specialty: "Public Speaking & Pitching",
    bio: "Award-winning speaker and TEDx coach who has trained over 2,000 professionals to conquer stage fright and command any room.",
    focus: ["Public Speaking", "Pitch Delivery", "Weekend Intensives"],
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
              <div className="relative h-64 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs font-semibold text-[#6200EE] uppercase tracking-wide">
                  {coach.specialty}
                </p>
                <h3 className="text-xl font-bold text-gray-900">{coach.name}</h3>
                <p className="text-sm font-medium text-gray-500">{coach.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed pt-1">
                  {coach.bio}
                </p>
                <div className="flex flex-wrap gap-2 pt-3">
                  {coach.focus.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-violet-50 text-[#6200EE] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
