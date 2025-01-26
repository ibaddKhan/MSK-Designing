import React, { useEffect, useRef, useState } from "react";

const stats = [
    { title: "Creative Designs", value: 3680 },
    { title: "Satisfied Clients", value: 1358 },
    { title: "Orders Delivered", value: 2389 },
    { title: "Product Designs", value: 5404 },
];

const AboutCardSection = () => {
    const cardRefs = useRef([]);
    const [counters, setCounters] = useState(stats.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target);
                        if (index !== -1) {
                            startCounting(index, stats[index].value);
                        }
                        entry.target.classList.add("fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.9 }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const startCounting = (index, target) => {
        let current = 0;
        const increment = Math.ceil(target / 50); // Control the speed by dividing the target
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            setCounters((prev) => {
                const updatedCounters = [...prev];
                updatedCounters[index] = current;
                return updatedCounters;
            });
        }, 20); // Interval delay
    };

    return (
        <div className=" text-white py-16">
            <h2 className="text-3xl text-black font-bold text-center mb-12">
                SOME ACHIEVEMENTS
                <br />
                <span className="text-[#fca821] text-5xl">WE ARE PROUD OF OUR WORK</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-6 md:px-16">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="card bg-[#282828] text-center py-8 px-6 rounded-lg shadow-lg opacity-0 transform translate-y-10"
                    >
                        <p className="text-4xl font-bold text-[#fca821]">{counters[index]}+</p>
                        <p className="text-xl font-medium mt-4">{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutCardSection;
