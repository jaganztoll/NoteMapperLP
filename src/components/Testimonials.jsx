import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "öäad sooaw uf alsd aöska msalg dkawuiuf zlad slkaf jallu sö gazklsb ölalgödn öaueugfa m öujhsdb ualujkle jknm ualdkf jaöh",
    name: "V",
  },
  {
    quote:
      "Tessdfjh jd döösufh jjdkk ksizh szglds wuh kjanf jksgzl jskjgfl jbtgaioökn jlallnf jksgzl jskjgfl jbtgaioökn jlallaal uuejdl löauakl slafös sdzuauö kaösöt",
    name: "V",
  },
  {
    quote:
      "Test, lkjklsdf sdjkldfghu sdfuhweaf ishdvdv fhvujk hdujh k sdkjs uh slsu usfjaklfhbauhweaf ishdvdv fhvujk hdujh k sdkjs uh slsu usfjaklfhbakjdn u",
    name: "V",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative z-20 px-4 pt-24 py-24
                 bg-[var(--accent)] text-[var(--text)] font-inter font-semibold"
    >
      <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-xl mx-auto lg:px-20">
        <div className="w-full max-w-3xl transition-all duration-700 ease-in-out">
          <blockquote className="text-center text-2xl sm:text-4xl">
            “{testimonials[activeIndex].quote}”
          </blockquote>
          <p className="mt-8 text-center text-xl sm:text-2xl">
            – {testimonials[activeIndex].name}, {testimonials[activeIndex].role}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
