import TestimonialsSlider from '../../components/Testimonials/Testimonials';
import CardSection from '../../components/Satisfaction-card/Cards';
import AboutCardSection from '../../components/AboutUsCard/AboutUsCard';
import Story from '../../components/AboutPageStory/Story';
import BackToTopButton from '../../components/BacktoTop/BacktoTop';
import React, { useEffect, useRef, useState } from 'react'
import heroBg from "../../assets/hero_bg.png";
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    const paragraphRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        words.forEach((word, index) => {
                            setTimeout(() => {
                                word.style.color = "#FFFFFF"; // Change to your desired color
                            }, index * 500); // Adjust timing for the sequential effect
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
    const [isInView, setIsInView] = useState({
        h1: false,
        p: false,
        buttons: false,
    });

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

    return (

        <>
            <div className="bg-black relative  min-w-screen h-[300px] md:h-[400px]">
                <div className="h-full">
                    <img
                        src={heroBg}
                        alt="Background"
                        className="relative top-0 left-0 w-full h-full opacity-5 z-0"
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b bg-white from-black to-transparent opacity-10 z-10"
                    ></div>
                </div>
                <div
                    id="hero_content_div"
                    className="flex justify-center absolute md:top-44 top-10 z-10 items-center px-4 sm:px-8 flex-col-reverse lg:flex-row"
                >
                    <div className="relative mt-24  md:mt-0 z-40 px-4 sm:px-8 text-center md:text-start">
                        <h1
                            ref={h1Ref}
                            className={`text-white text-3xl sm:text-6xl font-bold ${isInView.h1 ? "slide-in slide-in-delay-1" : ""
                                }`}
                        >
                            Schedule a free <span className=" text-[#fca821]">Consultation</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="my-6 md:hidden mx-4 flex flex-col lg:flex-row-reverse gap-6">

                <div className=''>
                    <div
                        className="calendly-inline-widget "
                        data-url="https://calendly.com/ibadurrehman718/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=fca821"
                        style={{
                            minWidth: "0",
                            height: "1650px",
                            flex: 1,
                        }}

                    ></div>
                </div>


                <div className=" flex-1  max-w-lg lg:w-1/2">
                    <div className="bg-[#1a1b1c] p-6 lg:p-10 rounded-lg shadow-lg">
                        <h2 className="text-3xl text-white font-bold mb-4">Project Inquiry</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-white">
                                    Phone No.
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-white">
                                    Your Work Description
                                </label>
                                <textarea
                                    id="description"
                                    placeholder="Describe your project"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    rows="4"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#fca821] hover:bg-[#ffbd54] text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
            <div className="my-6 hidden md:flex mx-4 flex-col lg:flex-row-reverse gap-6">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/ibadurrehman718/30min?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=fca821"
                    style={{
                        minWidth: "0",
                        height: "800px",
                        flex: 1,
                    }}
                ></div>


                <div className="flex-1 max-w-lg mx-auto lg:w-1/2">
                    <div className="bg-[#1a1b1c] p-6 lg:p-10 rounded-lg shadow-lg">
                        <h2 className="text-3xl text-white font-bold mb-4">Project Inquiry</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-white">
                                    Phone No.
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-white">
                                    Your Work Description
                                </label>
                                <textarea
                                    id="description"
                                    placeholder="Describe your project"
                                    className="mt-1 w-full border border-gray-600 text-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    rows="4"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#fca821] hover:bg-[#ffbd54] text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
