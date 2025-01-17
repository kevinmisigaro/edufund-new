import Nav from "../components/Nav";
import Hero from "../components/fundraiser/Hero";
import HowItWorks from "../components/fundraiser/HowItWorks";
import Footer from "../sections/Footer";

function Fundraiser() {
  return (
    <div className="bg-pattern-bricks">
      <Nav />
      <Hero/>
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Fundraiser;
