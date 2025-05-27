import React from "react";
import { motion } from "framer-motion";
import { Flame, Trophy, Smile, Globe, ShieldCheck, Star } from "lucide-react";
import aboutHeroImg from "../../assets/lll.png";
import rajeshImg from "../../assets/a.jpg";
import surajImg from "../../assets/b.jpg";
import sandeepImg from "../../assets/c.jpg";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});

const coreValues = [
  {
    title: "Our Mission",
    icon: <ShieldCheck size={32} className="text-orange-600" />,
    desc: "Empowering every gamer to thrive in a fair and innovative space.",
  },
  {
    title: "Our Vision",
    icon: <Star size={32} className="text-orange-400" />,
    desc: "To lead India's esports evolution with integrity and innovation.",
  },
];

const highlights = [
  {
    title: "Active Community",
    icon: <Flame size={32} className="text-orange-500" />,
  },
  {
    title: "Elite Tournaments",
    icon: <Trophy size={32} className="text-orange-400" />,
  },
  {
    title: "Pro Support Team",
    icon: <Smile size={32} className="text-orange-300" />,
  },
  {
    title: "Global Recognition",
    icon: <Globe size={32} className="text-orange-600" />,
  },
];

const team = [
  { name: "Rajesh", role: "Founder & CEO", img: rajeshImg },
  { name: "Sandeep & Tanmay", role: "Tournament Directors", img: surajImg },
  { name: "Suraj", role: "Community Manager", img: sandeepImg },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50 py-24 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Intro */}
        <motion.div
          variants={fadeIn(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
              Titans Gaming: Elevating Indian Esports
            </h1>
            <p className="text-lg text-gray-600">
              Since 2025, Tactical Titans Gaming has been at the forefront of
              India’s competitive gaming evolution — setting new standards,
              breaking boundaries, and turning gamers’ dreams into reality. With
              a mission to empower talent and elevate the esports experience,
              Titans continues to shape a future where passion meets
              performance.
            </p>
          </div>
          <img
            src={aboutHeroImg}
            alt="About Titans Gaming"
            className="w-full md:w-1/2 max-w-xs sm:max-w-sm rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid sm:grid-cols-2 gap-8">
          {coreValues.map((val, i) => (
            <motion.div
              key={i}
              variants={fadeIn(i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {val.icon}
                <h3 className="text-xl font-semibold text-orange-700">
                  {val.title}
                </h3>
              </div>
              <p className="text-gray-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-600">
            Why Choose Titans?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex flex-col items-center"
              >
                {h.icon}
                <p className="mt-2 font-medium text-gray-700 text-center">
                  {h.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-12">
            Meet the Titans
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="text-center bg-white rounded-xl shadow p-6 hover:shadow-orange-200 transition"
              >
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-4 border-orange-500">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-orange-700">
            Join the Titans Community
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Become part of India’s most passionate gaming collective. Join our
            Discord today.
          </p>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold transition">
            Join Discord
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
