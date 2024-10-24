import kalidoscope from '../assets/kalidoscope.jpeg';
import tedX from '../assets/tedX.png'; 

function StartingBanner(){
    return(
        <div className="h-[80%]">
          <div
            className="w-full h-[83vh] bg-no-repeat bg-right-bottom flex justify-center items-center b-0"
            style={{
              backgroundImage: `url(${kalidoscope})`,
              backgroundPosition: "65% 50%",
            }}
          >

            <div className='flex w-[70%] my-auto mr-[10vw] ml-7 mt-[22vh] '>
                <div className='flex flex-col'>
                    <img src={tedX} className='w-60 h-50 relative left-[-16vh] ' >
                      
                    </img>
                    <div className='font-inter absolute bottom-[26vh] left-[10vh] text-[5rem] font-normal leading-[96.82px] ml-1 text-left'>IIIT SriCity</div>
                    <div className='ml-2 mt-6'>
                      <p className='font-inter absolute text-[1.25rem]  left-[10vh] font-normal text-left'>
                      X = independently organized TED event
                      </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default StartingBanner;