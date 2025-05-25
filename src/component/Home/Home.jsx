import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MainContainer from "../MainContainer/MainContainer";
import slide01 from "../../assets/sk.jpeg";
import slide02 from "../../assets/g.jpg";
import slide03 from "../../assets/ff.png";
import slide05 from "../../assets/bgm.png";
import slide04 from "../../assets/bg.jpg";

const Home = () => {
  const stats = [
    { number: 1000, suffix: "+", label: "Players Engaged" },
    { number: 250, suffix: "", label: "Matches Played" },
    { number: 50, suffix: "+", label: "Live Tournaments" },
    { number: 85, suffix: "%", label: "Player Satisfaction" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="pt-16 min-h-screen space-y-24 bg-white text-gray-900">
      <MainContainer />

      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <img
          src={slide04}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Dive Into the Arena
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Tactical Titans brings esports battles, legendary gamers, and
            unmissable moments.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition">
            Join the Battle
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-4 py-16 container mx-auto">
        {[
          {
            img: slide02,
            title: "Intense Tournaments",
            text: "Fight for glory in monthly esports leagues.",
          },
          {
            img: slide02,
            title: "Global Leaderboards",
            text: "Top players ranked live, daily.",
          },
          {
            img: slide02,
            title: "Gaming Buzz",
            text: "Stay updated with every drop.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section ref={ref} className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center">
          {stats.map((item, idx) => (
            <div key={idx} className="text-3xl font-bold">
              <div className="text-orange-500 text-5xl mb-2">
                {inView ? (
                  <CountUp end={item.number} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {item.suffix}
              </div>
              <div className="text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Streamer Spotlight Section */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src={slide02}
            alt="Streamer"
            className="w-full md:w-1/2 rounded-3xl shadow-xl"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Meet the Legends:{" "}
              <span className="text-orange-500">ShadowStrike</span>
            </h2>
            <p className="text-gray-700 mb-6">
              With over 10 million views, ShadowStrike has become a symbol of
              clutch plays and crowd-pleasing finishes. Watch live streams and
              exclusive behind-the-scenes.
            </p>
            <button className="bg-orange-500 text-white px-5 py-3 rounded hover:bg-orange-600 transition">
              Watch Now
            </button>
          </div>
        </div>
      </section>

      {/* Tournament Rules Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 drop-shadow-lg">
            🛡️ Tournament Rules
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Each team must consist of 4 to 6 players.",
              "No use of third-party cheats or hacks is allowed.",
              "Respectful behavior toward opponents and organizers is mandatory.",
              "Matches must start within 5 minutes of the scheduled time.",
              "Disputes must be reported within 15 minutes of match end.",
              "Failure to follow rules may result in disqualification.",
            ].map((rule, idx) => (
              <div
                key={idx}
                className="relative bg-white p-6 rounded-2xl shadow-2xl transform transition duration-500 hover:rotate-y-6 hover:scale-105 hover:shadow-orange-400"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">
                    Rule {idx + 1}
                  </h3>
                  <p className="text-gray-700">{rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Players Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            {
              name: "Drako",
              text: "The best competitive scene. Every match feels like a final!",
              img: slide01,
            },
            {
              name: "ViperQueen",
              text: "Tactical Titans gave me my first break as a streamer.",
              img: slide01,
            },
            {
              name: "BlazeKid",
              text: "Tournaments are lit! They’re fair, fast, and super fun.",
              img: slide01,
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic text-gray-600">"{t.text}"</p>
              <p className="mt-4 font-semibold text-orange-500">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-900 py-16">
        <h2 className="text-3xl text-orange-600 font-bold text-center mb-12">
          Powered By
        </h2>
        <div className="flex flex-wrap justify-center gap-10 items-center px-4">
          {[slide05, slide03].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Sponsor"
              className="h-12 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-orange-600 text-white text-center py-20 px-6 rounded-t-[3rem]">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Rise?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of gamers from across the globe. Start your tactical
          journey with us today!
        </p>
        <button className="bg-black px-6 py-3 rounded-full text-white text-lg hover:bg-gray-900 transition">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default Home;
