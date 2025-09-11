import React, { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

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

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">We’ll respond within 24 hours.</p>
      </motion.header>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-700">Name</span>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 block w-full rounded-3xl bg-white/50 backdrop-blur-md border border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-sm transition"
            />
          </label>
          <label className="block">
            <span className="text-sm text-gray-700">Email</span>
            <input
              required
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-3xl bg-white/50 backdrop-blur-md border border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-sm transition"
            />
          </label>
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
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-gray-900">Office</h3>
        <p className="text-gray-600">123 Business Road, City, Country</p>
        <div className="mt-2 w-full h-64 rounded-3xl overflow-hidden shadow-md bg-white/50 backdrop-blur-md">
          <iframe
            title="Dealatecorp office location"
            src="https://www.google.com/maps/embed?pb=!1m18"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
