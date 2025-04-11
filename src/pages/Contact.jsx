import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_CONTACT_CHAT_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const text = `
📩 *New Contact Form Submission*  
👤 *Name:* ${name}  
📧 *Email:* ${email}  
📝 *Subject:* ${subject || "N/A"}  
💬 *Message:* ${message}
`;

    const sendMessageUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      await fetch(sendMessageUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Error sending message", err);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      <Navbar />

      <div className="w-full p-10 px-6 lg:p-14 flex flex-col gap-8 lg:gap-12">
        <h2 className="pt-1 text-2xl lg:text-4xl leading-none font-bold">
          GET IN TOUCH
        </h2>

        <p className="w-full lg:w-[60%] text-lg lg:text-xl leading-tight font-medium font-[Poppins]">
          Got a question or ready to book your next adventure? We're here to
          help you! Fill out the form below or reach us directly through phone
          or email. Our team will get back to you as soon as possible.
        </p>

        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 flex flex-col gap-4 font-[Poppins]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border-2 rounded-md p-4 focus:outline-none"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border-2 rounded-md p-4 focus:outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border-2 rounded-md p-4 focus:outline-none"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="border-2 rounded-md p-4 focus:outline-none"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="p-4 px-6 rounded-md font-semibold text-white bg-stone-800"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 font-[Poppins] flex flex-col gap-6 justify-start">
            <div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-lg">+91 98765 43210</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-lg">rktravels484@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Office Address</h3>
              <p className="text-lg">
                G-17A rajeev nagar, Rohini sector-37, New Delhi- 110086
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
