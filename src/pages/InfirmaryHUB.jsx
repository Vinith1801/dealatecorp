import React from "react";
import CTA from "../components/CTA";

export default function InfirmaryHUB() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900">
            Infirmary Hub HCM
          </h1>
          <p className="text-gray-600 text-lg">
            A unified healthcare workforce & clinical management platform designed
            for large hospitals and networks.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 text-sm list-disc list-inside">
            <li>
              <strong>Unified Profiles:</strong> Single source of truth for staff
              credentials, schedules and compliance.
            </li>
            <li>
              <strong>EHR Integration:</strong> Seamless integrations with major
              EHR/EMR systems via HL7/FHIR.
            </li>
            <li>
              <strong>Security:</strong> Enterprise-grade encryption, RBAC and audit
              trails.
            </li>
          </ul>

          <div className="mt-6">
            <CTA to="/contact" label="Request a Demo" primary />
          </div>
        </div>

        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/src/assets/hero-screenshot.webp"
              alt="Infirmary Hub dashboard preview"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section>
        <h2 className="text-2xl font-heading font-bold text-gray-900">Benefits</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900">Operational Efficiency</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Automate rostering and reduce administrative overhead.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900">Clinical Safety</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Credential checks and role-based access reduce errors.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Audit-ready records and secure data handling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
