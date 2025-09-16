import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function FadeInUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
