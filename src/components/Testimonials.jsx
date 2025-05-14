import React, { useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import Alireza from "../assets/unsplash/alireza-mirzabegi--Qar1uMgJFk-unsplash.jpg";
import Karsten from "../assets/unsplash/karsten-winegeart-yScEkBWloPw-unsplash.jpg";
import Zac from "../assets/unsplash/zac-gudakov-R9QDe8wBxRw-unsplash.jpg";

const testimonials = [
  {
    quote:
      "In Yara, you don't have time to get lost in your head. NoteMapper helps me lay it all out, fast, clear and to the point. I love it.",
    name: "Dani Rojas",
    image: Alireza,
    credit: {
      name: "Alireza Mirzabegi",
      url: "https://unsplash.com/de/fotos/eine-frau-in-einer-baseball-uniform-halt-eine-tasse-kaffee-in-der-hand--Qar1uMgJFk",
    },
  },
  {
    quote:
      "In the Bliss, everything feels fluid, unreal. But NoteMapper helps me see what's real and what connects. I see the patterns now. It's beautiful, really.",
    name: "Faith Seed",
    image: Karsten,
    credit: {
      name: "Karsten Winegeart",
      url: "https://unsplash.com/de/fotos/mann-in-schwarz-weisser-karierter-jacke-und-blauer-jeans-geht-tagsuber-auf-der-strasse-yScEkBWloPw",
    },
  },
  {
    quote:
      "My mind used to be all over the place, no direction, just noise. With NoteMapper, I can finally make sense of it all. It's like mapping my way out of the chaos.",
    name: "Jason Brody",
    image: Zac,
    credit: {
      name: "Zac Gudakov",
      url: "https://unsplash.com/de/fotos/oben-ohne-mann-tagsuber-im-wasser-R9QDe8wBxRw",
    },
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative z-10 h-[600px] 
                 bg-[var(--accent)] 
                 text-[var(--text)] font-inter font-semibold 
                 selection:bg-[var(--primary)]"
    >
      <div
        className="flex flex-col justify-center items-center 
                   w-full h-full max-w-screen-2xl mx-auto lg:px-20 relative z-20"
      >
        <div className="w-full transition-all duration-700 ease-in-out">
          <blockquote className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal">
            “{testimonials[activeIndex].quote}”
          </blockquote>
          <p
            className="mt-8 sm:mt-12 text-center
                       sm:text-lg 
                       md:text-xl 
                       lg:text-2xl 
                       items-center gap-6
                       flex justify-center"
          >
            <a
              href={testimonials[activeIndex].credit.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Photo by ${testimonials[activeIndex].credit.name} on Unsplash`}
              className="inline-block"
            >
              <img
                loading="lazy"
                src={testimonials[activeIndex].image}
                alt={`Photo by ${testimonials[activeIndex].credit.name} on Unsplash`}
                className="w-32 h-32 sm:w-34 sm:h-34 lg:w-36 lg:h-36 
                           rounded-full object-cover hover:opacity-80 
                           transition-opacity duration-300
                           select-none"
              />
            </a>
            <span className="text-sm sm:text-base lg:text-xl flex items-center">
              {testimonials[activeIndex].name}
            </span>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevTestimonial}
        className="absolute left-4 sm:left-8 md:left-12 lg:left-24 
                   top-1/2 transform -translate-y-1/2 
                   text-4xl text-[var(--text)] hover:opacity-80 
                   transition-opacity duration-300 z-30
                   cursor-pointer"
      >
        <MdArrowBackIos />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-4 sm:right-8 md:right-16 lg:right-24 
                   top-1/2 transform -translate-y-1/2 
                   text-4xl text-[var(--text)] hover:opacity-80 
                   transition-opacity duration-300 z-30
                   cursor-pointer"
      >
        <MdArrowForwardIos />
      </button>
    </section>
  );
}

export default Testimonials;
