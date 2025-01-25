import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user scrolls down 100px from the top
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        isVisible && (
            <div
                className="fixed bottom-5 right-5 z-30 p-2 bg-black text-[#fca821] rounded-full cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <FaArrowUp />
            </div>
        )
    );
};

export default BackToTopButton;
