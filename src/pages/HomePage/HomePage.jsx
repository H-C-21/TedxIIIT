import Booking from "../../components/Booking";
import Fulldescription from "../../components/Fulldescription";
import StartingBanner from "../../components/StartingBanner";
import Timer from "../../components/Timer";

function HomePage() {
    return (
      <div>
        <StartingBanner/>
{/* <Timer></Timer> */}
        <Booking /> 
 <Fulldescription/>       
        </div>
    );
}

export default HomePage;