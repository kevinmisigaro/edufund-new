// import React from "react";

// function ProfileCard() {
//   return (
//     <div>
//       <div className="h-screen w-full bg-gray-50/20 flex justify-center items-center">
//         <div className="h-56 w-72 absolute flex justify-center items-center">
//           <img
//             className="object-cover h-20 w-20 rounded-full"
//             src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
//             alt=""
//           />
//         </div>

//         <div
//           className="
//           h-56
//           mx-4
//           w-5/6
//           bg-blue-400
//           rounded-3xl
//           shadow-md
//           sm:w-80 sm:mx-0
//         "
//         >
//           <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
//             <h1 className="text-white">Profile</h1>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="white"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="1"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//           </div>

//           <div
//             className="
//             bg-white
//             h-1/2
//             w-full
//             rounded-3xl
//             flex flex-col
//             justify-around
//             items-center
//           "
//           >
//             <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
//               <div className="flex flex-col justify-center items-center">
//                 <h1 className="text-gray-500 text-xs">Orders</h1>
//                 <h1 className="text-gray-600 text-sm">340</h1>
//               </div>
//               <div className="flex flex-col justify-center items-center">
//                 <h1 className="text-gray-500 text-xs">Spent</h1>
//                 <h1 className="text-gray-600 text-sm">$2,004</h1>
//               </div>
//             </div>
//             <div className="w-full h-1/2 flex flex-col justify-center items-center">
//               <h1 className="text-slate-100 font-bold">Maria R.</h1>
//               <h1 className="text-gray-500 text-sm">New York, USA</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;

import React from "react";

const ProfileCard = ({ name, title, description, image }) => {
  return (
    <div className="md:w-[25rem] xl:w-[27rem] 2xl:w-[30rem] mx-auto flex flex-col gap-2 my-12 px-4 border border-gray-300/20 rounded-lg backdrop-blur-md dark:bg-gray-900 shadow-lg">
      <div className="w-full flex justify-center items-center">
        <img
          className="w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[4rem]"
          src={image}
          alt={`${name} Profile`}
        />
      </div>
      <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
        <h1 className="uppercase text-lg font-semibold text-white">
          {title}
        </h1>
        <h2 className="text-xl font-serif capitalize font-semibold text-slate-100 dark:text-gray-300">
          {name}
          {/* {title} */}
        </h2>
        <p className="text-slate-100 dark:text-gray-300 text-justify text-sm">{description}</p>
        {/* <button className="w-[60%] mx-auto bg-blue-500 text-white rounded-3xl px-4 py-2">
          Follow
        </button> */}
      </div>
    </div>
  );
};

export default ProfileCard;
