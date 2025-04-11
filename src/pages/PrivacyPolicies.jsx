import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicies = () => {
  return (
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      <Navbar />
      <div className="w-full p-10 px-6 lg:p-14 flex flex-col lg:items-center gap-8 lg:gap-12">
        <h2 className="text-2xl lg:text-4xl text-center leading-none font-bold">
          PRIVACY POLICY
        </h2>

        <p className="w-full lg:w-[60%] text-lg lg:text-xl text-center leading-tight font-medium font-[Poppins]">
          Your privacy is important to us. At RK Travels, we are committed to
          protecting your personal information and ensuring a safe and secure
          booking experience.
          <br />
          <br />
          We collect information such as your name, contact details, and travel
          preferences only to serve you better. This helps us confirm your
          bookings, share updates, and provide personalized experiences.
          <br />
          <br />
          We never sell or rent your data. Your payment details are encrypted
          and processed through secure gateways to keep your financial data
          safe.
          <br />
          <br />
          Occasionally, we may send promotional offers or updates. You can
          opt-out of these communications at any time.
          <br />
          <br />
          For any privacy-related concerns, feel free to reach out at{" "}
          <b>rktravels484@gmail.com</b>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicies;
