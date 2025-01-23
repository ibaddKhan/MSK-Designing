
import "https://static.elfsight.com/platform/platform.js";
import CardSection from "../../components/Satisfaction-card/Cards";
import Marquee from "../../components/Partners/MaqueeAnimation";
import OurServices from "../../components/ServicesCard/SeviceCard";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/FeatureCards/FeatureCards";
import ContactForm from "../../components/ContactForm/ContactForm";
import TestimonialsSlider from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <section className="fixed_bg  relative z-0">
        <Hero />
      </section>
      <section className="relative z-10 ">
        <CardSection />
      </section>
      <section className="relative z-10 ">
        <Marquee />
      </section>
      <section className="relative z-10 ">
        <OurServices />
      </section>
      <section className="relative z-10 ">
        <TestimonialsSlider />
      </section>
      <section className="relative z-10 ">
        <Features />
      </section>
      <section className="relative z-10 ">
        <ContactForm />
      </section>
      <section className="absolute z-20">
        <div
          className="elfsight-app-ab942225-88dc-4c18-87e3-4d342f1c3fce"
          data-elfsight-app-lazy
        ></div>
      </section>
    </>
  );
};

export default Home;
