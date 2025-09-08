import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({icon, title, desc, oneliner}){
  return (
    <motion.article whileHover={{y:-6, boxShadow:"0 10px 30px rgba(2,6,23,0.08)"}} className="bg-white rounded-lg p-6 border">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex-none flex items-center justify-center rounded-md bg-gray-50">
          <img src={icon} alt="" className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-charcoal">{title}</h3>
          <p className="text-sm mt-2 text-gray-600">{desc}</p>
          <p className="mt-3 text-xs text-gray-500 italic">{oneliner}</p>
        </div>
      </div>
    </motion.article>
  )
}
