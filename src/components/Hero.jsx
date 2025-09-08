import React from 'react'
import { motion } from 'framer-motion'
import CTA from './CTA'

export default function Hero(){
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-heading font-bold text-charcoal leading-tight">
            Empowering Growth Through Digital Innovation
          </motion.h1>
          <motion.p initial={{y:6,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.12}} className="mt-4 text-lg text-gray-600 max-w-2xl">
            We deliver enterprise-grade IT solutions — IT staffing, cloud & mobile development, AI & analytics, and healthcare IT to accelerate transformation.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CTA to="/services" label="Explore Our Services" primary />
            <CTA to="/about" label="Meet Our Team" />
            <CTA to="/contact" label="Share Your Project Needs" />
          </div>

          <div className="mt-8">
            <ul className="flex gap-6 text-sm text-gray-500">
              <li><strong className="text-gray-900">Industries:</strong> Healthcare, Finance, Retail</li>
              <li className="sr-only">SEO keywords</li>
            </ul>
          </div>
        </div>

        <motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.6}} className="w-full">
          <div className="bg-gradient-to-tr from-white to-slate-50 rounded-xl shadow-lg p-4">
            <img src="/src/assets/hero.jpg" alt="Dashboard preview — Infirmary Hub" className="rounded-md w-full h-[320px] object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
