import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full p-6 px-6 lg:px-12 flex items-center justify-between inset-0 z-50 transition-all duration-200 ${
          navOpen || !isHome
            ? "bg-white border-b-2 border-stone-800"
            : "border-b-2 border-white/15"
        }`}
      >
        {/* Logo */}
        <h2
          className={`text-xl lg:text-2xl font-medium z-50 transition-colors duration-200 ${
            navOpen
              ? "text-stone-800"
              : isHome
              ? "text-white"
              : "text-stone-800"
          }`}
        >
          RK Travels
        </h2>

        {/* Desktop Nav */}
        <div
          className={`hidden lg:flex gap-12 items-center ${
            isHome ? "text-white" : "text-stone-800"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={toggleNav}
          className={`p-4 px-2.5 rounded-full flex lg:hidden gap-2 flex-col z-50 cursor-pointer transition-colors duration-200 ${
            navOpen ? "bg-stone-800" : isHome ? "bg-white" : "bg-stone-800"
          }`}
        >
          <div
            className={`w-6 h-[0.85px] transition-all duration-200 ${
              navOpen
                ? "bg-white rotate-[225deg] translate-y-1"
                : isHome
                ? "bg-stone-800"
                : "bg-white"
            }`}
          />
          <div
            className={`w-6 h-[0.85px] transition-all duration-200 ${
              navOpen
                ? "bg-white -rotate-[225deg] -translate-y-1"
                : isHome
                ? "bg-stone-800"
                : "bg-white"
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full h-screen lg:hidden fixed top-0 left-0 bg-white z-40 transform transition-transform duration-200 ease-in-out ${
          navOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-lg text-stone-800">
          <Link to="/" onClick={toggleNav}>
            Home
          </Link>
          <Link to="/about" onClick={toggleNav}>
            About
          </Link>
          <Link to="/packages" onClick={toggleNav}>
            Packages
          </Link>
          <Link to="/contact" onClick={toggleNav}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
