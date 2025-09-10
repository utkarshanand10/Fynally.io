import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-sm hover:underline">
          Home
        </Link>
        <Link to="/contact" className="text-sm hover:underline">
          Contact
        </Link>
      </div>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
            F
          </div>
          <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            Fynally
          </span>
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a
              href="#journey"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Journey
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
