import React from "react";
import { useRef } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// Components
import Navbar from "../components/Navbar";

// Icons
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const swiperRef = useRef(null);

  const packages = [
    {
      title: "Manali Tour Package",
      price: "4499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    },
    {
      title: "Goa Tour Package",
      price: "7499",
      rating: "4.7/5",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    {
      title: "Nainital Tour Package",
      price: "6499",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    },
    {
      title: "Shimla Tour Package",
      price: "10499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    {
      title: "Kashmir Tour Package",
      price: "8999",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    },
    {
      title: "Uttarakhand Tour Package",
      price: "15499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    {
      title: "Haridwar Tour Package",
      price: "5499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    },
  ];

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

      {/* Packages Section */}
      <div className="w-full max-h-screen p-6 lg:p-12 flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl lg:text-4xl font-bold flex gap-2 lg:gap-4 flex-col lg:flex-row">
            <span>POPULAR</span>
            <span>PACKAGES</span>
          </h2>
          {/* Slider Controls */}
          <div className="flex gap-2 lg:gap-4">
            {/* Previous Button */}
            <button
              className="p-2 lg:p-4 text-2xl rounded-full text-white bg-stone-800"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft />
            </button>
            {/* Next Button */}
            <button
              className="p-2 lg:p-4 text-2xl rounded-full text-white bg-stone-800"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={48}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[30vh] lg:h-[40vh] rounded-xl overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 px-0 flex gap-2 flex-col font-[Onest]">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
