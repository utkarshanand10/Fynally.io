import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="text-lg font-semibold text-white">Fynally.io</span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#journey" className="hover:text-white transition">
              Journey
            </a>
            <a href="#resources" className="hover:text-white transition">
              Resources
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fynally.io · All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
