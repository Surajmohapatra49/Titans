import React, { useState } from "react";

const ClassicShowcaseSection = () => {
  const [selectedTab, setSelectedTab] = useState("winners");

  // Track flipped cards on mobile/tablet by index (per tab)
  const [flippedCards, setFlippedCards] = useState({
    winners: {},
    hall: {},
  });

  const showcaseData = {
    winners: [
      {
        name: "RogueX",
        squad: "Alpha Squad",
        event: "Crew Wars",
        prize: "₹12,000",
        members: ["Ace", "Blaze", "Shadow", "Viper"],
      },
      {
        name: "NovaForce",
        squad: "Fire Hawks",
        event: "Domination Cup",
        prize: "₹10,000",
        members: ["Flame", "Sky", "Bolt", "Storm"],
      },
    ],
    hall: [
      {
        name: "Shadow",
        squad: "Phantom Legends",
        games: "Valorant",
        title: "Kill Leader",
        members: ["Ghost", "Reaper", "Shade", "Specter"],
      },
      {
        name: "Falcon",
        squad: "Ghost Ops",
        games: "CS:GO",
        title: "Clutch Master",
        members: ["Hawk", "Eagle", "Raven", "Owl"],
      },
    ],
  };

  // Toggle flip on mobile/tablet tap of the buttons
  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [selectedTab]: {
        ...prev[selectedTab],
        [index]: !prev[selectedTab]?.[index],
      },
    }));
  };

  return (
    <>
      <style>{`
        .flip-card {
          perspective: 1500px;
          width: 100%;
          max-width: 24rem; /* 384px */
          height: 18rem; /* 288px */
          position: relative;
          margin: 0 auto;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s ease;
          transform-style: preserve-3d;
          border-radius: 1rem;
          will-change: transform;
          cursor: pointer;
        }

        .flip-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden; /* Safari */
          -webkit-transform-style: preserve-3d; /* Safari */
          transform-style: preserve-3d;
          top: 0;
          left: 0;
          padding: 2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          user-select: none;
        }

        .flip-back {
          transform: rotateY(180deg);
          background-color: #ea580c; /* orange-600 */
          color: black;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
        }

        .glow-card {
          background: white;
          border: 2px solid #ea580c; /* orange-600 */
          box-shadow: 
            0 4px 10px rgba(234, 88, 12, 0.4),
            inset 0 0 10px rgba(234, 88, 12, 0.1);
          height: 100%;
          transition: all 0.4s ease;
        }
        .glow-card:hover {
          box-shadow: 
            0 8px 24px rgba(234, 88, 12, 0.6),
            inset 0 0 14px rgba(234, 88, 12, 0.15);
          transform: scale(1.03) rotateX(2deg) rotateY(2deg);
          cursor: pointer;
        }

        .member-list {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        .member {
          background: rgba(0,0,0,0.05);
          border-radius: 9999px;
          padding: 0.4rem 1rem;
          font-weight: 600;
          font-size: 1rem;
          color: black;
          box-shadow: 0 0 6px rgba(234, 88, 12, 0.7);
        }

        /* Buttons */
        .more-btn, .back-btn {
          margin-top: 1.8rem;
          background-color: #ea580c;
          border: none;
          color: black;
          font-weight: 700;
          padding: 0.6rem 1.4rem;
          font-size: 1rem;
          border-radius: 9999px;
          box-shadow: 0 0 12px rgba(234, 88, 12, 0.7);
          cursor: pointer;
          align-self: center;
          user-select: none;
          transition: background-color 0.3s ease;
        }
        .more-btn:hover, .back-btn:hover {
          background-color: #c24400;
          color: white;
        }

        /* Desktop hover flip */
        @media (hover: hover) and (pointer: fine) {
          .flip-card:hover .flip-inner {
            transform: rotateY(180deg);
          }
          /* On desktop, hide mobile buttons */
          .more-btn, .back-btn {
            display: none;
          }
        }

        /* Responsive tweaks */
        @media (max-width: 640px) {
          .flip-front, .flip-back {
            padding: 1.5rem;
          }
          .flip-front h3 {
            font-size: 1.8rem;
          }
          .flip-back h4 {
            font-size: 1.5rem;
          }
          .flip-back p {
            font-size: 2rem;
          }
          .member {
            font-size: 0.9rem;
            padding: 0.3rem 0.8rem;
          }
          .glow-card {
            cursor: default;
          }
        }
      `}</style>

      <section className="min-h-screen py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
            🎯 Showcase Spotlight
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-10 flex-wrap gap-3">
            {["winners", "hall"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                  selectedTab === tab
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {tab === "winners" ? "🏆 Winners" : "🎖️ Hall of Fame"}
              </button>
            ))}
          </div>

          {/* Flip Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4"
            style={{ minHeight: "288px" }}
          >
            {showcaseData[selectedTab].map((item, index) => {
              const isFlipped = flippedCards[selectedTab]?.[index] || false;

              return (
                <div
                  key={index}
                  className="flip-card"
                  aria-label={`${item.name} card`}
                >
                  <div
                    className={`flip-inner glow-card rounded-xl ${
                      isFlipped ? "flipped" : ""
                    }`}
                  >
                    {/* Front */}
                    <div className="flip-front text-gray-800">
                      <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                      <p className="text-lg text-gray-700">
                        {selectedTab === "winners"
                          ? `Event: ${item.event}`
                          : `Game: ${item.games}`}
                      </p>
                      <div className="mt-5">
                        <span className="inline-block text-xl bg-gray-100 text-black font-semibold px-5 py-3 rounded-full shadow-sm">
                          {selectedTab === "winners" ? item.prize : item.title}
                        </span>
                      </div>
                      <p className="text-sm mt-6 text-gray-400">
                        Hover (desktop) / Tap More (mobile) to view Squad →
                      </p>
                      {/* More button on mobile/tablet */}
                      <button
                        className="more-btn"
                        onClick={() => toggleFlip(index)}
                        aria-label={`Show squad details for ${item.name}`}
                        type="button"
                      >
                        More
                      </button>
                    </div>

                    {/* Back */}
                    <div className="flip-back">
                      <h4 className="text-2xl font-bold mb-4">Squad</h4>
                      <p className="text-3xl font-extrabold">{item.squad}</p>

                      <div className="member-list">
                        {item.members.map((m, i) => (
                          <span key={i} className="member">
                            {m}
                          </span>
                        ))}
                      </div>

                      {/* Back button on mobile/tablet */}
                      <button
                        className="back-btn"
                        onClick={() => toggleFlip(index)}
                        aria-label={`Hide squad details for ${item.name}`}
                        type="button"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClassicShowcaseSection;
