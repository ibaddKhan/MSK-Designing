import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/Home/Home";
import Services from "../../screens/Services/Services";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Portfolio from "../../screens/Portfolio/Portfolio";
import ScrollToTop from "../../components/ScrollToTop/scroll";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routers;
