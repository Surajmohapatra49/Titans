import React from "react";

const Register = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/nkweFh5KxT3qUZJX9", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fffaf9] relative overflow-hidden">
      {/* Gradient Overlay (Top Right) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-300 opacity-40 rounded-full blur-3xl pointer-events-none" />

      {/* Gradient Overlay (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-300 opacity-40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-red-800 mt-2">
            Register for Events
          </h1>
          <div className="mt-2 w-24 h-1 bg-red-400 mx-auto rounded-full" />
        </div>

        {/* Event Card */}
        <div className="mt-16 flex justify-start">
          <div className="bg-red-100 rounded-xl p-6 max-w-sm shadow-xl">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Upthrust Esports
              <br />
              Crew War
            </h2>
            <p className="text-red-400 text-base mb-6">
              The Crew War is a 16-week challenge where teams showcase their
              talent on the battlegrounds. Weekly winners wi...
            </p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleRegisterClick}
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
