import React from 'react'
import CTA from '../components/CTA'

export default function InfirmaryHUB(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Infirmary Hub HCM</h1>
          <p className="mt-3 text-gray-600">A unified healthcare workforce & clinical management platform designed for large hospitals and networks.</p>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li><strong>Unified Profiles:</strong> Single source of truth for staff credentials, schedules and compliance.</li>
            <li><strong>EHR Integration:</strong> Seamless integrations with major EHR/EMR systems via HL7/FHIR.</li>
            <li><strong>Security:</strong> Enterprise-grade encryption, RBAC and audit trails.</li>
          </ul>

          <div className="mt-6">
            <CTA to="/contact" label="Request a Demo" primary />
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/src/assets/hero-screenshot.webp" alt="Infirmary Hub dashboard preview" className="w-full h-[420px] object-cover"/>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-charcoal">Benefits</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-medium">Operational Efficiency</h4>
            <p className="text-sm text-gray-600 mt-1">Automate rostering and reduce administrative overhead.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-medium">Clinical Safety</h4>
            <p className="text-sm text-gray-600 mt-1">Credential checks and role-based access reduce errors.</p>
          </div>
          <div className="bg-white rounded-lg p-4 border">
            <h4 className="font-medium">Regulatory Compliance</h4>
            <p className="text-sm text-gray-600 mt-1">Audit-ready records and secure data handling.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
