import React, { useState } from "react";
import { Send } from "lucide-react";

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
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-heading font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mt-2">We’ll respond within 24 hours.</p>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm text-gray-700">Name</span>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 block w-full rounded-2xl border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition"
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
              className="mt-1 block w-full rounded-2xl border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition"
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
            className="mt-1 block w-full rounded-2xl border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition"
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
            className="mt-1 block w-full rounded-2xl border border-gray-300 p-3 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm transition resize-none"
          />
        </label>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-medium shadow hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Send className="w-4 h-4" /> Send Message
          </button>
          <span className="text-sm text-gray-600">{status}</span>
        </div>
      </form>

      {/* Office Info */}
      <section className="space-y-3">
        <h3 className="font-semibold text-gray-900">Office</h3>
        <p className="text-sm text-gray-600">123 Business Road, City, Country</p>
        <div className="mt-2 w-full h-64 rounded-2xl overflow-hidden shadow-sm">
          <iframe
            title="Dealatecorp office location"
            src="https://www.google.com/maps/embed?pb=!1m18"
            className="w-full h-full border-0"
            loading="lazy"
            aria-hidden="false"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
