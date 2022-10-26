import React from "react";
import Navbar from "components/Navbar/Navbar";
import { Carousel } from "flowbite-react";

const FlowbitCarousel = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Carousel slideInterval={5000}>
        <div className="bg-desktop_home_deepening_financial_inclusion h-[600px] md:h-[630px]">
          <h1>First Slid</h1>
        </div>

        <div className="bg-desktop_home_centre_of_excellence h-[600px] md:h-[630px]">
          <h1>Second Slid</h1>
        </div>
      </Carousel>
    </div>
  );
};

export default FlowbitCarousel;
