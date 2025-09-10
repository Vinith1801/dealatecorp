import React from "react";
import Hero from "../components/Hero";
import TestimonialStrip from "../components/TestimonialStrip";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Smartphone,
  Cloud,
  Brain,
  Users,
  Briefcase,
} from "lucide-react";

// Services Data
const services = [
  {
    icon: <RefreshCw />,
    title: "Digital Transformation",
    desc: "Enterprise-wide modernization and process automation.",
    oneliner: "Turn strategy into measurable outcomes.",
  },
  {
    icon: <Smartphone />,
    title: "Mobile Development",
    desc: "Native & cross-platform mobile apps.",
    oneliner: "Engaging mobile experiences.",
  },
  {
    icon: <Cloud />,
    title: "Cloud",
    desc: "Cloud strategy, migration and managed ops.",
    oneliner: "Scale securely with cost efficiency.",
  },
  {
    icon: <Brain />,
    title: "Analytics & AI",
    desc: "Data engineering, ML models & BI.",
    oneliner: "Turn data into competitive advantage.",
  },
  {
    icon: <Users />,
    title: "IT Staffing",
    desc: "On-demand domain experts & teams.",
    oneliner: "Staff faster with vetted talent.",
  },
  {
    icon: <Briefcase />,
    title: "Consulting",
    desc: "Advisory across technology roadmap & delivery.",
    oneliner: "Decisions backed by experience.",
  },
];

// Why Us Data
const whyUs = [
  {
    title: "Trusted Partners",
    desc: "Delivered solutions for healthcare & enterprise clients with focus on compliance and uptime.",
  },
  {
    title: "Outcome Driven",
    desc: "KPIs, measurable ROI and pragmatic roadmaps embedded into every engagement.",
  },
  {
    title: "Global Talent",
    desc: "Access to vetted engineers, data scientists and leaders across time zones.",
  },
];

export default function Home() {
  return (
    <div className="relative space-y-28 overflow-hidden">
      {/* Hero */}
      <Hero />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          What{" "}
          <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
            We Do
          </span>
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
          From strategy to delivery — we help companies adopt modern engineering
          and operational practices.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-violet-50 opacity-0 group-hover:opacity-25 transition-opacity rounded-3xl pointer-events-none" />

              <div className="relative flex flex-col gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-violet-200 text-sky-600 text-2xl font-bold transition-all duration-500 group-hover:from-violet-200 group-hover:to-sky-100">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
                <p className="text-xs text-gray-500 italic group-hover:animate-pulse">{s.oneliner}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/services"
            className="text-sm font-semibold text-sky-500 hover:underline"
          >
            Explore all services →
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-[1200px] h-[900px]">
            <defs>
              <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <g stroke="url(#grad)" strokeWidth="1">
              <line x1="100" y1="100" x2="700" y2="100" />
              <line x1="100" y1="300" x2="700" y2="300" />
              <line x1="100" y1="500" x2="700" y2="500" />
              <line x1="100" y1="100" x2="100" y2="500" />
              <line x1="400" y1="100" x2="400" y2="500" />
              <line x1="700" y1="100" x2="700" y2="500" />
            </g>
            <circle cx="100" cy="100" r="6" fill="url(#grad)" />
            <circle cx="400" cy="100" r="6" fill="url(#grad)" />
            <circle cx="700" cy="100" r="6" fill="url(#grad)" />
            <circle cx="100" cy="300" r="6" fill="url(#grad)" />
            <circle cx="400" cy="300" r="6" fill="url(#grad)" />
            <circle cx="700" cy="300" r="6" fill="url(#grad)" />
            <circle cx="100" cy="500" r="6" fill="url(#grad)" />
            <circle cx="400" cy="500" r="6" fill="url(#grad)" />
            <circle cx="700" cy="500" r="6" fill="url(#grad)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why{" "}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              Dealatecorp
            </span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-transparent shadow-md hover:shadow-xl hover:scale-105 transition-all bg-gradient-to-r from-sky-50/20 to-violet-50/20"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm mt-3 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialStrip
        items={[
          {
            quote:
              "They transformed our platform and improved time-to-market dramatically.",
            name: "Dr. R. Iyer",
            role: "CTO, HealthCorp",
          },
          {
            quote:
              "Expert team and great communication — delivered results on time.",
            name: "Meghna S.",
            role: "VP Product",
          },
        ]}
      />

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 mb-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sky-50 to-violet-50 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Ready to{" "}
              <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
                accelerate
              </span>{" "}
              your transformation?
            </h3>
            <p className="text-base text-gray-600 mt-3">
              Tell us about your project and we’ll craft a roadmap.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Share Your Project Needs
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
