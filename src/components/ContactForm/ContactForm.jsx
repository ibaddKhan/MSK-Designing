import React, { useEffect, useRef, useState } from 'react';

const ContactForm = () => {
    const formRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            },
            { threshold: 0.2 } // Trigger when 20% of the card is visible
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={formRef} className={`min-h-screen bg-[#1a1b1c] mb-10 flex mx-4 lg:mx-10 rounded-3xl items-center justify-center transition-all duration-300 ${isVisible ? 'animate-fade-scale' : 'opacity-0 scale-75'
                }`} >
            <div
                className={`bg-[#1a1b1c] text-white rounded-full shadow-lg p-8 md:p-12 lg:flex lg:flex-row-reverse lg:gap-12 `}
            >
                {/* Form Section */}
                <div id='data_content' className="lg:w-1/2 mb-10 lg:mt-32 mt-8 text-gray-300">
                    <h2 className="text-3xl md:text-4xl mx-3 font-bold mb-8">
                        We Offer <span className="text-[#fca821]">Creative</span> Solutions
                    </h2>
                    <div className="md:text-xl">
                        <p className="mb-4">
                            We offer creative solutions to marketing needs and understand your business needs across a wide range of design & advertising solutions.
                        </p>
                        <p>
                            We offer our clients the most effective angles to approach their marketing needs and effectively build their brand.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Project Inquiry</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">
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
                            <label htmlFor="email" className="block text-sm font-medium">
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
                            <label htmlFor="phone" className="block text-sm font-medium">
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
                            <label htmlFor="description" className="block text-sm font-medium">
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
    );
};

export default ContactForm;
