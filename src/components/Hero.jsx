import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CTA from "./CTA";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Floating Shapes with subtle parallax */}
      <motion.div
        style={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        className="absolute top-24 left-16 w-32 h-32 border-4 border-sky-400/20 rounded-lg rotate-12"
      />
      <motion.div
        style={{
          x: -mousePos.x,
          y: -mousePos.y,
        }}
        className="absolute bottom-32 right-20 w-40 h-40 border-4 border-violet-400/20 rounded-full"
      />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Side */}
        <div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Empowering Growth <br className="hidden sm:block" />
            Through{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent underline decoration-sky-400/40 underline-offset-4">
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

        {/* Image Side */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="w-full"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition p-4"
          >
            <img
              src={heroImg}
              alt="Dashboard preview — Infirmary Hub"
              className="rounded-xl w-full h-[360px] object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl border border-white/30 shadow-inner pointer-events-none"
            />
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
}
