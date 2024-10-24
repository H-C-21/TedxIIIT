function Booking() {
    return(<div className="h-[30%]">
        <div
          className="w-full h-screen bg-center bg-no-repeat bg-[length:80%] "
          style={{
              backgroundImage:  `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/626b12b7-19a0-469d-9995-5d7a110a9217/d7o0cuw-77a4db72-c5d0-424e-a2a9-890b44694c55.png/v1/fill/w_894,h_894,q_70,strp/red_black_mosaic_kaleidoscope_by_stefanalexandru02_d7o0cuw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzYyNmIxMmI3LTE5YTAtNDY5ZC05OTk1LTVkN2ExMTBhOTIxN1wvZDdvMGN1dy03N2E0ZGI3Mi1jNWQwLTQyNGUtYTJhOS04OTBiNDQ2OTRjNTUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pJRzdg2C4LQHQJNSbd_O6TMSrA71PJH4o4dC2tRhdaU')`,
            backgroundPosition: "170% 110%",
          }}
          
        >

          <div className='flex w-[70%] my-auto mr-[10vw] ml-7 '>
              <div className='flex flex-col'>
                    <div className='ml-2 mt-6'>
                    <section className="flex items-top justify-center h-screen bg-black-100">
      <div className="flex flex-col p-6 max-w-2xl w-full bg-black rounded-lg shadow-md">
        <p className="text-[20px]">
                    <i>Kaleidoscope of Humanity,</i> envisions a world where the beauty of human diversity comes together to create something extraordinary. Just like a kaleidoscope, where every shift reveals new patterns and colors, humanity is a vibrant mosaic of cultures, perspectives, and experiences.Through this theme, TEDx IIIT Sri City aims to celebrate the complexity and interconnectedness of individuals and communities, highlighting how our differences—when viewed through a lens of unity—form a collective brilliance that inspires progress, empathy, and shared understanding.
                    </p>
                    <button class=" overflow-hidden w-[25%] ml-[37%] bg-#ef4444-500 bg-black border-white hover:bg-red-700 text-white font-bold py-2 px-4 rounded group mt-[5vh] p-[2vh]">
  <span class="inline-block relative transition-all duration-500 group-hover:pr-4 cursor-pointer">
    Book Now
  </span>
</button>

      </div>
    </section>
                  
                  </div>
              </div>
          </div>
        </div>
      </div>)
}
export default Booking;