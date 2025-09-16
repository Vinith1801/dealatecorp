import Hero from "../components/hero/Hero";
import TestimonialStrip from "../components/testimonials/TestimonialStrip";
import ServicesSection from "../components/sections/ServicesSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import FinalCTA from "../components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="relative space-y-28 overflow-hidden">
      <Hero />
      <ServicesSection />

      <WhyUsSection />

      <TestimonialStrip />

      <FinalCTA />

    </div>
  );
}
