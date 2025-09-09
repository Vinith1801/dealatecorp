import React from "react";
import { motion } from "framer-motion";
import CTA from "./CTA";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Empowering Growth <br className="hidden sm:block" /> Through{" "}
            <span className="text-primary">Digital Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl"
          >
            We deliver enterprise-grade IT solutions — IT staffing, cloud &
            mobile development, AI & analytics, and healthcare IT to accelerate
            transformation.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTA to="/services" label="Explore Our Services" primary />
            <CTA to="/about" label="Meet Our Team" />
            <CTA to="/contact" label="Share Your Project Needs" />
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <strong className="text-gray-900">Industries:</strong> Healthcare,
            Finance, Retail
          </div>
        </div>

        {/* Image Side */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="bg-gradient-to-tr from-slate-50 to-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition">
            <img
              src="/src/assets/hero.jpg"
              alt="Dashboard preview — Infirmary Hub"
              className="rounded-xl w-full h-[340px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
