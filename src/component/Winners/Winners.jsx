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
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 to-orange-100 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-orange-600 mb-16 drop-shadow-lg">
          ✨ Showcase Spotlight
        </h2>

        <div className="flex justify-center gap-6 mb-14 flex-wrap">
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
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md ${
                selectedTab === key
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-orange-600 border-2 border-orange-400 hover:bg-orange-100"
              }`}
              aria-pressed={selectedTab === key}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {showcaseData[selectedTab].map((item, index) => {
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center cursor-default"
              >
                {/* Main card content */}
                <div className="flex flex-col justify-center items-center gap-4 min-h-[220px] w-full">
                  <h3 className="text-3xl font-extrabold text-orange-700 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold">
                    {selectedTab === "winners" ? "Event" : "Game"}:{" "}
                    <span className="font-normal text-gray-700">
                      {selectedTab === "winners" ? item.event : item.games}
                    </span>
                  </p>
                  <p className="text-lg font-semibold">
                    {selectedTab === "winners" ? "Prize" : "Title"}:{" "}
                    <span className="font-normal text-gray-700">
                      {selectedTab === "winners" ? item.prize : item.title}
                    </span>
                  </p>
                  <p className="text-orange-600 font-semibold">
                    Squad: {item.squad}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-400"
                  >
                    {isExpanded ? "Hide Details" : "More Details"}
                  </button>
                </div>

                {/* Details slide-down panel */}
                <div
                  className={`overflow-hidden rounded-b-3xl mt-6 bg-black text-white px-6 py-5 w-full transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <h4 className="text-2xl font-bold text-orange-500 mb-4">
                    Squad Members
                  </h4>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {item.members.map((member, i) => (
                      <span
                        key={i}
                        className="bg-orange-700 bg-opacity-80 rounded-full px-3 py-1 text-sm font-semibold"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="bg-orange-600 hover:bg-orange-700 transition-colors text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-orange-500"
                  >
                    Close
                  </button>
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
