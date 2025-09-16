import FadeIn from "../motion/FadeIn";
import { whyUs } from "../../data/whyUs";

export default function WhyUsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Mesh */}
      <div
        className="absolute inset-0 -z-10 flex items-center justify-center opacity-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 800 600" className="w-[1200px] h-[900px]">
          <defs>
            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <g stroke="url(#grad)" strokeWidth="1">
            {[100, 400, 700].map((x) =>
              [100, 300, 500].map((y) => (
                <line key={`h-${x}-${y}`} x1={100} y1={y} x2={700} y2={y} />
              ))
            )}
            {[100, 400, 700].map((x) =>
              [100, 300, 500].map((y) => (
                <line key={`v-${x}-${y}`} x1={x} y1={100} x2={x} y2={500} />
              ))
            )}
          </g>
          {[100, 400, 700].map((cx) =>
            [100, 300, 500].map((cy) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="6"
                fill="url(#grad)"
                className="drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]"
              />
            ))
          )}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Why{" "}
          <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
            Dealatecorp
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((item, i) => (
            <FadeIn key={item.title} delay={i}>
              <div className="relative bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-transparent shadow-md hover:shadow-xl hover:scale-105 transition-all bg-gradient-to-r from-sky-50/30 to-violet-50/30">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm mt-3 text-gray-600">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
