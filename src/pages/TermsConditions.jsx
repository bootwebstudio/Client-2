import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsConditions = () => {
  return (
    <div className="w-full h-full font-[Boldonse] text-stone-800 bg-white">
      <Navbar />
      <div className="w-full p-10 px-6 lg:p-14 flex flex-col lg:items-center gap-8 lg:gap-12">
        <h2 className="text-2xl lg:text-4xl text-center leading-none font-bold">
          TERMS & CONDITIONS
        </h2>

        <p className="w-full lg:w-[60%] text-lg lg:text-xl leading-tight font-medium font-[Poppins]">
          By booking with RK Travels, you agree to the following terms and
          conditions:
          <br />
          <br />
          <b>Booking & Payment:</b> A booking is confirmed only after receiving
          full or partial payment. All rates are subject to availability and may
          change without notice.
          <br />
          <br />
          <b>Cancellations & Refunds:</b> Cancellations must be made at least 7
          days in advance for a full refund. Last-minute cancellations may incur
          charges. Refunds will be processed within 7-10 business days.
          <br />
          <br />
          <b>Responsibility:</b> We are not responsible for delays, changes, or
          cancellations due to weather, traffic, or unforeseen events. However,
          we always strive to assist you during such situations.
          <br />
          <br />
          <b>Code of Conduct:</b> Travelers are expected to behave respectfully
          with fellow passengers and staff. Misconduct may lead to trip
          termination without refund.
          <br />
          <br />
          By proceeding with your booking, you confirm that you've read and
          agreed to these terms.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
