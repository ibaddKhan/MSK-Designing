import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Eaching Plate/img1.jpg";
import img2 from "../../../assets/portfolio_assets/Eaching Plate/img2.jpg";
import img3 from "../../../assets/portfolio_assets/Eaching Plate/img3.jpg";
import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const EachingPlates = () => {
  const images = [
    { id: 1, src: img1, alt: 'Acrylic Signage Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Acrylic Signage Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Acrylic Signage Image 3', bgColor: '#2ecc71' }, // Green
  ];

  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Plates"
        spanText="Eaching"
        paragraphText="Our collection of Eaching Plates is aimed at giving your space a fresh and modern look. The wide variety of signs are all custom made and are anything but ordinary."
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

export default EachingPlates