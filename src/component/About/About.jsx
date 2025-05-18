import React from "react";
import { Users, ShieldCheck, Star } from "lucide-react";
import rajeshImg from "../../assets/a.jpg";
import surajImg from "../../assets/b.jpg";
import sandeepImg from "../../assets/c.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-400 mb-16 text-center drop-shadow-lg tracking-wide flex flex-col sm:flex-row items-center justify-center gap-4">
          <Users size={36} className="text-amber-500 animate-pulse" />
          About Titans Gaming
        </h1>

        {/* Mission & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 flex items-center gap-3 border-l-4 border-amber-400 pl-4 shadow-lg mb-4">
              <ShieldCheck className="text-red-500" size={24} />
              Our Mission
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Titans Gaming was founded with a simple mission: to create the
              ultimate gaming community where players can compete, connect, and
              celebrate their passion for gaming.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Since our founding in 2015, we've grown from a small local
              community to a global network of gamers who share our values of
              fair play, continuous improvement, and gaming excellence.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-gray-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-700 hover:border-amber-400 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 flex items-center gap-3 border-l-4 border-yellow-400 pl-4 mb-4">
              <Star className="text-yellow-400" size={24} />
              Core Values
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-base sm:text-lg leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 text-center mb-12 drop-shadow-lg tracking-wide">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Rajesh", role: "Founder & CEO", img: rajeshImg },
              { name: "Suraj", role: "Tournament Director", img: surajImg },
              { name: "Sandeep", role: "Community Manager", img: sandeepImg },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-tr from-red-900/30 via-white/10 to-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-red-700 hover:border-amber-400 transition-transform transform hover:scale-105 cursor-pointer text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-6 border-4 border-amber-400 shadow-lg"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-2 capitalize">
                  {member.name}
                </h3>
                <p className="text-gray-400 tracking-wide font-medium text-sm sm:text-base">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
