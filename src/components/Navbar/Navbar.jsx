import Hamburger from "hamburger-react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 flex items-center w-full z-50 ${scrolling ? "py-2 bg-black" : "mt-10 py-4"
        } transition-all ease-in-out duration-300 text-white px-4`}
    >
      <div className="flex justify-start">
        <img src={Logo} className="w-32" alt="Logo" />
      </div>
      <div className="flex justify-between items-center w-full md:w-auto space-x-7 mx-auto">
        <div className="block md:hidden ml-auto">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>

        <div className="hidden md:flex space-x-7 ml-auto relative">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to={"/portfolio"} className="nav-link">PORTFOLIO</Link>
          <div className="nav-link group relative flex items-center cursor-pointer">
            <div className="flex items-center"><span>SERVICES</span> <FaChevronDown className="ml-2 text-sm " /></div>
            <div className="absolute left-0 top-full hidden group-hover:block bg-black text-white py-2 w-48 shadow-md">
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Graphic Design
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Giveaway & Promotional Items
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Printing Services
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Indoor & Outdoor Signs
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Corporate Photography
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Digital Marketing
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Event Management
              </a>
            </div>
          </div>
          <a className="nav-link">ABOUT</a>
          <a className="nav-link">CONTACT</a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`navbar-mobile md:hidden ${isOpen ? "open" : ""} absolute top-20 left-0 w-full bg-black text-white py-4 px-4 space-y-4 overflow-x-hidden`}
      >
        <div>   <a className="nav-link">HOME</a></div>
        <div>  <a className="nav-link">PORTFOLIO</a></div>
        <div>
          <div className="flex items-center">
            <a className="nav-link">SERVICES</a>
            <FaChevronDown className="ml-2 text-sm" />
          </div>
          <div className="pl-4">
            <a className="block py-1" href="#">
              Graphic Design
            </a>
            <a className="block py-1" href="#">
              Giveaway & Promotional Items
            </a>
            <a className="block py-1" href="#">
              Printing Services
            </a>
            <a className="block py-1" href="#">
              Indoor & Outdoor Signs
            </a>
            <a className="block py-1" href="#">
              Corporate Photography
            </a>
            <a className="block py-1" href="#">
              Digital Marketing
            </a>
            <a className="block py-1" href="#">
              Event Management
            </a>
          </div>
        </div>
        <div><a className="nav-link">ABOUT</a></div>
        <div>
          <a className="nav-link">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
