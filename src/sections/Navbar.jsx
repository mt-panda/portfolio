import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navItems } from "../constants/index";

const Navbar = () => {
  useGSAP(() => {
    // create gsap timeline
    const tl = gsap.timeline({ delay: 1, ease: "power1.inOut" });

    // gsap animations
    tl.from(".navbar", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    })
      .from(".nav-title", {
        opacity: 0,
      })
      .from(
        "ul",
        {
          opacity: 0,
        },
        "<"
      );
  }, []);

  return (
    <nav className="navbar">
      <h3 className="nav-title">
        <a href="#hero">Portfolio</a>
      </h3>

      <ul className="flex items-center gap-4">
        {navItems.map(({ id, title, href }) => (
          <li key={id}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
