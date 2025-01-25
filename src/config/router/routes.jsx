import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Portfolio from "../../screens/Portfolio/Portfolio";
import ScrollToTop from "../../components/ScrollToTop/scroll";
import ThreeDSignage from "../../screens/Services/3dSignage/3dSignage";
import AcrylicSignage from "../../screens/Services/AcrylicSignage/AcrylicSignage";
import BusinessCards from "../../screens/Services/BusinessCards/BusinessCards";
import ConstructionBoards from "../../screens/Services/ConstructionBoard/ConstructionBoards";
import EachingPlates from "../../screens/Services/EachingPlates/EachingPlates";
import Flyers from "../../screens/Services/Flyers/Flyers";
import LightBoxes from "../../screens/Services/LightBoxes/LightBoxes";
import Rollups from "../../screens/Services/Rollups/Rollups";
import SignageFlex from "../../screens/Services/SignageFlex/SignageFlex";
import Stickers from "../../screens/Services/Stickers/Stickers";
import VehicleBranding from "../../screens/Services/VehicleBranding/VehicleBranding";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/3dSignage" element={<ThreeDSignage />} />
          <Route path="/services/acrylic_signage" element={<AcrylicSignage />} />
          <Route path="/services/business_cards" element={<BusinessCards />} />
          <Route path="/services/construction_boards" element={<ConstructionBoards />} />
          <Route path="/services/eaching_plates" element={<EachingPlates />} />
          <Route path="/services/flyers" element={<Flyers />} />
          <Route path="/services/light_boxes" element={<LightBoxes />} />
          <Route path="/services/roll_up_banners" element={<Rollups />} />
          <Route path="/services/signage_flex" element={<SignageFlex />} />
          <Route path="/services/stickers" element={<Stickers />} />
          <Route path="/services/vehicle_branding" element={<VehicleBranding />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routers;
