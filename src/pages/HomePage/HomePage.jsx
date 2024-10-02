import kalidoscope from '../../assets/kalidoscope.jpeg'; // Adjust the path as necessary


function HomePage() {
    return (
        <div>
            <div className="h-[80%]">
            <img src={kalidoscope} className="object-cover w-full h-screen object-bottom" alt="Description of image"/>
            </div>
        </div>
    );
}

export default HomePage;