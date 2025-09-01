import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import image from "../assets/aboutbg.PNG";
import Modal from "../components/ui/Modal";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className="about-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="about-bg-overlay"></div>
      {/* Inner container for the content */}
      <div className="about-inner-container">
        {/* Left Side: Image with Background Shapes */}
        <div className="about-left-container">
          {/* Background Shapes */}
          <div className="image-bg-shapes -left-15 top-75 grid-cols-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="about-bg-dots" />
            ))}
          </div>
          <div className="image-bg-shapes -right-5 top-5 grid-cols-7">
            {Array.from({ length: 49 }).map((_, i) => (
              <div key={i} className="about-bg-dots" />
            ))}
          </div>

          {/* Image */}
          <img
            src="/images/avatar.png"
            alt="About Us"
            className="about-main-image"
          />

          {/* Play Button */}
          <button className="about-play-btn" onClick={() => setIsOpen(true)}>
            <div className="about-play-btn-inner-container">
              <Play className=" w-8 h-8 text-black" fill="black" />
            </div>
            <span className="about-play-btn-pulse-ring animate-pulse-ring" />
          </button>
        </div>

        {/* Right Side: Text */}
        <div className="about-right-container">
          <h2 className="about-heading">
            Hi, I'm <br />
            Muhammad Tahir
            <br /> <span className="text-[#FFA500]">A MERN Developer</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I build full-stack web apps with MongoDB, Express, React, and
            Node.js, focusing on clean UI, secure backend, and real-time
            features. I love turning ideas into useful, scalable products.
          </p>

          <Button
            className="bg-[#FFA500] hover:bg-[#e69500] hover:opacity-80 transition-opacity duration-300 text-black font-bold px-6 py-3 rounded-md cursor-pointer"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/pdfs/Tahir.pdf";
              link.download = "Tahir.pdf";
              document.body.appendChild(link);s
              link.click();
              document.body.removeChild(link);
            }}
          >
            DOWNLOAD CV
          </Button>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
}
