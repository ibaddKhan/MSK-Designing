import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {

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
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <h2 className="text-4xl font-bold">
                        <span className="text-[#0080ff]">M</span> <span className="text-[#ed008c]">S</span> <span className="text-[#fef200]">K</span>
                    </h2>
                    <p className="mt-4">
                        We are committed to providing high-quality custom printing services in Pakistan. Quality print and timely delivery is our motto.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Privacy policy</a></li>
                        <li><a href="#" className="hover:underline">Terms and conditions</a></li>
                    </ul>
                </div>

                {/* Middle Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Our Services</h2>
                    <ul className="space-y-2 text-sm">
                        <NavLink
                            to={'/services/3dSignage'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            3D Signage
                        </NavLink>
                        <NavLink
                            to={'/services/flyers'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Flyers
                        </NavLink>
                        <NavLink
                            to={'/services/signage_flex'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Signage Flex
                        </NavLink>
                        <NavLink
                            to={'/services/stickers'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Stickers
                        </NavLink>
                        <NavLink
                            to={'/services/vehicle_branding'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Vehicle Branding
                        </NavLink>
                        <NavLink
                            to={'/services/roll_up_banners'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            RollUp
                        </NavLink>
                        <NavLink
                            to={'/services/light_boxes'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Light Boxes
                        </NavLink>
                        <NavLink
                            to={'/services/acrylic_signage'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Acrylic Signage
                        </NavLink>
                        <NavLink
                            to={'/services/business_cards'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Business Cards
                        </NavLink>
                        <NavLink
                            to={'/services/construction_boards'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Construction Boards
                        </NavLink>
                        <NavLink
                            to={'/services/eaching_plates'}
                            className={({ isActive }) => `block ${isActive ? 'text-[#fca821]' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            Eaching Plates
                        </NavLink>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
                    <ul className="space-y-2 text-sm">
                        <li>📞 +92 213 227 6129</li>
                        <li>📱 +92 303 384 79234</li>
                        <li>✉️ <a href="mailto:contact@printingwala.pk" className="hover:underline">contact@mskdesigining.com</a></li>
                        <li>
                            🏢 Sharjah, UAE
                        </li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-[#fca821]">Twitter</a>
                        <a href="#" className="hover:text-[#fca821]">Facebook</a>
                        <a href="#" className="hover:text-[#fca821]">Instagram</a>
                        <a href="#" className="hover:text-[#fca821]">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">
                <p>Copyright 2025 - Developed By <span className="text-[#fca821]">Ibadd K.</span></p>
            </div>
        </footer>
    );
};

export default Footer;
