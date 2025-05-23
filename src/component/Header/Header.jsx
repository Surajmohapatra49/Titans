import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path
      ? "text-pink-500 border-b-2 border-pink-500 neon-text"
      : "hover:text-pink-400 transition duration-300";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white text-gray-800 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-extrabold text-pink-500 neon-text">
            Tactical Titans
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-sm font-semibold">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className={`px-2 py-1 ${isActive(path)}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col text-sm font-semibold px-6 py-4 space-y-4">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block ${isActive(path)}`}
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Tournaments", path: "/tournaments" },
  { label: "Winners", path: "/winners" },
  { label: "News", path: "/news" },
  { label: "Register", path: "/register" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default Header;
