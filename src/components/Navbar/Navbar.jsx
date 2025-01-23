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
      className={`fixed top-0 left-0 mb-2 flex items-center w-full z-50 ${scrolling ? "py-2 bg-black" : "mt-10 py-4"
        } transition-all ease-in-out duration-300 text-white px-4`}
    >
      <div className="flex justify-start">
        <Link to={"/"}><img src={Logo} className="w-32" alt="Logo" /></Link>
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
              <Link to={'/services/3dSignage'} className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                3D Signage
              </Link>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Acrylic Signage
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Business Cards
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Construction Boards
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Eaching Plates
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Flyers
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Light Boxes
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Rollups
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Signage Flex
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Stickers
              </a>
              <a className="block px-4 py-2 hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500" href="#">
                Vehicle Branding
              </a>
            </div>
          </div>
          <a className="nav-link">ABOUT</a>
          <a className="nav-link">CONTACT</a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`navbar-mobile md:hidden ${isOpen ? "open" : ""
          } absolute top-14 ${scrolling ? "top-14" : "mt-5 py-4"
          }  mt-2 left-0 w-full h-screen bg-black text-white py-6 px-6 space-y-6 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div>
          <a to={"/"} className="block text-lg font-semibold hover:text-yellow-500 transition-colors">HOME</a>
        </div>
        <div>
          <Link to={"/portfolio"} className="block text-lg font-semibold hover:text-yellow-500 transition-colors">PORTFOLIO</Link>
        </div>
        <div>
          <div className="flex items-center justify-between cursor-pointer">
            <span className="block text-lg font-semibold">SERVICES</span>
            <FaChevronDown className="ml-2 text-sm" />
          </div>
          <div className="pl-4 mt-2 space-y-2 text-sm">
            <Link to={'/services/3dSignage'} className="block hover:text-yellow-500 transition-colors" href="#">
              3D Signage
            </Link>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Acrylic Signage
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Business Cards
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Construction Boards
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Eaching Plates
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Flyers
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Light Boxes
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              RollUp
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Signage Flex
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Stickers
            </a>
            <a className="block hover:text-yellow-500 transition-colors" href="#">
              Vehicle Branding
            </a>
          </div>
        </div>
        <div>
          <a className="block text-lg font-semibold hover:text-yellow-500 transition-colors">ABOUT</a>
        </div>
        <div>
          <a className="block text-lg font-semibold hover:text-yellow-500 transition-colors">CONTACT</a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
