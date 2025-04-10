import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Icons
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

// Testimonials
import Testimonial1 from "../assets/Testimonial1.mp4";
import Testimonial2 from "../assets/Testimonial2.mp4";
import Testimonial3 from "../assets/Testimonial3.mp4";
import Testimonial4 from "../assets/Testimonial4.mp4";
import Testimonial5 from "../assets/Testimonial5.mp4";
import Testimonial6 from "../assets/Testimonial6.mp4";
import Testimonial7 from "../assets/Testimonial7.mp4";

const Home = () => {
  const packagesSwiperRef = useRef(null);

  const packages = [
    {
      title: "Manali Tour Package",
      price: "4499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    },
    {
      title: "Shimla Tour Package",
      price: "5499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1733292908042-7da9695834b3",
    },
    {
      title: "Goa Tour Package",
      price: "7499",
      rating: "4.7/5",
      image: "https://images.unsplash.com/photo-1725006136539-46bef885df06",
    },
    {
      title: "Nainital Tour Package",
      price: "6499",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab",
    },
    {
      title: "Shimla & Manali Tour Package",
      price: "10499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1518196744992-78329b7b6614",
    },
    {
      title: "Kashmir Tour Package",
      price: "8999",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1664212251086-fad4d6880011",
    },
    {
      title: "Uttarakhand Tour Package",
      price: "15499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1610730349385-70d2a67a61fa",
    },
    {
      title: "Haridwar Tour Package",
      price: "5499",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1622611908679-cbeda47d9404",
    },
  ];

  const testimonialsSwiperRef = useRef(null);
  const videoRefs = useRef([]);
  const currentPlayingIndex = useRef(null);

  const handleVideoClick = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.muted = !video.muted;
          currentPlayingIndex.current = video.muted ? null : i;
        } else {
          video.muted = true;
        }
      }
    });
  };

  useEffect(() => {
    if (!testimonialsSwiperRef.current) return;

    testimonialsSwiperRef.current.on("slideChange", () => {
      videoRefs.current.forEach((video) => {
        if (video) video.muted = true;
      });
      currentPlayingIndex.current = null;
    });
  }, []);

  const testimonials = [
    Testimonial1,
    Testimonial2,
    Testimonial3,
    Testimonial4,
    Testimonial5,
    Testimonial6,
    Testimonial7,
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
          <p className="w-full lg:w-[60%] p-6 lg:px-0 text-lg lg:text-xl text-center leading-tight font-medium font-[Poppins]">
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
      <div className="w-full p-10 px-6 pb-0 lg:p-14 lg:pb-0 flex flex-col gap-10 lg:gap-12">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl lg:text-4xl leading-none font-bold flex gap-2 lg:gap-4 flex-col lg:flex-row">
            <span>POPULAR</span>
            <span>PACKAGES</span>
          </h2>
          {/* Slider Controls */}
          <div className="flex gap-2 lg:gap-4">
            {/* Previous Button */}
            <button
              className="p-2.5 lg:p-4 text-2xl rounded-full text-white bg-stone-800"
              onClick={() => packagesSwiperRef.current?.slidePrev()}
            >
              <ChevronLeft />
            </button>
            {/* Next Button */}
            <button
              className="p-2.5 lg:p-4 text-2xl rounded-full text-white bg-stone-800"
              onClick={() => packagesSwiperRef.current?.slideNext()}
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
            packagesSwiperRef.current = swiper;
          }}
          className="w-full"
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Section */}
      <div className="w-full p-10 px-6 pb-0 lg:p-14 lg:pb-0 flex flex-col items-center gap-8 lg:gap-12">
        <h2 className="text-2xl lg:text-4xl leading-none font-bold">
          ABOUT US
        </h2>
        <p className="w-full lg:w-[60%] text-lg lg:text-xl text-center leading-tight font-medium font-[Poppins]">
          RK Travels makes your dream vacations easy and affordable. From
          mountains to beaches, we plan every trip with care so you can travel
          stress-free and enjoy every moment.
          <br />
          <br />
          With trusted service and exciting packages, we help you explore
          India's best spots without breaking the bank. Travel smart. Travel
          happy. Travel with RK Travels.
        </p>
        <div className="w-full xl:w-[80%] p-12 px-0 rounded-xl flex flex-col md:flex-row gap-8 items-center justify-center bg-stone-800/15">
          <div className="flex gap-4 md:gap-6 flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none font-bold text-blue-500">
              100+
            </h2>
            <h4 className="text-lg xl:text-2xl font-bold xl:leading-none">
              happy customers
            </h4>
          </div>
          <div className="py-8 md:px-8 border-y-2 md:border-y-0 md:border-x-2 border-stone-400 flex gap-4 md:gap-6 flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none font-bold text-blue-500">
              03+
            </h2>
            <h4 className="text-lg xl:text-2xl font-bold xl:leading-none">
              years experience
            </h4>
          </div>
          <div className="flex gap-4 md:gap-6 flex-col items-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none font-bold text-blue-500">
              100%
            </h2>
            <h4 className="text-lg xl:text-2xl font-bold xl:leading-none">
              clients satisfaction
            </h4>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full p-12 px-6 pb-0 lg:p-16 lg:pb-0 flex flex-col gap-10 lg:gap-12">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl lg:text-4xl leading-none font-bold flex gap-2 lg:gap-4 flex-col lg:flex-row">
            <span>CLIENT</span>
            <span>REVIEWS</span>
          </h2>
          {/* Slider Controls */}
          <div className="flex gap-2 lg:gap-4">
            {/* Previous Button */}
            <button
              className="p-2.5 lg:p-4 text-2xl rounded-full text-white bg-stone-800"
              onClick={() => testimonialsSwiperRef.current?.slidePrev()}
            >
              <ChevronLeft />
            </button>
            {/* Next Button */}
            <button
              className="p-2.5 lg:p-4 text-2xl rounded-full text-white bg-stone-800"
              onClick={() => testimonialsSwiperRef.current?.slideNext()}
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
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (testimonialsSwiperRef.current = swiper)}
          className="w-full"
        >
          {testimonials.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[60vh] lg:h-[50vh] xl:h-[60vh] rounded-xl overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover object-center cursor-pointer"
                  src={src}
                  loop
                  muted
                  preload="none"
                  playsInline
                  autoPlay
                  loading="lazy"
                  onClick={() => handleVideoClick(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Section */}
      <div className="w-full p-12 px-6 lg:p-14 flex flex-col items-center gap-8 lg:gap-12">
        <div className="w-full xl:w-[80%] p-8 px-6 md:p-12 rounded-xl flex flex-col gap-8 items-center justify-center bg-stone-800/15">
          <h2 className="lg:px-12 text-lg lg:text-3xl text-center lg:leading-relaxed">
            Looking for the perfect trip? Start by exploring all our packages
            tailored just for you.
          </h2>
          <button className="w-full lg:w-fit p-6 px-0 lg:px-16 text-sm lg:text-xl rounded-full text-white bg-stone-800">
            Discover your perfect trip
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
