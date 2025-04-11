import React from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      <Navbar />
      <div className="w-full p-10 px-6 lg:p-14 flex flex-col lg:items-center gap-8 lg:gap-12">
        <h2 className="text-2xl lg:text-4xl text-center leading-none font-bold">
          OUR STORY
        </h2>
        <p className="w-full lg:w-[60%] text-lg lg:text-xl text-center leading-tight font-medium font-[Poppins]">
          RK Travels was born from a simple idea — to make travel feel less like
          a hassle and more like a dream come true. From weekend getaways to
          once-in-a-lifetime adventures, we make it easy for you to explore,
          relax, and create unforgettable memories.
          <br />
          <br />
          With trusted service and thoughtfully designed packages, we help you
          explore India's most stunning destinations — from the snowy peaks of
          Himachal to the sun-drenched beaches of Goa — without breaking the
          bank.
          <br />
          <br />
          Our journey began with a handful of trips and big dreams. Today, we're
          proud to serve hundreds of happy travelers every year with expert
          planning, reliable transport, and a passion for hospitality.
        </p>

        <h2 className="text-2xl lg:text-4xl text-center leading-none font-bold mt-4">
          WHY TRAVEL WITH US?
        </h2>
        <p className="w-full lg:w-[60%] text-lg lg:text-xl ding-tight font-medium font-[Poppins]">
          <b>Personalized Packages:</b> Whether you're traveling solo or with a
          group, we craft every experience to match your needs.
          <br />
          <br />
          <b>Affordable Luxury:</b> Get the best stays, transport, and local
          experiences at prices that make sense.
          <br />
          <br />
          <b>End-to-End Support:</b> From the moment you book to your return
          home, we're just one call away.
          <br />
          <br />
          <b>Local Expertise:</b> We know the best hidden gems, local eats, and
          must-see places in every region we cover.
        </p>

        <h2 className="text-2xl lg:text-4xl text-center leading-none font-bold mt-4">
          OUR PROMISE
        </h2>
        <p className="w-full lg:w-[60%] text-lg lg:text-xl text-center leading-tight font-medium font-[Poppins]">
          At RK Travels, it's not just about the destination — it's about the
          journey. We promise comfort, care, and clarity in everything we do. So
          whether it's your first trip or your fiftieth, we'll make it feel just
          as exciting and effortless.
          <br />
          <br />
          Let's go places, together.
        </p>

        <Link to="/packages">
          <button className="w-full lg:w-fit p-4 px-6 lg:px-12 lg:text-xl font-semibold capitalize rounded-md font-[Poppins] text-white bg-stone-800">
            Discover your perfect trip
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default About;
