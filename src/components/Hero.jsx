import React from "react";
import Device from "../assets/device.png";

function Hero() {
  return (
    <section
      className="fixed top-0 left-0 w-full h-screen z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 bg-[var(--accent)] text-[var(--text)] font-inter"
      id="hero"
    >
      <div className="flex flex-col md:flex-row justify-center items-center w-full h-full max-w-screen-xl mx-auto lg:px-20 mt-16">
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
            Explore the World
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl mb-8">
            with NoteMapper
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={Device}
            alt="Device"
            className="w-64 h-128 md:w-76 md:h-152 transform md:rotate-[15deg] transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
