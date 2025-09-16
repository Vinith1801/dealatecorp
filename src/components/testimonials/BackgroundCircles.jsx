import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.05 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-1/4 w-60 h-60 bg-violet-200/10 rounded-full"
      />
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.05 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-10 right-1/4 w-72 h-72 bg-sky-200/10 rounded-full"
      />
    </>
  );
}
