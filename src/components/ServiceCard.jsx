import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, desc, oneliner }) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 12px 28px rgba(2,6,23,0.08)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start gap-5">
        {/* Icon wrapper */}
        <div className="w-14 h-14 flex-none flex items-center justify-center rounded-xl bg-primary/10">
          {icon}
        </div>

        {/* Text Content */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm mt-2 text-gray-600 leading-relaxed">{desc}</p>
          <p className="mt-3 text-xs text-gray-500 italic">{oneliner}</p>
        </div>
      </div>
    </motion.article>
  );
}
