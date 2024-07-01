import Nav from "../components/Nav";
import Hero, { Cards } from "../components/fundraiser/Hero";
import HowItWorks from "../components/fundraiser/HowItWorks";
import Footer from "../sections/Footer";

function Fundraiser() {
  return (
    <div className="">
      <Nav />
      <Hero/>
      <HowItWorks />
      {/* <Cards/> */}
      <Footer />
    </div>
  );
}

export default Fundraiser;
