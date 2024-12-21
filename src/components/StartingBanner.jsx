import banner from '../assets/iiit.png'
function StartingBanner() {
  const isMobile = window.innerWidth <= 900; // Adjust the width as per your requirement

  return (
    <div className="h-[80%]">
      <div
        className="w-full h-[83vh] bg-cover bg-no-repeat bg-right-bottom flex justify-center items-center"
        style={{

          backgroundImage: isMobile
            ? `url('src/assets/mobile.png')` // Replace with the path to your mobile image
            : `url('src/assets/iiit.png')`,
          backgroundPosition: isMobile ? "center" : "65% 50%",
          backgroundSize: isMobile ? "95%" : "100%",
        }}
      ></div>
    </div>
  );
}

export default StartingBanner;
