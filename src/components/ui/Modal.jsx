import React from "react";
import { X } from "lucide-react";

const Modal = ({setIsOpen}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="relative w-[90%] md:w-[800px] h-[450px] bg-black rounded-xl overflow-hidden shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-white hover:text-[#FFA500] transition"
        >
          <X className="w-6 h-6 hover:cursor-pointer" />
        </button>

        {/* Video Iframe */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/P54QwJt4dC8?si=-kzhcGMkYmHkr2f4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
