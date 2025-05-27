import React, { useState } from "react";
import bgmiLogo from "../../assets/bgm.png";
import ffLogo from "../../assets/ff.png";

const tournaments = [
  {
    id: 1,
    title: "BGMI ProStrike Series",
    game: "BGMI",
    logo: bgmiLogo,
    prize: "₹5,000",
    status: "Ended",
    date: "01.05.2025 - 11.05.2025",
  },
  {
    id: 2,
    title: "Zone Rush Champions",
    game: "FREE FIRE",
    logo: ffLogo,
    prize: "₹3,000",
    status: "Ended",
    date: "19.04.2025 - 23.04.2025",
  },
  {
    id: 3,
    title: "NoScope Nexus",
    game: "BGMI",
    logo: bgmiLogo,
    prize: "-",
    status: "Ongoing",
    date: "26.05.2025 - 08.06.2025",
    live: true,
  },
];

const Tournaments = () => {
  const [flippedIds, setFlippedIds] = useState([]);

  const toggleFlip = (id) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-10 lg:px-16 font-sans">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 drop-shadow-xl select-none">
            Tournaments
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-2 rounded-full" />
        </div>

        <div className="hidden md:grid grid-cols-4 text-left text-sm font-bold bg-orange-100 py-3 px-6 rounded-t-xl text-orange-900 shadow-md select-none">
          <div className="col-span-1">NAME</div>
          <div className="text-right">PRIZE POOL</div>
          <div className="text-right">GAMES</div>
          <div className="text-right">EVENT DATE</div>
        </div>

        {/* Tournament List */}
        <div className="divide-y divide-gray-200 text-sm max-w-full">
          {tournaments.map((t) => {
            const isFlipped = flippedIds.includes(t.id);
            return (
              <div
                key={t.id}
                className="my-6 md:my-3 relative group"
                style={{ perspective: "1000px" }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-md border border-gray-200 w-full backface-hidden ${
                      t.live
                        ? "bg-gradient-to-r from-orange-50 to-white border-l-8 border-orange-600"
                        : ""
                    } md:grid md:grid-cols-4 flex flex-col gap-4 md:gap-0`}
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Tournament Info */}
                    <div className="col-span-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        {t.live && (
                          <span className="text-xs font-bold text-white bg-green-600 px-2 py-1 rounded-sm animate-pulse">
                            LIVE
                          </span>
                        )}
                        <span className="text-lg md:text-xl font-semibold text-gray-900">
                          {t.title}
                        </span>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded ${
                            t.status === "Ongoing"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-600"
                          }`}
                        >
                          {t.status.toUpperCase()}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 italic block mt-1">
                        {t.game}
                      </span>
                    </div>

                    {/* Prize Pool */}
                    <div className="w-full md:text-right text-gray-800 font-semibold">
                      <span className="block md:hidden font-bold text-gray-600">
                        Prize Pool:
                      </span>
                      {t.prize}
                    </div>

                    {/* Game Logo */}
                    <div className="w-full md:text-right">
                      <span className="block md:hidden font-bold text-gray-600">
                        Game:
                      </span>
                      <img
                        src={t.logo}
                        alt={t.game}
                        className="inline-block h-8 md:h-6 mt-1"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>

                    {/* Event Date */}
                    <div className="w-full md:text-right text-gray-700">
                      <span className="block md:hidden font-bold text-gray-600">
                        Date:
                      </span>
                      {t.date}
                    </div>

                    {/* More Button (Mobile Only) */}
                    <div className="block md:hidden w-full text-right mt-2">
                      <button
                        onClick={() => toggleFlip(t.id)}
                        className="text-orange-600 font-medium text-sm hover:underline"
                      >
                        More ▼
                      </button>
                    </div>
                  </div>

                  {/* Back Side (Details) */}
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-white rounded-2xl p-6 shadow-md border border-gray-200 flex flex-col justify-between transform rotate-y-180 backface-hidden md:hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="flex-1 space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>Title:</strong> {t.title}
                      </p>
                      <p>
                        <strong>Game:</strong> {t.game}
                      </p>
                      <p>
                        <strong>Prize:</strong> {t.prize}
                      </p>
                      <p>
                        <strong>Status:</strong> {t.status}
                      </p>
                      <p>
                        <strong>Event Date:</strong> {t.date}
                      </p>
                    </div>

                    <div className="text-right mt-4">
                      <button
                        onClick={() => toggleFlip(t.id)}
                        className="text-orange-600 font-medium text-sm hover:underline"
                      >
                        Back ▲
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
