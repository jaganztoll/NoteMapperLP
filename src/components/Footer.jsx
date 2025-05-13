import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="relative z-20 
                 bg-[var(--accent)] text-[var(--text)] font-inter 
                 py-6 selection:bg-[var(--primary)]"
      id="footer"
    >
      <div className="text-center">
        <FaXTwitter
          className="inline w-5 h-5 mr-4 mb-4 cursor-pointer 
                     hover:text-[var(--primary)] transition-colors duration-300"
        />
        <FaFacebookF
          className="inline w-5 h-5 mr-4 mb-4 cursor-pointer 
                     hover:text-[var(--primary)] transition-colors duration-300"
        />
        <FaInstagram
          className="inline w-5 h-5 mr-4 mb-4 cursor-pointer 
                     hover:text-[var(--primary)] transition-colors duration-300"
        />
        <FaEnvelope
          className="inline w-5 h-5 mb-4 cursor-pointer 
                     hover:text-[var(--primary)] transition-colors duration-300"
        />
        <p>
          © {new Date().getFullYear()} NoteMapper,{" "}
          <a
            href="https://juliangruber.netlify.app"
            className="hover:text-[var(--primary)] transistion-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Julian Gruber
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
