import React from "react";
import { motion } from "framer-motion";
import CTA from "./CTA";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background subtle gradient shapes */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-20 left-16 w-36 h-36 bg-sky-200/20 rounded-xl rotate-12"
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-32 right-20 w-48 h-48 bg-violet-200/20 rounded-full"
      />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Empowering Growth <br className="hidden sm:block" /> Through{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent underline decoration-sky-400/30 underline-offset-4">
              Digital Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            Enterprise-grade IT solutions — IT staffing, cloud & mobile
            development, AI & analytics, healthcare IT — to accelerate digital
            transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <CTA to="/services" label="Explore Services" primary />
            <CTA to="/about" label="Meet Team" />
            <CTA to="/contact" label="Share Project Needs" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 text-sm text-gray-500"
          >
            <strong className="text-gray-900">Industries:</strong> Healthcare,
            Finance, Retail
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-4 transition-transform hover:scale-105 hover:shadow-2xl">
            <img
              src={heroImg}
              alt="Dashboard preview"
              className="rounded-2xl w-full h-[380px] object-cover object-center"
            />
            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl border border-white/30 shadow-inner pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
