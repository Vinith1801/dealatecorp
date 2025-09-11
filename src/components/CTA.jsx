import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA({ to = "#", label = "Get started", primary = false }) {
  const baseClasses =
    "inline-flex group items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";

  if (primary) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to={to}
          aria-label={label}
          className={`${baseClasses} bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0`}
        >
          {label}
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    );
  }

  return (
    <Link
      to={to}
      aria-label={label}
      className={`${baseClasses} border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-sky-600 active:bg-gray-100`}
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
