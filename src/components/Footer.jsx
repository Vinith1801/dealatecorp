import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        
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
          <div className="flex gap-4 mt-6">
            {[
              { href: "https://linkedin.com/company/dealatecorp", label: "LinkedIn", Icon: Linkedin },
              { href: "https://twitter.com/dealatecorp", label: "Twitter", Icon: Twitter },
              { href: "https://github.com/dealatecorp", label: "GitHub", Icon: Github },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-sky-500 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/services", label: "Digital Transformation" },
              { to: "/infirmary-hub", label: "Infirmary Hub" },
              { to: "/careers", label: "Careers" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="hover:text-sky-500 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sky-500 mt-0.5" />
              <span>
                Dealatecorp Innovations Pvt Ltd <br />
                123 Business Road, City, Country
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-sky-500" />
              <a
                href="mailto:info@dealatecorp.com"
                className="hover:text-sky-500 transition-colors"
              >
                info@dealatecorp.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dealatecorp Innovations Pvt Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
