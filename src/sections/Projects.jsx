import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import { sliderImages } from "@/constants";

import CardCarousel from "../components/CardCarousel";

const Projects = () => {
  useGSAP(() => {
    // split the title into characters
    const splitProjectTitle = SplitText.create("#project-title", {
      type: "chars",
    });

    // animate the title
    gsap.from(splitProjectTitle.chars, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#project",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section
      id="project"
      className="min-h-screen w-full bg-gradient text-white py-20"
    >
      {/* title */}
      <h1
        id="project-title"
        className="text-8xl font-bold selection text-center"
      >
        Projects
      </h1>

      <div>
        <CardCarousel
          images={sliderImages}
          autoplayDelay={2000}
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </section>
  );
};

export default Projects;
