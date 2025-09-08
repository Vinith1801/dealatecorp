import React from 'react'
import ServiceCard from '../components/ServiceCard'

const services = [
  { icon: '/src/assets/icon-digital.svg', title:'Digital Transformation', desc:'Modernize processes and platforms for scale.', oneliner:'Business agility through technology.' },
  { icon: '/src/assets/icon-mobile.svg', title:'Mobile Development', desc:'End-to-end mobile product development.', oneliner:'Fast, secure mobile experiences.' },
  { icon: '/src/assets/icon-cloud.svg', title:'Cloud', desc:'Migration, infra-as-code, managed ops.', oneliner:'Resilient and cost-effective cloud.' },
  { icon: '/src/assets/icon-ai.svg', title:'Analytics & AI', desc:'ML models, data platforms, dashboards.', oneliner:'Operationalize data for decisions.' },
  { icon: '/src/assets/icon-staffing.svg', title:'IT Staffing', desc:'Contract & permanent talent sourcing.', oneliner:'Right-fit engineers, fast.' },
  { icon: '/src/assets/icon-consulting.svg', title:'Consulting', desc:'Strategy, architecture, delivery leadership.', oneliner:'Reduce risk, improve outcomes.' }
]

export default function Services(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading font-bold text-charcoal">Services</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">We deliver end-to-end capabilities that blend technology, people and data.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s,i)=> <ServiceCard key={i} {...s} />)}
      </div>
    </div>
  )
}
