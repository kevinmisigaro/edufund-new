import React from "react";
import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import Hero from "../components/eduquiz/Hero";

function Eduquiz() {
  return (
    <div className="bg-pattern-bricks">
      <Nav />
      <Hero />
      <div className="bg-white h-screen">
        <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSclizhuknHMPVOJJ3Mhp1AGzJiJ2eukngpCj_lMGAafRTef7w/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Eduquiz;
