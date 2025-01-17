import React from "react";

function Hero() {
  return (
    <div className="h-[50vh] bg-pattern bg-gradient-to-b from-blue-900 to-blue-600 flex items-center">
      <section
        className="w-full bg-cover bg-center py-12"
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">EDUQUIZ</h1>
          <p className="text-xl mb-5">
            Please fill in the form below.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
