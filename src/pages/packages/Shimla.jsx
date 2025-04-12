import React from "react";
import { useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/Shimla.webp";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_PACKAGES_CHAT_ID;

const Shimla = () => {
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
📍 *New Shimla Package Lead!*  

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
          Shimla Tour
        </h2>
        <div className="w-full lg:w-1/2 h-[35vh] lg:h-[60vh] rounded-md overflow-hidden">
          <img
            src={Image}
            alt="Shimla tour package"
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
        <p className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
          Escape to the hills of Shimla, the queen of Himachal, and enjoy serene
          landscapes, pine forests, and thrilling adventures with this 2 Nights
          / 3 Days tour package. Perfectly curated for a stress-free holiday.
        </p>

        <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl leading-none">Itinerary</h2>
          <div className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
            <p>
              <b className="text-stone-800">Day 1:</b>{" "}
              <i className="text-stone-800">Delhi to Shimla</i>
              <br />
              Pick-up from Delhi Airport/ Railway Station by our representative.
              Drive to Shimla via Kalka, Parwanoo, Barog, and Solan. Check in at
              the hotel and relax. Overnight stay at Shimla.
            </p>
            <br />
            <p>
              <b className="text-stone-800">Day 2:</b>{" "}
              <i className="text-stone-800">Shimla Local Sightseeing</i>
              <br />
              After breakfast, visit Indian Institute of Advanced Studies,
              Lakkar Bazaar, Christ Church (2nd oldest in North India), and
              Jakhu Temple at the top of Jakhu Hill. Enjoy the evening at Mall
              Road for shopping and entertainment. Overnight stay at Shimla
              hotel.
            </p>
            <br />
            <p>
              <b className="text-stone-800">Day 3:</b>{" "}
              <i className="text-stone-800">Shimla to Delhi</i>
              <br />
              After breakfast, check out and proceed back to Delhi with sweet
              memories.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl leading-none">
            Package Inclusions
          </h2>
          <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
            <li>Accommodation on twin sharing basis</li>
            <li>Breakfast and Dinner at Hotel</li>
            <li>A.C. car for the entire trip as per itinerary</li>
            <li>Toll taxes, parking, driver charges</li>
            <li>All applicable hotel taxes</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl leading-none">
            Package Excludes
          </h2>
          <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
            <li>Air/train fare</li>
            <li>Expenses for optional activities</li>
            <li>Items of personal nature like portage, tips, laundry</li>
            <li>
              Any unforeseen expenses due to natural calamities, delay, or
              strike
            </li>
            <li>Additional meals other than mentioned</li>
            <li>Anything not mentioned in Inclusions</li>
            <li>5% GST</li>
          </ul>
        </div>

        <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
          Starting from <span className="text-green-600">₹5499/-</span>
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
  );
};

export default Shimla;
