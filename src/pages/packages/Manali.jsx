import React from "react";
import { useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/Manali.webp";

const BOT_TOKEN = "7429642388:AAFEpy0Jubs7UpbgUgyMWV7TkeJK7SdRMhs";
const CHAT_ID = "-1002624033406";

const Manali = () => {
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
📍 *New Manali Package Lead!*  

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
          Manali Tour
        </h2>
        <div className="w-full h-[35vh] lg:h-[40vh] rounded-md overflow-hidden">
          <img
            src={Image}
            alt="Manali tour package"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-lg lg:text-xl font-medium font-[Poppins] lg:w-[70%]">
          Breathe in crisp mountain air and escape to the magical charm of
          Manali with our perfectly planned 4 Nights / 5 Days tour package.
          Whether you're chasing snowflakes in Solang Valley or soaking in the
          serenity of Kasol, we'll take care of everything — all you need to do
          is pack your bags.
        </p>

        <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">Itinerary</h3>
          <div className="text-base lg:text-lg font-[Poppins] leading-relaxed">
            <p>
              <b>Day 1:</b> <i>Delhi - Manali</i>
              <br />
              Board your Volvo from Delhi at 5:00 PM for an overnight journey
              through the hills toward Manali.
            </p>
            <br />
            <p>
              <b>Day 2:</b> <i>Manali Sightseeing</i>
              <br />
              Arrive in Manali and check into the hotel. After freshening up,
              explore Mall Road, Hidimba Devi Temple, Van Vihar, Vashisht
              Temple, and Club House. Return for dinner and overnight stay.
            </p>
            <br />
            <p>
              <b>Day 3:</b> <i>Solang Valley Adventure</i>
              <br />
              Enjoy a full day at Solang Valley — try snow activities
              (seasonal). Return by evening, dinner, and overnight stay at the
              hotel.
            </p>
            <br />
            <p>
              <b>Day 4:</b> <i>Kasol & Manikaran</i>
              <br />
              Visit Kullu, Manikaran Sahib, Vaishno Temple, Kasol Valley, and
              River Rafting points. By 6:00 PM, board your return Volvo to
              Delhi.
            </p>
            <br />
            <p>
              <b>Day 5:</b> <i>Arrival in Delhi</i>
              <br />
              Morning arrival at Delhi. Trip ends with great memories!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Inclusions
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
            <li>Delhi - Manali - Delhi Volvo Tickets</li>
            <li>Pick up & drop from Manali Bus Stand</li>
            <li>Welcome Drink on arrival</li>
            <li>2 Breakfasts & 2 Dinners</li>
            <li>All Transfers and Sightseeing by Private Car</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Excludes
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
            <li>Monument Entry Fees</li>
            <li>Adventure Activity Charges</li>
            <li>Train, Air, or Bus tickets not listed in inclusions</li>
            <li>Lunches, Room Heaters</li>
            <li>Expenses of Personal Nature</li>
            <li>Snow Vehicle Charges if roads are blocked due to snow</li>
            <li>5% GST</li>
          </ul>
        </div>

        <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
          Starting from <span className="text-green-600">₹4,499/-</span>
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

export default Manali;
