import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-purple-800 py-6 text-center text-gray-400">
      <div className="flex justify-center gap-6 text-3xl mb-2 text-primary">
        <a href="https://github.com/VISWAR06" target="_blank"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/viswa-r-b37988286/" target="_blank"><FaLinkedin /></a>
      </div>
      <p>© 2025 Viswa R — All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
