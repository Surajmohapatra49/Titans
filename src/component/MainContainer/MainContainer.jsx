import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Desktop slides
import slide1 from "../../assets/a.jpg";
import slide2 from "../../assets/b.jpg";
import slide3 from "../../assets/c.jpg";
import slide4 from "../../assets/d.jpg";
import slide5 from "../../assets/e.jpeg";
import slide6 from "../../assets/f.jpeg";
import slide7 from "../../assets/g.jpg";

// Mobile slides
import mobile1 from "../../assets/mobile1.jpeg";
import mobile2 from "../../assets/mobile2.jpeg";
import mobile3 from "../../assets/mobile3.jpeg";

// Background video
import bgVideo from "../../assets/bkg.mp4";

const MainContainer = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

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
  const total = slides.length;
  const angle = 360 / total;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Glass Overlay for crystal-clear effect */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)", // very light white overlay
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            opacity: { value: 0.4 },
            color: { value: "#ffffff" },
          },
        }}
        className="absolute inset-0 z-20"
      />

      {/* 3D Carousel */}
      <div
        className="relative w-[300px] h-[200px] sm:w-[420px] sm:h-[280px] z-30"
        style={{ perspective: "1200px" }}
      >
        <div
          className="w-full h-full relative transition-transform duration-1000 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(-${current * angle}deg)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="absolute w-full h-full transition-all duration-700 transform-gpu"
              style={{
                transform: `rotateY(${idx * angle}deg) translateZ(500px)`,
                zIndex: current === idx ? 10 : 5,
              }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                perspective={1000}
                className="w-full h-full"
              >
                <img
                  src={slide}
                  alt={`Slide ${idx}`}
                  className="w-full h-full object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-110 hover:shadow-[0_20px_50px_rgba(255,255,255,0.4)]"
                />
              </Tilt>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Button */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % total)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 hover:bg-white/40 text-white transition-all rounded-full backdrop-blur"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx
                ? "bg-yellow-400 scale-110"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
