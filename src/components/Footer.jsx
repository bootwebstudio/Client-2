import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full pt-8 px-6 lg:px-12 xl:px-24 flex flex-col gap-8 text-white bg-stone-800">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
        {/* Brand Title */}
        <div className="lg:w-[40%] flex gap-2 flex-col">
          <h2 className="text-xl lg:text-2xl text-white">RK Travels</h2>
          <p className="mt-2 text-sm text-stone-300 leading-relaxed">
            Your trusted travel partner for unforgettable journeys across India.
            Affordable packages, personalized service, and memories that last a
            lifetime.
          </p>
        </div>

        {/* Footer Content */}
        <div className="lg:w-[60%] flex gap-8 text-sm flex-wrap lg:flex-nowrap lg:text-base text-stone-300">
          {/* Quick Links */}
          <div className="w-full lg:w-1/4 flex gap-4 flex-col">
            <h4 className="text-base text-white">QUICK LINKS</h4>
            <div className="flex gap-2 flex-col">
              <Link to="/" className="text-stone-300">
                Home
              </Link>
              <Link to="/about" className="text-stone-300">
                About
              </Link>
              <Link to="/packages" className="text-stone-300">
                Packages
              </Link>
              <Link to="/contact" className="text-stone-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="w-full lg:w-1/4 flex gap-4 flex-col">
            <h4 className="text-base text-white">COMPANY</h4>
            <div className="flex gap-2 flex-col">
              <Link to="/privacy-policies">Privacy Policies</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full lg:w-2/4 flex gap-4 flex-col">
            <h4 className="text-base text-white">CONTACT</h4>
            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill" />
                <span className="text-sm">+91 95822 99035</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-mail-fill" />
                <span className="text-sm">rktravels484@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-2-fill" />
                <span className="text-sm leading-loose">
                  G-17A rajeev nagar, Rohini sector-37, New Delhi- 110086
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="p-6 px-0 text-sm text-center border-t border-stone-200">
        © {new Date().getFullYear()} RK Travels. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
