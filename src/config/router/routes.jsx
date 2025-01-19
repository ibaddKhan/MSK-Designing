import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/Home/Home";
import Services from "../../screens/Services/Services";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routers;
