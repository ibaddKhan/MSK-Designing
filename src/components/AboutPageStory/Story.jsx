import React, { useState, useEffect } from 'react';

const Story = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('story');
            if (!element) return; // Check if the element exists

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;

            // Calculate the scroll progress relative to the element
            const totalScroll = elementTop + elementHeight - windowHeight;
            const progress = Math.min(Math.max((scrollTop - elementTop + windowHeight) / totalScroll, 0), 1);

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            id="story"
            className="p-6 bg-gray-50 text-gray-800 rounded-2xl shadow-lg border-2 border-black border-dashed max-w-4xl mx-auto mt-10 transition-all duration-700"
            style={{
                opacity: Math.min(scrollProgress + 0.2, 1), // Adjust opacity based on scroll progress
                transform: `translateX(${(1 - scrollProgress) * 200}px)`, // Moves from -200px to 200px based on scroll
            }}
        >
            <h1 className="text-4xl font-bold text-[#fca821] mb-4">Reinventing Advertising</h1>
            <p className="text-lg mb-6">
                <span className="font-semibold">A Y A B</span> stands for the Arabic word <span className="italic">‘Al Yaqoot Al Banafji’</span> meaning <span className="italic">‘Purple Sapphire’</span>. Purple Sapphires are a rare collection of precious stones available in nature. They are known for their durability, resistance, superior physical, chemical and optical properties which allows sapphire to be used in demanding conditions. As the name suggests AYAB advertising is recognized for its excellence in service, versatility in delivering each customer’s expectations, and offering superior quality output.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Motto: <span className="text-[#fca821]">‘You ask we Deliver’</span></h2>
            <p className="text-lg mb-6">
                Our ever-evolving, adaptable and dynamic spirit drives us everyday to guide our clients in achieving their objectives efficiently. Your business is unique, and so are your advertising needs. Rather than offering a one-size-fits-all solution, we believe in taking the time to understand your needs and offer tailor-made solutions that suits your business best.
            </p>

            <blockquote className="text-lg italic text-gray-600 border-l-4 border-[#fca821] pl-4">
                Many a small thing can be made large by the right Kind of Advertising – <span className="font-semibold">Mark Twain</span>
            </blockquote>
        </div>
    );
};

export default Story;
