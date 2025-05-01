import React from "react";
import Icon from "../assets/icon.png";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";

function Download() {
  return (
    <section
      id="download"
      className="relative z-20 px-4 py-32 scroll-mt-24
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
          className="w-32 h-32 
                     sm:w-46 sm:h-46
                     md:w-48 md:h-48 
                     lg:w-64 lg:h-64 
                     mb-6 md:mb-0 rounded-4xl select-none"
        />

        {/* Text & Buttons */}
        <div
          className="md:ml-12 
                     flex flex-col justify-start items-center md:items-start selection:bg-[var(--accent)]"
        >
          <h2
            className="text-xl
                       sm:text-2xl 
                       md:text-3xl 
                       lg:text-4xl
                       font-semibold font-inter 
                       mb-6 text-center md:text-left"
          >
            YOUR MIND. YOUR MAP. YOUR MEMORIES.
          </h2>

          <div className="flex flex-row gap-6">
            {/* Google Play Button */}
            <button
              className="bg-[var(--accent)] text-[var(--text)] 
                         font-medium font-inter 
                         w-36 h-12 text-xs 
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
              className="bg-[var(--accent)] text-[var(--text)]
                         font-medium font-inter 
                         w-36 h-12 text-xs 
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
      </div>
    </section>
  );
}

export default Download;
