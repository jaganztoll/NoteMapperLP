import React from "react";

function About() {
  return (
    <section
      className="relative z-20 mt-[100vh] min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[var(--primary)] text-[var(--text)] font-inter"
      id="about"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">About NoteMapper</h1>
      <p className="text-lg md:text-2xl mb-8">This section scrolls over Hero</p>
    </section>
  );
}
export default About;
