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


const Portfolio = () => {
    const signageRef = useRef(null);
    const acrylicRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Progress tracking in steps of 1%
        };

        const animateOnScroll = (entries) => {
            entries.forEach((entry) => {
                const progress = entry.intersectionRatio;
                const target = entry.target;

                if (progress > 0) {
                    const opacity = progress;
                    const transform = target.id === '3d_signage_div'
                        ? `translateX(${(1 - progress) * -50}px) scale(${0.8 + progress * 0.2})`
                        : `translateX(${(1 - progress) * 50}px) scale(${0.8 + progress * 0.2})`;

                    // Only update styles if there's a change
                    target.style.opacity = opacity;
                    target.style.transform = transform;
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, observerOptions);

        // Observe targets
        if (signageRef.current) observer.observe(signageRef.current);
        if (acrylicRef.current) observer.observe(acrylicRef.current);

        return () => {
            // Cleanup observer
            if (signageRef.current) observer.unobserve(signageRef.current);
            if (acrylicRef.current) observer.unobserve(acrylicRef.current);
        };
    }, []);

    const signageImgs = [threeDsignage1, threeDsignage2, threeDsignage3, threeDsignage4, threeDsignage5, threeDsignage6, threeDsignage7, threeDsignage8];
    const acrylicSignageImgs = [acrylicSignage1, acrylicSignage2, acrylicSignage3, acrylicSignage4];
    const businessCardImgs = [businessCard1, businessCard2, businessCard3, businessCard4];
    const constructionBoardImgs = [constructionBoard1, constructionBoard2, constructionBoard3];
    const eachingPlateImgs = [eachingPlate1, eachingPlate2, eachingPlate3];
    const flyerImgs = [flyer1, flyer2, flyer3, flyer4, flyer5, flyer6, flyer7, flyer8, flyer9, flyer10, flyer11, flyer12];

    return (
        <>
            <section className="fixed_bg relative z-0">
                <SecondaryHero />
            </section>
            <section>
                <h2 className="text-5xl md:text-6xl font-bold text-center my-12">
                    OUR <span className="text-yellow-500 "> WORK</span>
                </h2>
                <div className="bg-[#0C0C0C]">
                    <div
                        id="3d_signage_div"
                        ref={signageRef}
                        className="p-4 mt-10 opacity-0 transform scale-[0.8] translate-x-[-50px]"
                        style={{
                            transition: 'opacity 0.3s ease, transform 0.3s ease',
                        }}
                    >
                        <h2 className="text-4xl mt-10 mb-10 md:text-5xl font-bold text-white ml-0 md:ml-10 text-center md:text-start">
                            <span className="text-yellow-500">3D</span> Signage
                        </h2>
                        <ImageSlider images={signageImgs} />
                    </div>
                    <div
                        id="acrylic_signage_div"
                        ref={acrylicRef}
                        className="p-4 opacity-0 transform scale-[0.8] translate-x-[50px]"
                        style={{
                            transition: 'opacity 0.3s ease, transform 0.3s ease',
                        }}
                    >
                        <h2 className="text-4xl mt-10 mb-10 md:text-5xl font-bold text-white ml-0 md:ml-10 text-center md:text-start">
                            <span className="text-yellow-500">Acrylic</span> Signage
                        </h2>
                        <ImageSlider images={acrylicSignageImgs} />
                    </div>

                </div>
            </section>
        </>
    );
};

export default Portfolio;
