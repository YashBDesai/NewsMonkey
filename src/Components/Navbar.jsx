import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-purple-600 to-yellow-300 bg-opacity-20 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Site Title */}
        <Link
          to="/"
          className="text-white text-xl font-extrabold tracking-wide hover:text-yellow-200 transition-all duration-300"
        >
          🗞️ NewsMonkey
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-white font-semibold text-sm md:text-base ">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors duration-300 font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300  transition-colors duration-300 font-bold"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="hover:text-yellow-300 transition-colors duration-300 font-bold"
            >
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
