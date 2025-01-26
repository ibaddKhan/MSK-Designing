import React from 'react';

const logos = [
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
    "https://www.pepsimax.fi/themes/custom/pepsizero_fe/logo.png",
];

const Marquee = () => {
    return (
        <div className="Marquee-container mt-10">
            <h2 className="text-3xl font-bold text-center mb-12">
                WE BUILD RELATIONSHIPS
                <br />
                <span className="text-[#fca821] text-5xl">PARTNERS & TECH</span>
            </h2>
            <div className="Marquee mx-auto">
                <div className="Marquee-content">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            className="Marquee-logo"
                            src={logo}
                            alt={`Logo ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
