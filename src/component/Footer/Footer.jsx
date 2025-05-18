import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-gray-300 py-16 px-6 border-t-4 border-red-600 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo + Tagline */}
        <div className="space-y-5">
          <img src={logo} alt="Logo" className="h-14 drop-shadow-md" />
          <p className="text-sm text-gray-400 max-w-xs font-light">
            Your ultimate gaming battlefield. Join competitions. Win glory. Be
            legendary.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:scale-110 transition text-red-500">
              {/* Twitter */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53..." />
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition text-red-500">
              {/* Discord */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 0H4a4 4 0..." />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Tournaments", to: "/tournaments" },
              { label: "Winners", to: "/winners" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-amber-400 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              tacticaltitans127@gmail.com
            </li>
            <li>
              <span className="font-semibold text-white">Phone:</span> +1 (555)
              123-4567
            </li>
            <li>
              <span className="font-semibold text-white">Address:</span> 123
              Gaming Street, GameCity
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-6">
            Business Hours
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <span className="font-semibold text-white">Mon - Fri:</span> 9:00
              AM – 6:00 PM
            </li>
            <li>
              <span className="font-semibold text-white">Saturday:</span> 10:00
              AM – 4:00 PM
            </li>
            <li>
              <span className="font-semibold text-white">Sunday:</span> Closed
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-center text-xs text-gray-500 pt-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} Tactical Titans Gaming. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
