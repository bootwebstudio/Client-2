import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Packages
import Manali from "../assets/images/Manali.webp";
import Shimla from "../assets/images/Shimla.webp";
import Goa from "../assets/images/Goa.webp";
import Nainital from "../assets/images/Nainital.webp";
import ShimlaManali from "../assets/images/ShimlaManali.webp";
import Kashmir from "../assets/images/Kashmir.webp";
import Uttarakhand from "../assets/images/Uttarakhand.webp";
import HaridwarRishikesh from "../assets/images/HaridwarRishikesh.webp";

// Packages Data
const packages = [
  {
    title: "Manali Tour Package",
    price: 4499,
    rating: "4.5/5",
    image: Manali,
    link: "/packages/manali",
  },
  {
    title: "Shimla Tour Package",
    price: 5499,
    rating: "4.8/5",
    image: Shimla,
    link: "/packages/shimla",
  },
  {
    title: "Goa Tour Package",
    price: 7499,
    rating: "4.2/5",
    image: Goa,
    link: "/packages/goa",
  },
  {
    title: "Nainital Tour Package",
    price: 6499,
    rating: "4.0/5",
    image: Nainital,
    link: "/packages/nainital",
  },
  {
    title: "Shimla - Manali Tour Package",
    price: 10499,
    rating: "4.1/5",
    image: ShimlaManali,
    link: "/packages/shimla-manali",
  },
  {
    title: "Kashmir Tour Package",
    price: 8999,
    rating: "4.8/5",
    image: Kashmir,
    link: "/packages/kashmir",
  },
  {
    title: "Uttarakhand Tour Package",
    price: 15499,
    rating: "4.0/5",
    image: Uttarakhand,
    link: "/packages/uttarakhand",
  },
  {
    title: "Haridwar - Rishikesh Tour Package",
    price: 5499,
    rating: "4.3/5",
    image: HaridwarRishikesh,
    link: "/packages/haridwar-rishikesh",
  },
];

const Packages = () => {
  return (
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      <Navbar />
      <div className="w-full p-10 px-6 lg:p-12 flex flex-col gap-8 lg:gap-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-center leading-none">
          ALL PACKAGES
        </h2>

        <div className="pt-1.5 lg:pt-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <Link to={pkg.link} key={index}>
              <div className="w-full h-[35vh] lg:h-[40vh] rounded-xl overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="pt-4 px-0 flex gap-2 flex-col font-[Poppins]">
                <h2 className="text-xl font-bold leading-none">{pkg.title}</h2>
                <div className="flex gap-6 justify-between">
                  <div className="flex gap-[4px] items-center">
                    <span className="font-bold">{`₹${pkg.price}/person`}</span>
                    <span className="font-medium">starting</span>
                  </div>
                  <div className="flex gap-[4px] items-center justify-center">
                    <span className="leading-none text-amber-400">
                      <i className="ri-star-fill"></i>
                    </span>
                    <span className="font-medium leading-none">
                      {pkg.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
