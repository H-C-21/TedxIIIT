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
        {/* <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] my-auto mr-[5vw] ml-4 md:ml-7 mt-[10vh] md:mt-[22vh]">
                  <div className="flex flex-col items-center md:items-start">
                      <img 
                          src={tedX} 
                          className="w-30 h-40 md:w-60 md:h-60 mb-4 md:mb-0 relative md:left-[-16vh]" 
                          alt="TEDx Logo"
                      />
                      <div className="text-center md:text-left font-inter md:absolute md:bottom-[26vh] md:left-[10vh] text-[2rem] md:text-[5rem] font-normal leading-tight md:leading-[96.82px]">
                          IIIT SriCity
                      </div>
                      <div className="mt-4 md:mt-6 text-center md:text-left ">
                          <p className="font-inter text-[1rem] md:text-[1.25rem] md:left-[-20vh] font-normal md:relative top-[-2vh]">
                              X = independently organized TED event
                          </p>
                      </div>
                  </div>
              </div> */}
      </div>
    </div>
  );
}

export default StartingBanner;
