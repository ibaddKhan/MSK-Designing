import React from "react";
import { Link } from "react-router-dom";
const services = [
    {
        title: "Promotional Product & Give Away",
        description:
            "We help you to make your brand memorable with our unique and customized promotional products.",
        icon: "👕",
        link: "/services/promotional-product", // Add link
    },
    {
        title: "Indoor & Outdoor Sign",
        description:
            "We provide you with talented designers to present you with just-for-you designs considering your style and your property's unique features.",
        icon: "📋",
        link: "/services/indoor-outdoor-sign", // Add link
    },
    {
        title: "Corporate Photography",
        description:
            "We offer you the expertise of our skilled photographers to deliver personalized photography that matches your style and showcases your company's distinctive character.",
        icon: "📸",
        link: "/services/corporate-photography", // Add link
    },
    {
        title: "Digital Marketing",
        description:
            "Our team of creative experts is dedicated to crafting tailored digital and marketing strategies that align perfectly with your brand.",
        icon: "📣",
        link: "/services/digital-marketing", // Add link
    },
    {
        title: "Offset Printing",
        description:
            "Our printing services are suitable for every situation. Whether you're promoting or pivoting your brand.",
        icon: "🖨️",
        link: "/services/offset-printing", // Add link
    },
    {
        title: "Graphic Designer",
        description:
            "Our services include stunning logo designs, customized flyers, brochures, and everything you're required for your brand.",
        icon: "🎨",
        link: "/services/graphic-designer", // Add link
    },
];

const OurServices = () => {
    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-5xl font-bold text-center mb-12">
                OUR
                <span className="text-yellow-500 text-5xl">SERVICES</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col justify-between"
                    >
                        <div>
                            <div className="text-yellow-500 text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                        </div>
                        <div className="mt-auto">
                            <Link
                                to={service.link}
                                className="text-yellow-500 font-semibold hover:underline"
                            >
                                Learn More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
