import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

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
          threshold: 0.5, // 50% visible
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
      ? "text-red-500 border-b-2 border-red-500"
      : "text-gray-700 hover:text-red-500";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto drop-shadow-sm hover:scale-105 transition"
          />
          <span className="text-xl font-extrabold text-gray-800">
            Titans Gaming
          </span>
        </Link>

        <nav>
          <ul className="flex space-x-6 text-md font-medium">
            <li>
              <a
                href="#home"
                className={`transition duration-200 pb-1 ${getClass("home")}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tournaments"
                className={`transition duration-200 pb-1 ${getClass(
                  "tournaments"
                )}`}
              >
                Tournaments
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`transition duration-200 pb-1 ${getClass("about")}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#winners"
                className={`transition duration-200 pb-1 ${getClass(
                  "winners"
                )}`}
              >
                Winners
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`transition duration-200 pb-1 ${getClass(
                  "contact"
                )}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
