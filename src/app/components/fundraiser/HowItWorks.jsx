import React from "react";

const points = [
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9-8-16-6 12H2"></path>
      </svg>
    ),
    title: "Setup Your Fundraiser",
    description:
      "Complete your fundraiser information,including your compelling story,admission letter and amount your arefundraising. These information aremandatory for your fundraiser to beapproaved on EduFund. EduFund willreview your application and updateyour fundraiser status.",
  },
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
    title: "Raise Funds",
    description:
      "Your campaign will be live and EduFund will share your fundraiser with our community of donors that will be eager to support you in your next big education moves. undraiser perform better when you share your campaign with your immediate community. Leverage on your community to boost your funding",
  },
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    title: "Fund Disburement and Reporting",
    description:
      "For transparency purposes, funds raised for university tuition fees is sent directly to your university, while funds raised for your upkeep will be sent to your bank account. This is to ensure that funds raised are specifically used for the intended purpose. You will be required to share updated with your donors every semester.",
  },
];

function HowItWorks() {
  return (
    <section className="text-gray-400 bg-pattern-bricks">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium font-kingshare backdrop-blur-0 title-font text-center text-white mb-20">
          How It Works
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {points.map((point, index) => (
            <div key={index} className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white mb-4 flex-shrink-0">
                {point.icon}
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  {point.title}
                </h2>
                <p className="leading-relaxed text-base">{point.description}</p>
                <a
                  href="#"
                  className="mt-3 text-indigo-400 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;



