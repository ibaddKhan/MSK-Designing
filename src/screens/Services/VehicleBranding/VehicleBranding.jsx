import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Vehcle Branding/img1.png";
import img2 from "../../../assets/portfolio_assets/Vehcle Branding/img2.jpg";
import img3 from "../../../assets/portfolio_assets/Vehcle Branding/img3.jpg";
import img4 from "../../../assets/portfolio_assets/Vehcle Branding/img4.jpg";
import img5 from "../../../assets/portfolio_assets/Vehcle Branding/img5.jpeg";

import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const VehicleBranding = () => {
  const images = [
    { id: 1, src: img1, alt: 'Vehicle Branding Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Vehicle Branding Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Vehicle Branding Image 3', bgColor: '#2ecc71' }, // Green
    { id: 4, src: img4, alt: 'Vehicle Branding Image 4', bgColor: '#f1c40f' }, // Yellow
    { id: 5, src: img5, alt: 'Vehicle Branding Image 5', bgColor: '#9b59b6' }, // Purple
  ];


  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        spanText="Vehicle"
        heading="Branding"
        paragraphText="Turn every vehicle into a moving billboard, Whether it’s a single car or an entire fleet, we deliver branding that turns heads. Creative designs, top-notch materials, and lasting impressions—built to drive your business forward."
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

export default VehicleBranding