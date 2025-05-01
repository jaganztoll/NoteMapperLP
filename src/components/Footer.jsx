import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="relative z-20 bg-[var(--accent)] text-[var(--text)] font-inter py-6 selection:bg-[var(--primary)]"
      id="footer"
    >
      <div className="text-center">
        <FaXTwitter className="inline" />
        <FaFacebookF className="inline" />
        <FaInstagram className="inline" />
        <p>© {new Date().getFullYear()} NoteMapper Julian Gruber</p>
      </div>
    </footer>
  );
}
export default Footer;
