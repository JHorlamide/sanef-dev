import React from "react";
import "tw-elements";
import { useNavigate } from "react-router-dom";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import {
  OUR_PARTNERS,
  ABOUT_US,
  VALUE_ADDED_SERVICES
} from "routes/ROUTES_CONSTANTS";

import style from "../style.module.css";

const Carousel = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <header
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="inline-block carousel-inner overflow-hidden">
        {/* First Slid */}
        <div
          className="bg-desktop_home_deepening_financial_inclusion bg-center bg-cover
          bg-no-repeat items-center carousel-item active w-screen float-left py-40 md:py-48"
        >
          <div className="container mx-auto flex flex-col space-y-10 px-5">
            <h1
              className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold
              md:max-w-6xl md:leading-snug md:text-[45px]"
            >
              Deepening Financial Inclusion through Partnerships and
              Collaborations
            </h1>

            <CustomBtn
              className="text-white text-[20px] font-medium rounded-full
              bg-buttonColor px-20 py-3 w-fit"
              onClick={() => handleNavigate(OUR_PARTNERS)}
            >
              Partner with Us
            </CustomBtn>
          </div>
        </div>

        {/* Second Slid */}
        <div
          className={`bg-desktop_home_centre_of_excellence bg-center bg-cover bg-no-repeat
            items-center carousel-item relative w-screen float-left py-40 md:py-48`}
        >
          <div className="container mx-auto flex flex-col space-y-10 px-5">
            <h1
              className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold
                md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]"
            >
              Centre of Excellence for Financial Inclusion best practices
            </h1>

            <CustomBtn
              className="text-white text-[20px] font-medium rounded-full
                bg-buttonColor px-20 py-3 w-fit"
              onClick={() => handleNavigate(ABOUT_US)}
            >
              Learn More
            </CustomBtn>
          </div>
        </div>

        {/* Third Slid */}
        <div
          className={`bg-desktop_home_empowering_the_ecosystem bg-center bg-cover 
          bg-no-repeat items-center carousel-item relative w-screen float-left py-40
          md:py-48`}
        >
          <div className="container mx-auto flex flex-col space-y-10 px-5">
            <h1
              className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold
                md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]"
            >
              Empowering the Ecosystem through Innovative Technology
            </h1>

            <CustomBtn
              className="text-white text-[20px] font-medium rounded-full
                bg-buttonColor px-20 py-3 w-fit"
              onClick={() => handleNavigate(VALUE_ADDED_SERVICES)}
            >
              Learn More
            </CustomBtn>
          </div>
        </div>

        {/* Forth Slid */}
        <div
          className={`bg-desktop_home_enhancing_knowledge bg-center bg-cover bg-no-repeat
          items-center carousel-item relative w-screen float-left py-40 md:py-48`}
        >
          <div className="container mx-auto flex flex-col space-y-10 px-5">
            <h1
              className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold
                md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]"
            >
              Enhancing knowledge through Impactful Financial Literacy
              Programmes
            </h1>

            <CustomBtn
              className="text-white text-[20px] font-medium rounded-full
                bg-buttonColor px-20 py-3 w-fit"
              onClick={() => handleNavigate(VALUE_ADDED_SERVICES)}
            >
              Learn More
            </CustomBtn>
          </div>
        </div>
      </div>

      {/* Carousel Indicator/Navigator */}
      <div
        className="carousel-indicators -mt-3 md:mt-0 flex justify-center items-end
        md:justify-end lg:items-end"
      >
        <button
          id={`${style.carousel_indicator_button}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
          className="active"
        ></button>

        <button
          id={`${style.carousel_indicator_button}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          id={`${style.carousel_indicator_button}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

        <button
          id={`${style.carousel_indicator_button}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
    </header>
  );
};

export default Carousel;
