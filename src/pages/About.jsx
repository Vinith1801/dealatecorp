import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Users,
  Target,
  Briefcase,
  Lightbulb,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-heading font-bold text-charcoal"
        >
          About Us
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          At <span className="text-sky-400 font-semibold">Dealatecorp</span>, our
          mission is to harness technology with purpose—enabling organizations
          to scale, compete, and thrive through intelligent IT solutions and
          talent partnerships.
        </p>
      </section>

      {/* Story */}
      <section>
        <h2 className="text-2xl font-heading font-bold text-charcoal">
          Our Story
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl leading-relaxed">
          Founded in 2016 in Visakhapatnam and now also based in Hyderabad,
          Dealatecorp was born from a shared vision: blending home-grown IT
          expertise with global agility. Today, we empower clients across
          healthcare, education, finance, and startups—wherever innovation meets
          opportunity.
        </p>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-2xl font-heading font-bold text-charcoal">
          What We Do
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Smartphone className="w-6 h-6 text-sky-400" />,
              title: "Web & Mobile Development",
              desc: "Responsive, user-centric, built for performance.",
            },
            {
              icon: <Code className="w-6 h-6 text-sky-400" />,
              title: "Software Engineering",
              desc: "Agile, scalable solutions using PHP, Python, JavaScript, Java, and more.",
            },
            {
              icon: <Cloud className="w-6 h-6 text-sky-400" />,
              title: "Cloud, Analytics & AI",
              desc: "Data-driven strategies for smarter decisions.",
            },
            {
              icon: <Users className="w-6 h-6 text-sky-400" />,
              title: "IT Recruitment & Staffing",
              desc: "Customized hiring across India, US, UK markets.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}
              className="bg-white rounded-2xl p-6 border shadow-sm flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-sky-400/10">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-charcoal">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section>
        <h2 className="text-2xl font-heading font-bold text-charcoal">
          Why Clients Choose Us
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <Target className="w-6 h-6 text-sky-400" />,
              title: "Transparent & ROI-focused",
              desc: "Clear metrics and outcomes for every engagement.",
            },
            {
              icon: <Briefcase className="w-6 h-6 text-sky-400" />,
              title: "Flexible Engagement",
              desc: "Project-based, contract, or full-time staffing options.",
            },
            {
              icon: <Lightbulb className="w-6 h-6 text-sky-400" />,
              title: "Domain Expertise",
              desc: "Proven across healthcare, finance, education, and more.",
            },
            {
              icon: <Shield className="w-6 h-6 text-sky-400" />,
              title: "Reliable & Innovative Team",
              desc: "Integrity and creativity define how we work.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}
              className="bg-white rounded-2xl p-6 border shadow-sm flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-sky-400/10">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-charcoal">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
