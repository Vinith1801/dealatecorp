import React from 'react'

const jobs = [
  { role:'Java Developer', location:'Hyderabad', details:'Microservices & Spring Boot expertise (4+ years).' },
  { role:'Salesforce Developer', location:'Hyderabad', details:'Apex, LWC, CI/CD, TDD (5–8 years).' },
  { role:'Lead Salesforce Developer', location:'Noida', details:'Mentor teams, lead architecture (6 years).' },
  { role:'Copado DevOps Release Engineer', location:'Hyderabad', details:'CI/CD pipelines, Github, Salesforce DevOps (4 years).' },
  { role:'Customer Support Executive', location:'Hyderabad', details:'Fresh graduate, excellent communication, US shift.' }
]

export default function Careers(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <header>
        <h1 className="text-3xl font-heading font-bold text-charcoal">Join Our Team</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          At Dealatecorp, we don’t just hire—we empower talent to build the future. See open roles and what makes us unique.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-heading font-bold">Open Positions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((j,i)=>(
            <div key={i} className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold">{j.role} <span className="text-sm text-gray-500">({j.location})</span></h3>
              <p className="text-sm text-gray-600 mt-2">{j.details}</p>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-heading font-bold">What We Offer</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Dynamic, inclusive culture</h3>
          </li>
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Learning pathways, training, certifications</h3>
          </li>
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Hybrid and flexible working models</h3>
          </li>
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Global exposure with international clients</h3>
          </li>
        </ul>
      </section>

      <section className="bg-slate-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-heading font-bold">Not ready to apply?</h3>
        <p className="mt-2 text-sm text-gray-600">Register for updates if you’re exploring opportunities.</p>
        <form className="mt-4 flex justify-center gap-2">
          <input type="email" placeholder="Your email" className="px-4 py-2 rounded-md border w-64"/>
          <button className="px-5 py-2 bg-primary text-white rounded-md">Register</button>
        </form>
      </section>
    </div>
  )
}
