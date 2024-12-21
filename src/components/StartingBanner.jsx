import banner from '../assets/iiit.png'
function StartingBanner() {
  return (
    <div className="h-[80%]">
      <div
        className="w-full h-[83vh] bg-cover bg-no-repeat bg-right-bottom flex justify-center items-center"
        style={{
          backgroundImage: `url('src/assets/iiit.png')`,
          backgroundPosition: "65% 50%",
        }}
      >

      </div>
    </div>
  );
}

export default StartingBanner;
