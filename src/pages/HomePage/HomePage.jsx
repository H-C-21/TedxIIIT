import Booking from "../../components/Booking";
import ReasonsToAttend from "../../components/reasons";
import StartingBanner from "../../components/StartingBanner";
import Timer from "../../components/Timer";
import SponsorsSection from "../../components/sponsors";
import Speaker from "../../components/Speaker";
import Footer from "../../components/Footer";
function HomePage() {
  return (
    <div>
      <StartingBanner />
      <Booking />
      <Timer />
      <ReasonsToAttend />
      <Speaker />

      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
