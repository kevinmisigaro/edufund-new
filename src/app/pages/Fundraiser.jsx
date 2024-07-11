import Nav from "../components/Nav";
import Hero, { Cards } from "../components/fundraiser/Hero";
import HowItWorks from "../components/fundraiser/HowItWorks";
import Footer from "../sections/Footer";
import Stats from "../sections/Stats";

function Fundraiser() {
  return (
    <div className="bg-pattern-bricks">
      <Nav />
      <Hero/>
      {/* <Stats/> */}
      <HowItWorks />
      {/* <Cards/> */}
      <Footer />
    </div>
  );
}

export default Fundraiser;
