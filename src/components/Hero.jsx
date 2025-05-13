import React from "react";
import Device from "../assets/device.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

function Hero() {
  return (
    <section
      id="hero"
      className="top-0 left-0 w-full min-h-screen z-10 
                 flex flex-col justify-center items-center text-center 
                 px-4 sm:px-8 md:px-8 
                 bg-[var(--accent)] text-[var(--text)] font-inter 
                 overflow-hidden"
    >
      <div
        className="fixed flex flex-col md:flex-row justify-center items-center 
                   w-full max-w-screen-xl mx-auto lg:px-20 
                   mt-2 sm:mt-8"
      >
        {/* Textbereich */}
        <div
          className="md:w-1/2 
                     flex flex-col justify-center items-center md:items-start 
                     text-center md:text-left
                     selection:bg-[var(--primary)]"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-8">
            Explore the World
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12">
            Connect your notes with places and experience your memories visually
            with NoteMapper.
          </p>

          <div className="flex flex-row gap-6 mb-8 sm:mb-8">
            {/* Google Play Button */}
            <button
              className="bg-[var(--text)] text-[var(--primary)] 
                         font-medium font-inter 
                         w-36 h-8 text-xs 
                         sm:w-46 sm:h-16 sm:text-base 
                         md:w-50 md:h-18 md:text-lg 
                         px-4 py-2 sm:px-6 sm:py-4 
                         rounded-md hover:opacity-90 transition 
                         flex items-center justify-center select-none"
            >
              <BiLogoPlayStore className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-2" />
              Google Play
            </button>

            {/* App Store Button */}
            <button
              className="bg-[var(--text)] text-[var(--primary)] 
                         font-medium font-inter 
                         w-36 h-8 text-xs 
                         sm:w-46 sm:h-16 sm:text-base 
                         md:w-50 md:h-18 md:text-lg 
                         px-4 py-2 sm:px-6 sm:py-4 
                         rounded-md hover:opacity-90 transition 
                         flex items-center justify-center select-none"
            >
              <FaApple className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-2" />
              App Store
            </button>
          </div>
        </div>

        {/* Bildbereich */}
        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-2">
          <img
            src={Device}
            alt="Device"
            className="w-48 sm:w-64 h-96 sm:h-128 md:w-80 md:h-160 
                       transform sm:rotate-[10deg] md:rotate-[15deg] 
                       transition-all duration-500 select-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
