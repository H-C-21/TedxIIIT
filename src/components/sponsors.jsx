import React from "react";
import sponsorsbg from "../assets/sponsorsbg.png";

const sponsors = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3uoHDgbhnVEz_ME1plwJzK8b1DWTTQcVNw&s",
  "https://seekvectors.com/files/download/sbi-bank-logo-04.jpg",
  "https://play-lh.googleusercontent.com/5rIkR7Y6ssL7aq9S7b_E3GSKQ9kNsmpacLhhugthX1xjHs7DbOpdU-mXhEkIkO52C_2I",
  "https://logos-download.com/wp-content/uploads/2016/04/Domino_pizza_logo.png",
  "https://www.logo.wine/a/logo/Cadbury/Cadbury-Logo.wine.svg",
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
                  className="w-full h-full object-contain px-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional styles for the animation */}
      <style jsx>{`
        .animate-slide {
          display: flex;
          animation: slide 12s linear infinite;
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
