import React, { useState, useEffect } from 'react';

const Story = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false); // Track if scroll has happened

    useEffect(() => {
        const handleScroll = () => {
            if (hasScrolled) return; // Stop further animation after the first scroll

            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const element = document.getElementById('story');
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;

            // Start calculating scroll progress only when the element is in view
            const totalHeight = elementTop + elementHeight - windowHeight;
            let progress = (scrollTop - elementTop + windowHeight) / totalHeight;

            // Clamp progress between 0 and 1
            progress = Math.min(Math.max(progress, 0), 1);

            // Adjust progress so that 20% of the card height completes the translate
            if (progress >= 0.2) {
                progress = (progress - 0.2) / 0.2; // Shift start to 20% and scale to 0-1 range
            } else {
                progress = 0;
            }

            setScrollProgress(progress);

            // Mark scroll as completed when it reaches 100%
            if (progress >= 1) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    return (
        <div
            id="story"
            className="p-6  bg-gray-50 text-gray-800 rounded-2xl shadow-lg border-2 border-black border-dashed max-w-4xl mt-10 transition-all duration-700"
            style={{
                opacity: Math.min(scrollProgress + 0.2, 1), // Starts at 0.2 opacity when the page loads
                transform: `translateX(${(1 - scrollProgress) * 200}px)`, // Moves as you scroll
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
