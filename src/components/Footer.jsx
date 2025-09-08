import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/src/assets/logo.webp" alt="Dealatecorp logo" className="h-10 w-auto mb-3"/>
          <p className="text-sm text-gray-200 max-w-sm">Premium IT consulting and digital innovation services. Driving transformation with people-first technology.</p>
        </div>
        <div>
          <h4 className="font-semibold">Services</h4>
          <ul className="mt-3 text-sm text-gray-300 space-y-2">
            <li><Link to="/services">Digital Transformation</Link></li>
            <li><Link to="/infirmary-hub">Infirmary Hub</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <address className="not-italic mt-3 text-sm text-gray-300">
            Dealatecorp Innovations Pvt Ltd<br/>
            123 Business Road, City, Country<br/>
            <a href="mailto:info@dealatecorp.com" className="text-gray-200">info@dealatecorp.com</a>
          </address>
        </div>
      </div>
      <div className="border-t border-charcoal/60 py-4 text-center text-xs text-gray-300">© {new Date().getFullYear()} Dealatecorp Innovations Pvt Ltd. All rights reserved.</div>
    </footer>
  )
}
