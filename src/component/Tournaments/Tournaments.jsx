import React from "react";
import bgmiLogo from "../../assets/bgm.png";
import ffLogo from "../../assets/ff.png";

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
    <div className="min-h-screen bg-white pt-20 px-4 sm:px-6 md:px-10 lg:px-16 font-sans">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 drop-shadow-xl select-none">
            Tournaments
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* Table Header (Desktop Only) */}
        <div className="hidden md:grid grid-cols-4 text-left text-sm font-bold bg-orange-100 py-3 px-6 rounded-t-xl text-orange-900 shadow-md select-none">
          <div className="col-span-1">NAME</div>
          <div className="text-right">PRIZE POOL</div>
          <div className="text-right">GAMES</div>
          <div className="text-right">EVENT DATE</div>
        </div>

        {/* Tournament List */}
        <div className="divide-y divide-gray-200 text-sm max-w-full">
          {tournaments.map((t) => (
            <div
              key={t.id}
              className={`transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl bg-white rounded-2xl my-3 flex flex-col md:grid md:grid-cols-4 gap-6 md:gap-0 items-start md:items-center px-6 py-6 transform-gpu perspective-3d border border-transparent hover:border-orange-400 ${
                t.live
                  ? "bg-gradient-to-r from-orange-50 to-white border-l-8 border-orange-600"
                  : "border border-gray-100"
              }`}
              style={{
                transformStyle: "preserve-3d",
                boxShadow:
                  "0 4px 6px rgba(0,0,0,0.1), inset 0 0 10px rgba(234, 88, 12, 0.1)",
              }}
            >
              {/* Tournament Name & Status */}
              <div className="col-span-1 w-full">
                <div className="flex flex-wrap items-center gap-3">
                  {t.live && (
                    <span className="text-xs font-bold text-white bg-orange-600 px-2 py-1 rounded-sm animate-pulse select-none">
                      LIVE
                    </span>
                  )}
                  <span className="text-lg md:text-xl font-semibold text-gray-900 select-text">
                    {t.title}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded select-none ${
                      t.status === "Ongoing"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {t.status.toUpperCase()}
                  </span>
                </div>
                <span className="text-xs text-gray-500 italic block mt-1 select-text">
                  {t.game}
                </span>
              </div>

              {/* Prize Pool */}
              <div className="w-full md:text-right text-gray-800 font-semibold">
                <span className="block md:hidden font-bold text-gray-600 select-none">
                  Prize Pool:
                </span>
                {t.prize}
              </div>

              {/* Game Logo */}
              <div className="w-full md:text-right">
                <span className="block md:hidden font-bold text-gray-600 select-none">
                  Game:
                </span>
                <img
                  src={t.logo}
                  alt={t.game}
                  className="inline-block h-8 md:h-6 filter drop-shadow-sm mt-1 md:mt-0"
                  draggable={false}
                  loading="lazy"
                />
              </div>

              {/* Event Date */}
              <div className="w-full md:text-right text-gray-700 select-text">
                <span className="block md:hidden font-bold text-gray-600 select-none">
                  Date:
                </span>
                {t.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
