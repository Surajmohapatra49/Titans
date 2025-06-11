import React, { useState } from "react";

const ClassicShowcaseSection = () => {
  const [selectedTab, setSelectedTab] = useState("winners");
  const [expandedCard, setExpandedCard] = useState(null);

  const showcaseData = {
    winners: [
      {
        name: "BGMI",
        squad: "Alpha Squad",
        event: "BGMI ProStrike Series",
        prize: "₹8,000",
        members: ["honeybadger", "Steve", "AlexTr2A", "Asakhelijiba"],
      },
      {
        name: "Free Fire",
        squad: "Fire Hawks",
        event: "Zone Rush Champions",
        prize: "₹4,000",
        members: ["Sibu", "Sky", "Bolt", "Storm"],
      },
    ],
    hall: [
      {
        name: "Shadow",
        squad: "Phantom Legends",
        games: "BGMI ProStrike Series",
        title: "Kill Leader",
        members: ["Ghost", "Reaper", "Shade", "Specter"],
      },
    ],
  };

  const toggleExpand = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-40 via-white to-yellow-100 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r orange-600 via-pink-500 to-yellow-500 drop-shadow-md animate-pulse mb-16 tracking-tight">
          ✨ Showcase Spotlight
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-12 flex-wrap">
          {[
            { key: "winners", label: "🏆 Winners" },
            { key: "hall", label: "🎖️ Hall of Fame" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => {
                setSelectedTab(key);
                setExpandedCard(null);
              }}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-lg transition-all duration-300 transform ${
                selectedTab === key
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white scale-105 shadow-lg"
                  : "bg-white text-orange-600 border-2 border-orange-400 hover:bg-orange-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseData[selectedTab].map((item, index) => {
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className="relative group bg-white rounded-3xl shadow-lg p-6 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl overflow-hidden border-2 border-transparent hover:border-orange-400"
              >
                <div className="flex flex-col gap-3 min-h-[220px]">
                  <h3 className="text-2xl font-bold text-orange-700 group-hover:underline">
                    {item.name}
                  </h3>
                  <p className="text-base font-semibold">
                    {selectedTab === "winners" ? "Event" : "Game"}:{" "}
                    <span className="font-normal">
                      {selectedTab === "winners" ? item.event : item.games}
                    </span>
                  </p>
                  <p className="text-base font-semibold">
                    {selectedTab === "winners" ? "Prize" : "Title"}:{" "}
                    <span className="font-normal">
                      {selectedTab === "winners" ? item.prize : item.title}
                    </span>
                  </p>
                  <p className="text-orange-600 font-semibold">
                    Squad: {item.squad}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition duration-200 shadow-md"
                  >
                    {isExpanded ? "Hide Details" : "More Details"}
                  </button>
                </div>

                {/* Dim background on card */}
                {isExpanded && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-3xl z-10" />
                )}

                {/* Center Modal */}
                <div
                  className={`absolute top-1/2 left-1/2 w-80 sm:w-96 bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl p-6 shadow-2xl z-20 transition-all duration-500 ease-in-out transform ${
                    isExpanded
                      ? "translate-x-[-50%] translate-y-[-50%] opacity-100 scale-100"
                      : "translate-x-[-50%] translate-y-[-50%] opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-yellow-400 mb-4 text-center animate-pulse">
                        Squad Members
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {item.members.map((member, i) => (
                          <span
                            key={i}
                            className="bg-orange-600 hover:bg-orange-500 transition text-white rounded-full px-3 py-1 text-sm font-medium shadow"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="mt-6 bg-orange-800 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full self-center transition duration-200 shadow-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClassicShowcaseSection;
