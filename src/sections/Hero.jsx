import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

import Navbar from "./Navbar";
import HeroSVG from "@/components/ui/HeroSVG";

const Hero = () => {
  useEffect(() => {
    // Preload the profile image
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = "/images/profile.avif";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useGSAP(() => {
    // create a timeline
    const tl = gsap.timeline({
      delay: 0.5,
      ease: "power1.inOut",
    });

    // animate the hero image
    tl.from(".hero-img", {
      opacity: 0,
      duration: 1,
    })
      .from(".hero-filled-title", {
        opacity: 0,
      })
      .from(
        ".hero-outlined-title",
        {
          opacity: 0,
        },
        "<"
      );

    gsap.to(".hero-filled-title", {
      yPercent: -100,
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to(".hero-outlined-title", {
      yPercent: -100,
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="hero" className="h-screen w-full">
      {/* Navbar */}
      <Navbar />

      {/* hero container */}
      <div className="hero-container overflow-hidden">
  
        {/* hero svg for background */}
        <HeroSVG />

        {/* hero headings */}

        <div>
          <h1 className="hero-filled-title">MERN Developer</h1>
          <h1 className="hero-outlined-title">MERN Developer</h1>
        </div>

        <span className="hero-white-gradient"/>

        {/* hero image */}
        <img
          src="/images/profile.avif"
          alt="hero-img"
          className="hero-img"
          fetchPriority="high"
          decoding="async"
          loading="eager"
          sizes="(max-width: 768px) 150px, 300px"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
