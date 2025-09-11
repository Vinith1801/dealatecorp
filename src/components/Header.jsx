import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/services", label: "Services" },
    { to: "/infirmary-hub", label: "Infirmary Hub" },
    { to: "/about", label: "About" },
    { to: "/careers", label: "Careers" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-sky-500 after:to-violet-500 after:transition-all hover:after:w-full ${
      isActive
        ? "text-sky-600 after:w-full"
        : "text-gray-700 hover:text-sky-600"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-lg transition-all ${
        scrolled
          ? "bg-white/90 border-b border-gray-200 shadow-md"
          : "bg-white/70 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/" aria-label="Dealatecorp home" className="flex items-center gap-3">
              <img src={logo} alt="Dealatecorp logo" className="h-9 w-9 object-contain" />
              <span className="hidden sm:inline-block text-xl font-bold text-sky-500 tracking-tight">
                Dealatecorp
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                aria-current={window.location.pathname === link.to ? "page" : undefined}
                className={navLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-semibold shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-sky-400 transition-all"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-sky-400 transition"
            >
              {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-md"
        >
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-semibold shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-sky-400 transition-all"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
