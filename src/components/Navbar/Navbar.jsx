import Hamburger from "hamburger-react";
import Logo from "../../assets/logo.png";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 flex items-center w-full z-50  mt-10 bg-opacity-50  text-white py-4 px-4">
      <div className="flex justify-start">
        <img src={Logo} className=" w-32" alt="Logo" />
      </div>
      <div className="flex justify-between items-center w-full md:w-auto space-x-7 mx-auto">
        {/* Hamburger Menu on Mobile (Aligned to the right) */}
        <div className="block md:hidden ml-auto">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>

        {/* Desktop Menu (Hidden on Mobile, Visible on Larger Screens) */}
        <div className="hidden md:flex space-x-7 ml-auto">
          <a className="nav-link">HOME</a>
          <a className="nav-link">ARTICLES</a>
          <a className="nav-link">PORTFOLIO</a>
          <a className="nav-link">ABOUT</a>
          <a className="nav-link">CONTACT</a>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black text-white py-4 px-4 space-y-4 overflow-x-hidden`}
      >
        <a className="nav-link">HOME</a>
        <a className="nav-link">ARTICLES</a>
        <a className="nav-link">PORTFOLIO</a>
        <a className="nav-link">ABOUT</a>
        <a className="nav-link">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
