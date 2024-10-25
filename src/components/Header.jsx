

function Header(){

    return (
        <div className="header w-[100%] h-32 p-3 flex justify-center border-white">
        
            <div className="flex w-[90vw] justify-around font-sans text-2xl font-normal tracking-[0.15em] text-left pt-8">
                <div className="underline-offset-[12px] cursor-pointer hover:underline hover:decoration-red-600">HOME</div>
                <div className="underline-offset-[12px] cursor-pointer hover:underline hover:decoration-red-600">SPONSORS</div>
                <div className="underline-offset-[12px] cursor-pointer hover:underline hover:decoration-red-600">SPEAKERS</div>
                <div className="underline-offset-[12px] cursor-pointer hover:underline hover:decoration-red-600">TEAM</div>
                <div className="underline-offset-[12px] cursor-pointer hover:underline hover:decoration-red-600">ABOUT</div>       
            </div>
        </div>
    )
}

export default Header;