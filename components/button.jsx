import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={` ${className} bg-[#c1007b] border-2 font-bold py-2 px-8 rounded-full text-white bg-mainColor`}
    >
      {children}
    </button>
  );
};

export default Button;
