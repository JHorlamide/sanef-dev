import React from "react";
import "tw-elements";
import {
  DEEPENING_FINANCIAL,
  CENTER_OF_EXCELLENCE,
  EMPOWERING_ECOSYSTEM,
  ENHANCING_KNOWLEDGE
} from "assets/images";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import { useNavigate } from "react-router-dom";
import {
  OUR_PARTNERS,
  ABOUT_US,
  VALUE_ADDED_SERVICES
} from "routes/ROUTES_CONSTANTS";
import style from "../style.module.css";

const Slider = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      {/* CAROUSEL INDICATOR */}
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          id={`${style.carousel_indicator_button}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
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

      {/* CAROUSEL INDICATOR */}
      <div
        className={`${style.home_header} carousel-inner relative w-full overflow-hidden h-[650px] md:h-[630px]`}
      >
        {/* First Slid */}
        <div className="carousel-item active relative float-left w-full">
          <img src={DEEPENING_FINANCIAL} className="block w-full" alt="..." />

          <div className="carousel-caption md:block absolute left-0 md:w-[1000px] mx-auto md:top-56 text-left">
            <h1 className="text-4xl text-left text-white mb-3 font-extrabold md:leading-snug md:text-[45px]">
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
        <div className="carousel-item relative float-left w-full">
          <img src={CENTER_OF_EXCELLENCE} className="block w-full" alt="..." />

          <div className="carousel-caption md:block absolute left-0 md:w-[1000px] mx-auto md:top-56 text-left px-10">
            <h1 className="text-4xl text-left text-white mb-3 font-extrabold md:leading-snug md:text-[45px]">
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
        <div className="carousel-item relative float-left w-full">
          <img src={EMPOWERING_ECOSYSTEM} className="block w-full" alt="..." />

          <div className="carousel-caption md:block absolute left-0 md:w-[1000px] mx-auto md:top-56 text-left px-10">
            <h1 className="text-4xl text-left text-white mb-3 font-extrabold md:leading-snug md:text-[45px]">
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

        {/* Fourth Slid */}
        <div className="carousel-item relative float-left w-full">
          <img src={ENHANCING_KNOWLEDGE} className="block w-full" alt="..." />

          <div className="carousel-caption md:block absolute left-0 md:w-[1000px] mx-auto md:top-56 text-left px-10">
            <h1 className="text-4xl text-left text-white mb-3 font-extrabold md:leading-snug md:text-[45px]">
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
    </div>
  );
};

export default Slider;
