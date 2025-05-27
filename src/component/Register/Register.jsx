import React from "react";
import eventImage from "../../assets/register.jpeg"; // Replace with your image path

const Register = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/nkweFh5KxT3qUZJX9", "_blank");
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-10 sm:py-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-600 leading-tight">
            Register for Events
          </h1>
          <div className="mt-3 w-16 sm:w-20 h-1 bg-orange-600 mx-auto rounded-full" />
        </div>

        {/* Event Card */}
        <div className="mt-10 flex justify-left px-2 sm:px-6">
          <div className="bg-orange-50 rounded-2xl p-4 sm:p-6 max-w-sm w-full shadow-lg">
            {/* Image */}
            <img
              src={eventImage}
              alt="Tactical Titans Crew War"
              className="rounded-lg mb-4 w-full object-cover h-40 sm:h-48"
            />

            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 leading-snug">
              Tactical Titans
              <br />
              NoScope Nexus
            </h2>
            <p className="text-gray-800 text-sm sm:text-base mb-5 leading-relaxed">
              The NoScope Nexus is a 4-week gaming challenge where teams compete
              and show off their skills. Each match has winning teams earning
              exciting prizes!
            </p>
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded w-full transition-all duration-200 ease-in-out text-sm sm:text-base"
              onClick={handleRegisterClick}
              aria-label="Register for Tactical Titans Crew War"
              type="button"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
