import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Busines Card/img1.jpg";
import img2 from "../../../assets/portfolio_assets/Busines Card/img2.jpeg";
import img3 from "../../../assets/portfolio_assets/Busines Card/img3.jpg";
import img4 from "../../../assets/portfolio_assets/Busines Card/img4.jpg";
import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const BusinessCards = () => {
  const images = [
    { id: 1, src: img1, alt: 'Acrylic Signage Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Acrylic Signage Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Acrylic Signage Image 3', bgColor: '#2ecc71' }, // Green
    { id: 4, src: img4, alt: 'Acrylic Signage Image 4', bgColor: '#9b59b6' }, // Purple
  ];

  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Cards"
        spanText="Business"
        paragraphText="Get noticed and showcase your all-important brand with expertly crafted business cards that represent your company or local brand identity to stand out from others."
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

export default BusinessCards