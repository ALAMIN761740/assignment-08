import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white z-50">
      <span className="loading loading-spinner text-amber-500 w-20 h-20"></span>
    </div>
  );
};

export default Loader;

