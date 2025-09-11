import React, { useMemo } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, desc, oneliner }) => {
  // Memoized gradient for hover to avoid recalculating on each render
  const gradientClasses = useMemo(
    () => "bg-gradient-to-br from-sky-100 to-violet-200 group-hover:from-violet-200 group-hover:to-sky-100",
    []
  );

  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      aria-label={`Service: ${title}`}
      className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group focus-within:ring-2 focus-within:ring-sky-400"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

      <div className="relative p-6 flex flex-col gap-4">
        {/* Icon */}
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold text-sky-600 transition-all duration-500 ${gradientClasses}`}
        >
          {icon}
        </div>

        {/* Text Content */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
        {oneliner && (
          <p className="text-xs text-gray-400 italic">{oneliner}</p>
        )}

        {/* Animated accent line */}
        <motion.div
          layout
          className="h-1 w-10 bg-sky-500 rounded-full mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        />
      </div>
    </motion.article>
  );
};

export default React.memo(ServiceCard);
