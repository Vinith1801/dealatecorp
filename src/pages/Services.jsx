import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCcw,
  Smartphone,
  Cloud,
  Brain,
  Users,
  Briefcase,
} from "lucide-react";

const services = [
  { icon: <RefreshCcw className="w-6 h-6 text-sky-500" />, title: "Digital Transformation", desc: "Modernize processes and platforms for scale.", oneliner: "Business agility through technology." },
  { icon: <Smartphone className="w-6 h-6 text-sky-500" />, title: "Mobile Development", desc: "End-to-end mobile product development.", oneliner: "Fast, secure mobile experiences." },
  { icon: <Cloud className="w-6 h-6 text-sky-500" />, title: "Cloud", desc: "Migration, infra-as-code, managed ops.", oneliner: "Resilient and cost-effective cloud." },
  { icon: <Brain className="w-6 h-6 text-sky-500" />, title: "Analytics & AI", desc: "ML models, data platforms, dashboards.", oneliner: "Operationalize data for decisions." },
  { icon: <Users className="w-6 h-6 text-sky-500" />, title: "IT Staffing", desc: "Contract & permanent talent sourcing.", oneliner: "Right-fit engineers, fast." },
  { icon: <Briefcase className="w-6 h-6 text-sky-500" />, title: "Consulting", desc: "Strategy, architecture, delivery leadership.", oneliner: "Reduce risk, improve outcomes." },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Services</h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          We deliver end-to-end capabilities that blend <span className="font-semibold text-sky-500">technology</span>, <span className="font-semibold text-sky-500">people</span> and <span className="font-semibold text-sky-500">data</span>.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(0,0,0,0.08)" }}
            className="bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-sky-100/50">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
            </div>
            <p className="mt-3 text-gray-600">{s.desc}</p>
            <p className="mt-4 text-sky-500 font-medium italic">{s.oneliner}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
