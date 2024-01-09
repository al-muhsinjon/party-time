import React from "react";

const SectionHead = ({ children, color }) => {
  return (
    <h2
      className={`${
        color ? "text-white" : "text-text-color"
      }  text-center font-bold md:text-5xl text-3xl leading-loose  pb-6`}
    >
      {children}
      <span className="w-14 mt-4 top-2 h-1 before:w-12 relative before:h-[2px] before:absolute before:bg-gray-300 before:right-14 before:top-[1px]  bg-main-color block m-auto after:w-12 after:h-[2px] after:absolute after:bg-gray-300 after:left-14 after:top-[1px] "></span>
    </h2>
  );
};

export default SectionHead;
