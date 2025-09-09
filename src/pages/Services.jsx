import React from "react";
import ServiceCard from "../components/ServiceCard";
import {
  RefreshCcw,
  Smartphone,
  Cloud,
  Brain,
  Users,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: <RefreshCcw className="w-6 h-6 text-primary" />,
    title: "Digital Transformation",
    desc: "Modernize processes and platforms for scale.",
    oneliner: "Business agility through technology.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Mobile Development",
    desc: "End-to-end mobile product development.",
    oneliner: "Fast, secure mobile experiences.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Cloud",
    desc: "Migration, infra-as-code, managed ops.",
    oneliner: "Resilient and cost-effective cloud.",
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Analytics & AI",
    desc: "ML models, data platforms, dashboards.",
    oneliner: "Operationalize data for decisions.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "IT Staffing",
    desc: "Contract & permanent talent sourcing.",
    oneliner: "Right-fit engineers, fast.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-primary" />,
    title: "Consulting",
    desc: "Strategy, architecture, delivery leadership.",
    oneliner: "Reduce risk, improve outcomes.",
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-heading font-bold text-charcoal">
          Services
        </h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          We deliver end-to-end capabilities that blend{" "}
          <span className="font-semibold text-primary">technology</span>,{" "}
          <span className="font-semibold text-primary">people</span> and{" "}
          <span className="font-semibold text-primary">data</span>.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
