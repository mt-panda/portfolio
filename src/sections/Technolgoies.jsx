import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { logos } from "../constants";
import { useRef } from "react";

const Technolgoies = () => {
  const techRef = useRef();

  useGSAP(() => {
    // create timeline for each slider
    const tl = gsap.timeline();

    tl.to("#all-icons", {
      x: -2000,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    techRef.current.addEventListener("mouseover", () => {
      tl.pause();
    });

    techRef.current.addEventListener("mouseleave", () => {
      tl.resume();
    });
  }, []);

  return (
    <section
      id="tech"
      ref={techRef}
      className="flex-col gap-10 py-10 bg-gradient text-white overflow-x-hidden"
    >
      <div id="all-icons" className="bg-transparent flex gap-10 items-center">
        {logos.map(({ path, title }, index) => (
          <img
            title={title}
            key={index}
            src={path}
            alt="Error while rendering the image"
            className={`h-32`}
          />
        ))}
      </div>
    </section>
  );
};

export default Technolgoies;
