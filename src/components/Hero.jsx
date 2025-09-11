import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CTA from "./CTA";
import heroImg from "../assets/hero.jpg";

// Motion variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.6 } }),
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
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

  // Memoized styles for floating shapes
  const floatingStyles = useMemo(() => ({
    shape1: { x: mousePos.x, y: mousePos.y },
    shape2: { x: -mousePos.x, y: -mousePos.y },
  }), [mousePos]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Floating Shapes */}
      <motion.div
        style={floatingStyles.shape1}
        className="absolute top-24 left-16 w-32 h-32 border-4 border-sky-400/20 rounded-lg rotate-12 pointer-events-none"
      />
      <motion.div
        style={floatingStyles.shape2}
        className="absolute bottom-32 right-20 w-40 h-40 border-4 border-violet-400/20 rounded-full pointer-events-none"
      />

      {/* Main Hero Grid */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Empowering Growth <br className="hidden sm:block" />
            Through{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent underline decoration-sky-400/40 underline-offset-4">
              Digital Innovation
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={textVariants}
            className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            Enterprise-grade IT solutions — IT staffing, cloud & mobile development,
            AI & analytics, healthcare IT — to accelerate digital transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={textVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            <CTA to="/services" label="Explore Services" primary />
            <CTA to="/about" label="Meet Team" />
            <CTA to="/contact" label="Share Project Needs" />
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.45}
            variants={textVariants}
            className="mt-8 text-sm text-gray-500"
          >
            <strong className="text-gray-900">Industries:</strong> Healthcare, Finance, Retail
          </motion.p>
        </div>

        {/* Hero Image */}
        <Tilt
          glareEnable
          glareMaxOpacity={0.2}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          className="w-full"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
            className="relative bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition p-4"
          >
            <img
              src={heroImg}
              alt="Enterprise dashboard preview"
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
};

export default Hero;
