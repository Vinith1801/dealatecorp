import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function TestimonialCard({ quote, name, role, index }) {
  return (
    <motion.blockquote
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 32px rgba(0,0,0,0.12)",
      }}
      className="min-w-[300px] max-w-sm snap-start bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all"
    >
      <Quote className="w-7 h-7 text-sky-500 mb-4" aria-hidden="true" />
      <p className="text-gray-700 text-base leading-relaxed mb-5">“{quote}”</p>
      <footer>
        <p className="text-gray-900 font-semibold">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </footer>
    </motion.blockquote>
  );
}
