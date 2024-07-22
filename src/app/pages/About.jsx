import React from "react";
import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import Card from "../components/about/Card";
import guy from "../../assets/images/guy.jpg";
function About() {
  return (
    <section className="bg-pattern">
      <Nav />
      <Hero />
      <Card />
      <Services />
      <Footer />
    </section>
  );
}

export default About;

function FeatureSection({ icon, title, description, link, image, reverse }) {
  return (
    <div className="relative">
      <div
        className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ${
          reverse ? "lg:grid-cols-2-reverse" : ""
        }`}
      >
        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl ">
                {icon}
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-bold font-kingshare tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 text-lg text-gray-300 text-justify">
                {description}
              </p>
              <div className="mt-6">
                <a
                  className="inline-flex rounded-lg bg-pink-600/10 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                  href={link}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div
            className={`${
              reverse
                ? "-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"
                : "-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"
            }`}
          >
            <img
              alt={title}
              loading="lazy"
              // width="647"
              // height="486"
              className="w-full object-contain shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              style={{
                color: "transparent",
                clipPath:
                  " polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
              }}
              src={guy}
              // src={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const sections = [
    {
      icon: (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   fill="none"
        //   viewBox="0 0 24 24"
        //   strokeWidth="1.5"
        //   stroke="currentColor"
        //   aria-hidden="true"
        //   className="h-8 w-8 text-white"
        // >
        //   <path
        //     strokeLinecap="round"
        //     strokeLinejoin="round"
        //     d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        //   ></path>
        // </svg>
        <svg
          width="200"
          height="200"
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
      ),
      title:
        "EduFund seeks to make quality education accessible for all Africans",
      description:
        "EduFund is democratizing access to quality education for underserved young talents, with the aim of catalyzing Africa’s economy by enabling Africa’s young workforce to acquire relevant skills for future of work. Over 79% of Africa’s population are living below $6 per day, which makes higher education a luxury concept to these communities. Our goal is to bring quality education to every deserving African talent, irrespective of social status, and create a generation of productive youths that become a driving force of the continent’s economy.",
      link: "/scholarships",
      image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
      reverse: false,
    },
    // {
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth="1.5"
    //       stroke="currentColor"
    //       aria-hidden="true"
    //       className="h-8 w-8 text-white"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    //       ></path>
    //     </svg>
    //   ),
    //   title: "Financial Aid Guidance",
    //   description:
    //     "Get expert guidance on applying for financial aid. Learn about different types of aid and how to maximize your eligibility.",
    //   link: "/financial-aid",
    //   image: "https://images.unsplash.com/photo-1599134842279-fe807d23316e",
    //   reverse: true,
    // },
  ];

  return (
    <div>
      <div className="relative bg-pattern-bricks overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 lg:pt-20">
        {sections.map((section, index) => (
          <FeatureSection
            key={index}
            icon={section.icon}
            title={section.title}
            description={section.description}
            link={section.link}
            image={section.image}
            reverse={section.reverse}
          />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: "Scholarship Management Platform",
      description:
        "Efficiently manage scholarships, from applications to disbursements, with ease and transparency.",
      icon: "https://www.svgrepo.com/show/164986/logo.svg",
    },
    {
      title: "Pre-departure & Integration",
      description:
        "Comprehensive support to help students transition smoothly to their new environment.",
      icon: "https://www.svgrepo.com/show/120853/logo.svg",
    },
    {
      title: "Visa Support",
      description:
        "Assistance with the visa application process to ensure a hassle-free experience.",
      icon: "https://www.svgrepo.com/show/120852/logo.svg",
    },
    {
      title: "Data-driven Scholarship Reporting",
      description:
        "Leverage data to provide insights and reports on scholarship programs.",
      icon: "https://www.svgrepo.com/show/120850/logo.svg",
    },
    // {
    //   title: "Admission Support",
    //   description: "Guidance and support throughout the admission process to secure placement in top institutions.",
    //   icon: "https://www.svgrepo.com/show/164986/logo.svg",
    // },
    // {
    //   title: "Part-time Student Job Facilitation",
    //   description: "Assistance in finding part-time jobs for students to support their education.",
    //   icon: "https://www.svgrepo.com/show/120853/logo.svg",
    // },
  ];

  return (
    <div className="bg-pattern-bricks p-4 min-h-screen relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
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
          <div></div>
        </div>
        <h2 className="my-8 font-kingshare text-center text-2xl font-bold text-white md:text-4xl">
          Our Services
        </h2>
        <p className="text-gray-300 text-center">
          We provide a range of services to support students throughout their
          scholarship journey:
        </p>
        <div className="mt-16 grid divide-x divide-y divide-gray-700/50 overflow-hidden rounded-3xl border text-gray-600 border-gray-700/40 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src={service.icon}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  style={{ color: "transparent" }}
                  alt={service.title}
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
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
  );
}
