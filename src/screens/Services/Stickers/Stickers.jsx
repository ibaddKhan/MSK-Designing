import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Sticker/img1.webp";
import img2 from "../../../assets/portfolio_assets/Sticker/img2.webp";
import img3 from "../../../assets/portfolio_assets/Sticker/img3.jpg";
import img4 from "../../../assets/portfolio_assets/Sticker/img4.jpg";
import img5 from "../../../assets/portfolio_assets/Sticker/img5.jpg";
import img6 from "../../../assets/portfolio_assets/Sticker/img6.jpg";
import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const Stickers = () => {
  const images = [
    { id: 1, src: img1, alt: 'Sticker Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Sticker Image 2', bgColor: '#e74c3c' }, // Red
    { id: 3, src: img3, alt: 'Sticker Image 3', bgColor: '#2ecc71' }, // Green
    { id: 4, src: img4, alt: 'Sticker Image 4', bgColor: '#2ecc71' }, // Green
    { id: 5, src: img5, alt: 'Sticker Image 4', bgColor: '#2ecc71' }, // Green
    { id: 6, src: img6, alt: 'Sticker Image 4', bgColor: '#2ecc71' }, // Green
  ];

  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Stickers"
        spanText="Flex"
        paragraphText="From offices to schools and shops, our Flex Stickers are crafted to fit your needs. Bold designs, premium quality, and lasting impressions—tailored just for you."
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

export default Stickers