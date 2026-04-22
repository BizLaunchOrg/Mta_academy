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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM6y0b7Pl7788sQNqrd4DKriRhy9P17Q66Zw8wMCiIHEhC3ItoMBE9fvKxVPn5M2vJOCMcsPwFGLJzFVvKxgj36Ry1EeeELHZGHY996CxJENOdBnJuem75c1babla9ujDFke9NPh0pA5v0O0REQ_SirsAy5igWvbMDzeMygPt31CKPdpX-qVpllA6NGRVRt9Eb323c838WExii4ssA7TfrB7Jq3fWqIEm0uwsJQHKpB5d4A92Pyi6U1IGJnCJ7HPRArL2cssJVupJU",
    alt: "Professional portrait of a middle-aged male executive",
    variant: "default",
  },
  {
    name: "Elena Rodriguez",
    role: "Startup Founder",
    quote:
      "The Storytelling Bootcamp was a revelation. It changed how I view marketing and leadership entirely.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiqX8QFRTOHzvRFv1CljblnCKj8vEA1dKGgodPSeKEBqOUbAE-By0tD8VH-QLBVOMDtFEwJA9poqEbbFn9iYIFcMXaHOrr1Um0anS7b0TQFv8_EB3zsFy1p3E8TebbyF11UKEAoVn_hg70Lb0lEaaH9Fdp17oYsSTeD9xyIO9-BZCId3g0c-wRqNx0Qs75mmGcUHIdbztUgyBx4_rEG-XSUu5EmrXAF6Qw5Ck7KOHckZ02g6783n4imaYrnipnzka8sv20TnfCnLiD",
    alt: "Smiling young woman with glasses",
    variant: "highlight",
  },
  {
    name: "Dr. Julian Thorne",
    role: "Senior Researcher",
    quote:
      "MTA Academy doesn't just teach you how to speak; they teach you how to think. It's intellectual sharpening at its finest.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzggYOdMP5nJErs-22eV7aFrECv4a-qVHnWe6lUwV3N7om-VHyn-PtWRWrZ9GHeHAOVEW_p06kT-CIQyRu3I-H4Q6R-V5hp_JIRDSZL3wwvtkciFUYXnqtcCs4Dvi40Cxjvp-SpTke2wNU9mGHUt5AmshxwDfdPssuK4PavaoL4Ijw32Rjmi9Xhy7R8P7XEWMkr3GoACJy3Dvp2tja-OHmlq-7zbaJ20Y1PRCOTXozl9rq98jS3RjxqqoRuWra5c5KeS1SOenNgFQE",
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