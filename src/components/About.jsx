import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative z-20 mt-[95vh] py-32 scroll-mt-24
                 flex flex-col justify-center items-center text-center 
                 px-4 
                 bg-[var(--primary)] text-[var(--text)] font-inter
                 selection:bg-[var(--accent)]"
    >
      <h2
        className="text-2xl sm:text-4xl md:text-6xl 
                   max-w-4xl mb-12 sm:mb-8 font-semibold"
      >
        YOUR MIND. YOUR MAP. YOUR MEMORIES.{" "}
      </h2>

      <p
        className="text-lg sm:text-xl md:text-2xl 
                   max-w-3xl mb-8 w-full md:w-auto"
      >
        With NoteMapper, you capture thoughts exactly where they happen - on an
        interactive map. Link notes to locations, keep track of ideas and
        experiences, and explore your personal world of memories - visible,
        organized, and always within reach.
      </p>
    </section>
  );
}

export default About;
