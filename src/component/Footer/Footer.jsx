import React from "react";
import logo from "../../assets/lg.png";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-16 text-gray-700 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-[120px] z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full blur-[120px] z-0" />

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pb-8">
        {/* Left section: Branding */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <div className="flex items-center md:justify-start justify-center mb-6 pl-4">
            <img src={logo} alt="Titans Gaming" className="h-32 md:h-40" />
          </div>

          <p className="text-base text-gray-600 mb-8 max-w-md leading-relaxed mx-auto md:mx-0">
            Ready to elevate your sports experience? Whether you need expert
            production, dynamic marketing..
          </p>

          <div className="flex justify-center md:justify-start gap-5 text-orange-600 mb-8">
            {[Facebook, Instagram, Twitter, Linkedin, Youtube].map(
              (Icon, index) => (
                <a
                  href="#"
                  key={index}
                  className="hover:scale-110 transition-transform"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            )}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-gray-600">
            {[
              "Home",
              "Tournaments",
              "Winners",
              "News",
              "Register",
              "About",
              "Contact",
            ].map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                className="hover:text-orange-600 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right section: Contact Form */}
        <div className="max-w-md w-full mx-auto md:mx-0">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Get in Touch
          </h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold px-6 py-2 rounded hover:bg-orange-700 transition flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Send Message <span className="text-lg">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative z-10 mt-8 pt-4 text-sm text-center text-gray-400 px-4">
        Copyright &copy; 2025 Tactical Titans.
      </div>
    </footer>
  );
};

export default Footer;
