import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialsSlider = () => {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Example Inc.",
            feedback: "Their service boosted our business to new heights.",
        },
        {
            name: "Jane Smith",
            role: "CTO, Tech Solutions",
            feedback: "Highly professional and effective. Highly recommend working with them!",
        },
        {
            name: "Sam Wilson",
            role: "Manager, Health Corp.",
            feedback: "The automation solutions provided saved us tons of time and money.",
        },
        {
            name: "Emily Davis",
            role: "Director, Finance Pros",
            feedback: "Exceptional service! They truly understood our needs.",
        },
        {
            name: "Michael Brown",
            role: "Founder, Startup Innovators",
            feedback: "Game-changing support that helped scale our operations quickly.",
        },
    ];

    const observer = useRef(null);

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-up");

        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 20% of the element is visible
            }
        );

        elements.forEach((el) => observer.current.observe(el));

        return () => {
            if (observer.current) {
                elements.forEach((el) => observer.current.unobserve(el));
            }
        };
    }, []);

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h2 className="text-5xl text-center mx-3 font-bold mb-8">
                WHAT OUR <span className="text-[#fca821]">CLIENTS</span> SAY
            </h2>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                loop={true}
                onSwiper={(swiper) => {
                    const swiperEl = swiper.el;
                    swiperEl.addEventListener("mouseenter", () => swiper.autoplay.stop());
                    swiperEl.addEventListener("mouseleave", () => swiper.autoplay.start());
                }}
                className="w-full"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="bg-white cursor-pointer no-select shadow-lg mb-8 rounded-lg p-6 text-center h-[300px] border-2 border-dashed border-black fade-up"
                        >
                            <p className="text-gray-700 text-lg italic h-[150px] flex items-center justify-center">
                                "{testimonial.feedback}"
                            </p>
                            <div className="mt-4">
                                <h4 className="text-xl font-bold text-black">{testimonial.name}</h4>
                                <p className="text-sm text-[#fca821]">{testimonial.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;
