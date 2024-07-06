import React, { useState } from "react";

const ProfileCard = ({ name, title, description, image }) => {
  const [expanded, setExpanded] = useState(false);
  const descriptionSentences = description.split(". ");

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="md:w-[25rem] xl:w-[20rem] 2xl:w-[22rem] mx-auto flex flex-col gap-2 my-12 px-4 border border-gray-300/20 rounded-lg backdrop-blur-md dark:bg-gray-900 shadow-lg">
      <div className="w-full flex justify-center items-center">
        <img
          className=" w-[8rem] h-[8rem] rounded-full outline outline-offset-2 outline-1 outline-blue-400 shadow-lg relative -top-[4rem]"
          src={image}
          alt={`${name} Profile`}
        />
      </div>
      <div className="w-full h-full text-center flex flex-col gap-4 relative -top-10">
        <h1 className="uppercase text-lg font-semibold text-white">{title}</h1>
        <h2 className="text-xl font-serif capitalize font-semibold text-slate-100 dark:text-gray-300">
          {name}
        </h2>
        <div
          className="text-slate-100 dark:text-gray-300 text-justify text-sm cursor-pointer"
          onClick={toggleExpand}
        >
          {
            expanded
              ? descriptionSentences.join(". ") // Join all sentences if expanded
              : descriptionSentences.slice(0, 1).join(". ") // Show up to 3 sentences by default
          }
          {!expanded && descriptionSentences.length > 3 && (
            <span className="text-blue-500 underline ml-1">... more</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
