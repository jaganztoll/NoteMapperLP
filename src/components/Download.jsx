import React from "react";
import Icon from "../assets/icon.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

function Download() {
  return (
    <section
      id="download"
      className="relative z-20 min-h-screen py-16 px-4 
                 bg-[var(--primary)] text-[var(--text)] font-inter"
    >
      <div
        className="max-w-4xl mx-auto 
                   flex flex-col md:flex-row 
                   items-center justify-center"
      >
        {/* Icon */}
        <img
          src={Icon}
          alt="Icon"
          className="w-64 h-64 mb-6 md:mb-0 rounded-4xl"
        />

        {/* Text & Buttons */}
        <div
          className="md:ml-8 
                     flex flex-col justify-start items-center md:items-start"
        >
          <h1
            className="text-3xl md:text-4xl font-semibold font-inter 
                       mb-6 text-center md:text-left"
          >
            YOUR MIND. YOUR MAP. YOUR MEMORIES.
          </h1>

          <div className="flex space-x-4">
            {/* Google Play Button */}
            <button
              className="bg-[var(--accent)] text-[var(--text)] 
                         font-medium font-inter 
                         px-6 py-4 rounded-md 
                         hover:opacity-90 transition 
                         flex items-center justify-center"
            >
              <BiLogoPlayStore className="w-8 h-8 md:w-10 md:h-10 mr-2" />
              Google Play
            </button>

            {/* App Store Button */}
            <button
              className="bg-[var(--accent)] text-[var(--text)] 
                         font-medium font-inter 
                         px-6 py-4 rounded-md 
                         hover:opacity-90 transition 
                         flex items-center justify-center"
            >
              <FaApple className="w-8 h-8 md:w-10 md:h-10 mr-2" />
              App Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
