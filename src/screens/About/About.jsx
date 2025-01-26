import React, { useEffect, useRef, useState } from 'react'
import heroBg from "../../assets/hero_bg.png";
import ImageGallery from '../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../assets/portfolio_assets/3D Signage/img1.jpeg";
import img2 from "../../assets/portfolio_assets/3D Signage/img2.jpeg";
import img3 from "../../assets/portfolio_assets/3D Signage/img3.jpeg";
import img4 from "../../assets/portfolio_assets/3D Signage/img4.jpeg";
import img5 from "../../assets/portfolio_assets/3D Signage/img5.jpeg";
import img6 from "../../assets/portfolio_assets/3D Signage/img6.jpeg";
import img7 from "../../assets/portfolio_assets/3D Signage/img7.jpeg";
import img8 from "../../assets/portfolio_assets/3D Signage/img8.jpeg";
import TestimonialsSlider from '../../components/Testimonials/Testimonials';
import CardSection from '../../components/Satisfaction-card/Cards';
import AboutCardSection from '../../components/AboutUsCard/AboutUsCard';
import Story from '../../components/AboutPageStory/Story';
import BackToTopButton from '../../components/BacktoTop/BacktoTop';


const About = () => {

    const delayU = 2500;  // Delay for U
    const delayA = 3000; // Delay for A
    const delayE = 3500; // Delay for E
    const delaydot = 4000; // Delay for E

    // Function to change colors with delays
    function changeColor() {
        setTimeout(() => {
            document.getElementById('u').style.color = 'green'; // Change U to green
        }, delayU);

        setTimeout(() => {
            document.getElementById('a').style.color = 'white'; // Change A to white
        }, delayA);

        setTimeout(() => {
            document.getElementById('e').style.color = 'red'; // Change E to red
        }, delayE);
        setTimeout(() => {
            document.getElementById('period').style.color = 'white'; // Change E to red
        }, delaydot);
    }

    // Call the function to trigger the color change
    changeColor();
    const paragraphRef = useRef(null);

    useEffect(() => {
        const words = paragraphRef.current.querySelectorAll("#span_text");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        words.forEach((word, index) => {
                            setTimeout(() => {
                                word.style.color = "#FFFFFF"; // Change to your desired color
                            }, index * 500); // Adjust timing for the sequential effect
                        });
                        observer.disconnect(); // Trigger animation only once
                    }
                });
            },
            { threshold: 0.2 } // Adjust threshold as needed
        );

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }

        return () => observer.disconnect();
    }, []);
    const [isInView, setIsInView] = useState({
        h1: false,
        p: false,
        buttons: false,
    });

    const h1Ref = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === h1Ref.current) {
                            setIsInView((prev) => ({ ...prev, h1: true }));
                        } else if (entry.target === paragraphRef.current) {
                            setIsInView((prev) => ({ ...prev, p: true }));
                        } else if (entry.target === buttonsRef.current) {
                            setIsInView((prev) => ({ ...prev, buttons: true }));
                        }
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is in view
        );

        if (h1Ref.current) observer.observe(h1Ref.current);
        if (paragraphRef.current) observer.observe(paragraphRef.current);
        if (buttonsRef.current) observer.observe(buttonsRef.current);

        return () => observer.disconnect();
    }, []);

    const images = [
        { id: 1, src: img1, alt: '3D Signage Image 1', bgColor: '#3498db' }, // Blue
        { id: 2, src: img2, alt: '3D Signage Image 2', bgColor: '#e74c3c' }, // Red
        { id: 3, src: img3, alt: '3D Signage Image 3', bgColor: '#2ecc71' }, // Green
        { id: 4, src: img4, alt: '3D Signage Image 4', bgColor: '#9b59b6' }, // Purple
        { id: 5, src: img5, alt: '3D Signage Image 5', bgColor: '#f1c40f' }, // Yellow
        { id: 6, src: img6, alt: '3D Signage Image 6', bgColor: '#e67e22' }, // Orange
        { id: 7, src: img7, alt: '3D Signage Image 7', bgColor: '#1abc9c' }, // Teal
        { id: 8, src: img8, alt: '3D Signage Image 8', bgColor: '#34495e' }, // Dark Blue
    ];

    return (
        <div className='overflow-x-hidden'>
            <div className="bg-black relative  min-w-screen h-[600px] md:h-[400px]">
                <div className="h-full">
                    <img
                        src={heroBg}
                        alt="Background"
                        className="relative top-0 left-0 w-full h-full opacity-5 z-0"
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b bg-white from-black to-transparent opacity-10 z-10"
                    ></div>
                </div>
                <div
                    id="hero_content_div"
                    className="flex justify-center absolute md:top-44 top-10 z-10 items-center px-4 sm:px-8 flex-col-reverse lg:flex-row"
                >
                    <div className="relative mt-40  md:mt-0 z-40 px-4 sm:px-8 text-center md:text-start">
                        <h1
                            ref={h1Ref}
                            className={`text-white text-3xl sm:text-3xl font-bold ${isInView.h1 ? "slide-in slide-in-delay-1" : ""
                                }`}
                        >
                            <span className=" text-[#fca821]">About</span> Us
                        </h1>
                        <p
                            id="hero_para"
                            ref={paragraphRef}
                            className={`text-gray-300  mt-4 text-3xl sm:text-5xl leading-relaxed ${isInView.p ? "slide-in slide-in-delay-2" : ""}`}
                        >
                            {"An Advertising Agency based in".split(" ").map((word, index) => (
                                <span id='span_text'
                                    key={index}
                                    style={{
                                        marginRight: "5px", // Space between words
                                        display: "inline-block", // Keeps words inline
                                    }}
                                >
                                    {word}
                                </span>
                            ))}
                            <span id="uae_text" className='font-semibold'>
                                <span id="u">U</span><span id="a">A</span><span id="e">E</span><span id="period">.</span>
                            </span>
                        </p>

                        <div
                            ref={buttonsRef}
                            className={`mt-6 flex z-40 flex-col sm:flex-row gap-4 ${isInView.buttons ? "slide-in slide-in-delay-3" : ""
                                }`}
                        >
                            <button className="bg-white font-semibold rounded-full text-black px-6 py-2 hover:bg-[#fca821] hover:border-10 hover:border-white transition duration-300">
                                Out Services
                            </button>
                            <button className="bg-gray-800 bg-opacity-50 border rounded-full text-white px-6 py-2 hover:bg-transparent">
                                Get Quotes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="flex flex-col lg:flex-row-reverse">
                <div className='mx-2'><Story /></div>
                <div><AboutCardSection /></div>
            </section>
            <div className="">
                <section><TestimonialsSlider /></section>
            </div>
            <section className=" ">
                <BackToTopButton />
            </section>
        </div>
    )
}

export default About