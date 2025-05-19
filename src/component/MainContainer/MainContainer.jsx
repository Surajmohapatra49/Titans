import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import media
import slide1 from "../../assets/a.jpg";
import slide2 from "../../assets/b.mp4";
import slide3 from "../../assets/c.mp4";
import slide4 from "../../assets/d.jpg";
import slide5 from "../../assets/e.mp4";
import slide6 from "../../assets/f.mp4";
import slide7 from "../../assets/g.jpg";

const MainContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide5, slide1, slide2, slide3, slide4, slide6, slide7];
  const videoRefs = useRef([]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 30000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentSlide) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const isVideo = (file) =>
    file.endsWith(".mp4") || file.endsWith(".webm") || file.endsWith(".mov");

  return (
    <main className="bg-gradient-to-br from-[#0f0f0f] via-black to-[#1a1a1a] m-0 p-0">
      <div className="relative w-full h-[80vh] group transform transition-transform duration-700 hover:rotate-[0.4deg] hover:scale-[1.01]">
        <div className="relative w-full h-full overflow-hidden rounded-none shadow-[0_0_20px_rgba(255,255,255,0.06)] backdrop-blur-sm bg-white/5 border border-white/10">
          {slides.map((slide, idx) =>
            isVideo(slide) ? (
              <video
                key={idx}
                src={slide}
                loop
                muted
                playsInline
                ref={(el) => (videoRefs.current[idx] = el)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ) : (
              <img
                key={idx}
                src={slide}
                alt={`Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform ${
                  idx === currentSlide
                    ? "opacity-100 z-10 scale-[1.1]"
                    : "opacity-0 z-0 scale-100"
                }`}
                style={{ transition: "transform 1s ease-in-out" }}
              />
            )
          )}

          {/* Gradient Border Animation */}
          <div className="absolute inset-0 pointer-events-none border-2 border-transparent animate-border-glow" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
              Welcome Titans
            </h1>
            <p className="mt-1 sm:mt-2 md:mt-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 font-medium tracking-wide drop-shadow-sm max-w-[85%] sm:max-w-[80%] md:max-w-xl">
              No Mercy, Only Victory
            </p>
          </div>

          {/* Desktop Dot Navigation */}
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 lg:space-x-3 z-30 hidden sm:flex">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-amber-400 shadow-[0_0_5px_1px_rgba(255,191,0,0.8)] scale-110"
                    : "bg-white/30 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows */}
          <button
            onClick={prevSlide}
            className="block sm:hidden absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="block sm:hidden absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes border-glow {
          0%,
          100% {
            border-image: linear-gradient(90deg, #facc15, #f97316, #facc15) 1;
          }
          50% {
            border-image: linear-gradient(90deg, #f97316, #facc15, #f97316) 1;
          }
        }
        .animate-border-glow {
          animation: border-glow 3s ease-in-out infinite;
          border-image-slice: 1;
        }
      `}</style>
    </main>
  );
};

export default MainContainer;
