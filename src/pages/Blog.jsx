import React from "react";

const posts = [
  {
    title: "Cloud Strategies for 2025",
    excerpt:
      "How modern enterprises are adopting hybrid cloud for resilience and cost control.",
    image: "/assets/blog1.webp",
  },
  {
    title: "The Future of IT Staffing",
    excerpt:
      "Insights into global hiring trends, remote work, and specialized talent acquisition.",
    image: "/assets/blog2.webp",
  },
  {
    title: "AI in Healthcare IT",
    excerpt:
      "Exploring how machine learning solutions improve patient care and operational efficiency.",
    image: "/assets/blog3.webp",
  },
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

      {/* Header */}
      <header className="text-center md:text-left max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Dealate Insights
        </h1>
        <p className="mt-3 text-gray-600">
          Explore industry trends, thought leadership, and company updates. Stay
          ahead with insights on IT staffing, digital transformation,
          healthcare IT, and AI.
        </p>
      </header>

      {/* Blog Posts */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="bg-white rounded-3xl shadow-md border overflow-hidden flex flex-col hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-900">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2 flex-1">{post.excerpt}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sky-500 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Subscribe Section */}
      <section className="bg-slate-50 p-8 rounded-3xl text-center shadow-md">
        <h3 className="text-xl font-extrabold text-gray-900">
          Subscribe for Updates
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Get monthly insights and updates straight to your inbox.
        </p>
        <form className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 rounded-2xl border focus:ring-2 focus:ring-sky-500 focus:outline-none w-full sm:w-72"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 text-white rounded-2xl font-medium shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
