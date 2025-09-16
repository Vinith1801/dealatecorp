import { useState, useEffect, useRef } from "react";
import { heroShapes } from "../../data/heroShapes";
import FloatingShape from "./FloatingShape";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // Mouse parallax (throttled with RAF)
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_40%)]" />

      {/* Floating shapes */}
      {heroShapes.map((shape, idx) => (
        <FloatingShape
          key={idx}
          {...shape}
          x={shape.direction * mousePos.x}
          y={shape.direction * mousePos.y}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
