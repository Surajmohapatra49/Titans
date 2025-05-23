import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

// Desktop images
import slide1 from "../../assets/a.jpg";
import slide2 from "../../assets/b.jpg";
import slide3 from "../../assets/c.jpg";
import slide4 from "../../assets/d.jpg";
import slide5 from "../../assets/e.jpeg";
import slide6 from "../../assets/f.jpg";
import slide7 from "../../assets/g.jpg";

// Mobile images
import mobile1 from "../../assets/mobile1.jpeg";
import mobile2 from "../../assets/mobile2.jpeg";
import mobile3 from "../../assets/mobile3.jpeg";

const MainContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  // Detect screen size
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  // Slides for different screens
  const desktopSlides = [
    slide5,
    slide1,
    slide2,
    slide3,
    slide4,
    slide6,
    slide7,
  ];
  const mobileSlides = [mobile1, mobile2, mobile3];
  const slides = isMobile ? mobileSlides : desktopSlides;

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
    typeof file === "string" &&
    (file.endsWith(".mp4") || file.endsWith(".webm") || file.endsWith(".mov"));

  const goToSlide = (idx) => {
    if (idx >= 0 && idx < slides.length) {
      setCurrentSlide(idx);
    }
  };

  return (
    <div className="relative w-full overflow-hidden h-[calc(100vh-64px)] sm:h-screen">
      {slides.map((slide, idx) =>
        isVideo(slide) ? (
          <video
            key={idx}
            ref={(el) => (videoRefs.current[idx] = el)}
            src={slide}
            muted
            loop
            playsInline
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ${
              isMobile ? "object-cover" : "object-contain"
            } transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            width={3840}
            height={2160}
          />
        ) : (
          <img
            key={idx}
            src={slide}
            alt={`Slide ${idx}`}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full ${
              isMobile ? "object-cover" : "object-contain"
            } transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            width={3840}
            height={2160}
          />
        )
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20" />

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} className="sm:size-24" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white"
        aria-label="Next Slide"
      >
        <ChevronRight size={20} className="sm:size-24" />
      </button>
    </div>
  );
};

export default MainContainer;
