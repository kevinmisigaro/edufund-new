import React from "react";

const Card = ({
  image,
  category,
  title,
  description,
  timeAgo,
  comments,
  source,
}) => (
  <div className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-neutral-800/90">
    <div className="relative">
      <a href={source}>
        <img className="w-full h-44 object-cover" src={image} alt={title} />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      </a>
      <span>
        <div className="text-xs absolute top-0 right-0 bg-purple-600/50 backdrop-blur-xl rounded-full px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          {category}
        </div>
      </span>
    </div>
    <div className="px-6 py-4 mb-auto">
      <a
        href={source}
        target="_top"
        className="font-medium text-lg text-white  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
      >
        {title}
      </a>
      <p className="text-gray-300/60 text-sm">{description}</p>
    </div>
    <div className="px-6 py-3 flex flex-row items-center justify-between bg-neutral-600/30">
      <span className="py-1 text-xs font-regular text-gray-400 mr-1 flex flex-row items-center">
        <svg
          height="13px"
          width="13px"
          version="1.1"
          stroke="rgba(250,250,250,0.6)"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style={{ color: "white" }}
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
            </g>
          </g>
        </svg>
        <span className="ml-1">{timeAgo}</span>
      </span>

      <span className="py-1 text-xs font-regular text-gray-400 mr-1 flex flex-row items-center">
        <svg
          className="h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgba(250,250,250,0.6)"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          ></path>
        </svg>
        <span className="ml-1">No comments</span>
      </span>
    </div>
  </div>
);

const Articles = () => {
  const cardsData = [
    {
      image:
        "https://blogs.worldbank.org/content/dam/sites/blogs/img/detail/mgr/mother_and_daughter_hero_image.jpg",
      category: "Develeopment talk",
      title: "The high price of education in Sub-Saharan Africa",
      description:
        "The promise of universal primary and secondary education is one of the Sustainable Development Goals. Yet in 2020, about 64 million..",
      timeAgo: "Mar 13, 2023",
      comments: 45,
      url: "https://blogs.worldbank.org/en/developmenttalk/high-price-education-sub-saharan-africa",
    },
    {
      image:
        "https://thepienews.b-cdn.net/wp-content/uploads/2024/02/Screenshot-2024-02-12-at-15.29.45-2.jpeg",
      category: "Reality check",
      title: "Reality check: the hidden price of UK education",
      description:
        "Since the start of my journey to the UK as an international student, there has been noticeable..",
      timeAgo: "February 26 2024",
      comments: 12,
      url: "https://thepienews.com/reality-check-the-hidden-price-of-uk-education/",
    },
    {
      image:
        "https://thewhistler.ng/wp-content/uploads/2024/05/Teesside-University-students-protesting-on-campus.jpg",
      category: "financial crisis",
      title:
        "Nigerian Students Kicked Out Of UK University Due To Currency Crisis",
      description:
        "A financial crisis in Nigeria has resulted in a heartbreaking situation for dozens of Nigerian students..",
      timeAgo: "May 22, 2024",
      comments: 20,
      url: "https://thewhistler.ng/nigerian-students-kicked-out-of-uk-university-due-to-currency-crisis/",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <h1 className="font-kingshare text-3xl font-semibold text-center my-4">
        Some blogs to keep you updated
      </h1>
      <div className=" mb-5 flex justify-between text-sm">
        <div className="text-slate-100 flex items-center pb-2 pr-2 border-b-2 border-slate-100 uppercase">
          <svg
            className="h-6 mr-3"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 455.005 455.005"
            style={{ enableBackground: "new 0 0 455.005 455.005" }}
            xmlSpace="preserve"
          >
            <g>
              <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"></path>
              <path d="M353.664,313.463c-3.505-2.207-8.136-1.155-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343 c3.505,2.207,8.136,1.155,10.343-2.35C358.221,320.301,357.169,315.671,353.664,313.463z"></path>
              <path d="M328.869,298.426c-3.505-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343 c3.505,2.207,8.136,1.155,10.343-2.35C333.426,305.264,332.373,300.633,328.869,298.426z"></path>
              <path d="M304.074,283.389c-3.505-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343 c3.505,2.207,8.136,1.154,10.343-2.35C308.631,290.227,307.579,285.596,304.074,283.389z"></path>
              <path d="M279.279,268.352c-3.505-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343 c3.505,2.207,8.136,1.155,10.343-2.35C283.836,275.19,282.784,270.559,279.279,268.352z"></path>
            </g>
          </svg>
          Most Popular
        </div>
        {/* <div className="flex items-center uppercase">
          <a href={source} className="text-slate-100">View All</a>
          <svg className="h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            category={card.category}
            title={card.title}
            description={card.description}
            timeAgo={card.timeAgo}
            comments={card.comments}
            source={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
