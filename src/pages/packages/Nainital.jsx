import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/Nainital.webp";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_PACKAGES_CHAT_ID;

const Nainital = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, people } = formData;

    const message = `
📍 *New Nainital Package Lead!*  

👤 *Name:* ${name}  
📞 *Phone:* ${phone}  
👥 *No. of People:* ${people}
`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      alert("Your seat has been booked!");
      setFormData({ name: "", phone: "", people: "" });
    } catch (error) {
      console.error("Error sending to Telegram", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Nainital Tour Package - 4N/5D Lake Getaway | RK Travels Sahab
        </title>
        <meta
          name="description"
          content="Enjoy a peaceful 4 Nights / 5 Days escape to Nainital with sightseeing of Naini Lake, Bhimtal, Sattal & more. Book your hill station getaway now with RK Travels Sahab."
        />
        <meta
          name="keywords"
          content="Nainital tour package, Nainital lake tour, Naini Lake, Bhimtal, Sattal, 4 nights 5 days Nainital trip, RK Travels Sahab"
        />
        <meta
          property="og:title"
          content="Nainital Tour Package - Lakes & Hills | 4N/5D | RK Travels Sahab"
        />
        <meta
          property="og:description"
          content="Explore Nainital's stunning lakes, Mall Road, Naini Devi Temple, Bhimtal, and Sattal with this short and scenic 4 Nights 5 Days tour. Book your trip today with RK Travels Sahab."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rktravelssahab.com/packages/nainital"
        />
        <meta property="og:image" content={Image} />

        {/* Replace with actual image URL */}
        <link
          rel="canonical"
          href="https://rktravelssahab.com/packages/nainital"
        />
      </Helmet>

      <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
        <Navbar />
        <div className="w-full p-10 px-6 lg:p-14 flex flex-col gap-8 lg:gap-12 lg:items-center lg:justify-center lg:text-center">
          <h2 className="text-xl lg:text-4xl text-center leading-none">
            Nainital Tour
          </h2>
          <div className="w-full lg:w-1/2 h-[35vh] lg:h-[60vh] rounded-md overflow-hidden">
            <img
              src={Image}
              alt="Nainital tour package"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
            Escape to the serene hills and sparkling lakes of Nainital with our
            4 Nights / 5 Days tour package. Whether you're boating on the famous
            Naini Lake or exploring scenic spots like Bhimtal and Sattal, this
            quick getaway is packed with peaceful vibes and scenic charm.
          </p>

          <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl leading-none">Itinerary</h2>
            <div className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
              <p>
                <b className="text-stone-800">Day 1:</b>{" "}
                <i className="text-stone-800">Delhi - Nainital</i>
                <br />
                Pickup from Delhi and scenic drive to Nainital. After hotel
                check-in and fresh-up, explore Mall Road, Eco Cave Garden, Naini
                Devi Temple, Naini Lake, Nainital Zoo, and Snow View Point (via
                Ropeway or Union Taxi at your own cost). Dinner and overnight
                stay at hotel.
              </p>
              <br />
              <p>
                <b className="text-stone-800">Day 2:</b>{" "}
                <i className="text-stone-800">Nainital Lake Tour</i>
                <br />
                Post breakfast, head out for a scenic lake tour covering
                Bhimtal, Sattal, Khurpatal, and Naukuchiatal. Evening return to
                hotel for dinner and night stay.
              </p>
              <br />
              <p>
                <b className="text-stone-800">Day 3:</b>{" "}
                <i className="text-stone-800">Nainital - Delhi Drop</i>
                <br />
                After breakfast, check out and drive back to Delhi. Trip ends
                with refreshing memories!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl leading-none">
              Package Inclusions
            </h2>
            <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
              <li>Pickup and Drop from Delhi Airport / Railway Station</li>
              <li>All Sightseeing by Private Cab</li>
              <li>Welcome Drink on Arrival</li>
              <li>04 Nights' Accommodation in Well Appointed Rooms</li>
              <li>Meals as per tour plan</li>
              <li>Private Cab for All Sightseeing</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl leading-none">
              Package Excludes
            </h2>
            <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
              <li>Any Monuments and Entrance Fee</li>
              <li>Any Kind of Activity Charges</li>
              <li>Train, Air, or Bus Tickets not listed in inclusions</li>
              <li>Lunch</li>
              <li>Personal Nature Expenses</li>
              <li>Room Heaters During the Stay</li>
              <li>5% GST Extra on Total Billing</li>
            </ul>
          </div>

          <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
            Starting from <span className="text-green-600">₹6499/-</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[60%] bg-stone-800/10 mt-2 p-6 rounded-md flex flex-col gap-4"
          >
            <h2 className="text-lg mb-2 text-left lg:text-center">
              Get This Package
            </h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-4 rounded-md border font-medium font-[Poppins] border-stone-300"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="p-4 rounded-md border font-medium font-[Poppins] border-stone-300"
            />
            <input
              type="number"
              name="people"
              value={formData.people}
              onChange={handleChange}
              placeholder="No. of People"
              required
              className="p-4 rounded-md border font-medium font-[Poppins] border-stone-300"
            />
            <button
              type="submit"
              className="bg-stone-800 text-white px-6 p-4 text-sm rounded-md"
            >
              Book Your Seat
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Nainital;
