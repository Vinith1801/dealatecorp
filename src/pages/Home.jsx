import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialStrip from "../components/TestimonialStrip";
import { Link } from "react-router-dom";

// Import lucide-react icons
import {
  RefreshCw,
  Smartphone,
  Cloud,
  Brain,
  Users,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: <RefreshCw className="w-7 h-7 text-primary" />,
    title: "Digital Transformation",
    desc: "Enterprise-wide modernization and process automation.",
    oneliner: "Turn strategy into measurable outcomes.",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    title: "Mobile Development",
    desc: "Native & cross-platform mobile apps.",
    oneliner: "Engaging mobile experiences.",
  },
  {
    icon: <Cloud className="w-7 h-7 text-primary" />,
    title: "Cloud",
    desc: "Cloud strategy, migration and managed ops.",
    oneliner: "Scale securely with cost efficiency.",
  },
  {
    icon: <Brain className="w-7 h-7 text-primary" />,
    title: "Analytics & AI",
    desc: "Data engineering, ML models & BI.",
    oneliner: "Turn data into competitive advantage.",
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "IT Staffing",
    desc: "On-demand domain experts & teams.",
    oneliner: "Staff faster with vetted talent.",
  },
  {
    icon: <Briefcase className="w-7 h-7 text-primary" />,
    title: "Consulting",
    desc: "Advisory across technology roadmap & delivery.",
    oneliner: "Decisions backed by experience.",
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900">What We Do</h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
          From strategy to delivery — we help companies adopt modern engineering
          and operational practices.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/services"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Explore all services →
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900">Why Dealatecorp</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm mt-3 text-gray-600">{item.desc}</p>
              </div>
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

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/10 to-slate-50 p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-md">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to accelerate your transformation?
            </h3>
            <p className="text-base text-gray-600 mt-3">
              Tell us about your project and we’ll craft a roadmap.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Share Your Project Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
