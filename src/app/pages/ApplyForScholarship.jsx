import React from "react";
import Form from "../components/Form";
import Footer from "../sections/Footer";
import Nav from "../components/Nav";

function ApplyForScholarship() {
  return (
    <div className="bg-pattern relative">
      <Nav />
      <div className="pt-24">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default ApplyForScholarship;
