import React from "react";
import Device from "../assets/device.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

function Hero() {
  return (
    <section
      className="fixed top-0 left-0 w-full min-h-screen z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 bg-[var(--accent)] text-[var(--text)] font-inter overflow-hidden"
      id="hero"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full max-w-screen-xl mx-auto lg:px-20 mt-8 sm:mt-8">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-0 sm:mb-4">
            Explore the World
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-6">
            with NoteMapper
          </p>

          <div className="flex sm:flex-row flex-wrap sm:space-x-4 space-y-2 sm:space-y-0 mb-4 sm:mb-8">
            <button className="bg-[var(--text)] text-[var(--primary)] font-medium font-inter px-6 py-4 rounded-xl hover:opacity-90 transition flex items-center justify-center sm:w-auto w-32 h-16">
              <BiLogoPlayStore className="inline w-8 h-8 sm:w-10 sm:h-10 mr-2" />
              Google Play
            </button>
            <button className="bg-[var(--text)] text-[var(--primary)] font-medium font-inter px-6 py-4 rounded-xl hover:opacity-90 transition flex items-center justify-center sm:w-auto w-32 h-16 ml-6">
              <FaApple className="inline w-8 h-8 sm:w-10 sm:h-10 mr-2" />
              App Store
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={Device}
            alt="Device"
            className="w-48 sm:w-64 h-96 sm:h-128 md:w-80 md:h-160 transform sm:rotate-[10deg] md:rotate-[15deg] transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
