import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MailIcon } from "lucide-react";
import terms from "../../assets/docs/terms.pdf";
import privacy from "../../assets/docs/privacy.pdf";
const Footer = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const scholarshipLinks = [
    { to: "#/apply", text: "Apply Now" },
    { to: "#/eligibility", text: "Eligibility Criteria" },
    { to: "#/guidelines", text: "Application Guidelines" },
  ];

  const resourcesLinks = [
    { to: "/products/#faqs", text: "FAQs" },
    { to: "#", text: "Financial support" },
    { to: "#", text: "Success stories" },
  ];

  const aboutLinks = [
    { to: "#/about-us", text: "About Us" },
    { to: "#/contact", text: "Contact Us" },
    { to: "#/team", text: "Our Team" },
    { to: "#/support", text: "support Us" },
  ];

  const policyLinks = [
    { to: terms, text: "Terms of Service" },
    { to: privacy, text: "Privacy Policy" },
  ];

  const handlePdfOpen = (url) => {
    setPdfUrl(url);
    setShowPdf(true);
  };
  
  return (
    <footer className="bg-black border-t-4 border-neutral-600/30" id="contact">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <NavLink to="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    {/* <span>
                      <img
                        src="https://www.svgrepo.com/show/452102/slack.svg"
                        alt="Scholarship Logo"
                        width="64"
                        height="64"
                        className="w-16"
                      />
                    </span> */}
                    <span className="text-white font-kingshare">Edufund</span>
                  </div>
                </NavLink>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-200">
                Empowering students to achieve their dreams through
                comprehensive financial support opportunities and resources.
              </div>
              <div className="flex space-x-2">
                <a
                  href=""
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href=""
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="mailto:partnerships@edufunds.co"
                  target="_blank"
                  className="text-gray-200 hover:text-gray-200"
                >
                  <span className="sr-only">Email</span>
                  <MailIcon />
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Financial Support
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {scholarshipLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          {link.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Resources
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {resourcesLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          {link.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    About
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {aboutLinks.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          {link.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Policy
                  </h3>
                  {/* <ul role="list" className="mt-6 space-y-4">
                    {policyLinks.map((link) => (
                      <li key={link.to}>
                      {link.external ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <NavLink
                          to={link.to}
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          {link.text}
                        </NavLink>
                      )}
                    </li>
                    ))}
                  </ul> */}
                  <ul role="list" className="mt-6 space-y-4">
                    {policyLinks.map((link) => (
                      <li key={link.to}>
                        {/* <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          {link.text}
                        </a> */}
                        <a
                          href="#"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                          onClick={() => handlePdfOpen(link.to)}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © 2024. developed
              <span className="text-gray-50 mx-1">by</span>
              <a
                href="http://kibuti.co.tz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono sm:block md:inline font-bold text-xl mx-1 text-white no-underline hover:no-underline hover:text-purple-500"
              >
                <span className="text-white hover:text-purple-500 hover:font-redhat transition-all duration-500 capitalize">
                  Kibuti Software
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <PdfModal
        show={showPdf}
        onClose={() => setShowPdf(false)}
        pdfUrl={pdfUrl}
      />
    </footer>
  );
};

const PdfModal = ({ show, onClose, pdfUrl }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md w-11/12 h-5/6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">
          Close
        </button>
        <iframe src={pdfUrl} title="PDF Viewer" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Footer;
