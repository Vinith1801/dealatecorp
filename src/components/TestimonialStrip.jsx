import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialStrip({ items = [] }) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
          {items.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.12)" }}
              className="min-w-[300px] max-w-sm snap-start bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all"
            >
              <Quote className="w-7 h-7 text-sky-500 mb-4" />
              <p className="text-gray-700 text-base leading-relaxed mb-5">
                “{t.quote}”
              </p>
              <div>
                <p className="text-gray-900 font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional subtle background circles for premium feel */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.05 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-1/4 w-60 h-60 bg-violet-200/10 rounded-full"
      />
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.05 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-1/4 w-72 h-72 bg-sky-200/10 rounded-full"
      />
    </section>
  );
}
