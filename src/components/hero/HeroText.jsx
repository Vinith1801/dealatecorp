import FadeInUp from "../../components/motion/FadeInUp";
import CTA from "../CTA";

export default function HeroText() {
  return (
    <div>
      <FadeInUp>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Empowering Growth <br className="hidden sm:block" />
          Through{" "}
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent relative">
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-[shine_2.5s_infinite] bg-[length:200%_100%]" />
            Digital Innovation
          </span>
        </h1>
      </FadeInUp>

      <FadeInUp delay={0.15}>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
          Enterprise-grade IT solutions — IT staffing, cloud & mobile
          development, AI & analytics, healthcare IT — to accelerate digital
          transformation.
        </p>
      </FadeInUp>

      <FadeInUp delay={0.3}>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTA to="/services" label="Explore Services" primary />
          <CTA to="/about" label="Meet Team" />
          <CTA to="/contact" label="Share Project Needs" />
        </div>
      </FadeInUp>

      <FadeInUp delay={0.45}>
        <p className="mt-8 text-sm text-gray-500">
          <strong className="text-gray-900">Industries:</strong> Healthcare,
          Finance, Retail
        </p>
      </FadeInUp>
    </div>
  );
}
