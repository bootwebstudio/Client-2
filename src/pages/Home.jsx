import React from "react";

// Components
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      {/* Hero Section */}
      <div
        className="w-full h-screen flex flex-col relative text-white bg-cover bg-center"
        style={{ backgroundImage: "url(./Hero.jpg)" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40 lg:bg-black/25 z-0"></div>

        <Navbar />

        {/* Hero Content */}
        <div className="w-full h-full flex gap-6 flex-col items-center justify-center relative z-10">
          <h4 className="text-lg lg:text-2xl leading-none lg:leading-tight">
            PLAN YOUR NEXT
          </h4>
          <h2 className="text-[14vw] lg:text-[12vw] leading-none lg:leading-tight">
            ADVENTURE
          </h2>
          <p className="w-full lg:w-[60%] p-6 lg:px-0 text-lg lg:text-xl text-center leading-tight font-medium font-[Onest]">
            Who says dream holidays have to be expensive? Enjoy scenic
            destinations, comfy stays, and unforgettable memories — all within
            your budget. Start your adventure today with RK Travels!
            <br />
            <br />
            RK Travels brings you unforgettable trips at pocket-friendly prices.
            From solo gateways to family vacations — enjoy more, spend less, and
            make every moment count!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
