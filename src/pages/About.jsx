import React from 'react'

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <section>
        <h1 className="text-3xl font-heading font-bold text-charcoal">About Us</h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          At Dealatecorp Innovations Pvt Ltd, our mission is to harness technology with purpose—enabling
          organizations to scale, compete, and thrive through intelligent IT solutions and talent partnerships.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-heading font-bold">Our Story</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Founded in 2016 in Visakhapatnam and now also based in Hyderabad, Dealatecorp was born from a shared
          vision: blending home-grown IT expertise with global agility. Today, we empower clients across healthcare,
          education, finance, and startups—wherever innovation meets opportunity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-heading font-bold">What We Do</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Web & Mobile Development</h3>
            <p className="text-sm text-gray-600 mt-1">Responsive, user-centric, built for performance.</p>
          </li>
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Software Engineering</h3>
            <p className="text-sm text-gray-600 mt-1">Agile, scalable solutions using PHP, Python, JavaScript, Java, and more.</p>
          </li>
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Cloud, Analytics & AI</h3>
            <p className="text-sm text-gray-600 mt-1">Data-driven strategies for smarter decisions.</p>
          </li>
          <li className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">IT Recruitment & Staffing</h3>
            <p className="text-sm text-gray-600 mt-1">Customized hiring across India, US, UK markets.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-heading font-bold">Why Clients Choose Us</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Transparent & ROI-focused</h3>
            <p className="text-sm text-gray-600 mt-1">Clear metrics and outcomes for every engagement.</p>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Flexible Engagement</h3>
            <p className="text-sm text-gray-600 mt-1">Project-based, contract, or full-time staffing options.</p>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Domain Expertise</h3>
            <p className="text-sm text-gray-600 mt-1">Proven across healthcare, finance, education, and more.</p>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold">Reliable & Innovative Team</h3>
            <p className="text-sm text-gray-600 mt-1">Integrity and creativity define how we work.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
