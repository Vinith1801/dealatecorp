import FadeIn from "../motion/FadeIn";
import CTA from "../CTA";

export default function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-10">
      <FadeIn delay={0.2}>
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-sky-400 via-indigo-400 to-violet-500 shadow-xl hover:shadow-2xl transition">
          <div className="bg-gradient-to-r from-sky-50 to-violet-50 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Ready to{" "}
                <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
                  accelerate
                </span>{" "}
                your transformation?
              </h3>
              <p className="text-base text-gray-600 mt-3">
                Tell us about your project and we’ll craft a roadmap.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <CTA to="/contact" label="Share Your Project Needs" primary />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
