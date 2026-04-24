import React from "react";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
  alt: string;
  variant: "default" | "highlight";
};

const testimonials: Testimonial[] = [
  {
    name: "Mark Stevenson",
    role: "Director of Operations",
    quote:
      "Before MTA, I would stutter in boardroom meetings. After the Executive Presence cohort, I was promoted to Director within 3 months. The ROI is immeasurable.",
    image: "/images/testimonial-mark.jpg",
    alt: "Professional portrait of a middle-aged male executive",
    variant: "default",
  },
  {
    name: "Elena Rodriguez",
    role: "Startup Founder",
    quote:
      "The Storytelling Bootcamp was a revelation. It changed how I view marketing and leadership entirely.",
    image: "/images/testimonial-elena.jpg",
    alt: "Smiling young woman with glasses",
    variant: "highlight",
  },
  {
    name: "Dr. Julian Thorne",
    role: "Senior Researcher",
    quote:
      "MTA Academy doesn't just teach you how to speak; they teach you how to think. It's intellectual sharpening at its finest.",
    image: "/images/testimonial-julian.jpg",
    alt: "Professional male portrait with blazer",
    variant: "default",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-32 ">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-headline text-5xl font-bold text-black">
            Real Voices, Real Impact
          </h2>
        </div>

        {/* GRID (MASONRY STYLE) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {testimonials.map((t, i) => {
            const isHighlighted = t.variant === "highlight";

            return (
              <div
                key={i}
                className={`
                  break-inside-avoid mb-8 p-8 rounded-3xl
                  ${isHighlighted
                    ? "bg-surface-container-lowest shadow-lg border border-primary/10"
                    : "bg-surface-container-low ghost-border"}
                `}
              >
                {/* STARS */}
                <div className="flex gap-1 text-primary mb-6">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      <FaStar className="text-[#6200EE] text-lg" />
                    </span>
                  ))}
                </div>

                {/* QUOTE */}
                <p className="text-black leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>

                {/* USER */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-bold text-black">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
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