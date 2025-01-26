import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import Logo from "../../assets/mskLogo.png";
import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleLinkClick = () => {
    setIsOpen2(false);
  };
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

  const location = useLocation();

  const isServicesActive = [
    '/services/3dSignage',
    '/services/flyers',
    '/services/signage_flex',
    '/services/stickers',
    '/services/vehicle_branding',
    '/services/roll_up_banners',
    '/services/light_boxes',
    '/services/acrylic_signage',
    '/services/business_cards',
    '/services/construction_boards',
    '/services/eaching_plates',
  ].some((path) => location.pathname === path);
  return (
    <div
      className={`fixed top-0 left-0 mb-2 flex items-center w-full z-50 ${scrolling ? "py-2 bg-black" : "my-5 py-4"
        } transition-all ease-in-out duration-300 text-white px-4`}
    >
      <div className="flex justify-start">
        <NavLink to={"/"}>
          <img src={Logo} className={`w-28 ${scrolling ? "w-20 bg-black" : ""
            } `} alt="Logo" />
        </NavLink>
      </div>
      <div className="flex justify-between items-center w-full md:w-auto space-x-7 mx-auto">
        <div className="block md:hidden ml-auto">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>

        <div className="hidden md:flex space-x-7 ml-auto relative">
          <NavLink
            to="/"
            className={({ isActive }) => ` ${isActive ? 'nav-link-active' : 'nav-link'} `}
          >
            HOME
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => ` ${isActive ? 'nav-link-active' : 'nav-link'} `}
          >
            PORTFOLIO
          </NavLink>

          <div
            className={`nav-link group relative flex items-center cursor-pointer ${isServicesActive ? 'nav-link-active' : ''
              }`}
          >
            <div id="services_link" className="flex items-center">
              <span>SERVICES</span> <FaChevronDown className="ml-2 text-sm" />
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block bg-black text-white py-2 w-48 shadow-md">
              <NavLink
                to="/services/3dSignage"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                3D Signage
              </NavLink>
              <NavLink
                to="/services/flyers"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Flyers
              </NavLink>
              <NavLink
                to="/services/signage_flex"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Signage Flex
              </NavLink>
              <NavLink
                to="/services/stickers"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Stickers
              </NavLink>
              <NavLink
                to="/services/vehicle_branding"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Vehicle Branding
              </NavLink>
              <NavLink
                to="/services/roll_up_banners"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Rollups
              </NavLink>
              <NavLink
                to="/services/light_boxes"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Light Boxes
              </NavLink>
              <NavLink
                to="/services/acrylic_signage"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Acrylic Signage
              </NavLink>
              <NavLink
                to="/services/business_cards"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Business Cards
              </NavLink>
              <NavLink
                to="/services/construction_boards"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Construction Boards
              </NavLink>
              <NavLink
                to="/services/eaching_plates"
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive ? 'text-[#fca821]' : ''} hover:bg-gray-700 hover:border-b-2 hover:border-yellow-500`
                }
              >
                Eaching Plates
              </NavLink>
            </div>
          </div>
          <NavLink
            to="/about"
            className={({ isActive }) => ` ${isActive ? 'nav-link-active' : 'nav-link'} `}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => ` ${isActive ? 'nav-link-active' : 'nav-link'} `}
          >
            CONTACT US
          </NavLink>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`navbar-mobile md:hidden ${isOpen ? "open" : ""} absolute top-14 ${scrolling ? "top-14" : "mt-5 py-4"} mt-2 left-0 w-full h-screen bg-black text-white py-6 px-6 space-y-6 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) => `block text-lg font-semibold hover:text-[#fca821] transition-colors ${isActive ? 'text-[#fca821]' : ''}`}
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            HOME
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => `block text-lg font-semibold hover:text-[#fca821] transition-colors ${isActive ? 'text-[#fca821]' : ''}`}
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            PORTFOLIO
          </NavLink>
        </div>

        <div>
          <div className="flex items-center justify-between cursor-pointer">
            <span className="block text-lg font-semibold">SERVICES</span>
            <FaChevronDown className="ml-2 text-sm" />
          </div>
          <div className="pl-4 mt-2 space-y-2 text-sm">
            <NavLink
              to={'/services/3dSignage'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              3D Signage
            </NavLink>
            <NavLink
              to={'/services/flyers'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Flyers
            </NavLink>
            <NavLink
              to={'/services/signage_flex'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Signage Flex
            </NavLink>
            <NavLink
              to={'/services/stickers'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Stickers
            </NavLink>
            <NavLink
              to={'/services/vehicle_branding'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Vehicle Branding
            </NavLink>
            <NavLink
              to={'/services/roll_up_banners'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              RollUp
            </NavLink>
            <NavLink
              to={'/services/light_boxes'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Light Boxes
            </NavLink>
            <NavLink
              to={'/services/acrylic_signage'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Acrylic Signage
            </NavLink>
            <NavLink
              to={'/services/business_cards'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Business Cards
            </NavLink>
            <NavLink
              to={'/services/construction_boards'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Construction Boards
            </NavLink>
            <NavLink
              to={'/services/eaching_plates'}
              className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
              onClick={() => setIsOpen(false)} // Close the menu on click
            >
              Eaching Plates
            </NavLink>
          </div>
        </div>
        <div>
          <NavLink
            to={"/about"}
            className={({ isActive }) => `block text-lg font-semibold hover:text-[#fca821] transition-colors ${isActive ? 'text-[#fca821]' : ''}`}
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            ABOUT
          </NavLink>
        </div>
        <div>
          <a className="block text-lg font-semibold hover:text-[#fca821] transition-colors">CONTACT</a>
        </div>
      </div>

    </div >
  );
};

export default Navbar;
