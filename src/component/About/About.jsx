import React from "react";
import { Users, ShieldCheck, Star } from "lucide-react";
import rajeshImg from "../../assets/a.jpg";
import surajImg from "../../assets/b.jpg";
import sandeepImg from "../../assets/c.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-16 bg-gradient-to-b from-gray-950 to-black text-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-400 drop-shadow-lg flex items-center justify-center gap-3 animate-fade-in-down">
            <Users size={40} className="text-amber-500 animate-pulse" />
            About Titans Gaming
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up">
            Discover our mission, values, and the passionate team behind Titans
            Gaming.
          </p>
        </div>

        {/* Timeline Style Mission & Values */}
        <div className="relative border-l-4 border-amber-500 pl-8 mb-28 space-y-16">
          {/* Mission */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-amber-500 rounded-full shadow-xl animate-ping"></div>
            <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2 mb-2">
              <ShieldCheck className="text-red-400" />
              Our Mission
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Titans Gaming was founded with the goal of building an elite
              gaming community where players connect, compete, and thrive. Since
              2015, we've grown from a local squad to a global movement, always
              guided by the spirit of fair play and ambition.
            </p>
          </div>

          {/* Core Values */}
          <div className="relative">
            <div className="absolute -left-6 top-1 w-4 h-4 bg-amber-500 rounded-full shadow-xl animate-ping"></div>
            <h2 className="text-2xl font-bold text-red-500 flex items-center gap-2 mb-2">
              <Star className="text-yellow-400" />
              Core Values
            </h2>
            <ul className="text-gray-300 list-disc ml-6 space-y-2 text-lg leading-relaxed">
              <li>Fair competition and sportsmanship</li>
              <li>Community-first approach</li>
              <li>Innovation in gaming experiences</li>
              <li>Accessibility for all skill levels</li>
              <li>Continuous growth and learning</li>
            </ul>
          </div>
        </div>

        {/* Modern Team Grid */}
        <h2 className="text-3xl sm:text-4xl text-center font-bold text-red-500 mb-14 animate-fade-in-down">
          Meet the Titans
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {[
            { name: "Rajesh", role: "Founder & CEO", img: rajeshImg },
            { name: "Suraj", role: "Tournament Director", img: surajImg },
            {
              name: "Sandeep & Tanmay",
              role: "Community Manager",
              img: sandeepImg,
            },
          ].map((member, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-xl p-6 shadow-2xl hover:shadow-amber-500/30 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-amber-500 shadow-lg mb-4 transform group-hover:rotate-2 group-hover:scale-105 transition duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-400 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
