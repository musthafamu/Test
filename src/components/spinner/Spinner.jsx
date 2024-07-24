// src/components/Spinner.js
import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
