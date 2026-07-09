import AboutSection from "../Components/AboutSection";
import CategoriesSection from "../Components/CategoriesSection";
import ChoosePathSection from "../Components/ChoosePathSection";
import CoachesSection from "../Components/CoachesSection";
import CoursesSection from "../Components/CoursesSection";
import CTASection from "../Components/CTASection";
import HeroSection from "../Components/HeroSection";
import TestimonialSection from "../Components/TestimonialSection";

export default function Home() {
  return (
    <main className="bg-[#fdfbf9] text-gray-800 antialiased overflow-x-hidden">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about" className="relative">
        <AboutSection />
      </section>

      <section id="courses">
        <CoursesSection />
      </section>

      <section id="coaches">
        <CoachesSection />
      </section>

      <section id="choose-path">
        <ChoosePathSection />
      </section>

      <section id="categories">
        <CategoriesSection />
      </section>

      <section id="testimonials">
        <TestimonialSection />
      </section>

      <section id="cta">
        <CTASection />
      </section>
    </main>
  );
}
