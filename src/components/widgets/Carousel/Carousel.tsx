import React from "react";
import { useNavigate } from "react-router-dom";
import "tw-elements";
import CustomBtn from "../CustomBtn/CustomBtn";
import {
  OUR_PARTNERS,
  ABOUT_US,
  VALUE_ADDED_SERVICES
} from "routes/ROUTES_CONSTANTS";
import "./style.css";

const Carousel = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative px-5 py-10 md:px-20 md:py-40 lg:px-48 lg:py-32"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute sm:right-1 sm:left-0 lg:right-1 top-full justify-center p-0 mb-4">
        <div className="flex lg:justify-end">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
      </div>

      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full space-y-6">
          <h1 className="max-w-lg text-4xl text-left text-white mx-auto mb-3 font-extrabold md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
            Deepening Financial Inclusion through Partnerships and
            Collaborations
          </h1>

          <CustomBtn
            className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3"
            onClick={() => handleNavigate(OUR_PARTNERS)}
          >
            Partner with Us
          </CustomBtn>
        </div>

        <div className="carousel-item relative float-left w-full space-y-6">
          <h1 className="max-w-lg text-4xl text-left text-white mx-auto mb-3 font-extrabold md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
            Centre of Excellence for Financial{" "}
            <br className="hidden lg:block" /> Inclusion best practices
          </h1>

          <CustomBtn
            className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3"
            onClick={() => handleNavigate(ABOUT_US)}
          >
            Learn More
          </CustomBtn>
        </div>

        <div className="carousel-item relative float-left w-full space-y-6">
          <h1 className="max-w-lg text-4xl text-left text-white mx-auto mb-3 font-extrabold md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
            Empowering the Ecosystem through <br className="hidden lg:block" />{" "}
            Innovative Technology
          </h1>

          <CustomBtn
            className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3"
            onClick={() => handleNavigate(VALUE_ADDED_SERVICES)}
          >
            Learn More
          </CustomBtn>
        </div>

        <div className="carousel-item relative float-left w-full space-y-6">
          <h1 className="max-w-lg text-4xl text-left text-white mx-auto mb-3 font-extrabold md:font-extrabold md:max-w-6xl md:leading-snug md:text-[45px]">
            Enhancing knowledge through Impactful Financial Literacy Programmes
          </h1>
          <CustomBtn
            className="text-white text-[20px] font-medium rounded-full bg-buttonColor px-20 py-3"
            onClick={() => handleNavigate(VALUE_ADDED_SERVICES)}
          >
            Learn More
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
