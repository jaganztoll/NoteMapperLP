import React from "react";
import Icon from "../assets/icon.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

function Body() {
  return (
    <section className="py-16 px-4" id="body">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center">
        <img
          src={Icon}
          alt="Icon"
          className="w-64 h-64 mb-6 md:mb-0 rounded-4xl"
        />

        <div className="md:ml-8 flex flex-col justify-start items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">
            YOUR MIND. YOUR MAP. YOUR MEMORIES.
          </h1>

          <div className="flex space-x-4">
            <button className="bg-[var(--accent)] text-[var(--text)] font-medium px-6 py-4 rounded-xl hover:opacity-90 transition">
              <BiLogoPlayStore className="inline w-8 h-8 md:w-10 md:h-10 mr-2" />
              Google Play
            </button>
            <button className="bg-[var(--accent)] text-[var(--text)] font-medium px-6 py-4 rounded-xl hover:opacity-90 transition">
              <FaApple className="inline w-8 h-8 md:w-10 md:h-10 mr-2" />
              App Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
