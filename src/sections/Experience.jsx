import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import CircularProgress from "../components/ui/CircularProgress";
import { experiences } from "../constants/index";
import svgbg from "../components/backgrounds/svg/experiences.js";

export default function ExperienceSection() {
  const getDirection = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x);
    const deg = (angle * (180 / Math.PI) + 360) % 360;
    if (deg >= 45 && deg < 135) return "bottom";
    if (deg >= 135 && deg < 225) return "left";
    if (deg >= 225 && deg < 315) return "top";
    return "right";
  };

  const handleEnter = (e, overlayRef) => {
    if (!overlayRef.current) return;
    const dir = getDirection(e, e.currentTarget);
    const overlay = overlayRef.current;
    overlay.style.transition = "none";

    switch (dir) {
      case "left":
        overlay.style.transform = "translateX(-100%)";
        break;
      case "right":
        overlay.style.transform = "translateX(100%)";
        break;
      case "top":
        overlay.style.transform = "translateY(-100%)";
        break;
      case "bottom":
        overlay.style.transform = "translateY(100%)";
        break;
      default:
        break;
    }

    requestAnimationFrame(() => {
      overlay.style.transition = "transform 300ms ease";
      overlay.style.transform = "translateX(0) translateY(0)";
    });
  };

  const handleLeave = (e, overlayRef) => {
    if (!overlayRef.current) return;
    const dir = getDirection(e, e.currentTarget);
    const overlay = overlayRef.current;
    overlay.style.transition = "transform 300ms ease";

    switch (dir) {
      case "left":
        overlay.style.transform = "translateX(-100%)";
        break;
      case "right":
        overlay.style.transform = "translateX(100%)";
        break;
      case "top":
        overlay.style.transform = "translateY(-100%)";
        break;
      case "bottom":
        overlay.style.transform = "translateY(100%)";
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="experience"
      className="bg-black text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 2xl:px-60"
      style={{
        backgroundImage: `url("${svgbg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="flex flex-col md:flex-row mb-12 gap-8">
        {/* Left column */}
        <div className="w-full md:w-1/2 text-left relative">
          <p
            className="font-bold text-5xl sm:text-6xl md:text-7xl z-0"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255, 165, 0, 0.1)",
              zIndex: 0,
              position: "absolute",
              top: -25,
            }}
          >
            MY CAREER
          </p>

          <p className="text-[#FFA500] font-bold mt-10 sm:mt-8">MY EXPERIENCE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sansation-bold">
            EXPERIENCE AND <span className="text-[#FFA500]">SKILL</span>
          </h2>
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/2 border-l md:border-l border-t md:border-t-0 border-[#FFA500] text-left pt-4 md:pt-0 md:pl-6">
          <p className="mt-2 text-gray-300 md:pl-10 text-sm sm:text-base">
            With over 2 years of full-stack journey, I have learned that
            experience is not merely about what you know, but how effectively
            you turn ideas into impact.
          </p>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {experiences.map((item, i) => {
          const overlayRef = useRef(null);
          return (
            <Card
              key={i}
              className="relative overflow-hidden h-56 sm:h-60 cursor-pointer bg-zinc-900 border-none px-4"
              onMouseEnter={(e) => handleEnter(e, overlayRef)}
              onMouseLeave={(e) => handleLeave(e, overlayRef)}
            >
              <CardHeader className="relative z-10 mb-4 mt-2">
                <p className="text-xs text-gray-400">{item.year}</p>
                <CardTitle className="text-[#FFA500] text-lg">
                  {item.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 text-sm">{item.description}</p>
              </CardContent>

              {/* Overlay */}
              <div
                ref={overlayRef}
                className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFA500]/80 z-0"
                style={{ transform: "translateX(-100%)" }}
              />
            </Card>
          );
        })}
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        <CircularProgress value={60} label="Web Design or UI/UX Design" />
        <CircularProgress value={70} label="Backend" />
        <CircularProgress value={80} label="API Integration" />
        <CircularProgress value={50} label="DevOps" />
      </div>
    </section>
  );
}
