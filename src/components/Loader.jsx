import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};

export default Loader;
