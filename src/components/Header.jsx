import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" aria-label="Dealatecorp home" className="flex items-center gap-3">
            <img src="/src/assets/logo.webp" alt="Dealatecorp logo" className="h-9 w-9 object-contain"/>
            <span className="hidden sm:inline-block text-xl font-semibold text-primary">Dealatecorp</span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <NavLink to="/services" className={({isActive})=> isActive ? "text-primary font-medium" : "text-gray-700"}>Services</NavLink>
            <NavLink to="/infirmary-hub" className="text-gray-700">Infirmary Hub</NavLink>
            <NavLink to="/about" className="text-gray-700">About</NavLink>
            <NavLink to="/careers" className="text-gray-700">Careers</NavLink>
            <Link to="/contact" className="ml-4 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium">Contact</Link>
          </nav>

          {/* mobile menu button */}
          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2 rounded-md focus-visible:ring-2">
              <svg width="24" height="24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
