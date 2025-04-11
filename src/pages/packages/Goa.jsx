import React from "react";
import { useState } from "react";

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
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      <Navbar />
      <div className="w-full p-10 px-6 lg:p-14 flex flex-col gap-8 lg:gap-12 lg:items-center lg:justify-center lg:text-center">
        <h2 className="text-xl lg:text-4xl text-center leading-none">
          Goa Tour
        </h2>
        <div className="w-full lg:w-1/2 h-[35vh] lg:h-[60vh] rounded-md overflow-hidden">
          <img
            src={Image}
            alt="Goa tour package"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-lg lg:text-xl font-medium font-[Poppins] lg:w-[70%]">
          Experience sun, sand, and serenity with our 2 Nights / 3 Days Goa Tour
          Package. Relax by the beach, explore historical churches, and indulge
          in Goa's vibrant culture — all packed in one perfect getaway.
        </p>

        <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">Itinerary</h3>
          <div className="text-base lg:text-lg font-[Poppins] leading-relaxed">
            <p>
              <b>Day 1:</b> <i>Arrival at Railway Station or Airport</i>
              <br />
              Arrival at the station or airport, pick-up, and drop at the hotel.
              Comfortable stay and overnight at the hotel.
            </p>
            <br />
            <p>
              <b>Day 2:</b> <i>Sightseeing of South Goa</i>
              <br />
              After breakfast, proceed for South Goa sightseeing and return for
              an overnight stay at the hotel.
            </p>
            <br />
            <p>
              <b>South Goa Tour Highlights:</b>
              <br />
              Miramar Beach: A golden beach facing the Arabian Sea in Panaji.
              <br />
              Dona Paula: Scenic view of Zuari River and harbor, water scooter
              rides available.
              <br />
              Bom Jesus Basilica: 16th-century church holding the remains of St.
              Francis Xavier.
              <br />
              Mangueshi Temple: A historic Shiva temple built in the 17th
              century.
            </p>
            <br />
            <p>
              <b>Day 3:</b> <i>Departure</i>
              <br />
              After breakfast, check out from the hotel and transfer to the
              railway station or airport for your return journey.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Inclusions
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
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
          className="w-full lg:w-[60%] bg-stone-800/10 p-6 rounded-md flex flex-col gap-4"
        >
          <h3 className="text-lg mb-2 text-left lg:text-center">
            Get This Package
          </h3>
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
  );
};

export default Goa;
