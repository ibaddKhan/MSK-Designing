import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/Flyer/img1.jpg";
import img2 from "../../../assets/portfolio_assets/Flyer/img2.jpg";
import img3 from "../../../assets/portfolio_assets/Flyer/img3.jpg";
import img4 from "../../../assets/portfolio_assets/Flyer/img4.jpg";
import img5 from "../../../assets/portfolio_assets/Flyer/img5.jpg";
import img6 from "../../../assets/portfolio_assets/Flyer/img6.png";
import img7 from "../../../assets/portfolio_assets/Flyer/img7.jpg";
import img8 from "../../../assets/portfolio_assets/Flyer/img8.jpg";
import img9 from "../../../assets/portfolio_assets/Flyer/img9.jpg";
import img10 from "../../../assets/portfolio_assets/Flyer/img10.jpg";
import img11 from "../../../assets/portfolio_assets/Flyer/img11.jpg";
import img12 from "../../../assets/portfolio_assets/Flyer/img12.jpg";


import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const Flyers = () => {
  const images = [
    { id: 1, src: img1, alt: 'Flyer Image 1', bgColor: '#3498db' }, // Blue
    { id: 2, src: img2, alt: 'Flyer Image 2', bgColor: '#2ecc71' }, // Green
    { id: 3, src: img3, alt: 'Flyer Image 3', bgColor: '#e74c3c' }, // Red
    { id: 4, src: img4, alt: 'Flyer Image 4', bgColor: '#9b59b6' }, // Purple
    { id: 5, src: img5, alt: 'Flyer Image 5', bgColor: '#f1c40f' }, // Yellow
    { id: 6, src: img6, alt: 'Flyer Image 6', bgColor: '#1abc9c' }, // Teal
    { id: 7, src: img7, alt: 'Flyer Image 7', bgColor: '#34495e' }, // Dark Blue
    { id: 8, src: img8, alt: 'Flyer Image 8', bgColor: '#d35400' }, // Orange
    { id: 9, src: img9, alt: 'Flyer Image 9', bgColor: '#7f8c8d' }, // Gray
    { id: 10, src: img10, alt: 'Flyer Image 10', bgColor: '#2980b9' }, // Blue
    { id: 11, src: img11, alt: 'Flyer Image 11', bgColor: '#16a085' }, // Greenish Teal
    { id: 12, src: img12, alt: 'Flyer Image 12', bgColor: '#8e44ad' }, // Purple
  ];


  return (
    <div className='overflow-x-hidden'>
      <ServicePageComponent
        bgFig={heroBg}
        heading="Printing"
        spanText="Flyers"
        paragraphText="Designing and Printing attention-grabbing Flyers that speak louder than words."
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

export default Flyers