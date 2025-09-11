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
  const whatWeDo = [
    {
      icon: <Smartphone className="w-6 h-6 text-sky-500" />,
      title: "Web & Mobile Development",
      desc: "Responsive, user-centric, built for performance.",
    },
    {
      icon: <Code className="w-6 h-6 text-sky-500" />,
      title: "Software Engineering",
      desc: "Agile, scalable solutions using PHP, Python, JavaScript, Java, and more.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-sky-500" />,
      title: "Cloud, Analytics & AI",
      desc: "Data-driven strategies for smarter decisions.",
    },
    {
      icon: <Users className="w-6 h-6 text-sky-500" />,
      title: "IT Recruitment & Staffing",
      desc: "Customized hiring across India, US, UK markets.",
    },
  ];

  const whyClientsChooseUs = [
    {
      icon: <Target className="w-6 h-6 text-sky-500" />,
      title: "Transparent & ROI-focused",
      desc: "Clear metrics and outcomes for every engagement.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-sky-500" />,
      title: "Flexible Engagement",
      desc: "Project-based, contract, or full-time staffing options.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-sky-500" />,
      title: "Domain Expertise",
      desc: "Proven across healthcare, finance, education, and more.",
    },
    {
      icon: <Shield className="w-6 h-6 text-sky-500" />,
      title: "Reliable & Innovative Team",
      desc: "Integrity and creativity define how we work.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20 relative">
      {/* Intro */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          At <span className="text-sky-500 font-semibold">Dealatecorp</span>, our
          mission is to harness technology with purpose — enabling organizations
          to scale, compete, and thrive through intelligent IT solutions and
          talent partnerships.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2016 in Visakhapatnam and now also based in Hyderabad,
          Dealatecorp was born from a shared vision: blending home-grown IT
          expertise with global agility. Today, we empower clients across
          healthcare, education, finance, and startups — wherever innovation meets
          opportunity.
        </p>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatWeDo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
              className="bg-white/50 backdrop-blur-md rounded-3xl p-6 flex items-start gap-4 border border-gray-100 shadow-md hover:shadow-2xl transition-all"
            >
              <div className="p-3 rounded-xl bg-sky-100/30">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why Clients Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyClientsChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
              className="bg-white/50 backdrop-blur-md rounded-3xl p-6 flex items-start gap-4 border border-gray-100 shadow-md hover:shadow-2xl transition-all"
            >
              <div className="p-3 rounded-xl bg-sky-100/30">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
