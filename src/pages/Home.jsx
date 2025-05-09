import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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

// Packages
import Manali from "../assets/images/Manali.webp";
import Shimla from "../assets/images/Shimla.webp";
import Goa from "../assets/images/Goa.webp";
import Nainital from "../assets/images/Nainital.webp";
import ShimlaManali from "../assets/images/ShimlaManali.webp";
import Kashmir from "../assets/images/Kashmir.webp";
import Uttarakhand from "../assets/images/Uttarakhand.webp";
import HaridwarRishikesh from "../assets/images/HaridwarRishikesh.webp";

// Testimonials
import Testimonial1 from "../assets/media/Testimonial1.mp4";
import Testimonial2 from "../assets/media/Testimonial2.mp4";
import Testimonial3 from "../assets/media/Testimonial3.mp4";
import Testimonial4 from "../assets/media/Testimonial4.mp4";
import Testimonial5 from "../assets/media/Testimonial5.mp4";
import Testimonial6 from "../assets/media/Testimonial6.mp4";
import Testimonial7 from "../assets/media/Testimonial7.mp4";

const testimonials = [
  Testimonial1,
  Testimonial2,
  Testimonial3,
  Testimonial4,
  Testimonial5,
  Testimonial6,
  Testimonial7,
];

// Packages Data
const packages = [
  {
    title: "Manali Tour Package",
    price: 4499,
    rating: "4.5/5",
    duration: "4 Nights & 5 Days",
    image: Manali,
    link: "/packages/manali",
  },
  {
    title: "Shimla Tour Package",
    price: 5499,
    rating: "4.8/5",
    duration: "4 Nights & 5 Days",
    image: Shimla,
    link: "/packages/shimla",
  },
  {
    title: "Goa Tour Package",
    price: 7499,
    rating: "4.2/5",
    duration: "3 Nights & 4 Days",
    image: Goa,
    link: "/packages/goa",
  },
  {
    title: "Nainital Tour Package",
    price: 6499,
    rating: "4.0/5",
    duration: "4 Nights & 5 Days",
    image: Nainital,
    link: "/packages/nainital",
  },
  {
    title: "Shimla - Manali Tour Package",
    price: 10499,
    rating: "4.1/5",
    duration: "7 Nights & 8 Days",
    image: ShimlaManali,
    link: "/packages/shimla-manali",
  },
  {
    title: "Kashmir Tour Package",
    price: 8999,
    rating: "4.8/5",
    duration: "3 Nights & 4 Days",
    image: Kashmir,
    link: "/packages/kashmir",
  },
  {
    title: "Uttarakhand Tour Package",
    price: 15499,
    rating: "4.0/5",
    duration: "6 Nights & 7 Days",
    image: Uttarakhand,
    link: "/packages/uttarakhand",
  },
  {
    title: "Haridwar - Rishikesh Tour Package",
    price: 5499,
    rating: "4.3/5",
    duration: "4 Nights & 5 Days",
    image: HaridwarRishikesh,
    link: "/packages/haridwar-rishikesh",
  },
];

const Home = () => {
  const packagesSwiperRef = useRef(null);

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

  return (
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      {/* Hero Section */}
      <div
        className="w-full h-screen flex flex-col relative text-white bg-cover bg-center"
        style={{ backgroundImage: "url('./Hero.webp')" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <Navbar />

        {/* Hero Content */}
        <div className="w-full h-full flex gap-6 flex-col items-center justify-center relative z-10">
          <h4 className="text-lg lg:text-2xl leading-none lg:leading-tight">
            PLAN YOUR NEXT
          </h4>
          <h2 className="text-[12.5vw] lg:text-[10vw] leading-none lg:leading-tight">
            ADVENTURE
          </h2>
          <p className="w-full lg:w-[60%] p-6 lg:px-0 text-lg lg:text-xl text-center leading-tight font-medium font-[Poppins]">
            Who says dream holidays have to be expensive? Enjoy scenic
            destinations, comfy stays, and unforgettable memories — all within
            your budget. Start your adventure today with RK Travels!
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
          loop={true}
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
              <Link to={pkg.link}>
                <div className="w-full h-[35vh] lg:h-[40vh] rounded-xl overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="pt-4 px-0 flex gap-2 flex-col font-[Poppins]">
                  <h2 className="text-xl font-bold leading-none">
                    {pkg.title}
                  </h2>
                  <h2 className="p-0.5 px-0 font-semibold leading-none">
                    {pkg.duration}
                  </h2>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Section */}
      <div className="w-full p-10 px-6 pb-0 lg:p-14 lg:pb-0 flex flex-col items-center gap-8 lg:gap-12">
        <h2 className="text-2xl lg:text-4xl leading-none font-bold">
          ABOUT US
        </h2>
        <p className="text-lg font-[Poppins] text-stone-600 text-center max-w-2xl">
          RK Travels makes your dream vacations easy and affordable. From
          mountains to beaches, we plan every trip with care so you can travel
          stress-free and enjoy every moment.
          <br />
          <br />
          With trusted service and exciting packages, we help you explore
          India's best spots without breaking the bank. Travel smart. Travel
          happy. Travel with RK Travels.
        </p>
        <div className="w-full xl:w-[80%] p-12 px-0 rounded-2xl flex flex-col md:flex-row gap-8 items-center justify-center bg-stone-800/15">
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
          loop={true}
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
              <div className="w-full h-[60vh] lg:h-[50vh] xl:h-[60vh] rounded-2xl overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover object-center cursor-pointer"
                  src={src}
                  loop
                  muted
                  preload="none"
                  playsInline
                  autoPlay
                  onClick={() => handleVideoClick(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA Section */}
      <div className="w-full p-10 px-6 lg:p-14 flex flex-col items-center">
        <div className="w-full max-w-5xl p-8 md:p-14 rounded-2xl bg-stone-800/15 flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-semibold text-stone-800">
            Find Your Dream Destination
          </h2>
          <p className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
            Whether it's snowy mountains, sunny beaches, or serene valleys —
            we've got packages crafted just for you. Let's help you create
            unforgettable memories.
          </p>
          <Link to="/packages" className="w-full lg:w-fit">
            <button className="p-4 px-8 lg:px-12 bg-stone-800 text-white text-lg lg:text-lg font-medium font-[Poppins] rounded-full">
              Explore Packages
            </button>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
