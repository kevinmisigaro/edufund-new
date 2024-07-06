// import React, { useRef, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// const teamMembers = [
//   {
//     name: "Francis Omoroije",
//     position: "Co-founder @igniteAfrica",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
//     avatar: "https://randomuser.me/api/portraits/women/46.jpg",
//     additionalAvatars: [
//       "https://randomuser.me/api/portraits/women/46.jpg",
//       "https://randomuser.me/api/portraits/men/45.jpg",
//       "https://randomuser.me/api/portraits/women/47.jpg",
//     ],
//   },
//   {
//     name: "Alex Johnson",
//     position: "Developer @TechCorp",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
//     avatar: "https://randomuser.me/api/portraits/men/44.jpg",
//     additionalAvatars: [
//       "https://randomuser.me/api/portraits/women/44.jpg",
//       "https://randomuser.me/api/portraits/men/46.jpg",
//       "https://randomuser.me/api/portraits/women/48.jpg",
//     ],
//   },
//   {
//     name: "Jane Doe",
//     position: "Designer @Creatives",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
//     avatar: "https://randomuser.me/api/portraits/women/45.jpg",
//     additionalAvatars: [
//       "https://randomuser.me/api/portraits/women/45.jpg",
//       "https://randomuser.me/api/portraits/men/47.jpg",
//       "https://randomuser.me/api/portraits/women/49.jpg",
//     ],
//   },
//   {
//     name: "John Smith",
//     position: "Manager @BusinessInc",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
//     avatar: "https://randomuser.me/api/portraits/men/48.jpg",
//     additionalAvatars: [
//       "https://randomuser.me/api/portraits/women/50.jpg",
//       "https://randomuser.me/api/portraits/men/49.jpg",
//       "https://randomuser.me/api/portraits/women/51.jpg",
//     ],
//   },
//   {
//     name: "Emily White",
//     position: "Engineer @BuildStuff",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
//     avatar: "https://randomuser.me/api/portraits/women/50.jpg",
//     additionalAvatars: [
//       "https://randomuser.me/api/portraits/women/52.jpg",
//       "https://randomuser.me/api/portraits/men/51.jpg",
//       "https://randomuser.me/api/portraits/women/53.jpg",
//     ],
//   },
// ];

// function Team() {
//   const controls = useAnimation();
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       controls.start({
//         x: -scrollY * 0.05,
//         transition: { type: "tween", ease: "easeOut", duration: 0.5 },
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls]);

//   return (
//     <>
//       <div className="w-full relative isolate pt-[6em]" id="team">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>

//         <div className="flex items-center justify-center flex-col max-h-screen">
//           <h1 className="text-white font-kingshare font-semibold text-3xl text-center mb-4 md:mb-8 lg:mb-16 xl:mb-24">
//             The team behind our success
//           </h1>
//           <div ref={scrollRef} className="w-full overflow-x-hidden">
//             <motion.div
//               className="flex space-x-4"
//               animate={controls}
//               drag="x"
//               dragConstraints={{ left: -300, right: 0 }}
//               // dragSnapToOrigin={true}
//               dragElastic={2}
//             >
//               {teamMembers.map((member, index) => (
//                 <div
//                   key={index}
//                   className="flex-none break-inside relative overflow-hidden flex flex-col justify-between space-y-3 lg:space-y-4 text-sm rounded-xl max-w-[23rem] p-4 mb-4 backdrop-filter backdrop-blur-sm bg-white/10 text-black dark:bg-slate-800 dark:text-white"
//                 >
//                   <div className="flex items-center justify-between font-medium">
//                     <span className="uppercase text-xs text-slate-50">
//                       {member.name}
//                     </span>
//                     <span className="text-xs text-slate-500"></span>
//                   </div>
//                   <div className="flex flex-row items-center space-x-3">
//                     <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
//                       <img
//                         className="w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800"
//                         src={member.avatar}
//                         alt="avatar"
//                       />
//                     </div>
//                     <span className="text-base text-white font-medium">
//                       {member.position}
//                     </span>
//                   </div>
//                   <div className="text-white">{member.description}</div>
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <dt className="sr-only">Users</dt>
//                       <dd className="flex justify-start -space-x-1.5">
//                         {member.additionalAvatars.map((avatar, idx) => (
//                           <a href="#" key={idx} className="inline-block -m-1">
//                             <img
//                               className="w-7 h-7 rounded-full ring-2 ring-white dark:ring-slate-800"
//                               src={avatar}
//                               alt="avatar"
//                             />
//                           </a>
//                         ))}
//                         <span className="inline-block -m-1 rounded-full ring-2 ring-white dark:ring-slate-800">
//                           <svg
//                             width="28"
//                             height="28"
//                             viewBox="0 0 31 31"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="text-slate-200 dark:text-slate-600"
//                           >
//                             <path
//                               d="M31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM8.20879 15.5C8.20879 19.5268 11.4732 22.7912 15.5 22.7912C19.5268 22.7912 22.7912 19.5268 22.7912 15.5C22.7912 11.4732 19.5268 8.20879 15.5 8.20879C11.4732 8.20879 8.20879 11.4732 8.20879 15.5Z"
//                               fill="currentColor"
//                             />
//                             <path
//                               d="M31 15.5C31 18.049 30.3714 20.5586 29.1698 22.8066C27.9682 25.0547 26.2307 26.9716 24.1113 28.3878C21.9919 29.8039 19.556 30.6755 17.0193 30.9254C14.4826 31.1752 11.9234 30.7956 9.56841 29.8201C7.21345 28.8447 5.1354 27.3035 3.51834 25.3331C1.90128 23.3627 0.795112 21.0239 0.297828 18.5239C-0.199455 16.0239 -0.0725081 13.4398 0.667425 11.0006C1.40736 8.56136 2.73744 6.34225 4.53984 4.53985L10.2876 10.2876C9.43046 11.1448 8.79791 12.2002 8.44602 13.3602C8.09413 14.5202 8.03376 15.7491 8.27025 16.9381C8.50675 18.127 9.03281 19.2393 9.80184 20.1764C10.5709 21.1134 11.5591 21.8464 12.6791 22.3103C13.799 22.7742 15.0161 22.9547 16.2225 22.8359C17.4289 22.7171 18.5874 22.3026 19.5953 21.6291C20.6033 20.9556 21.4295 20.0439 22.001 18.9748C22.5724 17.9058 22.8714 16.7122 22.8714 15.5H31Z"
//                               fill="#2BC86A"
//                             />
//                           </svg>
//                         </span>
//                       </dd>
//                     </div>
//                     <button className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
//                       <span>Visit</span>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M5 12h13M12 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Team;

import React from "react";
import ProfileCard from "../components/ProfileCard";
import tonis from "../../assets/images/team/tosin.jpg";
import mercy from "../../assets/images/team/mercy.jpg";
import francis from "../../assets/images/team/francis.jpg";
import Ifeolu from "../../assets/images/team/ifeouli.jpg";
const Team = () => {
  const profiles = [
    {
      name: "Tosin Adebisi",
      title: " Co-founder and Director, Strategy and Business Development",
      description:
        "Tosin is a seasoned edupreneur and cultural catalyst currently leading the Programme for African Leadership (PfAL) at the London School of Economics. With over 15 years of experience in higher education, he previously served as Senior International Lead at the University of Sussex, focusing on strategy development and stakeholder engagement across Africa and the Middle East. Recognized for his contributions, he was named among The PIE’s ‘Top 50 Voices of International Education in Europe’ in 2023 and has received two Excellence in Education Awards.Passionate about equitable access to education, Tosin advocates for minority students and designs person-centered strategies to empower youth as future leaders. He co-founded initiatives like Edufund and Pitch my Dissertation to enhance study and career opportunities. Additionally, he excels in inclusive leadership and innovation facilitation, collaborating with organizations such as UUKi, CIS, and the British Council to advance education and youth empowerment globally.",
      image: tonis,
    },
    {
      name: "Mercy Gilbert",
      title: "Director, Development and Partnerships",
      description:
        "Mercy is a renowned entrepreneur, philanthropist, and advocate for empowerment, notably within Africa and the African diaspora. She founded Gilbert Media Group and BABFORUM, establishing herself in media and international relations. In 2023, Mercy was honored with the International Woman of the Year award at the 11th Onyx Media Awards for her leadership and contributions. As Chairman of a Conservative Ward in the UK, she wields significant political influence. Mercy collaborates with top UK universities and US Congresswomen to provide scholarships for Black students and is launching a program to send 5,000 Role Models to the White House. Originally from Zimbabwe, she champions Africa's potential and promotes opportunities and development post-Covid. Mercy is committed to empowering African generations through initiatives that foster international collaboration and leadership.",
      image: mercy,
    },
    {
      name: "Francis Omoroije",
      title: "Co-founder and Director, Operations and Technology",
      description:
        "Francis is a seasoned professional in entrepreneurship, venture capital, and business development, currently serving as Managing Partner at Ennovate Ventures. His career spans leadership roles in ventures and co-founding initiatives, demonstrating his prowess in launching and nurturing successful businesses. Francis also brings expertise in consulting and recruitment, with a focus on fostering talent and digital skills development among youth in Africa. He is a passionate advocate for African investment opportunities, regularly speaking at international events and contributing to community development and knowledge sharing initiatives.",
      image: francis,
    },
    {
      name: "Dr. Olubunmi Ifeolu Oluronbi",
      title: "Policy and Programmes Manager Edufund",
      description:
        "Dr Olubunmi Ifeolu Oluronbi is a medical doctor and policy professional based in London, United Kingdom, with a strong commitment to empowering Africa, particularly in healthcare and education. She holds an MD from Kharkiv National Medical University in Ukraine and is currently pursuing an MSc in Global Health Policy at the London School of Economics and Political Science. Dr. Ifeolu has extensive clinical experience in Nigeria and is fluent in English, Yoruba, and has proficiency in Russian.Beyond academia, Dr. Ifeolu is actively engaged in leadership roles and community initiatives. She serves as a Project Consultant for the Future of Work Webinar series and was a Logistics Officer for the LSE Africa Summit 2024. Her contributions include enhancing educational resilience and preparing young professionals for the job market in Africa.Recognized for her achievements, Dr. Ifeolu has received awards such as the 2nd place in the Black History Month Literary competition at LSE and People's Choice Award from the Programme for African Leadership. Outside of work, she enjoys reading, traveling, and music.",
      image: Ifeolu,
    },
  ];

  return (
    <>
      <h1 className="text-white font-kingshare font-semibold text-3xl text-center mb-4 md:mb-8 lg:mb-16 xl:mb-24">
      Meet the Team
      </h1>
      <div className="w-full relative bg-pattern-dots dark:bg-gray-800 py-20 flex flex-wrap justify-center items-center gap-2">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            title={profile.title}
            description={profile.description}
            image={profile.image}
          />
        ))}
      </div>
    </>
  );
};

export default Team;
