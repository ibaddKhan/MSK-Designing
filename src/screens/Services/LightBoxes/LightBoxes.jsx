import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Light Box/img1.jpg";
import img2 from "../../../assets/portfolio_assets/Light Box/img2.jpeg";
import img3 from "../../../assets/portfolio_assets/Light Box/img3.jpg";
import img4 from "../../../assets/portfolio_assets/Light Box/img4.jpg";
import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const LightBoxes = () => {
  const images = [
    { id: 1, src: img1, alt: 'Light Box Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Light Box Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Light Box Image 3', bgColor: '#2ecc71' }, // Green
    { id: 3, src: img4, alt: 'Light Box Image 4', bgColor: '#2ecc71' }, // Green
  ];

  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Boxes"
        spanText="Light"
        paragraphText="Our custom Light Boxes bring a sleek, modern vibe to any business or space, making your brand shine like never before."
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

export default LightBoxes