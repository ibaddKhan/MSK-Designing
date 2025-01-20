import React from 'react';
import ImageSlider from '../../components/PortfolioSlider/Slider';
import SecondaryHero from '../../components/SecondaryHero/Hero';
import img1 from '../../assets/portfolio_assets/3D Signage/img1.jpeg';
import img2 from '../../assets/portfolio_assets/3D Signage/img2.jpeg';
import img3 from '../../assets/portfolio_assets/3D Signage/img3.jpeg';
import img4 from '../../assets/portfolio_assets/3D Signage/img4.jpeg';
import img5 from '../../assets/portfolio_assets/3D Signage/img5.jpeg';
import img6 from '../../assets/portfolio_assets/3D Signage/img6.jpeg';
import img7 from '../../assets/portfolio_assets/3D Signage/img7.jpeg';
import img8 from '../../assets/portfolio_assets/3D Signage/img8.jpeg';

const Portfolio = () => {
    const signageImgs = [img1, img2, img3, img4, img5, img6, img7, img8];
    return (
        <>
            <section className="fixed_bg  relative z-0">
                <SecondaryHero />
            </section>
            <section >
                <h2 className="text-5xl md:text-6xl font-bold text-center my-12">
                    OUR <span className="text-yellow-500 "> WORK</span>
                </h2>
                <div className='bg-[#0C0C0C] '>
                    <div id='3d_signage_div' className="p-4 mt-10">
                        <h2 className="text-4xl mt-10 mb-10 md:text-5xl  font-bold text-white  ml-0 md:ml-10 text-center md:text-start ">
                            <span className="text-yellow-500 ">3D</span> Signage
                        </h2>
                        <ImageSlider images={signageImgs} />
                    </div>
                    <div id='acrylic_signage_div' className="p-4">
                        <h2 className="text-4xl mt-10 mb-10 md:text-5xl  font-bold text-white  ml-0 md:ml-10 text-center md:text-start ">
                            <span className="text-yellow-500 ">3D</span> Signage
                        </h2>
                        <ImageSlider images={signageImgs} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
