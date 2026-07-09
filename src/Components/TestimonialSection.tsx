import React from "react";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  role: string;
  quote: string;
  variant: "default" | "highlight";
};

const testimonials: Testimonial[] = [
  {
    role: "Event Compère",
    quote:
      "Thank you very much for serving as the compère at today's event. I truly appreciate your effort and the way you steered the programme exactly as intended. I always said you're exceptional and you proved it today.",
    variant: "default",
  },
  {
    role: "Panel Session",
    quote:
      "Thank you for your incredible contribution to today's panel session. It was such a joy moderating alongside you — your thoughts on voice, presence, and confidence added so much value. I loved how you made it relatable and empowering for everyone listening. I left the session feeling uplifted.",
    variant: "highlight",
  },
  {
    role: "Panel Session",
    quote:
      "It's always inspiring to see how you balance so many roles while staying grounded and intentional. It was such a pleasure to share the stage with you. Thank you for your generosity of ideas and your willingness to share your expertise. You made the panel a memorable experience.",
    variant: "default",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-[#6200EE] text-xs font-bold uppercase tracking-wider mb-2">
            Feedbacks
          </span>
          <h2 className="font-slab text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-900">
            Real Voices, Real Impact
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Messages from clients and partners who experienced MTA Academy in
            action.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => {
            const isHighlighted = t.variant === "highlight";

            return (
              <div
                key={`${t.role}-${index}`}
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
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-current/10">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      isHighlighted ? "text-violet-200" : "text-gray-500"
                    }`}
                  >
                    {t.role}
                  </p>
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
