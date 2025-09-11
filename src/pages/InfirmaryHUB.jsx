import React from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";

export default function InfirmaryHUB() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/src/assets/hero-screenshot.webp"
            alt="Infirmary Hub dashboard preview"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </div>

      {/* Benefits Section */}
      <section>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Operational Efficiency",
              desc: "Automate rostering and reduce administrative overhead.",
            },
            {
              title: "Clinical Safety",
              desc: "Credential checks and role-based access reduce errors.",
            },
            {
              title: "Regulatory Compliance",
              desc: "Audit-ready records and secure data handling.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
              className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all"
            >
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
