import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionVariant}
      custom={delay}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
