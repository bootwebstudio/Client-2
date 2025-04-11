import React from "react";
import { useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/HaridwarRishikesh.webp";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_PACKAGES_CHAT_ID;

const HaridwarRishikesh = () => {
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
📍 *New Haridwar - Rishikesh Package Lead!*  

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
          Haridwar - Rishikesh Tour
        </h2>
        <div className="w-full lg:w-1/2 h-[35vh] lg:h-[60vh] rounded-md overflow-hidden">
          <img
            src={Image}
            alt="Haridwar Rishikesh tour package"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-lg lg:text-xl font-medium font-[Poppins] lg:w-[70%]">
          A soulful escape into the spiritual heart of India. From the divine
          Ganga Aarti at Har-ki-Pauri to yoga and meditation in the peaceful
          ashrams of Rishikesh — this 3 Nights / 4 Days tour is the perfect
          blend of serenity and culture.
        </p>

        <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">Itinerary</h3>
          <div className="text-base lg:text-lg font-[Poppins] leading-relaxed">
            <p>
              <b>Day 1:</b> <i>Delhi - Haridwar (230kms/6hr)</i>
              <br />
              Arrive in Delhi and drive to Haridwar. Check in to the hotel and
              relax. In the evening, visit Har-ki-Pauri for Ganga Aarti. Option
              to take a holy dip. Explore the market area. Overnight at hotel.
            </p>
            <br />
            <p>
              <b>Day 2:</b> <i>Haridwar - Rishikesh (24kms/1hr)</i>
              <br />
              Visit local temples and ashrams in Haridwar, including Daksh
              Temple, Mansa Devi (ropeway), Chandi Devi, and more. Proceed to
              Rishikesh and visit ashrams, Triveni Ghat for Aarti, and enjoy
              your overnight stay in Rishikesh.
            </p>
            <br />
            <p>
              <b>Day 3:</b> <i>Rishikesh - Delhi</i>
              <br />
              After breakfast, visit remaining attractions in Rishikesh. Later
              in the afternoon, drive back to Delhi for an overnight stay.
            </p>
            <br />
            <p>
              <b>Day 4:</b> <i>Departure from Delhi</i>
              <br />
              After breakfast, enjoy sightseeing in Old and New Delhi — Red
              Fort, Raj Ghat, Jama Masjid, Qutub Minar, India Gate, and
              Akshardham Temple. Evening transfer to airport for departure.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Inclusions
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
            <li>Destination Bus Tickets</li>
            <li>Pick up & drop from Destination Bus Stand</li>
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
            <li>Monument & Entrance Fees</li>
            <li>Activity Charges</li>
            <li>Unmentioned Train, Air, or Bus Tickets</li>
            <li>Lunch & Personal Expenses</li>
            <li>Room Heater Charges</li>
            <li>Snow Vehicle Charges (if roads blocked)</li>
            <li>5% GST Extra</li>
          </ul>
        </div>

        <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
          Starting from <span className="text-green-600">₹5499/-</span>
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

export default HaridwarRishikesh;
