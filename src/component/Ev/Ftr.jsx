import React from "react";
import logo from "../../assets/logo.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-white py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -left-40 bottom-0 w-[400px] h-[400px] bg-rose-100 rounded-full blur-[150px] z-0" />
      <div className="absolute -right-40 top-0 w-[400px] h-[400px] bg-rose-100 rounded-full blur-[150px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section: Logo + Text + Social + Nav */}
        <div>
          {/* Logo */}
          <img src={logo} alt="Upthrust Esports" className="h-16 mb-6" />

          {/* Tagline */}
          <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
            Ready to elevate your esports experience? Whether you need expert
            production, dynamic marketing, or flawless event execution, our team
            is here to help. Reach out today and let's create something
            extraordinary together.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-red-500 mb-6">
            <a href="#">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6 text-gray-700 font-medium text-base">
            {[
              "Home",
              "Services",
              "Tournaments",
              "News",
              "Register",
              "About",
              "Contact",
            ].map((label) => (
              <Link
                key={label}
                to={`/${label.toLowerCase()}`}
                className="hover:text-red-500 transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400 mt-6">
            © Upthrust Esports. All Rights Reserved {new Date().getFullYear()}.
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-400 focus:outline-none py-2 placeholder:text-gray-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-400 focus:outline-none py-2 placeholder:text-gray-500"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full border-b border-gray-400 focus:outline-none py-2 placeholder:text-gray-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
