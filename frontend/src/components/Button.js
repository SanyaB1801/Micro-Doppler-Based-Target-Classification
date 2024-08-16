// src/components/Button.js
import React from 'react';

const Button = ({ primary, children, ...props }) => {
  const baseClasses = "py-2 px-4 rounded-lg font-semibold transition duration-300";
  const primaryClasses = "bg-green-900 text-white hover:bg-green-700";
  const secondaryClasses = "bg-yellow-300 text-green-900 hover:bg-yellow-400";

  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
