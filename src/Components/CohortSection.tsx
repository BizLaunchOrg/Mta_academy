"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdPsychology, MdRecordVoiceOver } from "react-icons/md";

/* ---------------- TYPES ---------------- */
interface TimeLeft {
  days: string;
  hours: string;
  mins: string;
}

interface Cohort {
  id: string;
  title: string;
  description: string;
  startDate: string;
  duration: string;
  slots: string;
  color: string;
  icon: React.ReactNode;
}

/* ---------------- DATA ---------------- */
const cohorts: Cohort[] = [
  {
    id: "executive-presence",
    title: "Executive Presence",
    description:
      "Designed for senior leaders. Master authority, body language, and vocal delivery.",
    startDate: "2025-10-12T00:00:00",
    duration: "8 Weeks",
    slots: "4 Slots Left",
    color: "#6200EE",
    icon: <MdPsychology />,
  },
  {
    id: "public-speaking",
    title: "Public Speaking Mastery",
    description:
      "Conquer any stage using storytelling and persuasive frameworks.",
    startDate: "2025-11-05T00:00:00",
    duration: "6 Weeks",
    slots: "Limited Slots",
    color: "#4800B2",
    icon: <MdRecordVoiceOver />,
  },
];

/* ---------------- HELPERS ---------------- */
function getTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now();

  if (diff <= 0) return { days: "00", hours: "00", mins: "00" };

  return {
    days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    mins: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
  };
}

/* ---------------- COUNTDOWN ---------------- */
const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-1 sm:gap-2 text-center">
      {["days", "hours", "mins"].map((unit, i) => (
        <React.Fragment key={unit}>
          <div>
            <span className="block font-black text-base sm:text-lg">
              {timeLeft[unit as keyof TimeLeft]}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase text-gray-400">
              {unit === "mins" ? "Min" : unit === "hours" ? "Hrs" : "Days"}
            </span>
          </div>
          {i < 2 && <div className="font-black text-base sm:text-lg">:</div>}
        </React.Fragment>
      ))}
    </div>
  );
};

/* ---------------- CARD ---------------- */
const CohortCard: React.FC<{ cohort: Cohort }> = ({ cohort }) => {
  return (
    <div className="group bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      {/* TOP */}
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl transition-transform group-hover:scale-110"
            style={{
              backgroundColor: `${cohort.color}15`,
              color: cohort.color,
            }}
          >
            {cohort.icon}
          </div>

          <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase">
            {cohort.slots}
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            {cohort.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {cohort.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div className="bg-gray-100 p-2 sm:p-3 rounded-lg">
            <p className="text-[9px] sm:text-[10px] uppercase text-gray-500 mb-1">
              Start Date
            </p>
            <p className="font-semibold text-xs sm:text-sm">
              {new Date(cohort.startDate).toDateString()}
            </p>
          </div>

          <div className="bg-gray-100 p-2 sm:p-3 rounded-lg">
            <p className="text-[9px] sm:text-[10px] uppercase text-gray-500 mb-1">
              Duration
            </p>
            <p className="font-semibold text-xs sm:text-sm">
              {cohort.duration}
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="space-y-4 mt-6 sm:mt-8">
        <div className="flex justify-between items-center">
          <p
            className="text-xs sm:text-sm font-bold"
            style={{ color: cohort.color }}
          >
            Starts In:
          </p>
          <Countdown targetDate={cohort.startDate} />
        </div>

        {/* ROUTE BUTTON */}
        <Link
          to={`/apply/${cohort.id}`}
          className="block text-center py-3 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 active:scale-95 relative overflow-hidden"
          style={{ backgroundColor: cohort.color }}
        >
          <span className="relative z-10">Apply to Cohort</span>
          <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition" />
        </Link>
      </div>
    </div>
  );
};

/* ---------------- MAIN ---------------- */
const CohortsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-xl space-y-2">
            <p className="text-purple-600 font-bold uppercase text-xs tracking-widest">
              Upcoming Enrollments
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Signature Cohort Programs
            </h2>
          </div>

          <Link
            to="/cohorts"
            className="text-sm sm:text-base text-gray-500 hover:text-purple-600 font-semibold transition"
          >
            View All Programs →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cohorts.map((cohort) => (
            <CohortCard key={cohort.id} cohort={cohort} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CohortsSection;