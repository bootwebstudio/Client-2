import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/Goa.webp";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_PACKAGES_CHAT_ID;

const Goa = () => {
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
📍 *New Goa Package Lead!*  

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
        <title>Goa Tour Package - 3N/4D Beach Holiday | RK Travels Sahab</title>
        <meta
          name="description"
          content="Relax on golden beaches, visit historic churches, and enjoy South Goa sightseeing with our 3 Nights / 4 Days Goa Tour Package. Book your tropical escape now with RK Travels Sahab."
        />
        <meta
          name="keywords"
          content="Goa tour package, Goa holiday package, South Goa sightseeing, 3 nights Goa trip, Goa beaches, Bom Jesus Basilica, RK Travels Sahab"
        />
        <meta
          property="og:title"
          content="Goa Tour Package - Beaches, Churches & Culture | 3N/4D | RK Travels Sahab"
        />
        <meta
          property="og:description"
          content="Plan your Goa vacation with our 3 Nights 4 Days package — includes hotel stay, meals, sightseeing of Miramar Beach, Dona Paula, churches, and more. Relax and explore with RK Travels Sahab."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rktravelssahab.com/packages/goa"
        />
        <meta property="og:image" content={Image} />

        {/* Replace with actual image URL */}
        <link rel="canonical" href="https://rktravelssahab.com/packages/goa" />
      </Helmet>

      <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
        <Navbar />
        <div className="w-full p-10 px-6 lg:p-14 flex flex-col gap-8 lg:gap-12 lg:items-center lg:justify-center lg:text-center">
          <h2 className="text-xl lg:text-4xl text-center leading-none">
            Goa Tour
          </h2>
          <div className="w-full lg:w-[60%] h-[40vh] lg:h-[65vh] overflow-hidden rounded-2xl shadow-lg">
            <img
              src={Image}
              alt="Goa tour package"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
            Experience sun, sand, and serenity with our 2 Nights / 3 Days Goa
            Tour Package. Relax by the beach, explore historical churches, and
            indulge in Goa's vibrant culture — all packed in one perfect
            getaway.
          </p>

          <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">
              Itinerary
            </h2>
            <div className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
              <p>
                <b className="text-stone-800">Day 1:</b>{" "}
                <i className="text-stone-800">
                  Arrival at Railway Station or Airport
                </i>
                <br />
                Arrival at the station or airport, pick-up, and drop at the
                hotel. Comfortable stay and overnight at the hotel.
              </p>
              <br />
              <p>
                <b className="text-stone-800">Day 2:</b>{" "}
                <i className="text-stone-800">Sightseeing of South Goa</i>
                <br />
                After breakfast, proceed for South Goa sightseeing and return
                for an overnight stay at the hotel.
              </p>
              <br />
              <p>
                <b className="text-stone-800">South Goa Tour Highlights:</b>
                <br />
                Miramar Beach: A golden beach facing the Arabian Sea in Panaji.
                <br />
                Dona Paula: Scenic view of Zuari River and harbor, water scooter
                rides available.
                <br />
                Bom Jesus Basilica: 16th-century church holding the remains of
                St. Francis Xavier.
                <br />
                Mangueshi Temple: A historic Shiva temple built in the 17th
                century.
              </p>
              <br />
              <p>
                <b className="text-stone-800">Day 3:</b>{" "}
                <i className="text-stone-800">Departure</i>
                <br />
                After breakfast, check out from the hotel and transfer to the
                railway station or airport for your return journey.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">
              Package Inclusions
            </h2>
            <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
              <li>Welcome Drink on Arrival (Non-Alcoholic)</li>
              <li>1 Day Sightseeing (South Goa)</li>
              <li>Accommodation in A/C Standard Rooms</li>
              <li>Mini Bar (Consumption Extra)</li>
              <li>Attached Bath with 24 Hrs Hot & Cold Water</li>
              <li>Tea & Coffee Maker</li>
              <li>Meal Plan MAPI: Daily Breakfast & Dinner</li>
              <li>Free Use of Swimming Pool (With Proper Swimwear)</li>
              <li>Mini Gym and Indoor Games</li>
            </ul>
          </div>

          <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
            Starting from <span className="text-green-600">₹7,499/-</span>
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

export default Goa;
