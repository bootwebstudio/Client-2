import React from "react";
import { useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Assets
import Image from "../../assets/images/ShimlaManali.webp";

const BOT_TOKEN = "7429642388:AAFEpy0Jubs7UpbgUgyMWV7TkeJK7SdRMhs";
const CHAT_ID = "-1002624033406";

const ShimlaManali = () => {
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
📍 *New Shimla - Manali Package Lead!*  

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
          Shimla - Manali Tour
        </h2>
        <div className="w-full h-[35vh] lg:h-[40vh] rounded-md overflow-hidden">
          <img
            src={Image}
            alt="Shimla - Manali tour"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <p className="text-lg lg:text-xl font-medium font-[Poppins] lg:w-[70%]">
          Discover the scenic beauty and serene landscapes with our Shimla -
          Manali Tour Package. Explore the picturesque hill stations of Shimla
          and Manali with adventure activities and local sightseeing!
        </p>

        <div className="flex flex-col gap-6 lg:items-center lg:text-left lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">Itinerary</h3>
          <div className="text-base lg:text-lg font-[Poppins] leading-relaxed">
            <p>
              <b>Day 1:</b> <i>Delhi/Chandigarh - Shimla</i>
              <br />
              Pickup from Delhi and drive to Shimla. Arrive Shimla and check
              into the hotel. Evening at leisure; explore Mall Road. Overnight
              stay at the hotel.
            </p>
            <br />
            <p>
              <b>Day 2:</b> <i>Shimla - Kufri - Shimla</i>
              <br />
              After breakfast, visit Indian Institute of Advanced Studies,
              Sankat Mochan Temple, and Jakhu Temple. In the afternoon, enjoy an
              excursion to Kufri and Chail. Overnight stay in Shimla.
            </p>
            <br />
            <p>
              <b>Day 3:</b> <i>Shimla - Manali</i>
              <br />
              After breakfast, check out from the hotel and drive to Manali.
              Arrive at Manali and check-in to the hotel. Evening free to visit
              local markets. Overnight stay at Manali.
            </p>
            <br />
            <p>
              <b>Day 4:</b> <i>Manali Sightseeing</i>
              <br />
              After breakfast, visit Hadimba Temple, Vashisht Temple, Manu
              Temple, and Naggar Valley. Evening free for leisure at Mall Road.
              Overnight stay in Manali.
            </p>
            <br />
            <p>
              <b>Day 5:</b>{" "}
              <i>Manali - Sohlang Valley (Rohtang Pass Extra on Request)</i>
              <br />
              After breakfast, visit Kothi Gorge and Sohlang Valley. Optional
              Rohtang Pass visit. Evening free for leisure. Overnight stay at
              Manali.
            </p>
            <br />
            <p>
              <b>Day 6:</b> <i>Manali - Chandigarh/Delhi</i>
              <br />
              Check out from the hotel and drive back to Delhi or Chandigarh for
              departure.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Inclusions
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
            <li>Destination bus tickets</li>
            <li>Pick-up and drop from the destination bus stand</li>
            <li>Welcome drink on arrival</li>
            <li>02 Nights' accommodation with breakfast and dinner</li>
            <li>All transfers and sightseeing by private car</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:items-center lg:w-[70%]">
          <h3 className="text-2xl lg:text-4xl leading-none">
            Package Excludes
          </h3>
          <ul className="list-disc pl-6 lg:pl-8 font-[Poppins] text-base lg:text-lg leading-relaxed text-left">
            <li>Any monuments and entrance fees</li>
            <li>Any kind of activity charges</li>
            <li>Train, air, or bus tickets not listed in inclusions</li>
            <li>Lunch</li>
            <li>Personal expenses</li>
            <li>Room heater during the stay</li>
            <li>Snow vehicle charges if roads are blocked due to snowfall</li>
            <li>5% GST extra on total billing</li>
          </ul>
        </div>

        <div className="text-lg lg:text-2xl leading-none lg:w-[70%]">
          Starting from <span className="text-green-600">₹10,499/-</span>
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

export default ShimlaManali;
