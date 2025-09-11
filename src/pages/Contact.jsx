import React, { useState } from "react";
import { Send, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../components/ServiceCard"; // reusable card component

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => setStatus("Thanks — we will respond within 24 hours."), 900);
  }

  const sectionVariant = { hidden: { opacity: 0, y: 20 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }) };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

      {/* Header */}
      <motion.header className="text-center" initial="hidden" whileInView="visible" variants={sectionVariant}>
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">We’ll respond within 24 hours.</p>
      </motion.header>

      {/* Contact Form */}
      <motion.form onSubmit={handleSubmit} className="grid gap-6" initial="hidden" whileInView="visible" variants={sectionVariant}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["name", "email"].map((field, i) => (
            <label key={i} className="block">
              <span className="text-sm text-gray-700 capitalize">{field}</span>
              <input
                required
                name={field}
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={handleChange}
                placeholder={field === "email" ? "you@example.com" : "Your Name"}
                className="mt-1 block w-full rounded-3xl bg-white/50 backdrop-blur-md border border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-sm transition"
              />
            </label>
          ))}
        </div>

        <label>
          <span className="text-sm text-gray-700">Company</span>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="mt-1 block w-full rounded-3xl bg-white/50 backdrop-blur-md border border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-sm transition"
          />
        </label>

        <label>
          <span className="text-sm text-gray-700">Message</span>
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your message..."
            className="mt-1 block w-full rounded-3xl bg-white/50 backdrop-blur-md border border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-sm transition resize-none"
          />
        </label>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-3xl font-medium shadow hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
          {status && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-gray-600">{status}</motion.span>}
        </div>
      </motion.form>

      {/* Office Info */}
      <motion.section className="space-y-4" initial="hidden" whileInView="visible" variants={sectionVariant}>
        <h3 className="text-xl font-semibold text-gray-900">Office</h3>
        <p className="text-gray-600 flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-500" />123 Business Road, City, Country</p>
        <Card className="p-0 overflow-hidden shadow-md">
          <iframe
            title="Dealatecorp office location"
            src="https://www.google.com/maps/embed?pb=!1m18"
            className="w-full h-64 border-0"
            loading="lazy"
          />
        </Card>
      </motion.section>
    </div>
  );
}
