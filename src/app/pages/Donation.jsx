import React from "react";
import Nav from "../components/Nav";
import Footer from "../sections/Footer";

function Donation() {
  return (
    <div className="bg-pattern w-full min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default Donation;

export function Hero() {
  return (
    <section>
      <div class="relative isolate overflow-hidden bg-gray-900/10 backdrop-blur-sm lg:pt-12">
        <svg
          class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="100%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>
        <div
          class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>
        <div class="mt-[-50px] flex h-screen items-center justify-center">
          <div class="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 class="mt-10 text-5xl font-bold tracking-tight font-barlow text-white sm:text-6xl">
              How Edufund
              <span class="text-sky-500 px-2">is closing</span> the
              <span class="text-sky-500 px-2">gap</span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              EduFund Scholarship Management Solution streamlines scholarship
              implementation value chain and delivers end-to-end admission
              management process for institutions and corporates. EduFund
              platform offers transparent, secured, seamless student recruitment
              & onboarding process, scholarship data management, and matches
              students to best universities globally within minutes.
            </p>
            <div class="mt-5 flex items-center justify-center gap-x-6">
              <a
                href="/register"
                class="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                rel="noreferrer"
              >
                Donate Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "Co-Creation of Scholarship Programme",
      description:
        "EduFund works with partner institutions and corporates to envision, design and implement relevant,inclusive scholarship programmes, tailored to achieve our partner’ s objectives and expected results.",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          color="white"
          style={{ color: "white" }}
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M10 10l2 -2v8"></path>
        </svg>
      ),
    },
    {
      title: "Set-up Dedicated Scholarship Platform",
      description:
        "EduFund will set up a dedicated platform for the partners to manage the entire scholarship delivery value chain. Targeted students will apply to the scholarship through the white label platform",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          color="white"
          style={{ color: "white" }}
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
        </svg>
      ),
    },
    {
      title: "Student Recruitment and Matching to Universities",
      description:
        "EduFund provides our partners with data centric application assessment tool, to aid partners in the selection process. Preselected students will be vetted and matched to relevant universities through EduFund",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          color="white"
          style={{ color: "white" }}
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
        </svg>
      ),
    },
    {
      title: "Fund Disbursement to Universities",
      description:
        "Upon completing admission processes, the partner will disburse required fees (covering students tuition, accommodation and other school related fees) to the university directly,to ensure the fund is used for the right course.Partners will also receive a summary scholarship report and recommendations",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          color="white"
          style={{ color: "white" }}
          height="50"
          width="50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
          <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
          <path d="M14 8v8"></path>
        </svg>
      ),
    },
    // {
    //   title: "Student Data Collection and Reporting to the Sponsor",
    //   description:
    //     "EduFund collects important data every semester from our partner universities andbeneficiary students, showing studentsperformance, support areas and plans forthe next semester. Our partners will beable to access these reports through theirdashboard and our report center onEduFund platform",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       aria-hidden="true"
    //       className="h-12 w-12 text-white"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M12 2l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5L12 2z"
    //       ></path>
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Part-time Student Job Facilitation",
    //   description:
    //     "Assistance in finding part-time jobs for students to support their education.",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       aria-hidden="true"
    //       className="h-12 w-12 text-white"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M12 2a10 10 0 0110 10v7.5l3 1.5v1.5H1v-1.5l3-1.5V12a10 10 0 0110-10z"
    //       ></path>
    //     </svg>
    //   ),
    // },
  ];

  return (
    <section>
      <div className="bg-pattern-bricks backdrop-blur-sm p-4 min-h-screen">
        <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              width="60"
              height="60"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_116_159)">
                <path
                  d="M100 0L101.384 87.0669C101.44 90.5691 105.651 92.3134 108.167 89.8763L170.711 29.2893L110.124 91.8335C107.687 94.3493 109.431 98.5604 112.933 98.6161L200 100L112.933 101.384C109.431 101.44 107.687 105.651 110.124 108.167L170.711 170.711L108.167 110.124C105.651 107.687 101.44 109.431 101.384 112.933L100 200L98.6161 112.933C98.5604 109.431 94.3493 107.687 91.8335 110.124L29.2893 170.711L89.8763 108.167C92.3134 105.651 90.5691 101.44 87.0669 101.384L0 100L87.0669 98.6161C90.5691 98.5604 92.3134 94.3493 89.8763 91.8335L29.2893 29.2893L91.8335 89.8763C94.3493 92.3134 98.5604 90.5691 98.6161 87.0669L100 0Z"
                  fill="url(#paint0_linear_116_159)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_116_159"
                  x1="27.5"
                  y1="19"
                  x2="149"
                  y2="174.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD9A0" />
                  <stop offset="1" stop-color="#FFF5F1" />
                </linearGradient>
                <clipPath id="clip0_116_159">
                  <rect width="200" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="my-8 text-center font-kingshare text-2xl font-bold text-white md:text-4xl">
            How it works
          </h2>
          <p className="text-gray-300 text-xl text-center">
            We provide a range of services to support students throughout their
            scholarship journey:
          </p>
          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/10 backdrop-blur-md transition hover:z-[1] hover:shadow-xl hover:shadow-neutral-300/10"
              >
                <div className="relative space-y-8 py-12 p-8">
                  {service.icon}
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition">
                      {service.title}
                    </h5>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
