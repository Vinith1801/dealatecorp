import React from "react";
import { motion } from "framer-motion";
import Card from "../components/ServiceCard";
import { RefreshCcw, Smartphone, Cloud, Brain, Users, Briefcase } from "lucide-react";

const services = [
  { icon: <RefreshCcw />, title: "Digital Transformation", desc: "Modernize processes and platforms for scale.", oneliner: "Business agility through technology." },
  { icon: <Smartphone />, title: "Mobile Development", desc: "End-to-end mobile product development.", oneliner: "Fast, secure mobile experiences." },
  { icon: <Cloud />, title: "Cloud", desc: "Migration, infra-as-code, managed ops.", oneliner: "Resilient and cost-effective cloud." },
  { icon: <Brain />, title: "Analytics & AI", desc: "ML models, data platforms, dashboards.", oneliner: "Operationalize data for decisions." },
  { icon: <Users />, title: "IT Staffing", desc: "Contract & permanent talent sourcing.", oneliner: "Right-fit engineers, fast." },
  { icon: <Briefcase />, title: "Consulting", desc: "Strategy, architecture, delivery leadership.", oneliner: "Reduce risk, improve outcomes." },
];

const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }) };

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
          <motion.div key={i} initial="hidden" whileInView="visible" variants={sectionVariant} custom={i} viewport={{ once: true }}>
            <Card icon={s.icon} title={s.title} desc={s.desc} oneliner={s.oneliner} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
