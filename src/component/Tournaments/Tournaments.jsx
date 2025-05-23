import React from "react";
import bgmiLogo from "../../assets/bgmi-logo.jpg"; // use actual paths
import ffLogo from "../../assets/ff-logo.png"; // use actual paths

const tournaments = [
  {
    id: 1,
    title: "Mother Dairy Ice Cream’s Chillz Cup",
    game: "BGMI",
    logo: bgmiLogo,
    prize: "₹5,00,000",
    status: "Ended",
    date: "01.05.2025 - 11.05.2025",
  },
  {
    id: 2,
    title: "Challenger Showdown – FFM 2025",
    game: "FREE FIRE MAX",
    logo: ffLogo,
    prize: "₹50,000",
    status: "Ended",
    date: "19.04.2025 - 23.04.2025",
  },
  {
    id: 3,
    title: "Crew War",
    game: "BGMI",
    logo: bgmiLogo,
    prize: "-",
    status: "Ongoing",
    date: "01.01.2025 - 01.01.2026",
    live: true,
  },
];

const Tournaments = () => {
  return (
    <div className="min-h-screen bg-white pt-24 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#7b1c1c]">
            Tournaments
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-4 text-left text-sm font-bold bg-pink-200 py-3 px-4 rounded-t-xl text-gray-700">
          <div className="col-span-1">NAME</div>
          <div className="text-right">PRIZE POOL</div>
          <div className="text-right">GAMES</div>
          <div className="text-right">EVENT DATE</div>
        </div>

        {/* Tournament List */}
        <div className="divide-y divide-gray-200 text-sm">
          {tournaments.map((t) => (
            <div
              key={t.id}
              className={`grid grid-cols-4 items-center px-4 py-4 ${
                t.live
                  ? "bg-gradient-to-r from-pink-200 to-white rounded-xl border-l-4 border-pink-500"
                  : ""
              }`}
            >
              {/* Tournament Name & Status */}
              <div className="col-span-1 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  {t.live && (
                    <span className="text-xs font-bold text-white bg-pink-500 px-1.5 py-0.5 rounded-sm">
                      LIVE
                    </span>
                  )}
                  <span className="text-base font-semibold">{t.title}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      t.status === "Ongoing"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {t.status.toUpperCase()}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{t.game}</span>
              </div>

              {/* Prize Pool */}
              <div className="text-right text-gray-800 font-semibold">
                {t.prize}
              </div>

              {/* Game Logo */}
              <div className="text-right">
                <img src={t.logo} alt={t.game} className="inline-block h-6" />
              </div>

              {/* Event Date */}
              <div className="text-right text-gray-700">{t.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
