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
        <FaXTwitter className="inline w-5 h-5 mr-4 mb-4 hover:text-[var(--primary)] cursor-pointer" />
        <FaFacebookF className="inline w-5 h-5 mr-4 mb-4 hover:text-[var(--primary)] cursor-pointer" />
        <FaInstagram className="inline w-5 h-5 mr-4 mb-4 hover:text-[var(--primary)] cursor-pointer" />
        <FaEnvelope className="inline w-5 h-5 mb-4 hover:text-[var(--primary)] cursor-pointer" />

        <p>© {new Date().getFullYear()} NoteMapper, Julian Gruber</p>
      </div>
    </footer>
  );
}
export default Footer;
