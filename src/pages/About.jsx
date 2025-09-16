import React from "react";
import { motion } from "framer-motion";
import Card from "../components/ServiceCard";
import { whatWeDo, whyClientsChooseUs } from "../data/about";

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
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
          At <span className="text-sky-500 font-semibold">Dealatecorp</span>, our mission is to harness technology with purpose — enabling organizations to scale, compete, and thrive through intelligent IT solutions and talent partnerships.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2016 in Visakhapatnam and now also based in Hyderabad, Dealatecorp was born from a shared vision: blending home-grown IT expertise with global agility. Today, we empower clients across healthcare, education, finance, and startups — wherever innovation meets opportunity.
        </p>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatWeDo.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={sectionVariant}
              custom={idx}
              viewport={{ once: true }}
            >
              <Card icon={<item.icon />} title={item.title} desc={item.desc} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Clients Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyClientsChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              variants={sectionVariant}
              custom={idx}
              viewport={{ once: true }}
            >
              <Card icon={<item.icon />} title={item.title} desc={item.desc} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
