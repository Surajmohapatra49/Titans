import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "tournaments", "winners", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          threshold: 0.5,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const getClass = (section) =>
    activeSection === section
      ? "text-red-600 border-b-2 border-red-600"
      : "text-gray-700 hover:text-red-600";

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 flex-shrink-0"
          onClick={closeMobileMenu}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-auto max-w-[100px] sm:h-10 sm:max-w-[120px] lg:h-12 lg:max-w-[140px] object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
          />
          <span className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-800 select-none">
            Titans Gaming
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-grow justify-end">
          <ul className="flex flex-wrap space-x-4 lg:space-x-6 text-xs sm:text-sm lg:text-base font-medium">
            {["home", "tournaments", "about", "winners", "contact"].map(
              (section) => (
                <li key={section} className="my-1">
                  <a
                    href={`#${section}`}
                    className={`transition duration-200 pb-1 ${getClass(
                      section
                    )}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-200 transition"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-md">
          <ul className="flex flex-col space-y-3 px-4 py-4 sm:px-6 sm:py-5 text-sm sm:text-base font-medium text-gray-700">
            {["home", "tournaments", "about", "winners", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={closeMobileMenu}
                    className={`block w-full transition duration-200 py-2 ${getClass(
                      section
                    )}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
