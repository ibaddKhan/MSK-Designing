import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import boardImg from "../../assets/services_imgs/board.png";
import box from "../../assets/services_imgs/box.png";
import card from "../../assets/services_imgs/card.png";
import flyer from "../../assets/services_imgs/flyer.png";
import nameplate from "../../assets/services_imgs/nameplate.png";
import rollup from "../../assets/services_imgs/rollup.png";
import signage from "../../assets/services_imgs/signage.png";
import simpleSignage from "../../assets/services_imgs/Simple Signage.png";
import sticker from "../../assets/services_imgs/sticker.png";
import threeDSign from "../../assets/services_imgs/threeDSign.png";
import vehicle from "../../assets/services_imgs/vehicle.png";

const services = [
    {
        title: "3D Signage",
        description: "High-quality 3D signage to give your brand a modern and professional appearance.",
        image: threeDSign,
        link: "/services/3dSignage",
    },
    {
        title: "Flyers",
        description: "Creative and custom-designed flyers to promote your business effectively.",
        image: flyer,
        link: "/services/flyers",
    },
    {
        title: "Signage Flex",
        description: "Durable and vibrant signage flex designs for both indoor and outdoor use.",
        image: signage,
        link: "/services/signage_flex",
    },
    {
        title: "Stickers",
        description: "Custom-made stickers to add personality and promote your brand uniquely.",
        image: sticker,
        link: "/services/stickers",
    },
    {
        title: "Vehicle Branding",
        description: "Transform your vehicle into a mobile advertisement with our expert vehicle branding solutions.",
        image: vehicle,
        link: "/services/vehicle_branding",
    },
    {
        title: "Rollups",
        description: "Portable and professional roll-up banners for exhibitions, events, and promotions.",
        image: rollup,
        link: "/services/roll_up_banners",
    },
    {
        title: "Light Boxes",
        description: "Illuminated light boxes for eye-catching advertising and signage solutions.",
        image: box,
        link: "/services/light_boxes",
    },
    {
        title: "Acrylic Signage",
        description: "Stylish and durable acrylic signage for modern branding and decoration.",
        image: simpleSignage,
        link: "/services/acrylic_signage",
    },
    {
        title: "Business Cards",
        description: "Premium business card designs that leave a lasting impression.",
        image: card,
        link: "/services/business_cards",
    },
    {
        title: "Construction Boards",
        description: "High-quality construction boards to display essential information at project sites.",
        image: boardImg,
        link: "/services/construction_boards",
    },
    {
        title: "Eaching Plates",
        description: "Custom-etched plates for signage, branding, and decorative purposes.",
        image: nameplate,
        link: "/services/eaching_plates",
    },
];

const OurServices = () => {
    const [visibleSections, setVisibleSections] = useState([]);

    const observerRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => [...new Set([...prev, entry.target.dataset.index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(".service-item");
        elements.forEach((el) => observer.observe(el));

        observerRef.current = observer;

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-5xl font-bold text-center mb-12">
                OUR
                <span className="text-[#fca821] text-5xl"> SERVICES</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className={`service-item border-2 border-black p-6 rounded-lg transition-all flex flex-col justify-between ${visibleSections.includes(`${index}`) ? "fade-in scale-up" : "opacity-0 scale-95"
                            }`}
                    >
                        <div>
                            <div className="flex justify-center">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-48 h-48 object-fit mb-4 rounded-lg"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                        </div>
                        <div className="mt-auto">
                            <Link
                                to={service.link}
                                className="text-[#fca821] font-semibold hover:underline"
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
