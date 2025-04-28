import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Element name="hero"></Element>
      <Navbar />
      <div class="bg-[var(--primary)] text-[var(--text)]">
        <Hero />
        <Body />
        <Footer />
      </div>
    </>
  );
}
export default App;
