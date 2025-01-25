import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
import ImageGallery from '../../../components/ImageGallery/ImageGalleryComp';
import img1 from "../../../assets/portfolio_assets/3D Signage/img1.jpeg";
import img2 from "../../../assets/portfolio_assets/3D Signage/img2.jpeg";
import img3 from "../../../assets/portfolio_assets/3D Signage/img3.jpeg";
import img4 from "../../../assets/portfolio_assets/3D Signage/img4.jpeg";
import img5 from "../../../assets/portfolio_assets/3D Signage/img5.jpeg";
import img6 from "../../../assets/portfolio_assets/3D Signage/img6.jpeg";
import img7 from "../../../assets/portfolio_assets/3D Signage/img7.jpeg";
import img8 from "../../../assets/portfolio_assets/3D Signage/img8.jpeg";
import TestimonialsSlider from '../../../components/Testimonials/Testimonials';


const ThreeDSignage = () => {
    const images = [
        { id: 1, src: img1, alt: '3D Signage Image 1', bgColor: '#3498db' }, // Blue
        { id: 2, src: img2, alt: '3D Signage Image 2', bgColor: '#e74c3c' }, // Red
        { id: 3, src: img3, alt: '3D Signage Image 3', bgColor: '#2ecc71' }, // Green
        { id: 4, src: img4, alt: '3D Signage Image 4', bgColor: '#9b59b6' }, // Purple
        { id: 5, src: img5, alt: '3D Signage Image 5', bgColor: '#f1c40f' }, // Yellow
        { id: 6, src: img6, alt: '3D Signage Image 6', bgColor: '#e67e22' }, // Orange
        { id: 7, src: img7, alt: '3D Signage Image 7', bgColor: '#1abc9c' }, // Teal
        { id: 8, src: img8, alt: '3D Signage Image 8', bgColor: '#34495e' }, // Dark Blue
    ];

    return (
        <div className='overflow-x-hidden'>
            <ServicePageComponent
                bgFig={heroBg}
                heading="Signage"
                spanText="3D"
                paragraphText="Our attention-grabbing 3D signage solutions, We do stunning animated designs that truly stand out."
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

export default ThreeDSignage