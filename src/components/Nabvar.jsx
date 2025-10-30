import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-dark/70 backdrop-blur-md z-50 text-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">VISWA R</h1>

        <ul className="hidden md:flex gap-8 font-semibold">
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-dark/95 flex flex-col items-center gap-6 py-10 text-lg">
          <li><Link to="skills" smooth={true} duration={500} onClick={() => setOpen(false)}>Skills</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
