import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import CircularProgress from "../components/ui/CircularProgress";
import { experiences } from "../constants/index";

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
    <>
      {/* <ExperienceSVG /> */}
      <section
        id="experience"
        className="bg-black text-white py-30 px-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1600' height='800' preserveAspectRatio='none' viewBox='0 0 1600 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1414%26quot%3b)' fill='none'%3e%3crect width='1600' height='800' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1415%26quot%3b)'%3e%3c/rect%3e%3cpath d='M 0%2c348 C 64%2c288 192%2c76.8 320%2c48 C 448%2c19.2 512%2c176 640%2c204 C 768%2c232 832%2c160.8 960%2c188 C 1088%2c215.2 1152%2c351 1280%2c340 C 1408%2c329 1536%2c174.4 1600%2c133L1600 800L0 800z' fill='rgba(46%2c 29%2c 0%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c727 C 106.8%2c681 320.4%2c493 534%2c497 C 747.6%2c501 854.8%2c762.6 1068%2c747 C 1281.2%2c731.4 1493.6%2c484.6 1600%2c419L1600 800L0 800z' fill='rgba(75%2c 49%2c 1%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1414'%3e%3crect width='1600' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='12.5%25' y1='-25%25' x2='87.5%25' y2='125%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1415'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <div className="flex flex-col md:flex-row mb-12">
          {/* Left column */}
          <div className="w-full md:w-1/2 pr-6 text-left relative">
            <p
              className="font-bold text-7xl z-0"
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

            <p className="text-[#FFA500] font-bold">MY EXPERIENCE</p>
            <h2 className="text-4xl font-bold mt-2 sansation-bold">
              EXPERIENCE AND <span className="text-[#FFA500]">SKILL</span>
            </h2>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2 pl-6 border-l border-[#FFA500] text-left">
            <p className="mt-2 max-w-xl text-gray-300 pl-10">
              With over 2 years of full-stack journey, I have learned that
              experience is not merely about what you know, but how effectively
              you turn ideas into impact.
            </p>
          </div>
        </div>
        {/* Experience Cards with Direction Aware Hover */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {experiences.map((item, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const overlayRef = useRef(null);
            return (
              <Card
                key={i}
                className="relative overflow-hidden h-60 cursor-pointer bg-zinc-900 border-none px-4"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <CircularProgress value={60} label="Web Design or UI/UX Design" />
          <CircularProgress value={70} label="Backend" />
          <CircularProgress value={80} label="API Integration" />
          <CircularProgress value={50} label="DevOps" />
        </div>
      </section>
    </>
  );
}
