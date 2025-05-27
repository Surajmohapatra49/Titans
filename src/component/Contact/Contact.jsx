import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "../../assets/lg.png";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Get in <span className="text-orange-500">Touch</span>
        </h1>
        <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center mt-16">
        {/* Left Logo */}
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="Titans Gaming"
            className="w-72 md:w-96 object-contain"
          />
        </div>

        {/* Contact Card */}
        <div className="bg-white/60 border border-orange-200 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 space-y-8 transition-all hover:shadow-2xl">
          <p className="text-gray-700 text-md md:text-lg">
            Welcome to the next level of gaming innovation! At{" "}
            <span className="font-semibold text-orange-600">Titans Gaming</span>
            , we blend cutting-edge technology with immersive storytelling.
            Whether you're a casual gamer or a seasoned pro, join us for
            thrilling adventures and unforgettable moments.
          </p>

          <div className="space-y-6 text-gray-700 text-sm md:text-base">
            <ContactInfo
              icon={<MapPin className="text-orange-600" />}
              label="Our Address"
              value=" Sector 07, CDA , Odisha, Cuttack 753012"
            />
            <ContactInfo
              icon={<Phone className="text-orange-600" />}
              label="Contact"
              value={
                <>
                  {/* Mobile: +91  <br /> */}
                  Email:{" "}
                  <a
                    href="mailto:Tacticaltitans127@gmail.com"
                    className="text-orange-600 hover:underline"
                  >
                    Tacticaltitans127@gmail.com
                  </a>
                </>
              }
            />
            <ContactInfo
              icon={<Mail className="text-orange-600" />}
              label="Working Hours"
              value={
                <>
                  Mon–Fri: 11:00AM – 05:00PM <br />
                  Sat–Sun: 12:00PM – 05:00PM
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="text-2xl">{icon}</div>
    <div>
      <p className="font-semibold text-gray-900">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

export default Contact;
