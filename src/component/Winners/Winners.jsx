import React from "react";
import { Trophy, Star, Users } from "lucide-react";

const Winners = () => {
  const recentWinners = [
    {
      id: 1,
      tournament: "Battle Royale Championship 2024",
      team: "Alpha Squad",
      prize: "₹12,000",
      date: "December 15, 2024",
    },
    {
      id: 2,
      tournament: "Tactical Showdown Fall 2024",
      team: "Phoenix Fire",
      prize: "₹8,500",
      date: "October 30, 2024",
    },
    {
      id: 3,
      tournament: "MOBA Masters 2024",
      team: "Nexus Warriors",
      prize: "₹20,000",
      date: "September 22, 2024",
    },
  ];

  const hallOfFame = [
    {
      id: 1,
      name: 'Michael "DeathBringer" Rodriguez',
      achievements: "3x Champion, MVP 2024",
      games: "Valorant, CS:GO",
      inducted: "2024",
    },
    {
      id: 2,
      name: 'Sarah "Quantum" Park',
      achievements: "World Record Holder, 5x Winner",
      games: "League of Legends, Dota 2",
      inducted: "2023",
    },
    {
      id: 3,
      name: "Team Dominance",
      achievements: "Undefeated 2023, Int’l Champions",
      games: "Multiple Titles",
      inducted: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="flex items-center justify-center text-6xl font-extrabold mb-16 tracking-wide text-amber-400 drop-shadow-[0_0_10px_rgba(255,191,0,0.7)] gap-4">
          <Trophy size={48} className="text-amber-500 animate-pulse" />
          Winners Circle
        </h1>

        {/* Recent Winners */}
        <section className="mb-24">
          <h2 className="flex items-center gap-3 mb-12 text-4xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(255,69,0,0.7)]">
            <Users size={30} className="text-red-600" />
            Recent Tournament Winners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recentWinners.map(({ id, tournament, team, prize, date }) => (
              <div
                key={id}
                className="relative bg-black/30 backdrop-blur-md border border-red-600 rounded-3xl p-8 text-center shadow-[0_0_30px_rgba(255,69,0,0.8)] transform transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,191,0,0.9)] cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <div className="transform hover:rotateY-6 hover:rotateX-4 transition-transform duration-400">
                  <h3 className="text-2xl font-extrabold mb-3 text-amber-300 tracking-wide">
                    {tournament}
                  </h3>
                  <p className="text-lg text-red-400 font-semibold mb-2 uppercase tracking-wide">
                    {team}
                  </p>
                  <p className="text-green-400 font-bold text-xl mb-1">
                    {prize}
                  </p>
                  <p className="text-gray-300 italic">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hall of Fame */}
        <section>
          <h2 className="flex items-center gap-3 mb-12 text-4xl font-bold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
            <Star size={30} />
            Hall of Fame
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {hallOfFame.map(({ id, name, achievements, games, inducted }) => (
              <div
                key={id}
                className="bg-black/30 backdrop-blur-md rounded-3xl border border-yellow-400 p-8 shadow-[0_0_35px_rgba(255,215,0,0.85)] transform transition-transform duration-500 hover:scale-105 hover:rotateY-6 cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                <h3 className="text-3xl font-extrabold mb-4 tracking-wide text-amber-300">
                  {name}
                </h3>
                <p className="mb-4 text-lg text-gray-300 leading-relaxed">
                  <span className="text-yellow-400 font-semibold">
                    Achievements:{" "}
                  </span>
                  {achievements}
                </p>
                <p className="mb-4 text-lg text-gray-300 leading-relaxed">
                  <span className="text-yellow-400 font-semibold">Games: </span>
                  {games}
                </p>
                <p className="text-gray-400 italic text-lg">
                  <span className="text-yellow-400 font-semibold">
                    Inducted:{" "}
                  </span>
                  {inducted}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Winners;
