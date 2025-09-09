import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Dealatecorp home"
            className="flex items-center gap-3"
          >
            <img
              src="/src/assets/logo.webp"
              alt="Dealatecorp logo"
              className="h-9 w-9 object-contain"
            />
            <span className="hidden sm:inline-block text-xl font-semibold text-sky-400">
              Dealatecorp
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {[
              { to: "/services", label: "Services" },
              { to: "/infirmary-hub", label: "Infirmary Hub" },
              { to: "/about", label: "About" },
              { to: "/careers", label: "Careers" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sky-400"
                      : "text-gray-700 hover:text-sky-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-4 py-2 rounded-xl bg-sky-400 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded-xl hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-sky-400 transition"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
