import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/Kashmir.webp";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_PACKAGES_CHAT_ID;

const Kashmir = () => {
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
📍 *New Kashmir Package Lead!*  

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
    <>
      <Helmet>
        <title>
          Kashmir Tour Package - 3N/4D Srinagar, Gulmarg & Pahalgam | RK Travels
          Sahab
        </title>
        <meta
          name="description"
          content="Book our 3 Nights / 4 Days Kashmir Tour Package starting at ₹8999. Includes Srinagar, Gulmarg, Pahalgam, Dal Lake Shikara ride, Mughal Gardens, and more. A perfect Kashmir getaway!"
        />
        <meta
          name="keywords"
          content="Kashmir tour package, 3 nights 4 days Kashmir itinerary, Srinagar Gulmarg Pahalgam package, Shikara ride Dal Lake, Mughal Gardens, RK Travels Sahab"
        />
        <meta
          property="og:title"
          content="Kashmir Tour Package - Srinagar, Pahalgam, Gulmarg | 3N/4D | RK Travels Sahab"
        />
        <meta
          property="og:description"
          content="Explore the magic of Kashmir with our budget-friendly 4-day tour package. Stay in houseboats, enjoy Shikara rides, visit Gulmarg, and discover the valley's charm."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rktravelssahab.com/packages/kashmir"
        />
        <meta property="og:image" content={Image} />

        {/* Replace with actual image URL */}
        <link
          rel="canonical"
          href="https://rktravelssahab.com/packages/kashmir"
        />
      </Helmet>

      <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
        <Navbar />
        <div className="w-full p-10 px-6 lg:p-14 flex flex-col gap-8 lg:gap-12 lg:items-center lg:justify-center lg:text-center">
          <h2 className="text-xl lg:text-4xl text-center leading-none">
            Kashmir Tour
          </h2>
          <div className="w-full lg:w-1/2 h-[35vh] lg:h-[60vh] rounded-md overflow-hidden">
            <img
              src={Image}
              alt="Kashmir tour package"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-lg lg:text-xl font-medium font-[Poppins] lg:w-[70%]">
            Explore the mesmerizing beauty of Kashmir with this exciting 4-day
            package that covers Srinagar, Pahalgam, and Gulmarg, offering a mix
            of sightseeing, adventure, and relaxation!
          </p>

          <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">
              Itinerary
            </h2>
            <div className="text-lg font-[Poppins] text-stone-600 max-w-2xl">
              <p>
                <b className="text-stone-800">Day 1:</b>{" "}
                <i className="text-stone-800">Srinagar</i>
                <br />
                Arrival at Srinagar airport. Meet our representative and
                transfer to Houseboat. Visit Mughal Gardens, Chashmi-e Shahi,
                Nishat, and Shalimar Bagh. Enjoy a 1-hour Shikara ride at Dal
                Lake. Dinner and overnight stay in houseboat.
              </p>
              <br />
              <p>
                <b className="text-stone-800">Day 2:</b>{" "}
                <i className="text-stone-800">Srinagar - Pahalgam - Srinagar</i>
                <br />
                After breakfast, enjoy a full-day excursion to Pahalgam. Take a
                pony ride to explore the beautiful spots (at your own cost).
                Return to Srinagar by evening for dinner and overnight stay at
                the hotel.
              </p>
              <br />
              <p>
                <b className="text-stone-800">Day 3:</b>{" "}
                <i className="text-stone-800">Srinagar - Gulmarg - Srinagar</i>
                <br />
                After breakfast, enjoy a full-day sightseeing tour of Gulmarg.
                Visit the highest golf course and enjoy skiing (in winters). You
                can also take a Gandola ride (cable car) to Khilamarg (at your
                own cost). Return to the hotel by evening for dinner and
                overnight stay.
              </p>
              <br />
              <p>
                <b className="text-stone-800">Day 4:</b>{" "}
                <i className="text-stone-800">Srinagar</i>
                <br />
                After breakfast, depart for Srinagar Airport to catch your
                flight back.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">
              Package Inclusions
            </h2>
            <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
              <li>Pick up and drop from Srinagar Airport</li>
              <li>All sightseeing as per itinerary by private cab</li>
              <li>Welcome drink on arrival</li>
              <li>03 Nights Accommodation in well-appointed rooms</li>
              <li>03 Breakfasts + 03 Dinners</li>
              <li>60 Minutes Shikara Ride at Dal Lake</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">
              Package Exclusions
            </h2>
            <ul className="list-disc pl-6 lg:pl-8 text-lg text-left font-[Poppins] text-stone-600 max-w-2xl">
              <li>Any monuments and entrance fee</li>
              <li>Any kind of activity charges</li>
              <li>Train, Air, or Bus tickets not listed in inclusions</li>
              <li>Lunch</li>
              <li>Personal nature expenses</li>
              <li>Room heater during the stay</li>
              <li>
                Pahalgam sightseeing (Aru Valley, Betaab Valley, Chandanwari by
                Union Car - extra cost)
              </li>
              <li>5% GST extra on total billing</li>
            </ul>
          </div>

          <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
            Starting from <span className="text-green-600">₹8999/-</span>
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

export default Kashmir;
