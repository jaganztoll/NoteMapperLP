import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Download from "./components/Download";
import Footer from "./components/Footer";

import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Element name="hero"></Element>
      <Navbar />
      <div className="bg-[var(--primary)] text-[var(--text)]">
        <Hero />
        <About />
        <Download />
        <Footer />
      </div>
    </>
  );
}
export default App;
