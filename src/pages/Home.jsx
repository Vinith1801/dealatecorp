import React from "react";
import Hero from "../components/Hero";
import TestimonialStrip from "../components/TestimonialStrip";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { RefreshCw, Smartphone, Cloud, Brain, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// Services Data
const services = [
  { icon: <RefreshCw />, title: "Digital Transformation", desc: "Enterprise-wide modernization and process automation.", oneliner: "Turn strategy into measurable outcomes." },
  { icon: <Smartphone />, title: "Mobile Development", desc: "Native & cross-platform mobile apps.", oneliner: "Engaging mobile experiences." },
  { icon: <Cloud />, title: "Cloud", desc: "Cloud strategy, migration and managed ops.", oneliner: "Scale securely with cost efficiency." },
  { icon: <Brain />, title: "Analytics & AI", desc: "Data engineering, ML models & BI.", oneliner: "Turn data into competitive advantage." },
  { icon: <Users />, title: "IT Staffing", desc: "On-demand domain experts & teams.", oneliner: "Staff faster with vetted talent." },
  { icon: <Briefcase />, title: "Consulting", desc: "Advisory across technology roadmap & delivery.", oneliner: "Decisions backed by experience." },
];

// Why Us Data
const whyUs = [
  { title: "Trusted Partners", desc: "Delivered solutions for healthcare & enterprise clients with focus on compliance and uptime." },
  { title: "Outcome Driven", desc: "KPIs, measurable ROI and pragmatic roadmaps embedded into every engagement." },
  { title: "Global Talent", desc: "Access to vetted engineers, data scientists and leaders across time zones." },
];

// Motion variants
const sectionVariant = { hidden: { opacity: 0, y: 30 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }) };

export default function Home() {
  return (
    <div className="relative space-y-28 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 relative">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          What <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">We Do</span>
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl">
          From strategy to delivery — we help companies adopt modern engineering and operational practices.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={sectionVariant}
              custom={i}
              viewport={{ once: true }}
              className="group"
            >
              <ServiceCard {...s} className="transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <CTA to="/services" label="Explore all services" />
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background mesh with glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20">
          <svg viewBox="0 0 800 600" className="w-[1200px] h-[900px]">
            <defs>
              <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <g stroke="url(#grad)" strokeWidth="1">
              {[100, 400, 700].map(x =>
                [100, 300, 500].map(y => (
                  <line key={`h-${x}-${y}`} x1={100} y1={y} x2={700} y2={y} />
                ))
              )}
              {[100, 400, 700].map(x =>
                [100, 300, 500].map(y => (
                  <line key={`v-${x}-${y}`} x1={x} y1={100} x2={x} y2={500} />
                ))
              )}
            </g>
            {[100, 400, 700].map(cx =>
              [100, 300, 500].map(cy => (
                <circle
                  key={`${cx}-${cy}`}
                  cx={cx}
                  cy={cy}
                  r="6"
                  fill="url(#grad)"
                  className="drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]"
                />
              ))
            )}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">Dealatecorp</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={sectionVariant}
                custom={i}
                viewport={{ once: true }}
              >
                <div className="relative bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-transparent shadow-md hover:shadow-xl hover:scale-105 transition-all bg-gradient-to-r from-sky-50/30 to-violet-50/30">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm mt-3 text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialStrip
        items={[
          { quote: "They transformed our platform and improved time-to-market dramatically.", name: "Dr. R. Iyer", role: "CTO, HealthCorp" },
          { quote: "Expert team and great communication — delivered results on time.", name: "Meghna S.", role: "VP Product" },
        ]}
      />

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 mb-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Gradient frame wrapper */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-sky-400 via-indigo-400 to-violet-500 shadow-xl hover:shadow-2xl transition">
            <div className="bg-gradient-to-r from-sky-50 to-violet-50 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Ready to <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">accelerate</span> your transformation?
                </h3>
                <p className="text-base text-gray-600 mt-3">
                  Tell us about your project and we’ll craft a roadmap.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <CTA to="/contact" label="Share Your Project Needs" primary />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
