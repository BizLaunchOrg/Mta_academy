import AboutSection from "../Components/AboutSection";
import BootcampsSection from "../Components/BootcampsSection";
import CohortSection from "../Components/CohortSection";
import CTASection from "../Components/CTASection";
import HeroSection from "../Components/HeroSection";
import TestimonialSection from "../Components/TestimonialSection";

export default function Home() {
  return (
    <div className="pt-[90px]">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="cohorts">
        <CohortSection />
      </section>

      <section id="bootcamps">
        <BootcampsSection />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>
        <section id="cta">
        <CTASection />
      </section>
    </div>
  );
}