import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ReactLenis, useLenis } from "lenis/react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Technolgoies from "./sections/Technolgoies";
import Services from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Cursor, CursorProvider } from "./components/animate-ui/components/animate/cursor";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const lenis = useLenis();

  return (
    <main className="font-poppins">
      <CursorProvider global={true}>
        <Cursor />
        <ReactLenis root />
        <Hero />
        <About />
        <Technolgoies />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </CursorProvider>
    </main>
  );
};

export default App;
