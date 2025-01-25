import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import BackToTopButton from "../BacktoTop/BacktoTop";

const ImageGallery = ({ images }) => {
    const [inView, setInView] = useState(new Array(images.length).fill(false));
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null); // State to track selected image

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
            { threshold: 0.5 }
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

    // Determine grid class based on the number of images
    const gridColsClass = images.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3";

    return (
        <div>
            <h2 className="text-5xl text-center mx-3 font-bold my-8 fade-up">
                OUR <span className="text-[#fca821]">WORK</span>
            </h2>
            <div className={`grid grid-cols-1 ${gridColsClass} gap-6 p-6 bg-gray-100`}>
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="gallery-item relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        style={{
                            backgroundColor: image.bgColor,
                            animationDelay: `${index * 0.1}s`,
                            opacity: inView[index] ? 1 : 0,
                            transform: `scale(${inView[index] ? 1 : 0.9})`, // scale up when in view
                        }}
                        data-index={index}
                        onClick={() => setSelectedImage(image)} // Set clicked image
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover rounded-xl transition-transform duration-500 transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white text-center text-lg font-bold transition-all duration-300 transform scale-90 hover:scale-100">
                                Click to see
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
                    onClick={() => setSelectedImage(null)} // Close modal on background click
                >
                    <div
                        className="relative w-1/2 h-1/2 bg-white rounded-xl overflow-hidden shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-full object-contain md:object-cover"
                        />
                        <div className="absolute top-2 right-2 text-white bg-[#fca821]">
                            <button
                                className="  rounded-full p-2"
                                onClick={() => setSelectedImage(null)} // Close modal on button click
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <BackToTopButton />
        </div>
    );
};

export default ImageGallery;
