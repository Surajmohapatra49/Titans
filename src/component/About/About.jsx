import React from "react";
import { Users, ShieldCheck, Star, Section } from "lucide-react";
import rajeshImg from "../../assets/a.jpg";
import surajImg from "../../assets/b.jpg";
import sandeepImg from "../../assets/c.jpg";
import Tournaments from "../Tournaments/Tournaments";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="pt-20 bg-gradient-to-b from-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-6 py-20 max-w-7xl">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-16 text-center drop-shadow-lg tracking-wide flex items-center justify-center gap-4">
            <Users size={48} className="text-amber-500 animate-pulse" />
            About Titans Gaming
          </h1>

          {/* Mission & Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Mission */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-3xl text-red-600 font-bold flex items-center gap-3 mb-6 border-l-4 border-amber-400 pl-4 shadow-lg">
                <ShieldCheck className="text-red-500" size={28} />
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Titans Gaming was founded with a simple mission: to create the
                ultimate gaming community where players can compete, connect,
                and celebrate their passion for gaming.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Since our founding in 2015, we've grown from a small local
                community to a global network of gamers who share our values of
                fair play, continuous improvement, and gaming excellence.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 hover:border-amber-400 transition-all duration-300">
              <h2 className="text-4xl md:text-3xl text-red-600 font-bold flex items-center gap-3 mb-6 border-l-4 border-yellow-400 pl-4">
                <Star className="text-yellow-400" size={28} />
                Core Values
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg leading-relaxed">
                <li>Fair competition and sportsmanship</li>
                <li>Community-first approach</li>
                <li>Innovation in gaming experiences</li>
                <li>Accessibility for all skill levels</li>
                <li>Continuous growth and learning</li>
              </ul>
            </div>
          </div>

          {/* Our Team */}
          <div>
            <h2 className="text-4xl text-red-600 font-bold mb-12 text-center tracking-wide drop-shadow-lg">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Rajesh", role: "Founder & CEO", img: rajeshImg },
                { name: "Suraj", role: "Tournament Director", img: surajImg },
                { name: "Sandeep", role: "Community Manager", img: sandeepImg },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-tr from-red-900/30 via-white/10 to-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-red-700 hover:border-amber-400 transition-transform transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-6 border-4 border-amber-400 shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold text-amber-400 text-center mb-2 capitalize">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-center tracking-wide font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
