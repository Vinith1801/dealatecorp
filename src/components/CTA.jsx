import React from "react";
import { Link } from "react-router-dom";

export default function CTA({ to = "#", label = "Get started", primary = false }) {
  if (primary) {
    return (
      <Link
        to={to}
        aria-label={label}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 
                   rounded-xl text-sm font-semibold 
                   bg-gradient-to-r from-sky-500 to-violet-500 
                   text-white shadow-md hover:shadow-lg 
                   hover:-translate-y-0.5 active:translate-y-0 
                   focus-visible:ring-2 focus-visible:ring-sky-400 
                   transition-all duration-200"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      aria-label={label}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 
                 rounded-xl text-sm font-medium 
                 border border-gray-300 text-gray-700 
                 hover:bg-gray-50 hover:text-sky-600 
                 active:bg-gray-100 
                 focus-visible:ring-2 focus-visible:ring-sky-400 
                 transition-all duration-200"
    >
      {label}
    </Link>
  );
}
