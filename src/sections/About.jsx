import React, { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Play } from "lucide-react";
import image from "../assets/aboutbg.PNG";
import Modal from "../components/ui/Modal";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="about"
      className="about-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="about-bg-overlay"></div>

      {/* Inner container for the content */}
      <div className="about-inner-container flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 px-4 sm:px-6 md:px-8">
        {/* Left Side: Image with Background Shapes */}
        <div className="about-left-container relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          {/* Background Shapes */}
          <div className="image-bg-shapes -left-10 sm:-left-15 top-40 sm:top-75 grid-cols-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="about-bg-dots" />
            ))}
          </div>
          <div className="image-bg-shapes -right-3 sm:-right-5 top-5 grid-cols-7">
            {Array.from({ length: 49 }).map((_, i) => (
              <div key={i} className="about-bg-dots" />
            ))}
          </div>

          {/* Image */}
          <img
            src="/images/avatar.png"
            alt="About Us"
            className="about-main-image w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          />

          {/* Play Button */}
          <button
            className="about-play-btn top-1/2 md:top-75 left-1/2 md:left-92 transform -translate-x-1/2 md:translate-x-0"
            onClick={() => setIsOpen(true)}
          >
            <div className="about-play-btn-inner-container">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="black" />
            </div>
            <span className="about-play-btn-pulse-ring animate-pulse-ring" />
          </button>
        </div>

        {/* Right Side: Text */}
        <div className="about-right-container w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
          <h2 className="about-heading text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            Hi, I'm <br />
            Muhammad Tahir
            <br /> <span className="text-[#FFA500]">A MERN Developer</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            I build full-stack web apps with MongoDB, Express, React, and
            Node.js, focusing on clean UI, secure backend, and real-time
            features. I love turning ideas into useful, scalable products.
          </p>

          <Button
            className="bg-[#FFA500] hover:bg-[#e69500] hover:opacity-80 transition-opacity duration-300 text-black font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-md cursor-pointer sansation-bold text-sm sm:text-base"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/pdfs/Tahir.pdf";
              link.download = "Tahir.pdf";
              document.body.appendChild(link);
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
