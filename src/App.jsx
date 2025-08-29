import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import { ReactLenis, useLenis } from "lenis/react";

import About from "./sections/About";
import Hero from "./sections/Hero";
import Technolgoies from "./sections/Technolgoies";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const lenis = useLenis();

  return (
    <main className="font-poppins">
      <ReactLenis root />
      <Hero />
      <About />
      <Technolgoies />
      <Projects />
      <Contact />
      <Footer />
      {/* <div className={"min-h-dvh bg-gradient"}></div> */}
    </main>
  );
};

export default App;
