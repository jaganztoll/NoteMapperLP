import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      class="relative z-20 bg-[var(--primary)] text-[var(--text)] font-inter py-6 mt-16"
      id="footer"
    >
      <div class="text-center">
        <FaXTwitter class="inline" />
        <FaFacebookF class="inline" />
        <FaInstagram class="inline" />
        <p>© {new Date().getFullYear()} NoteMapper by Julian Gruber</p>
      </div>
    </footer>
  );
}
export default Footer;
