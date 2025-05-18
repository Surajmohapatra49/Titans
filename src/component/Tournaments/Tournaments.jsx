import React from "react";
import { CalendarCheck, Gamepad2, Info } from "lucide-react";
import Winners from "../Winners/Winners";

const tournaments = [
  {
    id: 1,
    title: "Battle Royale Championship",
    game: "Apex Legends",
    date: "June 15, 2025",
    prize: "₹10,000",
    status: "Registration Open",
  },
  {
    id: 2,
    title: "Tactical Showdown",
    game: "Valorant",
    date: "July 1, 2025",
    prize: "₹7,500",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "MOBA Masters",
    game: "League of Legends",
    date: "July 22, 2025",
    prize: "₹15,000",
    status: "Upcoming",
  },
];

const Tournaments = () => {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 text-gradient bg-gradient-to-r from-yellow-400 via-amber-500 to-red-500 bg-clip-text text-transparent flex justify-center items-center gap-4">
          <Gamepad2 className="text-amber-500 animate-pulse" size={36} />
          Tournaments
        </h1>

        {/* Tournament Cards */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-8 flex items-center justify-center md:justify-start gap-3 drop-shadow-md">
            <CalendarCheck size={28} className="text-red-600" />
            Upcoming Tournaments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((t) => (
              <div
                key={t.id}
                className="relative bg-gradient-to-tr from-gray-800 to-gray-900 p-6 sm:p-8 rounded-3xl border border-gray-700 shadow-xl hover:shadow-amber-400 transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
                  <h3 className="text-xl sm:text-2xl text-amber-300 font-extrabold">
                    {t.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-center w-fit ${
                      t.status === "Registration Open"
                        ? "bg-green-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {t.status}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-gray-300 mb-1">
                  <span className="text-red-400 font-semibold">Game:</span>{" "}
                  {t.game}
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-1">
                  <span className="text-red-400 font-semibold">Date:</span>{" "}
                  {t.date}
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-6">
                  <span className="text-red-400 font-semibold">
                    Prize Pool:
                  </span>{" "}
                  {t.prize}
                </p>

                {t.status === "Registration Open" && (
                  <button
                    onClick={() =>
                      window.open(
                        "https://forms.gle/9ZuikgzASMkxK9ov8",
                        "_blank"
                      )
                    }
                    className="w-full bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500 text-black font-bold py-3 rounded-xl shadow-[0_6px_0_rgba(0,0,0,0.4)] hover:translate-y-1 transition-all duration-200 active:shadow-none active:translate-y-2"
                  >
                    Register
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tournament Rules */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-8 flex items-center gap-3 justify-center md:justify-start drop-shadow-md">
            <Info size={28} className="text-yellow-400" />
            Tournament Rules
          </h2>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-700 max-w-4xl mx-auto">
            <ul className="list-disc list-inside text-gray-300 space-y-4 text-base sm:text-lg leading-relaxed">
              <li>
                All participants must be registered members of Warrior Gaming.
              </li>
              <li>
                Team registration deadlines are 48 hours before tournament
                start.
              </li>
              <li>All players must use approved gaming peripherals.</li>
              <li>Streaming rights are reserved by Warrior Gaming.</li>
              <li>
                Prize distribution will occur within 30 days of tournament
                completion.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tournaments;
