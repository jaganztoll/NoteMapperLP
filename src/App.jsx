import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";
import Footer from "./components/Footer";

import { Element } from "react-scroll";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <Element name="hero"></Element>
      <Navbar />
      <div className="bg-[var(--primary)] text-[var(--text)]">
        <Hero />
        <About />
        <Preview />
        <Testimonials />
        <Download />
        <Footer />
      </div>
    </>
  );
}
export default App;
