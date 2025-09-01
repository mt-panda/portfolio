import React, { useRef, useState, useEffect } from "react";

function CircularProgress({ value, label }) {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp, startTime = null) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const current = Math.min((elapsed / duration) * value, value);
            setProgress(current);
            if (elapsed < duration)
              requestAnimationFrame((ts) => step(ts, startTime));
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [value]);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="text-gray-800"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            ref={circleRef}
            className="text-[#FFA500]"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${progress}, 100`}
            strokeLinecap="round"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
          {Math.round(progress)}%
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-white uppercase">{label}</p>
    </div>
  );
}

export default CircularProgress;
