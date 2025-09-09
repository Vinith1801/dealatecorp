import React from "react";

const posts = [
  {
    title: "Cloud Strategies for 2025",
    excerpt:
      "How modern enterprises are adopting hybrid cloud for resilience and cost control.",
    image: "/src/assets/blog1.webp",
  },
  {
    title: "The Future of IT Staffing",
    excerpt:
      "Insights into global hiring trends, remote work, and specialized talent acquisition.",
    image: "/src/assets/blog2.webp",
  },
  {
    title: "AI in Healthcare IT",
    excerpt:
      "Exploring how machine learning solutions improve patient care and operational efficiency.",
    image: "/src/assets/blog3.webp",
  },
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <header className="text-center md:text-left">
        <h1 className="text-3xl font-heading font-bold text-charcoal">
          Dealate Insights
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Explore industry trends, thought leadership, and company updates. Stay
          ahead with our insights on IT staffing, digital transformation,
          healthcare IT, and AI.
        </p>
      </header>

      {/* Blog Posts */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col hover:shadow-md transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-44 object-cover rounded-t-2xl"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-900">{p.title}</h2>
              <p className="text-sm text-gray-600 mt-2 flex-1">{p.excerpt}</p>
              <a
                href="#"
                className="text-primary mt-4 text-sm font-medium inline-flex items-center gap-1 hover:underline"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Subscribe Section */}
      <section className="bg-slate-50 p-8 rounded-2xl text-center shadow-sm">
        <h3 className="text-xl font-heading font-bold text-gray-900">
          Subscribe for Updates
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Get monthly insights and updates straight to your inbox.
        </p>
        <form className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md border w-full sm:w-72 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button className="px-5 py-2 bg-primary text-white rounded-md font-medium shadow hover:shadow-md hover:-translate-y-0.5 transition">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
