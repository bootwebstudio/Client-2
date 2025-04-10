import React from "react";

const Footer = () => {
  return (
    <div className="w-full pt-8 px-6 lg:px-12 xl:px-24 flex flex-col gap-8 text-white bg-stone-800">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        {/* Brand Title */}
        <div className="lg:w-1/2 xl:w-[40%] flex gap-2 flex-col">
          <h2 className="text-xl lg:text-2xl text-white">
            RK Travels
          </h2>
          <p className="mt-2 text-sm text-stone-300 leading-relaxed">
            Your trusted travel partner for unforgettable journeys across India.
            Affordable packages, personalized service, and memories that last a
            lifetime.
          </p>
        </div>

        {/* Footer Content */}
        <div className="flex flex-wrap gap-y-8 gap-x-16 text-sm lg:text-base text-stone-300">
          {/* Quick Links */}
          <div className="flex gap-4 flex-col">
            <h4 className="text-base text-white">QUICK LINKS</h4>
            <div className="flex gap-2 flex-col">
              <a href="/" className="text-stone-300">
                Home
              </a>
              <a href="/about" className="text-stone-300">
                About
              </a>
              <a href="/packages" className="text-stone-300">
                Packages
              </a>
              <a href="/contact" className="text-stone-300">
                Contact
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="flex gap-4 flex-col">
            <h4 className="text-base text-white">COMPANY</h4>
            <div className="flex gap-2 flex-col">
              <a href="/terms-conditions">Terms & Conditions</a>
              <a href="/privacy-policies">Privacy Policies</a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-4 flex-col">
            <h4 className="text-base text-white">CONTACT</h4>
            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <i className="ri-phone-fill" />
                <span className="text-sm">+91 95822 99035</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-mail-fill" />
                <span className="text-sm">info@rktravels.com</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-2-fill" />
                <span className="text-sm">Delhi, India</span>
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
