import React from 'react'
import ServicePageComponent from '../../../components/ServicePagesComp/ServicePageComp'
import heroBg from "../../../assets/hero_bg.png";
const ThreeDSignage = () => {
    return (
        <>
            <ServicePageComponent
                bgFig={heroBg}
                heading="Printing & Digital"
                spanText="The Modern Duo of"
                paragraphText="Where Design Meets Trust. We’re more than a brand development company; we’re architects of memorable experiences..."
                button1Text="Our Services"
                button2Text="Get Quotes"
            />


        </>
    )
}

export default ThreeDSignage