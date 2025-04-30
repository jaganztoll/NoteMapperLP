import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/notemapperdark.png";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-4 transition-all duration-300
                  ${
                    scrolled
                      ? "bg-[var(--accent-transparent)] shadow-md"
                      : "bg-transparent"
                  } 
                  text-[var(--text)] selection:bg-[var(--accent-transparent)]`}
    >
      {/* Container */}
      <div
        className="w-full max-w-screen-2xl mx-auto 
                   flex justify-between items-center 
                   px-6 md:px-10 lg:px-20"
      >
        {/* Logo */}
        <div className="select-none">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center space-x-2"
          >
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-[var(--text)] font-inter">
              NoteMapper
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center font-inter select-none">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            About
          </Link>
          <Link
            to="download"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Download
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiXMark className="text-3xl" />
            ) : (
              <HiBars3 className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 
                     flex flex-col space-y-4 
                     bg-[var(--accent)] p-6 
                     rounded-md shadow-md md:hidden"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="download"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Download
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
