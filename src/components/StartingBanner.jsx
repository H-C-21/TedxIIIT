import kalidoscope from '../assets/kalidoscope.jpeg';
import tedX from '../assets/tedX.png'; 

function StartingBanner(){
    return(
        <div className="h-[80%]">
          <div
            className="w-full h-[83vh] bg-no-repeat bg-right-bottom flex justify-center items-center"
            style={{
              backgroundImage: `url(${kalidoscope})`,
              backgroundPosition: "70% 50%",
            }}
          >

            <div className='flex w-[70%] my-auto mr-[10vw] ml-7 mt-[22vh]'>
                <div className='flex flex-col'>
                    <img src={tedX} className='w-48 h-48'>
                      
                    </img>
                    <div className='font-inter absolute bottom-[35vh] text-[5rem] font-normal leading-[96.82px] ml-1 text-left'>IIITSriCity</div>
                    <div className='ml-2 mt-6'>
                      <p className='font-inter text-[1.25rem] font-normal text-left'>
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