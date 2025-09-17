import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import Logo from "../assets/logo.webp";

export default function Footer() {
  const socials = [
    { href: "https://linkedin.com/company/dealatecorp", Icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/dealatecorp", Icon: Twitter, label: "Twitter" },
    { href: "https://github.com/dealatecorp", Icon: Github, label: "GitHub" },
  ];

  const links = [
    { to: "/services", label: "Digital Transformation" },
    { to: "/infirmary-hub", label: "Infirmary Hub" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand + Social */}
        <div>
          <Link to="/" aria-label="Dealatecorp Home">
            <img src={Logo} alt="Dealatecorp logo" className="h-10 w-auto mb-3" />
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            Premium IT consulting and digital innovation services. Driving transformation with people-first technology.
          </p>
          <ul className="flex gap-4 mt-5" role="list">
            {socials.map(({ href, Icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-gradient-to-r hover:from-sky-500 hover:to-violet-500 hover:scale-110 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm" role="list">
            {links.map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="hover:text-sky-500 focus:text-sky-500 focus:outline-none transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-4 text-sm" role="list">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sky-500 mt-0.5" />
              <address className="not-italic">
                Dealatecorp Innovations Pvt Ltd <br />
                123 Business Road, City, Country
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-sky-500" />
              <a
                href="mailto:info@dealatecorp.com"
                className="hover:text-sky-500 focus:text-sky-500 focus:outline-none transition-colors duration-300"
              >
                info@dealatecorp.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700/50 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dealatecorp Innovations Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
