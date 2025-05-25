import React from "react";
import eventImage from "../../assets/d.jpg"; // Replace with your image path

const Register = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/nkweFh5KxT3qUZJX9", "_blank");
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mt-2 leading-tight">
            Register for Events
          </h1>
          <div className="mt-3 w-20 h-1 bg-orange-600 mx-auto rounded-full" />
        </div>

        {/* Event Card */}
        <div className="mt-8 sm:mt-10 flex justify-left px-2">
          <div className="bg-orange-50 rounded-xl p-4 max-w-xs sm:max-w-sm shadow-md w-full">
            {/* Image */}
            <img
              src={eventImage}
              alt="Tactical Titans Crew War"
              className="rounded-lg mb-4 w-full object-cover max-h-40 sm:max-h-48"
            />

            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 leading-snug">
              Tactical Titans
              <br />
              Crew War
            </h2>
            <p className="text-black text-sm sm:text-base mb-5 leading-relaxed">
              The Crew War is a 16-week challenge where teams showcase their
              talent on the battlegrounds. Weekly winners will be selected to
              progress and earn exciting prizes.
            </p>
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded transition w-full sm:w-auto text-sm sm:text-base"
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
