import React, { useState } from "react";
import birmingham from "../../assets/images/partiners/birmingham-city.png";
import bradford from "../../assets/images/partiners/uni-bradford.png";
import liverpool from "../../assets/images/partiners/uni-liverpool.png";
import sussex from "../../assets/images/partiners/uni-sussex.png";
import uwe from "../../assets/images/partiners/uwe.png";
function Partners() {
  const colleges = [
    { src: birmingham, alt: "Birmingham logo", width: 100, height: 50 },
    { src: bradford, alt: "Bradford logo", width: 100, height: 50 },
    { src: liverpool, alt: "Liverpool logo", width: 100, height: 50 },
    { src: sussex, alt: "Sussex logo", width: 100, height: 50 },
    { src: uwe, alt: "UWE logo", width: 100, height: 50 },
  ];
  return (
    <>
      <h1 className="text-center font-kingshare text-5xl my-4 md:my-8 lg:my-12 text-white">
        Our university partners
      </h1>
      <section className="py-base container backdrop-blur-md bg-white rounded-xl py-4">
        <div className="grid gap-8 grid-cols-2 md:gap-y-16 md:grid-cols-6">
          {colleges.map((college, index) => (
            <span
              key={index}
              className="w-full flex items-center justify-center"
            >
              <span className="sr-only">{college.alt}</span>
              <div aria-hidden="true">
                <img
                  src={college.src}
                  alt={college.alt}
                  width={college.width}
                  height={college.height}
                  className=" select-none"
                  style={{ filter: "grayscale(100%) sepia(5%)" }}
                />
              </div>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

export default Partners;
