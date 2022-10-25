import React, { Fragment } from "react";
import "tw-elements";
import { useNavigate } from "react-router-dom";
import {
  OUR_PARTNERS,
  ABOUT_US,
  VALUE_ADDED_SERVICES
} from "routes/ROUTES_CONSTANTS";
import CustomBtn from "../CustomBtn/CustomBtn";
import "./style.css";
import { DOTS } from "assets/icons";
import Image from "../Image/Image";

const Carousel = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative py-12 px-5 md:px-20 md:py-20 lg:px-48 lg:py-20"
        // className="container carousel slide relative mx-auto space-y-10"
        data-bs-ride="carousel"
      >
        {/* CAROUSEL SLIDER CONTAINER */}
        <div className="carousel-inner relative overflow-hidden">
          {/* 1st Slid */}
          <div className="w-full carousel-item active float-left">
            <div className="flex flex-col space-y-10">
              <h1 className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
                Deepening Financial Inclusion through Partnerships and
                Collaborations
              </h1>

              <CustomBtn
                className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3 w-fit"
                onClick={() => handleNavigate(OUR_PARTNERS)}
              >
                Partner with Us
              </CustomBtn>
            </div>
          </div>

          {/* 2nd Slid */}
          <div className="w-full carousel-item relative float-left">
            <div className="flex flex-col space-y-10">
              <h1 className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
                Centre of Excellence for Financial Inclusion best practices
              </h1>

              <CustomBtn
                className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3 w-fit"
                onClick={() => handleNavigate(ABOUT_US)}
              >
                Learn More
              </CustomBtn>
            </div>
          </div>

          {/* 3rd Slid */}
          <div className="w-full carousel-item relative float-left">
            <div className="flex flex-col space-y-10">
              <h1 className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
                Empowering the Ecosystem through Innovative Technology
              </h1>

              <CustomBtn
                className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3 w-fit"
                onClick={() => handleNavigate(VALUE_ADDED_SERVICES)}
              >
                Learn More
              </CustomBtn>
            </div>
          </div>

          {/* 4th Slid */}
          <div className="w-full carousel-item relative float-left">
            <div className="flex flex-col space-y-10">
              <h1 className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
                Enhancing knowledge through Impactful Financial Literacy
                Programmes
              </h1>
              <CustomBtn
                className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3 w-fit"
                onClick={() => handleNavigate(VALUE_ADDED_SERVICES)}
              >
                Learn More
              </CustomBtn>
            </div>
          </div>
        </div>

        {/* CAROUSEL INDICATOR */}
        <div className="carousel-indicators pt-10 lg:pt-16 flex justify-center items-center md:justify-end lg:items-end">
          <button
            id="carousel-indicator-button"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
            className="active"
          ></button>

          <button
            id="carousel-indicator-button"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            id="carousel-indicator-button"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>

          <button
            id="carousel-indicator-button"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <Image
          image={DOTS}
          imageClassName="w-20 h-24 md:w-32 h-fit lg:w-fit lg:h-fit"
          parentClassName="absolute inset-y-0 right-0 top-[380px] md:right-28 md:top-[490px] lg:right-56 lg:top-[430px]"
        />
      </div>
    </Fragment>
  );
};

export default Carousel;
