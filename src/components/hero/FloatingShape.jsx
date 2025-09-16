import { motion } from "framer-motion";

export default function FloatingShape({ x, y, size, color, shape, position }) {
  return (
    <motion.div
      style={{ x, y }}
      aria-hidden="true"
      animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${position} ${size} ${color} ${shape} pointer-events-none`}
    />
  );
}
