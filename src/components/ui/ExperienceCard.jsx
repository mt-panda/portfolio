import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card.jsx";

const ExperienceCard = ({ item }) => {
  const overlayRef = useRef(null);

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

  const handleEnter = (e) => {
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

  const handleLeave = (e) => {
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
    <Card
      className="relative overflow-hidden h-60 cursor-pointer bg-zinc-900 border-none px-4"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
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
};

export default ExperienceCard;