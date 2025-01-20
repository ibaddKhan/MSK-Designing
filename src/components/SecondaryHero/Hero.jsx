import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import bg_fig from "../../assets/hero_bg.png";
import hero_guy from "../../assets/hero_guy.png";

const SecondaryHero = () => {
    const [isInView, setIsInView] = useState({
        h1: false,
        p: false,
        buttons: false,
    });

    const paragraphRef = useRef(null);
    const h1Ref = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === h1Ref.current) {
                            setIsInView((prev) => ({ ...prev, h1: true }));
                        } else if (entry.target === paragraphRef.current) {
                            setIsInView((prev) => ({ ...prev, p: true }));
                        } else if (entry.target === buttonsRef.current) {
                            setIsInView((prev) => ({ ...prev, buttons: true }));
                        }
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is in view
        );

        if (h1Ref.current) observer.observe(h1Ref.current);
        if (paragraphRef.current) observer.observe(paragraphRef.current);
        if (buttonsRef.current) observer.observe(buttonsRef.current);

        return () => observer.disconnect();
    }, []);

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
        <div className="bg-black relative min-w-screen h-[700px] md:h-full ">
            <img
                src={bg_fig}
                alt="Background"
                className="relative top-0 left-0 w-full h-full opacity-15 z-0"
            />
            <div
                id="hero_content_div"
                className="flex justify-center absolute mt-0 md:mt-20 md:inset-0 top-0 z-0 items-center px-4 sm:px-8 flex-col-reverse lg:flex-row"
            >
                <div className="relative mt-40 md:mt-0 z-40 px-4 sm:px-8 text-center lg:text-left">
                    <h1
                        ref={h1Ref}
                        className={`text-white text-3xl sm:text-5xl font-bold ${isInView.h1 ? "slide-in slide-in-delay-1" : ""
                            }`}
                    >
                        <span className=" text-[#fca821] mb-1 ">Take your Branding to </span> Next Level with us
                    </h1>
                    <p
                        id="hero_para"
                        ref={paragraphRef}
                        className={`text-gray-300 mt-4 text-base sm:text-lg leading-relaxed ${isInView.p ? "slide-in slide-in-delay-2" : ""
                            }`}
                    >
                        {`We specialize in crafting exceptional Graphic Design, Branding, Printing, 3D Signage, and Promotional solutions, delivering a transformative and imaginative experience. Our expertise also extends to Flyers, Lightboxes, Vehicle Branding, Acrylic Signage, and many other types of Brandings.`.split(" ")
                            .map((word, index) => (
                                <span
                                    key={index}
                                    style={{
                                        marginRight: "5px",
                                        display: "inline-block",
                                    }}
                                >
                                    {word}
                                </span>
                            ))}
                    </p>

                    <div
                        ref={buttonsRef}
                        className={`mt-6 flex flex-col sm:flex-row gap-4 ${isInView.buttons ? "slide-in slide-in-delay-3" : ""
                            }`}
                    >
                        <button className="bg-white font-semibold rounded-full text-black px-6 py-2 hover:bg-[#fca821] hover:border-10 hover:border-white transition duration-300">
                            Our Services
                        </button>
                        <button className="bg-gray-800 bg-opacity-50 border rounded-full text-white px-6 py-2 hover:bg-transparent">
                            Get Quotes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryHero;
