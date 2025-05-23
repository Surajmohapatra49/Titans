import React from "react";
import { ShieldCheck, Star, Trophy, Flame, Smile, Globe } from "lucide-react";
import { motion } from "framer-motion";
import rajeshImg from "../../assets/a.jpg";
import surajImg from "../../assets/b.jpg";
import sandeepImg from "../../assets/c.jpg";
import aboutHeroImg from "../../assets/logo.png";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: { opacity: 0, y: direction === "up" ? 20 : -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        delay,
      },
    },
  };
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-gray-800 pt-24 pb-32 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {/* Hero Section */}
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text leading-tight">
              Titans Gaming: Powering the Future of Esports
            </h1>
            <p className="text-lg text-gray-600">
              Since 2015, Titans Gaming has ignited a new era in esports. We're
              building India’s most elite gaming collective—where talent,
              technology, and passion unite.
            </p>
          </div>
          <img
            src={aboutHeroImg}
            alt="Titans Gaming"
            className="w-full md:w-1/2 max-w-sm rounded-3xl border-4 border-amber-400 shadow-xl transition hover:scale-105"
          />
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              icon: <ShieldCheck />,
              text: "To create a powerful, fair and ever-evolving gaming culture that empowers every player to thrive.",
            },
            {
              title: "Our Vision",
              icon: <Star />,
              text: "To be the driving force of India’s esports evolution—connecting talent, tech and tenacity.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white bg-opacity-60 border border-amber-100 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-amber-600 flex items-center gap-3 mb-4">
                <span className="text-amber-500 text-3xl">{item.icon}</span>
                {item.title}
              </h2>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Titans */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Titans?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Active Community", icon: <Flame /> },
              { title: "Elite Tournaments", icon: <Trophy /> },
              { title: "Pro Support Team", icon: <Smile /> },
              { title: "Global Recognition", icon: <Globe /> },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-amber-400/50 transition flex flex-col items-center space-y-3"
              >
                <div className="text-amber-500 text-4xl">{item.icon}</div>
                <h3 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Meet the Titans
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Rajesh",
                role: "Founder & CEO",
                img: rajeshImg,
              },
              {
                name: "Sandeep & Tanmay",
                role: "Tournament Directors",
                img: surajImg,
              },
              {
                name: "Suraj",
                role: "Community Manager",
                img: sandeepImg,
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl text-center p-6 shadow hover:shadow-amber-300 transition relative group"
              >
                <div className="relative inline-block mx-auto w-28 h-28 rounded-full border-4 border-amber-500 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Flame icon appears on hover */}
                  <div
                    className="absolute top-1/2 right-[-2.5rem] -translate-y-1/2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500"
                    style={{ pointerEvents: "none" }}
                  >
                    <Flame size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community CTA */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Loved by the Community
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Titans Gaming isn't just a platform. It's a family of dreamers,
            grinders, and champions.
          </p>
          <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-400 transition">
            Join Our Discord
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
