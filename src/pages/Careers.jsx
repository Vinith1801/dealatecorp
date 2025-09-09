import React from "react";
import { MapPin, Briefcase, Send } from "lucide-react";

const jobs = [
  {
    role: "Java Developer",
    location: "Hyderabad",
    details: "Microservices & Spring Boot expertise (4+ years).",
  },
  {
    role: "Salesforce Developer",
    location: "Hyderabad",
    details: "Apex, LWC, CI/CD, TDD (5–8 years).",
  },
  {
    role: "Lead Salesforce Developer",
    location: "Noida",
    details: "Mentor teams, lead architecture (6 years).",
  },
  {
    role: "Copado DevOps Release Engineer",
    location: "Hyderabad",
    details: "CI/CD pipelines, Github, Salesforce DevOps (4 years).",
  },
  {
    role: "Customer Support Executive",
    location: "Hyderabad",
    details: "Fresh graduate, excellent communication, US shift.",
  },
];

export default function Careers() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <header className="text-center md:text-left">
        <h1 className="text-3xl font-heading font-bold text-charcoal">
          Join Our Team
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          At Dealatecorp, we don’t just hire — we empower talent to build the
          future. See open roles and what makes us unique.
        </p>
      </header>

      {/* Open Positions */}
      <section>
        <h2 className="text-2xl font-heading font-bold">Open Positions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((j, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-gray-900">{j.role}</h3>
              </div>
              <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                {j.location}
              </div>
              <p className="text-sm text-gray-600 mt-2">{j.details}</p>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium flex items-center gap-2 hover:shadow hover:-translate-y-0.5 transition">
                <Send className="w-4 h-4" /> Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section>
        <h2 className="text-2xl font-heading font-bold">What We Offer</h2>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Dynamic, inclusive culture",
            "Learning pathways, training, certifications",
            "Hybrid and flexible working models",
            "Global exposure with international clients",
          ].map((offer, i) => (
            <li
              key={i}
              className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800">{offer}</h3>
            </li>
          ))}
        </ul>
      </section>

      {/* Register Section */}
      <section className="bg-slate-50 p-8 rounded-xl text-center shadow-sm">
        <h3 className="text-xl font-heading font-bold text-gray-900">
          Not ready to apply?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Register for updates if you’re exploring opportunities.
        </p>
        <form className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md border w-full sm:w-72 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-primary text-white rounded-md font-medium shadow hover:shadow-md hover:-translate-y-0.5 transition"
          >
            Register
          </button>
        </form>
      </section>
    </div>
  );
}
