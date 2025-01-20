import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination } from 'swiper/modules';

const ImageSlider = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="container mx-auto relative">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 1000
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
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center mx-auto md:w-2/4 items-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                        />
                    </div>
                    <button
                        onClick={closeModal}
                        className="absolute top-5 right-5 text-3xl text-white font-bold"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
