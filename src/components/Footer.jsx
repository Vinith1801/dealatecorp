import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img
            src="/src/assets/logo.webp"
            alt="Dealatecorp logo"
            className="h-10 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed max-w-sm">
            Premium IT consulting and digital innovation services. Driving
            transformation with people-first technology.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://linkedin.com/company/dealatecorp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/dealatecorp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-sky-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/dealatecorp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-sky-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/services"
                className="hover:text-primary transition-colors"
              >
                Digital Transformation
              </Link>
            </li>
            <li>
              <Link
                to="/infirmary-hub"
                className="hover:text-primary transition-colors"
              >
                Infirmary Hub
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-primary transition-colors"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>
                Dealatecorp Innovations Pvt Ltd <br />
                123 Business Road, City, Country
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href="mailto:info@dealatecorp.com"
                className="hover:text-primary transition-colors"
              >
                info@dealatecorp.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Dealatecorp Innovations Pvt Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
