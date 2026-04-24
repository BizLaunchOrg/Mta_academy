import AboutSection from "../Components/AboutSection";
import BootcampsSection from "../Components/BootcampsSection";
import CohortSection from "../Components/CohortSection";
import CTASection from "../Components/CTASection";
import HeroSection from "../Components/HeroSection";
import TestimonialSection from "../Components/TestimonialSection";

export default function Home() {
  return (
    <div className="pt-[108px] bg-gradient-to-b from-white via-violet-50/30 to-white">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" className="relative">
        <AboutSection />
      </section>

      <section id="cohorts">
        <CohortSection />
      </section>

      <section id="bootcamps">
        <BootcampsSection />
      </section>

      <section id="testimonials" className="bg-white">
        <TestimonialSection />
      </section>
        <section id="cta">
        <CTASection />
      </section>
    </div>
  );
}