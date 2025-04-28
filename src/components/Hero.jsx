import React from "react";

function Hero() {
  return (
    <section
      class="h-screen flex flex-col justify-center items-center text-center px-4 bg-[var(--accent)] text-[var(--text)] font-quicksand"
      id="hero"
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Welcome to My Landing Page
      </h1>
      <p class="text-lg md:text-2xl mb-8">
        This is a short description or tagline.
      </p>
      <button class="bg-[var(--secondary)] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
        Get Started
      </button>
    </section>
  );
}
export default Hero;
