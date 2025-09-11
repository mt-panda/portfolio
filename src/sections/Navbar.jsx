import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navItems } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1, ease: "power1.inOut" });

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
      {/* Brand */}
      <h3 className="nav-title">
        <a href="#hero">Portfolio</a>
      </h3>

      {/* Desktop Menu */}
      <ul className="desktop-navbar">
        {navItems.map(({ id, title, href }) => (
          <li key={id}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {new Array(3).fill(0).map((_, index) => (
          <span className="hamburger-tile" key={index}></span>
        ))}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="mobile-navbar">
          {navItems.map(({ id, title, href }) => (
            <a
              key={id}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              {title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
