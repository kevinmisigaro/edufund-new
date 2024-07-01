import React from "react";
import ScholarshipCard from "../components/ScholarshipCard"; // adjust the path as necessary

export function HowWeAreShapingEducation() {
  const scholarships = [
    {
      title: "EDUFUND FOR AFRICA",
      description:
        "Providing financial support to students across Africa to ensure they can access quality education.",
    },
    {
      title: "CORPORATE SCHOLARSHIP MANAGEMENT",
      description:
        "Managing corporate-sponsored scholarships efficiently, ensuring transparency and fairness.",
    },
    {
      title: "MATCHING GRANT",
      description:
        "Offering matching grants to amplify the impact of individual and corporate donations.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-white font-kingshare">
          How we are shaping Education for all
        </h2>
        <p className="text-slate-100 text-lg text-center md:w-[70%] md:mx-[15%] my-4">
          EduFund is on mission to creating a productive workforce for Africa,
          by enabling every young person access decent level of education
          through our community financing solutions.
        </p>
      </div>
      <div className="w-full grid gap-14 md:grid-cols-3 md:gap-5 2xl:grid-cols-4 2xl:ml-60">
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard
            key={index}
            title={scholarship.title}
            description={scholarship.description}
          />
        ))}
      </div>
    </div>
  );
}
