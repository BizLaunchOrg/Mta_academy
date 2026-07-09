import React from "react";
import PillArrowButton from "./ui/PillArrowButton";
import { whatsappLink } from "../utils/whatsapp";
import {
  MdPsychology,
  MdRecordVoiceOver,
  MdAutoStories,
  MdCampaign,
  MdOutlineRocketLaunch,
  MdPersonOutline,
} from "react-icons/md";

type Category = {
  id: string;
  number: string;
  title: string;
  description: string;
  courses: string;
  icon: React.ReactNode;
  iconBg: string;
  featured?: boolean;
};

const categories: Category[] = [
  {
    id: "executive",
    number: "01",
    title: "Executive Communication",
    description:
      "Command authority in boardrooms, leadership meetings, and high-stakes conversations.",
    courses: "2+ Programs",
    icon: <MdPsychology className="text-2xl text-[#6200EE]" />,
    iconBg: "bg-violet-50",
  },
  {
    id: "public-speaking",
    number: "02",
    title: "Public Speaking",
    description:
      "Conquer any stage with confidence, clarity, and compelling delivery techniques.",
    courses: "3+ Programs",
    icon: <MdRecordVoiceOver className="text-2xl text-[#6200EE]" />,
    iconBg: "bg-violet-50",
    featured: true,
  },
  {
    id: "storytelling",
    number: "03",
    title: "Storytelling & Narrative",
    description:
      "Weave powerful narratives into presentations, pitches, and everyday leadership.",
    courses: "2+ Programs",
    icon: <MdAutoStories className="text-2xl text-[#7C4DFF]" />,
    iconBg: "bg-purple-50",
  },
  {
    id: "negotiation",
    number: "04",
    title: "Negotiation & Influence",
    description:
      "Master psychological triggers and linguistic patterns for high-value outcomes.",
    courses: "1+ Program",
    icon: <MdCampaign className="text-2xl text-[#4800B2]" />,
    iconBg: "bg-indigo-50",
  },
  {
    id: "pitching",
    number: "05",
    title: "Pitch & Presentation",
    description:
      "Turn your ideas into investor-ready pitches that secure funding and partnerships.",
    courses: "2+ Programs",
    icon: <MdOutlineRocketLaunch className="text-2xl text-[#6200EE]" />,
    iconBg: "bg-violet-50",
  },
  {
    id: "personal-brand",
    number: "06",
    title: "Personal Branding",
    description:
      "Build a distinctive professional identity that opens doors and creates lasting impact.",
    courses: "1+ Program",
    icon: <MdPersonOutline className="text-2xl text-[#7C4DFF]" />,
    iconBg: "bg-fuchsia-50",
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-violet-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-xs font-bold uppercase tracking-wider mb-2">
            Categories
          </span>
          <h2 className="font-slab text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-900">
            Choose Your Favourite Course
            <br />
            from Top Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group ${
                cat.featured
                  ? "border border-[#6200EE] shadow-violet-100"
                  : "border border-gray-100"
              }`}
            >
              <div className="absolute right-0 bottom-0 text-9xl font-black text-violet-50 opacity-50 group-hover:scale-110 transition-transform origin-bottom-right select-none">
                {cat.number}
              </div>

              <div className="relative z-10 flex gap-4">
                <div
                  className={`w-16 h-16 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{cat.description}</p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      cat.featured
                        ? "text-white bg-[#6200EE]"
                        : "text-gray-500 bg-gray-100"
                    }`}
                  >
                    {cat.courses}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <PillArrowButton href={whatsappLink("seeAllCategories")} external variant="white">
            See All Categories
          </PillArrowButton>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
