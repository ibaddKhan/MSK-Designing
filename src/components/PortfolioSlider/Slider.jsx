import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Ensure you have this import
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay here

const ImageSlider = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (selectedImage) closeModal();
        };

        const handleTouchStart = (e) => {
            const touchStart = e.touches[0].clientY;
            e.currentTarget.addEventListener('touchend', (e) => {
                const touchEnd = e.changedTouches[0].clientY;
                if (touchStart !== touchEnd) closeModal(); // Detect swipe
            });
        };

        if (selectedImage) {
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('touchstart', handleTouchStart);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('touchstart', handleTouchStart);
        };
    }, [selectedImage]);

    return (
        <div className="container mx-auto relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="w-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-64 w-full flex justify-center items-center">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="h-full w-full rounded-lg shadow-md object-cover"
                                style={{ userSelect: 'none' }}
                                onClick={() => openModal(image)}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedImage && (
                <div
                    className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-96 h-96 rounded-lg shadow-lg object-cover"
                        />

                        <button
                            onClick={closeModal}
                            className="absolute top-5 right-5 text-3xl text-white font-bold"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
