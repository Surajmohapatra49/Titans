import React, { useState } from "react";
import { X } from "lucide-react";
import slide10 from "../../assets/g.jpg";

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <section className="min-h-screen py-24 px-8 md:px-20 bg-[#fffdfa] relative">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#7f1d1d]">Latest News</h1>
        <div className="w-24 h-1 bg-[#f43f5e] mt-3 mx-auto rounded"></div>
      </div>

      {/* News Card */}
      <div
        className="max-w-sm rounded-xl shadow-lg bg-[#ffe5e5] p-4 cursor-pointer hover:scale-105 transition"
        onClick={toggleModal}
      >
        <img src={slide10} alt="WCG 2025" className="rounded-lg mb-4" />
        <h2 className="font-semibold text-lg text-[#1f2937] mb-2">
          WCG 2025 Announces Natio...
        </h2>
        <p className="text-[#6b7280] font-medium text-sm">
          WCG 2025 Announces National Showdown India in Collaboration with
          Upthrust...
        </p>
        <p className="text-[#6b7280] text-xs mt-2">April 21st, 2025</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative shadow-lg">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold text-[#1f2937] mb-4">
              WCG 2025 Announces National Showdown India in Collaboration with
              Upthrust Esports
            </h3>

            <img src={slide10} alt="WCG Poster" className="rounded-lg mb-4" />

            <p className="text-[#374151]">
              WCG 2025 is bringing the heat to India with a national showdown
              featuring the best teams across the country in partnership with
              Upthrust Esports.
              {readMore && (
                <>
                  {" "}
                  The event promises top-tier production, thrilling gameplay,
                  and unprecedented opportunities for rising stars. This
                  collaboration signals a huge step forward for India's esports
                  ecosystem and represents the next big leap for regional
                  gamers.
                </>
              )}
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={toggleReadMore}
                className="px-4 py-2 bg-[#f3f4f6] text-[#111827] rounded-md font-semibold hover:bg-[#e5e7eb] transition"
              >
                {readMore ? "Show Less" : "Read more"}
              </button>
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-[#fef2f2] text-[#b91c1c] rounded-md font-semibold hover:bg-[#fee2e2] transition"
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
