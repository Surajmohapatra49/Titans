import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Desktop slides (10)
import slide1 from "../../assets/pc1.png";
import slide2 from "../../assets/pc2.png";
import slide3 from "../../assets/pc3.png";
import slide4 from "../../assets/pc4.png";
import slide5 from "../../assets/pc5.png";
import slide6 from "../../assets/pc6.png";
import slide7 from "../../assets/pc7.png";
// import slide8 from "../../assets/h.jpg";
// import slide9 from "../../assets/i.jpg";
// import slide10 from "../../assets/j.jpg";

// Mobile slides (10)
import mobile1 from "../../assets/m1.jpg";
import mobile2 from "../../assets/m2.jpg";
import mobile3 from "../../assets/m3.jpeg";
import mobile4 from "../../assets/m4.jpeg";
// import mobile5 from "../../assets/m5.jpg";
// import mobile6 from "../../assets/m6.jpg";
// import mobile7 from "../../assets/m7.jpg";
// import mobile8 from "../../assets/m8.jpg";
// import mobile9 from "../../assets/m9.jpg";
// import mobile10 from "../../assets/m10.jpg";

// Background image
import bgImage from "../../assets/bg.jpg";

const MainContainer = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const desktopSlides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    // slide8,
    // slide9,
    // slide10,
  ];

  const mobileSlides = [
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    // mobile5,
    // mobile6,
    // mobile7,
    // mobile8,
    // mobile9,
    // mobile10,
  ];

  const slides = isMobile ? mobileSlides : desktopSlides;
  const total = slides.length;
  const angle = 360 / total;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  const goNext = () => setCurrent((prev) => (prev + 1) % total);
  const goPrev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Glass Effect */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
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

      {/* Main Slide Content */}
      {isMobile ? (
        // ✅ Mobile View
        <div
          className="w-full h-full flex items-center justify-center z-30"
          style={{ perspective: "1000px" }}
        >
          <div
            className="w-[90%] h-[80%] transition-transform duration-[3000ms] ease-in-out rounded-xl shadow-2xl overflow-hidden"
            style={{
              transform: `rotateY(${current * 360}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={slides[current]}
              alt={`Mobile Slide ${current}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      ) : (
        // ✅ Desktop View
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
      )}

      {/* Navigation Buttons – shown on all screens */}
      <button
        onClick={goPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 hover:bg-white/40 text-white transition-all rounded-full backdrop-blur"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={goNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 hover:bg-white/40 text-white transition-all rounded-full backdrop-blur"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots (optional – desktop and mobile) */}
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
