import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col gap-4 items-center justify-center bg-white bg-opacity-70 backdrop-blur-md z-[9999]">
      <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      <p className="text-black text-lg font-semibold font-[Poppins] animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
