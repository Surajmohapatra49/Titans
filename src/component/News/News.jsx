import React, { useState } from "react";
import { X } from "lucide-react";
import slide10 from "../../assets/news.jpeg";

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <section className="min-h-screen py-24 px-8 md:px-20 bg-[#fffaf5] relative">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-600">Latest News</h1>
        <div className="w-24 h-1 bg-orange-600 mt-3 mx-auto rounded"></div>
      </div>

      {/* News Card */}
      <div
        className="max-w-sm rounded-xl shadow-lg bg-orange-100 p-4 cursor-pointer hover:scale-105 transition"
        onClick={toggleModal}
      >
        <img src={slide10} alt="WCG 2025" className="rounded-lg mb-4" />
        <h2 className="font-semibold text-lg text-gray-800 mb-2">
          TTG 2025 Launches ...
        </h2>
        <p className="text-gray-600 font-medium text-sm">
          National Showdown India’ in Collaboration with Tactical Titans to
          Redefine Competitive Gaming...
        </p>
        <p className="text-gray-500 text-xs mt-2">April 21st, 2025</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative shadow-lg">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-orange-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              TTG 2025 Launches National Showdown India’ in Collaboration with
              Tactical Titans to Redefine Competitive Gaming...
            </h3>

            <img src={slide10} alt="WCG Poster" className="rounded-lg mb-4" />

            <p className="text-gray-700">
              TTG 2025 and Tactical Titans Unleash ‘National Showdown India’ — A
              New Era of Competitive Gaming Begins.
              {readMore && (
                <>
                  {" "}
                  TTG 2025 is not just an event — it’s a movement. Designed to
                  empower every Indian gamer’s dream, this year’s edition brings
                  together cutting-edge competition and national pride. In
                  collaboration with Tactical Titans Esports, National Showdown
                  India will unite the country’s top talent and rising stars
                  under one electrifying platform.
                </>
              )}
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={toggleReadMore}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                {readMore ? "Show Less" : "Read more"}
              </button>
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-orange-100 text-orange-600 rounded-md font-semibold hover:bg-orange-200 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;
