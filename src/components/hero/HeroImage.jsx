import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import heroImg from "../../assets/hero.jpg";

export default function HeroImage() {
  return (
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
  );
}
