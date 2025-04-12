import React from "react";
import { useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/Uttarakhand.webp";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_PACKAGES_CHAT_ID;

const Uttarakhand = () => {
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
📍 *New Uttarakhand Package Lead!*  

👤 *Name:* ${name}  
📞 *Phone:* ${phone}  
👥 *No. of People:* ${people}
`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          Uttarakhand Tour
        </h2>
        <div className="w-full lg:w-1/2 h-[35vh] lg:h-[60vh] rounded-md overflow-hidden">
          <img
            src={Image}
            alt="Uttarakhand tour package"
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
        <p className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
          Discover spiritual serenity and hill station charm with our 5-Day
          Uttarakhand Tour Package, covering Rishikesh, Dehradun, Mussoorie and
          Haridwar. A perfect blend of nature, peace, and adventure!
        </p>

        <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl leading-none">Itinerary</h2>
          <div className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
            <p>
              <b className="text-stone-800">Day 1:</b>{" "}
              <i className="text-stone-800">Delhi - Rishikesh</i>
              <br />
              Pickup from Delhi and drive to Rishikesh. After hotel check-in and
              freshening up, explore Ram Jhula, Laxman Jhula, Munni Ki Reti, and
              witness the mesmerizing Evening Ganga Aarti. Dinner and overnight
              stay in Rishikesh.
            </p>
            <br />
            <p>
              <b className="text-stone-800">Day 2:</b>{" "}
              <i className="text-stone-800">Rishikesh - Dehradun - Mussoorie</i>
              <br />
              After breakfast, drive towards Mussoorie via Dehradun. En route
              visit Sahastradhara, Robber's Cave, Dehradun Zoo, Buddha Temple,
              and local markets. Reach Mussoorie by evening and check in. Dinner
              and night stay in Mussoorie.
            </p>
            <br />
            <p>
              <b className="text-stone-800">Day 3:</b>{" "}
              <i className="text-stone-800">Mussoorie Sightseeing</i>
              <br />
              Full-day sightseeing in Mussoorie. Visit Mall Road, Kempty Falls,
              Library Chowk, and enjoy Gun Hill Ropeway (at your own cost).
              Dinner and overnight stay in Mussoorie.
            </p>
            <br />
            <p>
              <b className="text-stone-800">Day 4:</b>{" "}
              <i className="text-stone-800">Mussoorie - Haridwar</i>
              <br />
              Post breakfast, check out and proceed to Haridwar. After check-in,
              explore Har Ki Pauri, Mansa Devi Temple (Ropeway on own cost), and
              attend the sacred evening Ganga Aarti. Dinner and overnight stay
              in Haridwar.
            </p>
            <br />
            <p>
              <b className="text-stone-800">Day 5:</b>{" "}
              <i className="text-stone-800">Haridwar - Delhi</i>
              <br />
              After breakfast, check out and return to Delhi for your departure
              by flight or train. Trip ends with beautiful memories!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl leading-none">
            Package Inclusions
          </h2>
          <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
            <li>Pick up and drop from Delhi</li>
            <li>All sightseeing as per itinerary by private cab</li>
            <li>Welcome drink on arrival</li>
            <li>06 Nights' Accommodation in well-appointed rooms</li>
            <li>06 Breakfasts + 06 Dinners</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h2 className="text-2xl lg:text-4xl leading-none">
            Package Excludes
          </h2>
          <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
            <li>Any monuments and entrance fee</li>
            <li>Any kind of activity charges</li>
            <li>Train, Air, or Bus tickets not listed in inclusions</li>
            <li>Lunch</li>
            <li>Personal nature expenses</li>
            <li>Room heater during the stay</li>
            <li>5% GST extra on total billing</li>
          </ul>
        </div>

        <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
          Starting from <span className="text-green-600">₹15499/-</span>
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

export default Uttarakhand;
