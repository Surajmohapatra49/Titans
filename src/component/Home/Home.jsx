import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MainContainer from "../MainContainer/MainContainer";
import slide01 from "../../assets/live.jpg";
import slide02 from "../../assets/live.jpg";
import slide03 from "../../assets/ff.png";
import slide05 from "../../assets/bgmi.png";
import slide04 from "../../assets/bg.jpg";
import slide06 from "../../assets/cc.png";
import lvImage from "../../assets/lv.jpg";

import slide51 from "../../assets/p1.jpg";
import slide52 from "../../assets/pf.jpg";
import slide53 from "../../assets/p3.jpg";

const Home = () => {
  const stats = [
    { number: 1000, suffix: "+", label: "Players Engaged" },
    { number: 250, suffix: "", label: "Matches Played" },
    { number: 50, suffix: "+", label: "Live Tournaments" },
    { number: 85, suffix: "%", label: "Player Satisfaction" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="pt-16 min-h-screen space-y-24 bg-white text-gray-900">
      <MainContainer />

      {/* Hero Section with Video */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        {/* ✅ Background Video (Full quality, no blur/opacity) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/we.mp4 " type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✅ Overlay to enhance text readability */}
        <div className="absolute inset-0  z-0" />

        {/* ✅ Foreground Content */}
        <div className="flex items-center justify-end h-screen px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-gray-800">
          <div
            className="w-4/5 max-w-5xl p-8 md:p-12 text-left"
            style={{ transform: "translateX(25%)" }} // shift right by 25%
          >
            {/* Heading + Subtext */}
            <div className="text-lg md:text-xl font-light tracking-wide leading-snug">
              <h1
                className="text-3xl md:text-5xl font-extrabold inline-block mb-2"
                style={{
                  color: "#1f1f1f",
                  textShadow: "3px 3px 0 #ff004c, 6px 6px 0 #00000020",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "1px",
                }}
              >
                Dive Into the Arena ...
              </h1>

              <span
                className="block text-base md:text-lg font-medium leading-relaxed"
                style={{
                  color: "#333333",
                  background: "linear-gradient(to right, #ff004c, #ff9900)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                Tactical Titans brings esports battles, legendary gamers, and
                unmissable moments.
              </span>
            </div>

            {/* Centered Button */}
            <div className="flex justify-center mt-10">
              <a
                href="intent://launch#Intent;scheme=bgmi;package=com.pubg.imobile;end"
                onClick={() =>
                  setTimeout(() => {
                    alert(
                      "If the game didn't open, please install BGMI from the Play Store."
                    );
                  }, 1500)
                }
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                Join the Battle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-4 py-16 container mx-auto">
        {[
          {
            img: slide02,
            title: "Intense Tournaments",
            text: "Fight for glory in monthly esports leagues.",
            features: [
              "Monthly prizes",
              "Knockout stages",
              "Live streamed finals",
            ],
          },
          {
            img: slide02,
            title: "Global Leaderboards",
            text: "Top players ranked live, daily.",
            features: [
              "Realtime updates",
              "Country & World Rank",
              "Track performance",
            ],
          },
          {
            img: slide02,
            title: "Gaming Buzz",
            text: "Stay updated with every drop.",
            features: ["Patch notes", "Exclusive leaks", "Event reminders"],
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-xl cursor-pointer transform transition-transform duration-500 hover:scale-[1.04] hover:shadow-pink-500/40"
          >
            {/* Background Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-64 object-cover rounded-3xl brightness-90 group-hover:brightness-70 transition-all duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full px-6 py-6 backdrop-blur-lg bg-white/5 border-t border-white/10 text-white translate-y-full group-hover:translate-y-0 transition-all duration-700 rounded-b-3xl">
              <h3 className="text-xl font-extrabold tracking-wide text-cyan-400 mb-2 drop-shadow-lg">
                {card.title}
              </h3>
              <p className="text-sm mb-3 text-gray-200">{card.text}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-pink-300">
                {card.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section ref={ref} className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="text-3xl font-bold">
              <div className="text-orange-500 text-5xl mb-2">
                {inView ? (
                  <CountUp end={item.number} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {item.suffix}
              </div>
              <div className="text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Streamer Spotlight Section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src={lvImage}
            alt="Live Legend"
            className="w-full md:w-1/2 rounded-3xl shadow-xl object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Meet the Legends:{" "}
              <span className="text-orange-500">ShadowStrike</span>
            </h2>
            <p className="text-gray-700 mb-6">
              With over 1K+ views, ShadowStrike has become a symbol of clutch
              plays and crowd-pleasing finishes. Watch live streams and
              exclusive behind-the-scenes.
            </p>
            <button className="bg-orange-500 text-white px-5 py-3 rounded hover:bg-orange-600 transition">
              Coming Soon..
            </button>
          </div>
        </div>
      </section>

      {/* Tournament Rules Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 drop-shadow-lg">
            🛡️ Tournament Rules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Each team must consist  4 players.",
              "Each team must register 2 hours before the game",
              "No use of third-party cheats or hacks is allowed.",
              "Respectful behavior toward opponents and organizers is mandatory.",
              "Matches must start within 5 minutes of the scheduled time.",
              "Failure to follow rules may result in disqualification.",
            ].map((rule, idx) => (
              <div
                key={idx}
                className="relative bg-white p-6 rounded-2xl shadow-2xl transform transition duration-500 hover:rotate-y-6 hover:scale-105 hover:shadow-orange-600"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">
                    Rule {idx + 1}
                  </h3>
                  <p className="text-gray-700">{rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800 tracking-tight">
          What Our Players Say
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              name: "Jasmin",
              text: "The best competitive scene. Every match feels like a final!",
              img: slide51,
              neonColor: "text-pink-500",
              glow: "0 0 6px #ec4899, 0 0 12px #ec4899",
            },
            {
              name: "Sourav",
              text: "Tactical Titans gave me my first break as a streamer.",
              img: slide52,
              neonColor: "text-cyan-400",
              glow: "0 0 6px #22d3ee, 0 0 12px #22d3ee",
            },
            {
              name: "Sibu Ranjan",
              text: "Tournaments are lit! They’re fair, fast, and super fun.",
              img: slide53,
              neonColor: "text-violet-500",
              glow: "0 0 6px #8b5cf6, 0 0 12px #8b5cf6",
            },
          ].map((t, i) => (
            <div key={i} className="group" style={{ perspective: "1000px" }}>
              <div className="relative flex flex-col justify-between bg-neutral-900 text-white rounded-3xl p-6 shadow-xl transform transition-transform duration-700 group-hover:scale-105 hover:shadow-red-400/40 border border-white/10 overflow-hidden min-h-[220px]">
                {/* Background Shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse pointer-events-none rounded-3xl" />

                {/* Header */}
                <div className="flex items-center space-x-4 mb-4">
                  {/* Flip Image */}
                  <div
                    className="w-16 h-16"
                    style={{
                      perspective: "1000px",
                    }}
                  >
                    <div
                      className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Front Side */}
                      <div
                        className="absolute inset-0 rounded-full overflow-hidden border-4 border-rose-500 shadow-md"
                        style={{
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-full h-full object-cover"
                          style={{
                            filter: "blur(2px)",
                            transform: "scale(1.05)",
                          }}
                        />
                      </div>

                      {/* Back Side */}
                      <div
                        className="absolute inset-0 rounded-full overflow-hidden border-4 border-rose-500 shadow-md"
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      >
                        <img
                          src={t.img}
                          alt={`${t.name} clear`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Neon Name */}
                  <p
                    className={`text-lg font-bold tracking-wide group-hover:scale-105 transition-transform ${t.neonColor}`}
                    style={{
                      textShadow: t.glow,
                    }}
                  >
                    {t.name}
                  </p>
                </div>

                {/* Testimonial Text */}
                <p className="italic text-white text-opacity-80 leading-relaxed transition-opacity duration-500 group-hover:text-opacity-100">
                  "{t.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        className="bg-gray-900 py-20 overflow-hidden relative group"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <style>
          {`
      @keyframes slideInLeft {
        0% { transform: translateX(-200px) scale(0.9); opacity: 0; }
        100% { transform: translateX(0) scale(1); opacity: 1; }
      }
      @keyframes slideInRight {
        0% { transform: translateX(200px) scale(0.9); opacity: 0; }
        100% { transform: translateX(0) scale(1); opacity: 1; }
      }
      @keyframes slideInUp {
        0% { transform: translateY(200px) scale(0.8); opacity: 0; }
        100% { transform: translateY(0) scale(1); opacity: 1; }
      }

      .group:hover .hover-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }

      .group:hover .hover-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }

      .group:hover .hover-slide-in-up {
        animation: slideInUp 0.8s ease-out forwards;
        animation-delay: 0.6s;
      }
    `}
        </style>

        <h2 className="text-6xl text-orange-600 font-extrabold text-center mb-16 tracking-wide">
          Powered By
        </h2>

        <div
          className="relative max-w-5xl mx-auto px-8 flex justify-between items-end"
          style={{ height: 120 }}
        >
          {/* Left image */}
          <div className="w-1/4 flex justify-center opacity-0 hover-slide-in-left">
            <img
              src={slide05}
              alt="Sponsor Left"
              className="h-20 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-orange-500/50 rounded-xl"
            />
          </div>

          {/* Middle image */}
          <div className="w-1/4 flex justify-center opacity-0 hover-slide-in-up">
            <img
              src={slide06}
              alt="Sponsor Middle"
              className="h-20 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-orange-500/70 rounded-xl"
            />
          </div>

          {/* Right image */}
          <div className="w-1/4 flex justify-center opacity-0 hover-slide-in-right">
            <img
              src={slide03}
              alt="Sponsor Right"
              className="h-20 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-orange-500/50 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white text-center py-24 px-6 rounded-t-[3rem] shadow-2xl overflow-hidden">
        {/* Background Floating Glow Blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-orange-200/10 rounded-full blur-3xl animate-float-medium" />

        {/* Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-orange-200/5 to-white/5 opacity-10 animate-pulse pointer-events-none blur-sm" />

        {/* Main Text Content */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
          Ready to Rise?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/90 leading-relaxed">
          Join thousands of gamers from across the globe. Start your tactical
          journey with us today!
        </p>

        {/* Glowing CTA Button */}
        <button className="relative bg-black px-8 py-4 rounded-full text-white text-lg font-bold tracking-wide shadow-md hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 group overflow-hidden">
          <span className="relative z-10">Get Started Now</span>
          <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-orange-400 transition duration-300 animate-glow-ring pointer-events-none" />
          <div className="absolute inset-0 bg-orange-500 opacity-10 blur-lg rounded-full pointer-events-none" />
        </button>

        {/* Motion Animations */}
        <style>{`
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      50% { transform: translateY(-20px) translateX(10px); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      50% { transform: translateY(-10px) translateX(-10px); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(15px); }
    }
    @keyframes glow-ring {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }

    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }
    .animate-float-fast {
      animation: float-fast 5s ease-in-out infinite;
    }
    .animate-float-medium {
      animation: float-medium 6s ease-in-out infinite;
    }
    .animate-glow-ring {
      animation: glow-ring 2s ease-in-out infinite;
    }
  `}</style>
      </section>
    </div>
  );
};

export default Home;
