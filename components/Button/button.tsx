
import React from 'react';

const CustomButton = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-25 h-9 py-2.5 flex justify-center items-center  
      px-5 me-2 mb-2 lg:ml-auto text-sm font-medium text-white focus:outline-none rounded-lg
       dark:bg-gray-800 dark:hover:text-gray-300 hover:shadow-md ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
