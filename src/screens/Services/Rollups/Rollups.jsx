import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Rollup/img1.jpg";
import img2 from "../../../assets/portfolio_assets/Rollup/img2.webp";
import img3 from "../../../assets/portfolio_assets/Rollup/img3.jpg";
import img4 from "../../../assets/portfolio_assets/Rollup/img4.webp";
import img5 from "../../../assets/portfolio_assets/Rollup/img5.jpg";
import img6 from "../../../assets/portfolio_assets/Rollup/img6.jpg";
import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const RollUps = () => {
  const images = [
    { id: 1, src: img1, alt: 'Rollup Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Rollup Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Rollup Image 3', bgColor: '#2ecc71' }, // Green
    { id: 4, src: img4, alt: 'Rollup Image 4', bgColor: '#2ecc71' }, // Green
    { id: 5, src: img5, alt: 'Rollup Image 4', bgColor: '#2ecc71' }, // Green
    { id: 6, src: img6, alt: 'Rollup Image 4', bgColor: '#2ecc71' }, // Green
  ];

  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Banners"
        spanText="RollUps"
        paragraphText="Stand out from the crowd with Rollup Banners that are easy to set up, visually stunning, and perfectly designed to represent your brand."
        button1Text="Our Services"
        button2Text="Get Quotes"
      />
      <ImageGallery images={images} />
      <div className="">
        <section><TestimonialsSlider /></section>
      </div>
    </div>
  )
}

export default RollUps