import React from "react";
import Test from "../assets/test.png";

function Preview() {
  return (
    <section
      className="relative z-20 py-32 scroll-mt-24 bg-[var(--primary)] text-[var(--text)]"
      id="preview"
    >
      <div
        className="flex justify-center items-center 
                   w-full h-full max-w-screen-2xl mx-auto lg:px-20"
      >
        <div className="flex overflow-x-auto flex-nowrap space-x-4 py-4 px-6 sm:px-8 md:px-10 lg:px-16">
          <img
            src={Test}
            alt="Test"
            className="w-48 h-81 
                     sm:w-58 sm:h-98
                     md:w-66 md:h-111 
                     lg:w-76 lg:h-128 
                     mb-6 md:mb-0 rounded-2xl select-none"
          />
          <img
            src={Test}
            alt="Test"
            className="w-48 h-81 
                     sm:w-58 sm:h-98
                     md:w-66 md:h-111 
                     lg:w-76 lg:h-128 
                     mb-6 md:mb-0 rounded-2xl select-none"
          />
          <img
            src={Test}
            alt="Test"
            className="w-48 h-81 
                     sm:w-58 sm:h-98
                     md:w-66 md:h-111 
                     lg:w-76 lg:h-128 
                     mb-6 md:mb-0 rounded-2xl select-none"
          />
          <img
            src={Test}
            alt="Test"
            className="w-48 h-81 
                     sm:w-58 sm:h-98
                     md:w-66 md:h-111 
                     lg:w-76 lg:h-128 
                     mb-6 md:mb-0 rounded-2xl select-none"
          />
        </div>
      </div>
    </section>
  );
}

export default Preview;
