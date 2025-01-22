import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Portfolio from "../../screens/Portfolio/Portfolio";
import ScrollToTop from "../../components/ScrollToTop/scroll";
import ThreeDSignage from "../../screens/Services/3dSignage/3dSignage";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/3dSignage" element={<ThreeDSignage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routers;
