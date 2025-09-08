import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA({to="#", label="Get started", primary=false}){
  if(primary) {
    return <Link to={to} className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-black rounded-md text-sm font-semibold shadow-md hover:translate-y-[-2px] transition-transform" aria-label={label}>{label}</Link>
  }
  return <Link to={to} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50" aria-label={label}>{label}</Link>
}
