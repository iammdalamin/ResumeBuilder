import React from "react";

const Button = ({ children }) => {
  return (
    <button className="  py-3 px-8 bg-indigo-500 hover:bg-indigo-700 rounded-full text-white  ease-in-out duration-500">
      {children}
    </button>
  );
};

export default Button;
