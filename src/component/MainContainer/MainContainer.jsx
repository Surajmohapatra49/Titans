import React, { useState, useEffect, useRef } from "react";

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

  const goToSlide = (index) => setCurrentSlide(index);

  const isVideo = (file) =>
    file.endsWith(".mp4") || file.endsWith(".webm") || file.endsWith(".mov");

  return (
    <main className="bg-gradient-to-br from-[#0f0f0f] via-black to-[#1a1a1a] min-h-screen flex items-center justify-center font-sans">
      <div className="relative w-[80vw] aspect-[16/9] group transform transition-transform duration-700 hover:rotate-[0.4deg] hover:scale-[1.01]">
        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.06)] backdrop-blur-sm bg-white/5 border border-white/10">
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
                    ? "opacity-100 z-10 scale-[1.3]"
                    : "opacity-0 z-0 scale-100"
                }`}
                style={{ transition: "transform 1s ease-in-out" }}
              />
            )
          )}

          <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent animate-border-glow" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 z-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
              Welcome Titans
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-300 font-medium tracking-wide drop-shadow-sm max-w-xl">
              No Mercy, Only Victory
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-amber-400 shadow-[0_0_8px_2px_rgba(255,191,0,0.8)] scale-110"
                    : "bg-white/30 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
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
