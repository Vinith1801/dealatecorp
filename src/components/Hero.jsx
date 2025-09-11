import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CTA from "./CTA";
import heroImg from "../assets/hero.jpg";

// Motion variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // Throttled mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
        rafRef.current = null;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingShapes = useMemo(
    () => [
      {
        style: { x: mousePos.x, y: mousePos.y },
        size: "w-40 h-40",
        color: "bg-sky-400/10 blur-3xl",
        shape: "rounded-full",
        top: "top-20 -left-10",
      },
      {
        style: { x: -mousePos.x, y: -mousePos.y },
        size: "w-56 h-56",
        color: "bg-violet-400/10 blur-3xl",
        shape: "rounded-full",
        top: "bottom-24 right-0",
      },
    ],
    [mousePos]
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_40%)]" />

      {/* Floating background shapes */}
      {floatingShapes.map((f, idx) => (
        <motion.div
          key={idx}
          style={f.style}
          aria-hidden="true"
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${f.top} ${f.size} ${f.color} ${f.shape} pointer-events-none`}
        />
      ))}

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
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent relative">
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-[shine_2.5s_infinite] bg-[length:200%_100%]" />
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
            Enterprise-grade IT solutions — IT staffing, cloud & mobile development, AI & analytics, healthcare IT — to accelerate digital transformation.
          </motion.p>

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
          glareMaxOpacity={0.15}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          className="w-full"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-sky-400 via-indigo-400 to-violet-500 shadow-xl hover:shadow-2xl transition"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
              <img
                src={heroImg}
                alt="Enterprise dashboard preview"
                className="rounded-2xl w-full aspect-[16/9] object-cover object-center"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
