import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Condtruction/img1.jpg";
import img2 from "../../../assets/portfolio_assets/Condtruction/img2.webp";
import img3 from "../../../assets/portfolio_assets/Condtruction/img3.jpg";
import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const ConstructionBoards = () => {
  const images = [
    { id: 1, src: img1, alt: 'Construction Boards Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Construction Boards  Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Construction Boards  Image 3', bgColor: '#2ecc71' }, // Green
  ];

  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Construction"
        spanText="Boards"
        paragraphText="Make a bold statement with durable, expertly designed construction boards that showcase your project and brand with confidence."
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

export default ConstructionBoards