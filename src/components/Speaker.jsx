import speakerBanner from '../assets/speakers.png'

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
      name: "Thulasimathi Murugesan  ",
      description:
        "A badminton paralympian from Tamil Nadu. She represented India at the Paris 2024 Paralympics and 2022 Asian Para Games. She won three medals in para badminton competitions, SL3-SU5 and SU5 classes. She made history as the first Indian woman shuttler to win a Paralympic silver medal, following a remarkable journey to the final in the SU5 category.",
      image: "/speakers/Thulasimathimurugesan.webp",
    },
    {
      name: "Dr. Ashok Rajgopal",
      description:
        "An Indian orthopaedic surgeon, credited with 20,000 Arthroscopic and over 35,000 Total Knee Arthroplasty surgeries. He was honoured with 'Padmashri' by the Government of India in 2014 for his services to the fields of orthopaedic surgery.",
      image: "/speakers/AshokRajgopal.jpg",
    },
    {
      name: "Malvika Jey",
      description:
        "An artist known for her exploration of surrealism and abstract art. She began her artistic journey since she was 4 years old. Over the years, she has experimented with various mediums and styles to develop her unique signature, focusing on emotional expression through color and form.",
      image: "/speakers/MalvikaJey.png",
    },

    {
      name: "Dr. Abhinanda Sarkar",
      description:
        "Dr. Sarkar is a certified Master Black Belt in Lean Six Sigma and Design for Six Sigma. He has been visiting faculty at Stanford and ISI and continues to teach at IIM-Bangalore and IISc. His publications, patents & technical leadership have been in applying probabilistic models, statistical analysis, and machine learning.",
      image: "/speakers/AbhinandaSarkar.jpeg",
    },

    {
      name: "Ramalingam Natarajan",
      description:
        "The co-founder of Volunteer for India (VFI), an organization aimed at fostering volunteerism to address social issues across the country. His career trajectory is notable for its blend of engineering, education, and social innovation. Initially trained as an aerospace engineer, he worked on projects for Airbus and Boeing before shifting to impactful community work.",
      image: "/speakers/ramalingam.jpg",
    },

    // Add more speaker objects as needed
  ];

  return (
    <div className="h-[80%] relative">
      <div
        className="w-full h-[60vh] bg-repeat-y bg-right-bottom flex flex-col justify-center items-center mt-[3vh]"
        style={{
          backgroundImage: `url(${speakerBanner})`,
          backgroundSize: "100% 60vh",
          backgroundPosition: "10% 30%",
        }}
      >
        <div className="absolute top-[4%] left-0 w-full flex justify-center items-center text-white font-bold text-4xl z-10">
          <span>Meet Our TEDx Speakers</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-[-20%]">
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
