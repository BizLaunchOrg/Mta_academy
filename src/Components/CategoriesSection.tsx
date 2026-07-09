import React from "react";
import PillArrowButton from "./ui/PillArrowButton";
import { whatsappLink } from "../utils/whatsapp";
import { MdRecordVoiceOver, MdCampaign, MdMic } from "react-icons/md";

type Category = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  featured?: boolean;
};

const categories: Category[] = [
  {
    id: "public-speaking",
    number: "01",
    title: "Public Speaking",
    description:
      "Conquer any stage with confidence, clarity, and compelling delivery techniques.",
    icon: <MdRecordVoiceOver className="text-2xl text-[#6200EE]" />,
    iconBg: "bg-violet-50",
    featured: true,
  },
  {
    id: "communication-strategy",
    number: "02",
    title: "Communication Strategy",
    description:
      "Plan powerful messages, influence audiences, and lead conversations with intention.",
    icon: <MdCampaign className="text-2xl text-[#6200EE]" />,
    iconBg: "bg-violet-50",
  },
  {
    id: "diction",
    number: "03",
    title: "Diction",
    description:
      "Master pronunciation, tone, and articulation so your words always land with impact.",
    icon: <MdMic className="text-2xl text-[#7C4DFF]" />,
    iconBg: "bg-purple-50",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <p className="text-sm text-gray-500">{cat.description}</p>
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
