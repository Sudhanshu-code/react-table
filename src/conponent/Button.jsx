import React from "react";

function Button({ type, className = "", ...prop }) {
  return (
    <button
      type={type}
      className={
        className
          ? `${className}`
          : `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer  `
      }
      {...prop}
    >
      {prop.text}
    </button>
  );
}

export default Button;
