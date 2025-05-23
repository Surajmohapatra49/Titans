import React, { useState } from "react";

const ClassicShowcaseSection = () => {
  const [selectedTab, setSelectedTab] = useState("winners");

  const winners = [
    { name: "Alpha Squad", event: "Crew Wars", prize: "₹12,000" },
    { name: "Omega Ops", event: "Tactical Clash", prize: "₹8,000" },
    { name: "Night Vipers", event: "Sniper Royale", prize: "₹5,000" },
    { name: "Fire Hawks", event: "Domination Cup", prize: "₹10,000" },
  ];

  const hallOfFamers = [
    { name: "Quantum", games: "LoL", title: "5x Champion" },
    { name: "Blitz", games: "Dota 2", title: "MVP 2022" },
    { name: "Shadow", games: "Valorant", title: "Kill Leader" },
    { name: "Falcon", games: "CS:GO", title: "Clutch King" },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 py-24 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-serif font-bold text-gray-800 mb-16 drop-shadow-lg">
          🎯 Showcase Spotlight
        </h2>
        <div className="flex justify-center gap-8 mb-14">
          <button
            onClick={() => setSelectedTab("winners")}
            className={`px-8 py-4 rounded-full text-xl font-semibold transition transform shadow-xl hover:scale-110 hover:shadow-pink-500/40 ${
              selectedTab === "winners"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            🏆 Winners
          </button>
          <button
            onClick={() => setSelectedTab("hall")}
            className={`px-8 py-4 rounded-full text-xl font-semibold transition transform shadow-xl hover:scale-110 hover:shadow-pink-500/40 ${
              selectedTab === "hall"
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            🎖️ Hall of Fame
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {(selectedTab === "winners" ? winners : hallOfFamers).map(
            (item, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-200 transform transition duration-500 hover:scale-110 hover:rotate-[2deg] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-md backdrop-saturate-200"
                style={{ perspective: "1500px" }}
              >
                <div
                  className="transform transition-transform duration-500 hover:rotate-y-[10deg] hover:-rotate-x-[3deg]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-left">
                    <h3 className="text-4xl font-extrabold mb-4 text-purple-800 drop-shadow-md">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 text-lg">
                      {selectedTab === "winners"
                        ? `Event: ${item.event}`
                        : `Games: ${item.games}`}
                    </p>
                    <p className="text-gray-900 font-bold mt-4 text-xl">
                      {selectedTab === "winners"
                        ? `Prize: ${item.prize}`
                        : `Title: ${item.title}`}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassicShowcaseSection;
