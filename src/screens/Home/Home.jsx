import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import bg_fig from "../../assets/hero_bg.png";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-black  h-[700px]">
          <img
            src={bg_fig}
            alt="bg_cover_img"
            className="absolute top-0 left-0 w-full h-full opacity-15 z-0"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
