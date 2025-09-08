import React from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialStrip from '../components/TestimonialStrip'
import { Link } from 'react-router-dom'

const services = [
  { icon: '/src/assets/icon-digital.svg', title:'Digital Transformation', desc:'Enterprise-wide modernization and process automation.', oneliner:'Turn strategy into measurable outcomes.' },
  { icon: '/src/assets/icon-mobile.svg', title:'Mobile Development', desc:'Native & cross-platform mobile apps.', oneliner:'Engaging mobile experiences.' },
  { icon: '/src/assets/icon-cloud.svg', title:'Cloud', desc:'Cloud strategy, migration and managed ops.', oneliner:'Scale securely with cost efficiency.' },
  { icon: '/src/assets/icon-ai.svg', title:'Analytics & AI', desc:'Data engineering, ML models & BI.', oneliner:'Turn data into competitive advantage.' },
  { icon: '/src/assets/icon-staffing.svg', title:'IT Staffing', desc:'On-demand domain experts & teams.', oneliner:'Staff faster with vetted talent.' },
  { icon: '/src/assets/icon-consulting.svg', title:'Consulting', desc:'Advisory across technology roadmap & delivery.', oneliner:'Decisions backed by experience.' }
]

export default function Home(){
  return (
    <div className="space-y-12">
      <Hero />
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-charcoal">What We Do</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">From strategy to delivery — we help companies adopt modern engineering and operational practices.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s,i)=> <ServiceCard key={i} {...s} />)}
        </div>

        <div className="mt-8">
          <Link to="/services" className="text-sm text-primary font-medium">Explore all services →</Link>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-charcoal">Why Dealatecorp</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold">Trusted Partners</h3>
              <p className="text-sm mt-2 text-gray-600">Delivered solutions for healthcare & enterprise clients with focus on compliance and uptime.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold">Outcome Driven</h3>
              <p className="text-sm mt-2 text-gray-600">KPIs, measurable ROI and pragmatic roadmaps embedded into every engagement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold">Global Talent</h3>
              <p className="text-sm mt-2 text-gray-600">Access to vetted engineers, data scientists and leaders across time zones.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialStrip items={[
        {quote:'They transformed our platform and improved time-to-market dramatically.', name:'Dr. R. Iyer', role:'CTO, HealthCorp'},
        {quote:'Expert team and great communication — delivered results on time.', name:'Meghna S.', role:'VP Product'}
      ]} />

      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-white to-slate-50 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold text-charcoal">Ready to accelerate your transformation?</h3>
            <p className="text-sm text-gray-600 mt-2">Tell us about your project and we’ll craft a roadmap.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/contact" className="px-5 py-3 bg-primary text-white rounded-md">Share Your Project Needs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
