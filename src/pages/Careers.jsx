import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Send } from "lucide-react";
import Card from "../components/ServiceCard"; // reuse the premium card component

const jobs = [
  { role: "Java Developer", location: "Hyderabad", details: "Microservices & Spring Boot expertise (4+ years)." },
  { role: "Salesforce Developer", location: "Hyderabad", details: "Apex, LWC, CI/CD, TDD (5–8 years)." },
  { role: "Lead Salesforce Developer", location: "Noida", details: "Mentor teams, lead architecture (6 years)." },
  { role: "Copado DevOps Release Engineer", location: "Hyderabad", details: "CI/CD pipelines, Github, Salesforce DevOps (4 years)." },
  { role: "Customer Support Executive", location: "Hyderabad", details: "Fresh graduate, excellent communication, US shift." },
];

const offers = [
  "Dynamic, inclusive culture",
  "Learning pathways, training, certifications",
  "Hybrid and flexible working models",
  "Global exposure with international clients",
];

const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }) };

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

      {/* Header */}
      <motion.header className="text-center md:text-left max-w-3xl mx-auto space-y-3"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900">Join Our Team</h1>
        <p className="text-gray-600">
          At Dealatecorp, we don’t just hire — we empower talent to build the future. See open roles and what makes us unique.
        </p>
      </motion.header>

      {/* Open Positions */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={sectionVariant} custom={i} viewport={{ once: true }}>
              <Card
                icon={<Briefcase className="w-5 h-5 text-sky-500" />}
                title={job.role}
                desc={
                  <>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </div>
                    <p className="text-sm text-gray-600">{job.details}</p>
                  </>
}
                cta={{ label: "Apply Now", icon: <Send className="w-4 h-4" />, gradient: "from-sky-500 to-violet-500" }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={sectionVariant} custom={i} viewport={{ once: true }}>
              <Card
                icon={<Send className="w-5 h-5 text-sky-500" />} // optional icon for uniformity
                title={offer}
                desc={null}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Register Section */}
      <section className="bg-white/50 backdrop-blur-md p-8 rounded-3xl text-center shadow-md">
        <h3 className="text-2xl font-bold text-gray-900">Not ready to apply?</h3>
        <p className="mt-2 text-gray-600">Register for updates if you’re exploring opportunities.</p>
        <form className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
          <input type="email" placeholder="Your email" className="px-4 py-3 rounded-2xl border focus:ring-2 focus:ring-sky-500 focus:outline-none w-full sm:w-72" />
          <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Register
          </button>
        </form>
      </section>

    </div>
  );
}
