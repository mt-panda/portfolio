import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/constants/index";
import LightRays from "@/components/LightRays";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function styleFor(offset, isMobile) {
  const baseScale = isMobile ? 0.96 : 1;
  if (offset === 0) {
    return {
      transform: `translateX(-50%) translateZ(0px) rotateY(0deg) scale(${baseScale})`,
      zIndex: 5,
      opacity: 1,
      filter: "brightness(1)",
    };
  }
  const side = Math.sign(offset);
  const depth = clamp(Math.abs(offset), 1, 2);
  const tx = (isMobile ? 38 : 48) * side * depth;
  const ry = (isMobile ? 14 : 18) * side * depth;
  const tz = -160 * depth;
  const sc = (isMobile ? 0.84 : 0.9) - (depth - 1) * 0.08;

  return {
    transform: `translateX(calc(-50% + ${tx}%)) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
    zIndex: 5 - depth,
    opacity: depth === 2 ? 0.55 : 0.8,
    filter: "brightness(0.75)",
    pointerEvents: "none",
  };
}

export default function CoverflowShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 900);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % projects.length),
      5000
    );
    return () => clearInterval(id);
  }, [paused, projects.length]);

  const touchRef = useRef({ x: 0, dragging: false });
  const onTouchStart = (e) => {
    touchRef.current = { x: e.touches[0].clientX, dragging: true };
    setPaused(true);
  };
  const onTouchMove = (e) => {
    if (!touchRef.current.dragging) return;
    const dx = e.touches[0].clientX - touchRef.current.x;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
      touchRef.current.dragging = false;
    }
  };
  const onTouchEnd = () => {
    touchRef.current.dragging = false;
    setPaused(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden bg-gradient text-white py-[180px]">
      <LightRays
        raysOrigin="top-center"
        raysColor="#FFA500"
        raysSpeed={1.2}
        lightSpread={1.2}
        rayLength={10}
        pulsating={true}
        fadeDistance={2.0}
        saturation={1.5}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="mb-5 text-3xl font-extrabold tracking-wide text-white md:text-4xl lg:text-5xl">
          Projects
        </h2>

        {/* Stage */}
        <div
          className="relative h-[520px] [perspective:1600px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-md border border-white/20 bg-[#FFA500]/50 text-white hover:bg-[#FFA500]/100 cursor-pointer"
            aria-label="Previous"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-md border border-white/20 bg-[#FFA500]/50 text-white hover:bg-[#FFA500]/100 cursor-pointer"
            aria-label="Next"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* only render center + neighbors for performance */}
          {projects.map((it, i) => {
            let off = i - index;
            if (off > projects.length / 2) off -= projects.length;
            if (off < -projects.length / 2) off += projects.length;

            if (Math.abs(off) > 1) return null; // render only center & sides

            return (
              <div
                key={i}
                style={styleFor(off, isMobile)}
                className="absolute top-0 left-1/2 w-[740px] max-w-[88vw] h-[520px] 
                rounded-3xl overflow-hidden will-change-transform will-change-opacity
                shadow-[0_10px_30px_rgba(0,0,0,.5)]
                bg-[#0e0e0e] border-10 border-[#FFA500]/60
                transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
              >
                {/* Background Image */}
                <img
                  src={it.image}
                  alt={it.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />

                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-3 text-left z-10">
                  {/* Button */}
                  <div className="mb-2">
                    <Button
                      size="sm"
                      className="rounded-lg font-bold px-5 py-2.5 text-sm text-white tracking-wide
                      bg-gradient-to-r from-[#FFA500] to-[#FF6A00]
                      shadow-[0_0_15px_rgba(255,165,0,.6)]
                      hover:shadow-[0_0_30px_rgba(255,165,0,.9)] hover:scale-105
                      transition-all duration-300 ease-in-out cursor-pointer"
                      onClick={() =>
                        it.path && (window.location.href = it.path)
                      }
                    >
                      🚀 View Project
                    </Button>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-3xl font-extrabold bg-gradient-to-r from-[#FFA500] to-[#FF4500]/80 text-transparent bg-clip-text"
                    style={{
                      WebkitTextStroke: "1px rgba(0,0,0,0.5)",
                      textShadow:
                        "0 0 12px rgba(255,255,255,0.6)",
                    }}
                  >
                    {it.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base text-gray-200 leading-relaxed max-w-xl">
                    {it.subtitle}
                  </p>

                  {/* Stack */}
                  <span className="text-xs tracking-[0.15em] font-semibold text-gray-300 uppercase mt-1">
                    <b className="text-[#FFA500]">Stack:</b> {it.stack}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {projects.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                i === index ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
