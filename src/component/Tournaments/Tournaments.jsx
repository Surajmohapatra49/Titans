import React, { useState } from "react";
import bgmiLogo from "../../assets/bgmi.png";
import ffLogo from "../../assets/ff.svg";

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
  return (
    <div className="min-h-screen bg-white py-20 px-6 font-sans text-gray-900">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-orange-500 tracking-tight">
          Tournament Arena
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Your gateway to esports action!
        </p>
        <div className="mt-4 w-32 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((t) => (
          <div
            key={t.id}
            className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:shadow-orange-300 group hover:rotate-[0.5deg] hover:translate-y-[-4px]"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 to-pink-500"></div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition">
                  {t.title}
                </h2>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${
                    t.status === "Ongoing" ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  {t.status}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Game:</p>
                  <p className="text-base font-medium">{t.game}</p>
                </div>
                <img
                  src={t.logo}
                  alt={t.game}
                  className="h-10 w-10 object-contain rounded-full border"
                />
              </div>

              <div className="text-sm text-gray-700">
                <p className="font-medium">
                  Prize Pool: <span className="text-orange-500">{t.prize}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">🗓️ {t.date}</p>
              </div>

              {t.live && (
                <div className="mt-3 space-y-3">
                  <span className="inline-block text-xs text-bold bg-green-100  text-green-800 px-2 py-1 rounded-full animate-pulse">
                    🔴 LIVE NOW
                  </span>
                  <div>
                    <a
                      href="/register"
                      className="inline-block text-sm font-semibold bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
