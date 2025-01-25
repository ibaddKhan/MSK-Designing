import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Signage FLex/img1.jpeg";
import img2 from "../../../assets/portfolio_assets/Signage FLex/img2.jpeg";
import img3 from "../../../assets/portfolio_assets/Signage FLex/img3.jpeg";
import img4 from "../../../assets/portfolio_assets/Signage FLex/img4.jpeg";
import img5 from "../../../assets/portfolio_assets/Signage FLex/img5.jpeg";
import img6 from "../../../assets/portfolio_assets/Signage FLex/img6.jpeg";
import img7 from "../../../assets/portfolio_assets/Signage FLex/img7.jpeg";
import img8 from "../../../assets/portfolio_assets/Signage FLex/img8.jpeg";
import img9 from "../../../assets/portfolio_assets/Signage FLex/img9.jpeg";
import img10 from "../../../assets/portfolio_assets/Signage FLex/img10.jpeg";
import img11 from "../../../assets/portfolio_assets/Signage FLex/img11.jpeg";

import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const SignageFlex = () => {
  const images = [
    { id: 1, src: img1, alt: 'Signage FLex Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Signage FLex Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Signage FLex Image 3', bgColor: '#2ecc71' }, // Green
    { id: 4, src: img4, alt: 'Signage FLex Image 4', bgColor: '#9b59b6' }, // Purple
    { id: 5, src: img5, alt: 'Signage FLex Image 5', bgColor: '#f1c40f' }, // Yellow
    { id: 6, src: img6, alt: 'Signage FLex Image 6', bgColor: '#1abc9c' }, // Teal
    { id: 7, src: img7, alt: 'Signage FLex Image 7', bgColor: '#34495e' }, // Dark Blue
    { id: 8, src: img8, alt: 'Signage FLex Image 8', bgColor: '#e67e22' }, // Orange
    { id: 9, src: img9, alt: 'Signage FLex Image 9', bgColor: '#ecf0f1' }, // Light Gray
    { id: 10, src: img10, alt: 'Signage FLex Image 10', bgColor: '#95a5a6' }, // Gray
    { id: 11, src: img11, alt: 'Signage FLex Image 11', bgColor: '#7f8c8d' }, // Dark Gray
  ];

  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Flex"
        spanText="Signage"
        paragraphText="Want to grab attention? Our signage flex is easy to set up, looks amazing, and helps your brand to grab attention."
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

export default SignageFlex