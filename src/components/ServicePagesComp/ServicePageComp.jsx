import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";

const ServicePageComponent = ({
    bgFig,
    heading,
    spanText,
    paragraphText,
    button1Text,
    button2Text,
}) => {
    const paragraphRef = useRef(null);

    useEffect(() => {
        const words = paragraphRef.current.querySelectorAll("span");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        words.forEach((word, index) => {
                            setTimeout(() => {
                                word.style.color = "#FFFFFF"; // Change to your desired color
                            }, index * 100); // Adjust timing for the sequential effect
                        });
                        observer.disconnect(); // Trigger animation only once
                    }
                });
            },
            { threshold: 0.2 } // Adjust threshold as needed
        );

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-black relative min-w-screen h-[700px]">
            <img
                src={bgFig}
                alt="Background"
                className="relative top-0 left-0 w-full h-full opacity-5 z-0"
            />
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b bg-white  from-black to-transparent opacity-10 z-10"
            ></div>

            <div
                id="hero_content_div"
                className="flex justify-center absolute md:inset-0 top-10 z-0 items-center px-4 sm:px-8 flex-col-reverse lg:flex-row"
            >
                <div className="relative mt-40 md:mt-0 z-40 px-4 sm:px-8 text-center lg:text-left">
                    <h1 className="text-white text-3xl sm:text-5xl font-bold leading-snug">
                        <span className=" text-[#fca821]">{spanText}</span> {heading}
                    </h1>
                    <p
                        id="hero_para"
                        ref={paragraphRef}
                        className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed"
                    >
                        {paragraphText.split(" ").map((word, index) => (
                            <span
                                key={index}
                                style={{
                                    marginRight: "5px", // Space between words
                                    display: "inline-block", // Keeps words inline
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button className="bg-white font-semibold rounded-full text-black px-6 py-2 hover:bg-[#fca821] hover:border-10 hover:border-white transition duration-300">
                            {button1Text}
                        </button>
                        <button className="bg-gray-800 bg-opacity-50 border rounded-full text-white px-6 py-2 hover:bg-transparent">
                            {button2Text}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicePageComponent;
