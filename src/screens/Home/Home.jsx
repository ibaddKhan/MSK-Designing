import React, { useState } from "react";
import Hamburger from "hamburger-react";
import bg_fig from "../../assets/hero_bg.png";
import Logo from "../../assets/logo.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {/* Navbar */}
        <div className="absolute top-0 left-0 flex justify-between items-center w-full z-10 mt-10 bg-opacity-50 text-white py-4 px-4">
          <div>
            <img src={Logo} className="w-24" />
          </div>
          <div className="flex justify-between items-center w-full md:w-auto space-x-7 mx-auto">
            {/* Hamburger Menu */}
            <div className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
            </div>

            {/* Desktop Menu */}
            <div
              className={`md:flex space-x-7 ${
                isOpen ? "block" : "hidden"
              } md:block`}
            >
              <a className="nav-link">HOME</a>
              <a className="nav-link">ARTICLES</a>
              <a className="nav-link">PORTFOLIO</a>
              <a className="nav-link">ABOUT</a>
              <a className="nav-link">CONTACT</a>
            </div>
          </div>
        </div>

        <div className="bg-black w-screen h-[700px]">
          <img
            src={bg_fig}
            alt="bg_cover_img"
            className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
