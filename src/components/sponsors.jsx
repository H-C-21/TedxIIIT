import React from "react";
import sponsorsbg from "../assets/sponsorsbg.png";

const sponsors = [
  "/sponsors/campuslife.jpg",
  "/sponsors/StationS.png",
  "https://machickaneeplayers.com/wp-content/uploads/2023/04/tba.png?w=640",
  "https://machickaneeplayers.com/wp-content/uploads/2023/04/tba.png?w=640",
  "https://machickaneeplayers.com/wp-content/uploads/2023/04/tba.png?w=640",
];

const SponsorsSection = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${sponsorsbg})` }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-10">Our Sponsors</h2>
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-10 animate-slide">
            {sponsors.map((sponsor, index) => (
              <div
                key={`sponsor-card-${index}`}
                id={`sponsor-card-${index}`}
                className="bg-white rounded-full p-4 shadow-lg w-40 h-40 flex items-center justify-center"
              >
                <img
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="w-full h-full object-contain px-1"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-slide {
          display: flex;
          animation: slide 20s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SponsorsSection;
