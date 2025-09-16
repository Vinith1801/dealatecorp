import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function TestimonialStrip() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          What Our Clients Say
        </h2>

        {/* Scrolling wrapper */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 w-max animate-scroll"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }} // move halfway (loop seamlessly)
            transition={{
              repeat: Infinity,
              duration: 25, // adjust speed
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }} // pause on hover
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <blockquote
                key={idx}
                className="min-w-[300px] max-w-sm bg-white/50 backdrop-blur-md m-4 rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all"
              >
                <Quote className="w-7 h-7 text-sky-500 mb-4" />
                <p className="text-gray-700 text-base leading-relaxed mb-5">
                  “{t.quote}”
                </p>
                <footer>
                  <p className="text-gray-900 font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
