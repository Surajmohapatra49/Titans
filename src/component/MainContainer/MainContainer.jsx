import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import slide1 from "../../assets/a.jpg";
import slide2 from "../../assets/b.jpg";
import slide3 from "../../assets/c.jpg";
import slide4 from "../../assets/d.jpg";
import slide5 from "../../assets/e.jpeg";
import slide6 from "../../assets/f.jpg";
import slide7 from "../../assets/g.jpg";

const MainContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide5, slide1, slide2, slide3, slide4, slide6, slide7];
  const videoRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval);
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

  const isVideo = (file) =>
    file.endsWith(".mp4") || file.endsWith(".webm") || file.endsWith(".mov");

  const goToSlide = (idx) => {
    if (idx >= 0 && idx < slides.length) {
      setCurrentSlide(idx);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }} // Adjust 64px if your navbar height is different
    >
      {slides.map((slide, idx) =>
        isVideo(slide) ? (
          <video
            key={idx}
            ref={(el) => (videoRefs.current[idx] = el)}
            src={slide}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ imageRendering: "auto" }}
            width={3840}
            height={2160}
          />
        ) : (
          <img
            key={idx}
            src={slide}
            alt={`Slide ${idx}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ imageRendering: "auto" }}
            width={3840}
            height={2160}
          />
        )
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20" />

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === idx
                ? "bg-amber-400 scale-110"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white sm:hidden"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white sm:hidden"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default MainContainer;
