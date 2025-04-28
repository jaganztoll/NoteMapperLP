import React from "react";
import Logo from "../assets/notemapperdark.png";

function Navbar() {
  return (
    <nav class="w-full p-4 flex justify-between items-center bg-[var(--accent)] text-[var(--text)]">
      <div>
        <img src={Logo} alt="Logo" class="h-10 w-auto select-none" />
      </div>
      <div class="space-x-4">
        <a href="#hero" class="hover:underline">
          Home
        </a>
        <a href="#body" class="hover:underline">
          About
        </a>
        <a href="#footer" class="hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
