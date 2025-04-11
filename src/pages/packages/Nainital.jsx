import React from "react";
import { useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/Nainital.webp";

const BOT_TOKEN = "7429642388:AAFEpy0Jubs7UpbgUgyMWV7TkeJK7SdRMhs";
const CHAT_ID = "-1002624033406";

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
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      <Navbar />
      <div className="w-full p-10 px-6 lg:p-14 flex flex-col gap-8 lg:gap-12 lg:items-center lg:justify-center lg:text-center">
        <h2 className="text-xl lg:text-4xl text-center leading-none">
          Nainital Tour 
        </h2>
        <div className="w-full h-[35vh] lg:h-[40vh] rounded-md overflow-hidden">
          <img
            src={Image}
            alt="Nainital tour package"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-lg lg:text-xl font-medium font-[Poppins] lg:w-[70%]">
          Escape to the serene hills and sparkling lakes of Nainital with our
          2 Nights / 3 Days tour package. Whether you're boating on the famous
          Naini Lake or exploring scenic spots like Bhimtal and Sattal, this
          quick getaway is packed with peaceful vibes and scenic charm.
        </p>

        <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">Itinerary</h3>
          <div className="text-base lg:text-lg font-[Poppins] leading-relaxed">
            <p>
              <b>Day 1:</b> <i>Delhi - Nainital</i>
              <br />
              Pickup from Delhi and scenic drive to Nainital. After hotel check-in
              and fresh-up, explore Mall Road, Eco Cave Garden, Naini Devi Temple,
              Naini Lake, Nainital Zoo, and Snow View Point (via Ropeway or Union Taxi at your own cost). Dinner and overnight stay at hotel.
            </p>
            <br />
            <p>
              <b>Day 2:</b> <i>Nainital Lake Tour</i>
              <br />
              Post breakfast, head out for a scenic lake tour covering Bhimtal,
              Sattal, Khurpatal, and Naukuchiatal. Evening return to hotel for
              dinner and night stay.
            </p>
            <br />
            <p>
              <b>Day 3:</b> <i>Nainital - Delhi Drop</i>
              <br />
              After breakfast, check out and drive back to Delhi. Trip ends with
              refreshing memories!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Inclusions
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
            <li>Pickup and Drop from Delhi Airport / Railway Station</li>
            <li>All Sightseeing by Private Cab</li>
            <li>Welcome Drink on Arrival</li>
            <li>02 Nights' Accommodation in Well Appointed Rooms</li>
            <li>Meals as per tour plan</li>
            <li>Private Cab for All Sightseeing</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Excludes
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
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
          Starting from <span className="text-green-600">₹6,499/-</span>
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

export default Nainital;
