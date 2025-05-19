import React, { useState } from "react";
import { CalendarCheck, Gamepad2, Info } from "lucide-react";

const tournaments = [
  {
    id: 1,
    title: "Battle Royale Championship",
    game: "BGMI (Livik)",
    date: "May 1, 2025",
    prize: "₹1,000",
    status: "Registration Open",
  },
  {
    id: 2,
    title: "Tactical Showdown",
    game: "BGMI (TDM)",
    date: "May 19, 2025",
    prize: "₹5,000",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Survivor",
    game: "BGMI (Erangel)",
    date: "May 25, 2025",
    prize: "₹15,000",
    status: "Upcoming",
  },
];

const Tournaments = () => {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="pt-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 min-h-screen text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 text-gradient bg-gradient-to-r from-yellow-400 via-amber-500 to-red-500 bg-clip-text text-transparent flex justify-center items-center gap-4">
          <Gamepad2 className="text-amber-500 animate-pulse" size={36} />
          Tournaments
        </h1>

        {/* Upcoming Tournaments Section */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-8 flex items-center justify-center md:justify-start gap-3 drop-shadow-md">
            <CalendarCheck size={28} className="text-red-600" />
            Upcoming Tournaments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((t) => {
              const isFlipped = flipped[t.id];
              return (
                <div
                  key={t.id}
                  className="group [perspective:1000px] hover:z-10"
                >
                  <div
                    className={`relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    } sm:group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-gradient-to-tr from-gray-800 to-gray-900 p-6 sm:p-8 rounded-3xl border border-gray-700 shadow-xl flex flex-col justify-between">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
                          <h3 className="text-xl sm:text-2xl text-amber-300 font-extrabold">
                            {t.title}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                              t.status === "Registration Open"
                                ? "bg-green-600 text-white"
                                : "bg-gray-700 text-gray-300"
                            }`}
                          >
                            {t.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-1">
                          <span className="text-red-400 font-semibold">
                            Game:
                          </span>{" "}
                          {t.game}
                        </p>
                        <p className="text-gray-300 mb-1">
                          <span className="text-red-400 font-semibold">
                            Date:
                          </span>{" "}
                          {t.date}
                        </p>
                        <p className="text-gray-300">
                          <span className="text-red-400 font-semibold">
                            Prize Pool:
                          </span>{" "}
                          {t.prize}
                        </p>
                      </div>
                      <button
                        className="sm:hidden mt-4 text-sm text-yellow-400 underline hover:text-yellow-300"
                        onClick={() => toggleFlip(t.id)}
                      >
                        More Info →
                      </button>
                      <p className="hidden sm:block mt-6 text-gray-400 italic text-sm">
                        Hover for more info →
                      </p>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden bg-gradient-to-tr from-red-950 to-black p-6 sm:p-8 rounded-3xl border border-amber-500 shadow-2xl text-center flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-amber-400 mb-4">
                          Tournament Highlights
                        </h4>
                        <ul className="text-sm text-gray-300 space-y-2 text-left list-disc list-inside">
                          <li>Intense competition format</li>
                          <li>Live-streamed finals</li>
                          <li>Strict fair-play rules</li>
                          <li>Top-tier talent invited</li>
                          <li>Exclusive Discord access</li>
                        </ul>
                      </div>
                      {t.status === "Registration Open" ? (
                        <button
                          onClick={() =>
                            window.open(
                              "https://forms.gle/9ZuikgzASMkxK9ov8",
                              "_blank"
                            )
                          }
                          className="mt-6 bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500 text-black font-bold py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
                        >
                          Register Now
                        </button>
                      ) : (
                        <button
                          className="sm:hidden mt-4 text-sm text-yellow-400 underline hover:text-yellow-300"
                          onClick={() => toggleFlip(t.id)}
                        >
                          ← Back
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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
