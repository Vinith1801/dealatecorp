import React from 'react'

export default function TestimonialStrip({items=[]}){
  return (
    <div className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 flex gap-6 overflow-x-auto">
        {items.map((t,idx)=>(
          <div key={idx} className="min-w-[260px] bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-700">“{t.quote}”</p>
            <div className="mt-3 text-xs text-gray-500">{t.name} — {t.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
