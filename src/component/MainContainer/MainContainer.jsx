import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <main className="bg-gradient-to-br from-[#0f0f0f] via-black to-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] group transition-transform duration-700">
          <div className="relative w-full h-full overflow-hidden shadow-xl backdrop-blur-sm bg-white/5 border border-white/10 rounded-none">
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
                      ? "opacity-100 z-10 scale-[1.03]"
                      : "opacity-0 z-0 scale-100"
                  }`}
                />
              )
            )}

            {/* Glow Border */}
            <div className="absolute inset-0 pointer-events-none border-2 border-transparent animate-border-glow" />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 perspective">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl transform animate-text-rise">
                <span className="inline-block transform animate-depth">
                  What's Hot
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-1 animate-fade-in">
                in
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mt-1 tracking-wider transform animate-depth delay-300">
                Titans{" "}
                <span className="font-medium text-amber-400">Gaming</span>
              </h3>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30 hidden sm:flex">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "bg-yellow-400 shadow-[0_0_8px_2px_rgba(255,191,0,0.6)] scale-110"
                      : "bg-white/30 hover:bg-white/60"
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
      </div>

      {/* Animation Styles */}
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-rise {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes depth {
          0% {
            transform: rotateX(90deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg) scale(1);
            opacity: 1;
          }
        }

        .animate-border-glow {
          animation: border-glow 4s ease-in-out infinite;
          border-image-slice: 1;
        }

        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }

        .animate-text-rise {
          animation: text-rise 1s ease-out both;
        }

        .animate-depth {
          animation: depth 1.2s ease-out both;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </main>
  );
};

export default MainContainer;
