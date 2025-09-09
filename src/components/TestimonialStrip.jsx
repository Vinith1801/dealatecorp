import React from "react";
import { Quote } from "lucide-react";

export default function TestimonialStrip({ items = [] }) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          What Our Clients Say
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {items.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-sm bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
            >
              <Quote className="w-6 h-6 text-primary mb-3" />
              <p className="text-base text-gray-700 leading-relaxed">
                “{t.quote}”
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
