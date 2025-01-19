import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <h1 className="text-4xl font-bold text-yellow-500">PW</h1>
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
                        <li>Graphic Design</li>
                        <li>Printing Services</li>
                        <li>Indoor & Outdoor Signs</li>
                        <li>Giveaway & Promotional Items</li>
                        <li>Corporate Photography</li>
                        <li>Event Management</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
                    <ul className="space-y-2 text-sm">
                        <li>📞 +92 213 227 6109</li>
                        <li>📱 +92 303 384 7934</li>
                        <li>✉️ <a href="mailto:contact@printingwala.pk" className="hover:underline">contact@printingwala.pk</a></li>
                        <li>
                            🏢 Office No. 504, Landmark Plaza, I.I Chundrigar Rd, opp. Jang Press, Karachi.
                        </li>
                    </ul>
                    <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-yellow-500">Twitter</a>
                        <a href="#" className="hover:text-yellow-500">Facebook</a>
                        <a href="#" className="hover:text-yellow-500">Instagram</a>
                        <a href="#" className="hover:text-yellow-500">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm">
                <p>Copyright 2025 - Powered By <span className="text-yellow-500">Softvira</span></p>
            </div>
        </footer>
    );
};

export default Footer;
