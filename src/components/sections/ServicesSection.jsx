import FadeIn from "../motion/FadeIn";
import ServiceCard from "../ServiceCard";
import CTA from "../CTA";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 relative">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        What{" "}
        <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
          We Do
        </span>
      </h2>
      <p className="mt-3 text-lg text-gray-600 max-w-2xl">
        From strategy to delivery — we help companies adopt modern engineering
        and operational practices.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i}>
            <ServiceCard
              {...s}
              className="transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
            />
          </FadeIn>
        ))}
      </div>

      <div className="mt-8">
        <CTA to="/services" label="Explore all services" />
      </div>
    </section>
  );
}
