import Navbar from "../../components/Navbar/Navbar";
import bg_fig from "../../assets/hero_bg.png";
import hero_guy from "../../assets/hero_guy.png";
import "https://static.elfsight.com/platform/platform.js";

const Home = () => {
  return (
    <>
      <section className="fixed_bg">
        <div className="bg-black relative min-w-screen h-[700px]">
          <img
            src={bg_fig}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
          />

          <div className="flex justify-center items-center h-screen px-4 sm:px-8 lg:justify-center lg:flex-row">
            {/* Content Section */}
            <div className="relative z-40 px-4 sm:px-8 max-w-lg text-center lg:text-left">
              <h1 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
                <span className="block">The Modern Duo of</span>
                Printing & Digital
              </h1>
              <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
                Where Design Meets Trust. We’re more than a brand development
                company; we’re architects of memorable experiences. With
                creativity, expertise, and a commitment to excellence, we craft
                legendary brands. Explore our services in Designing, Branding,
                Printing, Signage, and Promotional Products. Join us in the
                journey of inspiration and transformation.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Our Services
                </button>
                <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">
                  Get Quotes
                </button>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative mt-6 lg:mt-0 flex items-center justify-center hidden lg:block">
              <img src={hero_guy} alt="Hero" className="w-5/6" />
            </div>
          </div>
        </div>
      </section>

      <section className="absolute">
        <div
          className="elfsight-app-ab942225-88dc-4c18-87e3-4d342f1c3fce"
          data-elfsight-app-lazy
        ></div>
      </section>
    </>
  );
};

export default Home;
