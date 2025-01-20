import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import bg_fig from "../../assets/hero_bg.png";
import hero_guy from "../../assets/hero_guy.png";

const Hero = () => {
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
                src={bg_fig}
                alt="Background"
                className="relative top-0 left-0 w-full h-full opacity-15 z-0"
            />
            <div
                id="hero_content_div"
                className="flex justify-between absolute md:inset-0 top-10 z-0 items-center px-4 sm:px-8 flex-col-reverse lg:flex-row"
            >
                <div className="relative mt-40 md:mt-0 z-40 px-4 sm:px-8 max-w-xl text-center lg:text-left">
                    <h1 className="text-white text-3xl sm:text-5xl font-bold leading-snug">
                        <span className="block text-[#fca821]">The Modern Duo of</span>
                        Printing & Digital
                    </h1>
                    <p
                        id="hero_para"
                        ref={paragraphRef}
                        className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed"
                    >
                        {`Where Design Meets Trust. We’re more than a brand development company; we’re architects of memorable experiences. With creativity, expertise, and a commitment to excellence, we craft legendary brands. Explore our services in Designing, Branding, Printing, Signage, and Promotional Products. Join us in the journey of inspiration and transformation.`
                            .split(" ")
                            .map((word, index) => (
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
                            Our Services
                        </button>
                        <button className="bg-gray-800 bg-opacity-50 border rounded-full text-white px-6 py-2 hover:bg-transparent">
                            Get Quotes
                        </button>
                    </div>
                </div>
                <div className="relative bottom-0 hidden lg:block">
                    <img src={hero_guy} alt="Hero" className="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
