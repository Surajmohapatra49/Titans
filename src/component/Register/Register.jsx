import React from "react";

const Register = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/nkweFh5KxT3qUZJX9", "_blank");
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 sm:py-20">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-orange-600 mt-2 leading-tight">
            Register for Events
          </h1>
          <div className="mt-3 w-20 h-1 bg-orange-600 mx-auto rounded-full" />
        </div>

        {/* Event Card */}
        <div className="mt-10 sm:mt-16 flex justify-center sm:justify-start px-4">
          <div className="bg-orange-50 rounded-xl p-6 max-w-sm shadow-lg w-full sm:max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 leading-snug">
              Tactical Titans
              <br />
              Crew War
            </h2>
            <p className="text-black text-base mb-6 leading-relaxed">
              The Crew War is a 16-week challenge where teams showcase their
              talent on the battlegrounds. Weekly winners will be selected to
              progress and earn exciting prizes.
            </p>
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition w-full sm:w-auto"
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
