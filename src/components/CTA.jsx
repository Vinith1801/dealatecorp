import React from "react";
import { Link } from "react-router-dom";

export default function CTA({ to = "#", label = "Get started", primary = false }) {
  if (primary) {
    return (
      <Link
        to={to}
        aria-label={label}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 
                   rounded-xl text-sm font-semibold 
                   bg-sky-500 text-white shadow-md 
                   hover:shadow-lg hover:-translate-y-0.5 
                   active:translate-y-0 
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
      className="inline-flex items-center justify-center gap-2 px-5 py-3 
                 rounded-xl text-sm font-medium 
                 border border-gray-300 text-gray-700 
                 hover:bg-gray-50 hover:text-primary 
                 active:bg-gray-100 
                 transition-all duration-200"
    >
      {label}
    </Link>
  );
}
