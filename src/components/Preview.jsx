import React from "react";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";

function Preview() {
  return (
    <section
      id="preview"
      className="relative z-20 px-4 pt-24 scroll-mt-12 
                 bg-[var(--primary)] text-[var(--text)]"
    >
      <div
        className="flex justify-center items-center 
                   w-full h-full max-w-screen-2xl mx-auto lg:px-20"
      >
        <div
          className="flex overflow-x-auto flex-nowrap space-x-6 
                     px-6 sm:px-8 md:px-10 lg:px-16 select-none"
        >
          <img
            src={S1}
            alt="Test"
            className="w-45 h-81 
                       sm:w-47 sm:h-84 
                       md:w-48 md:h-87  
                       lg:w-50 lg:h-90 
                       mb-6 md:mb-0 rounded-2xl"
          />
          <img
            src={S2}
            alt="Test"
            className="w-45 h-81 
                       sm:w-47 sm:h-84 
                       md:w-48 md:h-87  
                       lg:w-50 lg:h-90 
                       mb-6 md:mb-0 rounded-2xl"
          />
          <img
            src={S3}
            alt="Test"
            className="w-45 h-81 
                       sm:w-47 sm:h-84 
                       md:w-48 md:h-87  
                       lg:w-50 lg:h-90 
                       mb-6 md:mb-0 rounded-2xl"
          />
          <img
            src={S4}
            alt="Test"
            className="w-45 h-81 
                       sm:w-47 sm:h-84 
                       md:w-48 md:h-87  
                       lg:w-50 lg:h-90 
                       mb-6 md:mb-0 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Preview;
