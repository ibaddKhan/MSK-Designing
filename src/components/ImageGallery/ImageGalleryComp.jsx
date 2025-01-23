import React, { useState, useEffect } from "react";

const ImageGallery = ({ images }) => {
    const [inView, setInView] = useState(new Array(images.length).fill(false));
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Set up IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = entry.target.getAttribute("data-index");
                    if (entry.isIntersecting) {
                        setInView((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    } else {
                        setInView((prev) => {
                            const updated = [...prev];
                            updated[index] = false;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        const elements = document.querySelectorAll(".gallery-item");
        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [images.length]);

    // Scroll Progress Logic
    useEffect(() => {
        const handleScroll = () => {
            const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <h2 className="text-5xl text-center mx-3 font-bold mb-8">
                OUR <span className="text-yellow-500">WORK</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="gallery-item relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        style={{
                            backgroundColor: image.bgColor,
                            animationDelay: `${index * 0.1}s`,
                            opacity: inView[index] ? 1 : 0,
                            transform: `scale(${inView[index] ? 1 : 0.9})`, // scale up when in view
                        }}
                        data-index={index}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover rounded-xl transition-transform duration-500 transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white text-center text-lg font-bold transition-all duration-300 transform scale-90 hover:scale-100">
                                {image.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Optional: Display scroll progress (for demonstration) */}
            <div className="fixed bottom-5 left-5 p-2 bg-black text-white rounded-full">
                Scroll Progress: {Math.round(scrollProgress * 100)}%
            </div>
        </div>
    );
};

export default ImageGallery;
