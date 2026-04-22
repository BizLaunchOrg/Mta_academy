"use client";

import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineRocketLaunch,
  MdAutoStories,
  MdCampaign,
} from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

/* ---------------- TYPES ---------------- */
type Bootcamp = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  badge?: string;
  features: string[];
  price: string;
  variant: "primary" | "tertiary" | "neutral";
  featured?: boolean;
};

type VariantStyles = Record<
  Bootcamp["variant"],
  {
    card: string;
    button: string;
    icon: string;
  }
>;

/* ---------------- DATA ---------------- */
const bootcamps: Bootcamp[] = [
  {
    id: "pitching",
    title: "2-Day Intensive Pitching",
    description:
      "Turn your idea into a high-stakes pitch that secures funding.",
    icon: <MdOutlineRocketLaunch />,
    badge: "4 Slots Left",
    features: ["1-on-1 Pitch Feedback", "Investor Deck Review"],
    price: "$499",
    variant: "primary",
  },
  {
    id: "storytelling",
    title: "Storytelling for Leaders",
    description:
      "Weave narrative into meetings, emails, and presentations to inspire action.",
    icon: <MdAutoStories />,
    badge: "Limited Slots",
    features: ["Narrative Architecture", "Emotional Hook Design"],
    price: "$599",
    variant: "tertiary",
    featured: true,
  },
  {
    id: "negotiation",
    title: "Persuasive Negotiation",
    description:
      "Psychological triggers and linguistic patterns for high-value deals.",
    icon: <MdCampaign />,
    features: ["Live Simulations", "Body Language Reading"],
    price: "$499",
    variant: "neutral",
  },
];

/* ---------------- VARIANTS ---------------- */
const variantStyles: VariantStyles = {
  primary: {
    card: "bg-indigo-500/5 border border-indigo-400/20",
    button:
      "border border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-black",
    icon: "text-indigo-400",
  },
  tertiary: {
    card: "bg-purple-500/10 border border-purple-400/30",
    button:
      "bg-purple-600 text-white hover:-translate-y-1 hover:shadow-xl active:scale-95",
    icon: "text-purple-400",
  },
  neutral: {
    card: "bg-white/5 border border-white/10",
    button:
      "border border-white/20 text-white hover:bg-white hover:text-black",
    icon: "text-gray-400",
  },
};

/* ---------------- CARD ---------------- */
const BootcampCard: React.FC<{ bootcamp: Bootcamp }> = ({ bootcamp }) => {
  const styles = variantStyles[bootcamp.variant];

  return (
    <div
      className={`
        relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem]
        flex flex-col justify-between gap-6
        transition-all duration-300 group overflow-hidden
        hover:-translate-y-2 hover:shadow-2xl
        ${styles.card}
        ${bootcamp.featured ? "lg:scale-105 lg:-translate-y-2 shadow-2xl z-10" : ""}
      `}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* ICON */}
      <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition">
        <div className={`text-5xl sm:text-6xl ${styles.icon}`}>
          {bootcamp.icon}
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-4 relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {bootcamp.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          {bootcamp.description}
        </p>

        <ul className="space-y-2 sm:space-y-3">
          {bootcamp.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <IoCheckmarkCircle className={`text-base ${styles.icon}`} />
              {feature}
            </li>
          ))}
        </ul>

        {bootcamp.badge && (
          <span className="inline-block bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase">
            {bootcamp.badge}
          </span>
        )}
      </div>

      {/* CTA */}
      <Link
        to={`/bootcamp/${bootcamp.id}`}
        className={`
          relative z-10 block text-center w-full py-3 rounded-xl font-semibold
          transition-all duration-300 overflow-hidden
          ${styles.button}
        `}
      >
        <span className="relative z-10">Enroll {bootcamp.price}</span>

        {/* subtle hover overlay */}
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
      </Link>
    </div>
  );
};

/* ---------------- MAIN ---------------- */
const BootcampSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#212121] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#7C4DFF] mb-4">
            Fast-Track Bootcamps
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg">
            High-intensity weekends designed for immediate impact.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bootcamps.map((bootcamp) => (
            <BootcampCard key={bootcamp.id} bootcamp={bootcamp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BootcampSection;