import { useEffect, useState } from "react";
import banner from "../assets/iiit.png";
import mobileBanner from "../assets/mobile_iiit.png";

function StartingBanner() {
  const [backgroundImage, setBackgroundImage] = useState(banner);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setBackgroundImage(mobileBanner); // Use mobile image for small screens
      } else {
        setBackgroundImage(banner); // Use default image for larger screens
      }
    };

    // Check initial screen size
    handleResize();

    // Add event listener to update on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[80%]">
      <div
        className="w-full h-[83vh] bg-cover bg-no-repeat bg-right-bottom flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Dynamically set the background
          backgroundPosition: "65% 50%",
        }}
      ></div>
    </div>
  );
}

export default StartingBanner;
