import React, { useEffect, useRef } from 'react';
import ImageSlider from '../../components/PortfolioSlider/Slider';
import SecondaryHero from '../../components/SecondaryHero/Hero';
import threeDsignage1 from '../../assets/portfolio_assets/3D Signage/img1.jpeg';
import threeDsignage2 from '../../assets/portfolio_assets/3D Signage/img2.jpeg';
import threeDsignage3 from '../../assets/portfolio_assets/3D Signage/img3.jpeg';
import threeDsignage4 from '../../assets/portfolio_assets/3D Signage/img4.jpeg';
import threeDsignage5 from '../../assets/portfolio_assets/3D Signage/img5.jpeg';
import threeDsignage6 from '../../assets/portfolio_assets/3D Signage/img6.jpeg';
import threeDsignage7 from '../../assets/portfolio_assets/3D Signage/img7.jpeg';
import threeDsignage8 from '../../assets/portfolio_assets/3D Signage/img8.jpeg';
import acrylicSignage1 from '../../assets/portfolio_assets/Acrylic Sign/img1.jpg';
import acrylicSignage2 from '../../assets/portfolio_assets/Acrylic Sign/img2.jpg';
import acrylicSignage3 from '../../assets/portfolio_assets/Acrylic Sign/img3.jpg';
import acrylicSignage4 from '../../assets/portfolio_assets/Acrylic Sign/img4.jpg';
import businessCard1 from '../../assets/portfolio_assets/Busines Card/img1.jpg';
import businessCard2 from '../../assets/portfolio_assets/Busines Card/img2.jpeg';
import businessCard3 from '../../assets/portfolio_assets/Busines Card/img3.jpg';
import businessCard4 from '../../assets/portfolio_assets/Busines Card/img4.jpg';
import constructionBoard1 from '../../assets/portfolio_assets/Condtruction/img1.jpg';
import constructionBoard2 from '../../assets/portfolio_assets/Condtruction/img2.webp';
import constructionBoard3 from '../../assets/portfolio_assets/Condtruction/img3.jpg';
import eachingPlate1 from '../../assets/portfolio_assets/Eaching Plate/img1.jpg';
import eachingPlate2 from '../../assets/portfolio_assets/Eaching Plate/img2.jpg';
import eachingPlate3 from '../../assets/portfolio_assets/Eaching Plate/img3.jpg';
import flyer1 from '../../assets/portfolio_assets/Flyer/img1.jpg';
import flyer2 from '../../assets/portfolio_assets/Flyer/img2.jpg';
import flyer3 from '../../assets/portfolio_assets/Flyer/img3.jpg';
import flyer4 from '../../assets/portfolio_assets/Flyer/img4.jpg';
import flyer5 from '../../assets/portfolio_assets/Flyer/img5.jpg';
import flyer6 from '../../assets/portfolio_assets/Flyer/img6.png';
import flyer7 from '../../assets/portfolio_assets/Flyer/img7.jpg';
import flyer8 from '../../assets/portfolio_assets/Flyer/img8.jpg';
import flyer9 from '../../assets/portfolio_assets/Flyer/img9.jpg';
import flyer10 from '../../assets/portfolio_assets/Flyer/img10.jpg';
import flyer11 from '../../assets/portfolio_assets/Flyer/img11.jpg';
import flyer12 from '../../assets/portfolio_assets/Flyer/img12.jpg';
import lightBox1 from '../../assets/portfolio_assets/Light Box/img1.jpg';
import lightBox2 from '../../assets/portfolio_assets/Light Box/img2.jpeg';
import lightBox3 from '../../assets/portfolio_assets/Light Box/img3.jpg';
import lightBox4 from '../../assets/portfolio_assets/Light Box/img4.jpg';
import rollUp1 from '../../assets/portfolio_assets/Rollup/img1.jpg';
import rollUp2 from '../../assets/portfolio_assets/Rollup/img2.webp';
import rollUp3 from '../../assets/portfolio_assets/Rollup/img3.jpg';
import rollUp4 from '../../assets/portfolio_assets/Rollup/img4.webp';
import rollUp5 from '../../assets/portfolio_assets/Rollup/img5.jpg';
import rollUp6 from '../../assets/portfolio_assets/Rollup/img6.jpg';
import signageFlex1 from '../../assets/portfolio_assets/Signage FLex/img1.jpeg';
import signageFlex2 from '../../assets/portfolio_assets/Signage FLex/img2.jpeg';
import signageFlex3 from '../../assets/portfolio_assets/Signage FLex/img3.jpeg';
import signageFlex4 from '../../assets/portfolio_assets/Signage FLex/img4.jpeg';
import signageFlex5 from '../../assets/portfolio_assets/Signage FLex/img5.jpeg';
import signageFlex6 from '../../assets/portfolio_assets/Signage FLex/img6.jpeg';
import signageFlex7 from '../../assets/portfolio_assets/Signage FLex/img7.jpeg';
import signageFlex8 from '../../assets/portfolio_assets/Signage FLex/img8.jpeg';
import signageFlex9 from '../../assets/portfolio_assets/Signage FLex/img9.jpeg';
import signageFlex10 from '../../assets/portfolio_assets/Signage FLex/img10.jpeg';
import signageFlex11 from '../../assets/portfolio_assets/Signage FLex/img11.jpeg';
import sticker1 from '../../assets/portfolio_assets/Sticker/img1.webp';
import sticker2 from '../../assets/portfolio_assets/Sticker/img2.webp';
import sticker3 from '../../assets/portfolio_assets/Sticker/img3.jpg';
import sticker4 from '../../assets/portfolio_assets/Sticker/img4.jpg';
import sticker5 from '../../assets/portfolio_assets/Sticker/img5.jpg';
import sticker6 from '../../assets/portfolio_assets/Sticker/img6.jpg';
import vehicleBranding1 from '../../assets/portfolio_assets/Vehcle Branding/img1.png';
import vehicleBranding2 from '../../assets/portfolio_assets/Vehcle Branding/img2.jpg';
import vehicleBranding3 from '../../assets/portfolio_assets/Vehcle Branding/img3.jpg';
import vehicleBranding4 from '../../assets/portfolio_assets/Vehcle Branding/img4.jpg';
import vehicleBranding5 from '../../assets/portfolio_assets/Vehcle Branding/img5.jpeg';
import { Link } from 'react-router-dom';
import TestimonialsSlider from '../../components/Testimonials/Testimonials';

const signageImgs = [threeDsignage1, threeDsignage2, threeDsignage3, threeDsignage4, threeDsignage5, threeDsignage6, threeDsignage7, threeDsignage8];
const acrylicSignageImgs = [acrylicSignage1, acrylicSignage2, acrylicSignage3, acrylicSignage4];
const businessCardImgs = [businessCard1, businessCard2, businessCard3, businessCard4];
const constructionBoardImgs = [constructionBoard1, constructionBoard2, constructionBoard3];
const eachingPlateImgs = [eachingPlate1, eachingPlate2, eachingPlate3];
const flyerImgs = [flyer1, flyer2, flyer3, flyer4, flyer5, flyer6, flyer7, flyer8, flyer9, flyer10, flyer11, flyer12];
const lightBoxImgs = [lightBox1, lightBox2, lightBox3, lightBox4];
const rollUpImgs = [rollUp1, rollUp2, rollUp3, rollUp4, rollUp5, rollUp6];
const signageFlexImgs = [
    signageFlex1,
    signageFlex2,
    signageFlex3,
    signageFlex4,
    signageFlex5,
    signageFlex6,
    signageFlex7,
    signageFlex8,
    signageFlex9,
    signageFlex10,
    signageFlex11,
];
const stickerImgs = [sticker1, sticker2, sticker3, sticker4, sticker5, sticker6];
const vehicleBrandingImgs = [
    vehicleBranding1,
    vehicleBranding2,
    vehicleBranding3,
    vehicleBranding4,
    vehicleBranding5,
];

const SliderSection = ({ id, title, subtitle, images, route, refProp }) => (
    <div
        id={id}
        ref={refProp}
        className="p-4 opacity-0 transform scale-[0.8] translate-x-[50px]"
        style={{
            transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
    >
        <div className='flex items-center justify-between'>
            <h2 className="text-4xl mt-10 mb-10 md:text-5xl font-bold text-white ml-0 md:ml-10 text-center md:text-start">
                <span className="text-yellow-500">{title}</span> {subtitle}
            </h2>
            <Link to={route} className='text-white ml-2 md:mr-10 cursor-pointer'>Lern more {">"}</Link>
        </div>
        <ImageSlider images={images} />
    </div>
);

const Portfolio = () => {
    const sectionRefs = useRef([]); // Array of refs for all sections

    useEffect(() => {
        const observerOptions = {
            threshold: 0.5, // Trigger animation when 50% of the element is in view
        };

        const animateOnScroll = (entries, observer) => {
            entries.forEach((entry) => {
                const target = entry.target;
                if (entry.isIntersecting) {
                    target.style.opacity = 1;
                    target.style.transform = 'translateX(0) scale(1)';
                    // Stop observing this target after animation starts
                    observer.unobserve(target);
                } else {
                    target.style.opacity = 0;
                    target.style.transform = 'translateX(50px) scale(0.8)';
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, observerOptions);

        // Attach observer to all refs
        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const sections = [
        { id: "3d_signage_div", title: "3D", subtitle: "Signage", images: signageImgs, route: "/services/3dSignage" },
        { id: "acrylic_signage_div", title: "Acrylic", subtitle: "Signage", images: acrylicSignageImgs, route: "/services/acrylic_signage" },
        { id: "business_card_div", title: "Business", subtitle: "Cards", images: businessCardImgs, route: "/services/business_cards" },
        { id: "construction_board_div", title: "Construction", subtitle: "Boards", images: constructionBoardImgs, route: "/services/construction_boards" },
        { id: "eaching_plate_div", title: "Eaching", subtitle: "Plates", images: eachingPlateImgs, route: "/services/eaching_plates" },
        { id: "flyer_div", title: "Flyers", subtitle: "Printing & Designing", images: flyerImgs, route: "/services/flyers" },
        { id: "light_box_div", title: "Light", subtitle: "Boxes", images: lightBoxImgs, route: "/services/light_boxes" },
        { id: "roll_up_div", title: "Roll-Up", subtitle: "Banners", images: rollUpImgs, route: "/services/roll_up_banners" },
        { id: "signage_flex_div", title: "Signage", subtitle: "Flex", images: signageFlexImgs, route: "/services/signage_flex" },
        { id: "sticker_div", title: "Stickers", subtitle: "Printing & Designing", images: stickerImgs, route: "/services/stickers" },
        { id: "vehicle_branding_div", title: "Vehicle", subtitle: "Branding", images: vehicleBrandingImgs, route: "/services/vehicle_branding" },

    ];

    return (
        <div className='overflow-x-hidden'>
            <section className="fixed_bg relative z-0">
                <SecondaryHero />
            </section>
            <section>
                <h2 className="text-5xl md:text-6xl font-bold text-center my-12">
                    OUR <span className="text-yellow-500 "> WORK</span>
                </h2>
                <div className="bg-[#0C0C0C]">
                    {sections.map(({ id, title, subtitle, images, route }, index) => (
                        <div
                            key={id}
                            ref={(el) => (sectionRefs.current[index] = el)} // Assign ref dynamically
                            id={id}
                            className="p-4 opacity-0 transform scale-[0.8] translate-x-[50px]"
                            style={{
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            <div className='flex flex-col md:flex-row items-center justify-between'>
                                <h2 className="text-4xl mt-10 mb-4 md:mb-10 md:text-5xl font-bold text-white ml-0 md:ml-10 text-center md:text-start">
                                    <span className="text-yellow-500">{title}</span> {subtitle}
                                </h2>
                                <Link to={route} className='text-white ml-2 mb-4 md:mb-0 md:mr-10 cursor-pointer'>Lern more {">"}</Link>
                            </div>
                            <ImageSlider images={images} />
                        </div>
                    ))}
                </div>
            </section>
            <TestimonialsSlider />
        </div>
    );
};

export default Portfolio;
