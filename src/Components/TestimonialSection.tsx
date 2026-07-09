import React from "react";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  variant: "default" | "highlight";
};

const testimonials: Testimonial[] = [
  {
    name: "Mark Stevenson",
    role: "Director of Operations",
    quote:
      "Before MTA, I would stutter in boardroom meetings. After the Executive Presence cohort, I was promoted to Director within 3 months. The ROI is immeasurable.",
    initials: "MS",
    variant: "default",
  },
  {
    name: "Elena Rodriguez",
    role: "Startup Founder",
    quote:
      "The Storytelling Bootcamp was a revelation. It changed how I view marketing and leadership entirely.",
    initials: "ER",
    variant: "highlight",
  },
  {
    name: "Dr. Julian Thorne",
    role: "Senior Researcher",
    quote:
      "MTA Academy doesn't just teach you how to speak; they teach you how to think. It's intellectual sharpening at its finest.",
    initials: "JT",
    variant: "default",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-xs font-bold uppercase tracking-wider mb-2">
            Testimonials
          </span>
          <h2 className="font-slab text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-900">
            Real Voices, Real Impact
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from professionals who transformed their communication and
            accelerated their careers.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const isHighlighted = t.variant === "highlight";

            return (
              <div
                key={t.name}
                className={`flex flex-col p-6 rounded-2xl transition-shadow ${
                  isHighlighted
                    ? "bg-[#6200EE] text-white shadow-lg"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={`text-sm ${
                        isHighlighted ? "text-amber-300" : "text-yellow-400"
                      }`}
                    />
                  ))}
                </div>

                <p
                  className={`leading-relaxed mb-6 flex-1 italic text-sm ${
                    isHighlighted ? "text-violet-50" : "text-gray-600"
                  }`}
                >
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-current/10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                      isHighlighted
                        ? "bg-white/20 text-white"
                        : "bg-violet-100 text-[#6200EE]"
                    }`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className={`font-bold text-sm ${
                        isHighlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-xs ${
                        isHighlighted ? "text-violet-200" : "text-gray-500"
                      }`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
