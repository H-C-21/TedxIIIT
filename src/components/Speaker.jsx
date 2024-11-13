function SpeakerCard({ image, name, description }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:shadow-glow">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Speaker() {
  const speakers = [
    {
      name: "John Doe",
      description: "Innovative tech entrepreneur, speaker, and educator.",
      image: "src/assets/speakers/first.jpg",
    },
    {
      name: "Jane Smith",
      description: "Renowned scientist with research in physics.",
      image: "src/assets/speakers/second.jpg",
    },
    {
      name: "Alex Johnson",
      description:
        "Passionate about environmental conservation and sustainability.",
      image: "src/assets/speakers/third.jpg",
    },
    {
      name: "Steven Kelly",
      description: "Leader in digital marketing and social media strategy.",
      image: "src/assets/speakers/fourth.JPG",
    },
    {
      name: "Timati",
      description: "Leader in digital marketing and social media strategy.",
      image: "src/assets/speakers/fifth.JPG",
    },

    // Add more speaker objects as needed
  ];

  return (
    <div className="h-[80%] relative">
      <div
        className="w-full h-[60vh] bg-repeat-y bg-right-bottom flex flex-col justify-center items-center mt-[3vh]"
        style={{
          backgroundImage: `url('src/assets/speakers.png')`,
          backgroundSize: "100% 60vh",
          backgroundPosition: "10% 30%",
        }}
      >
        <div className="absolute top-[4%] left-0 w-full flex justify-center items-center text-white font-bold text-4xl z-10">
          <span>Meet Our TEDx Speakers</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-[-30%]">
        <div className="flex flex-wrap justify-center">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              image={speaker.image}
              name={speaker.name}
              description={speaker.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speaker;
