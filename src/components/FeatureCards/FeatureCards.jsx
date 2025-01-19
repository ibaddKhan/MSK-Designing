import React from "react";

import { FaTruck, FaDollarSign, FaCheckCircle, FaPuzzlePiece } from "react-icons/fa";
const Features = () => {
    const features = [
        {
            icon: <FaTruck />,
            title: "SAME DAY DELIVERY",
            description: "On Selected Services",
        },
        {
            icon: <FaDollarSign />,
            title: "LOWEST PRINT PRICES",
            description: "Competitive Prices",
        },
        {
            icon: <FaCheckCircle />,
            title: "BEST PRINT QUALITY",
            description: "Color & Print Consistency",
        },
        {
            icon: <FaPuzzlePiece />,
            title: "FREE DESIGN ALTERATION",
            description: "On Selected Services",
        },
    ];
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl mx-3 font-bold mb-8">
                    WHAT MAKES US <span className="text-yellow-500">DIFFERENT</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border-2 mx-4 cursor-pointer border-black border-dashed hover:border-yellow-500 py-6 rounded-lg flex flex-col items-center justify-center"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="font-bold text-center">{feature.title}</h3>
                            <p className="text-sm text-gray-500 text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
