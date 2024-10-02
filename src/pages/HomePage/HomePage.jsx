import kalidoscope from '../../assets/kalidoscope.jpeg';
import tedX from '../../assets/tedX.png'; 

function HomePage() {
    return (
      <div>
        <div className="h-[80%]">
          <div
            className="w-full h-[85vh] bg-no-repeat bg-right-bottom flex justify-center items-center"
            style={{
              backgroundImage: `url(${kalidoscope})`,
              backgroundPosition: "70% 50%",
            }}
          >

            <div className='flex w-[70%] my-auto'>
                <div className='flex flex-col'>
                    <img src={tedX} className='w-48 h-48'></img>
                    <div>IIITSriCity</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomePage;