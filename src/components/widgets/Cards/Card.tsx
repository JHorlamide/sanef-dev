import React from "react";
import { ICardProps } from "types/card";
import { IoIosArrowForward } from "react-icons/io";
import style from "./Card.module.css";
import NavLink from "components/layout/Navbar/NavLink/NavLink";

const CustomCard = ({ id, image, date, headLine, details }: ICardProps) => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-start lg:items-center my-10 
      w-full space-y-2 lg:space-x-16 lg:my-16"
    >
      <div className="lg:hidden block px-3 w-full h-[210px] md:h-[400px]">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={image}
          alt=""
        />
      </div>

      <div className="hidden lg:block w-[484px] h-[270px]">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={image}
          alt=""
        />
      </div>

      <div className="space-y-5 ml-6 mb-10 lg:max-w-lg lg:mb-0">
        <p className="text-[12px] mt-5">{date}</p>
        <h1 className="text-2xl font-bold md:text-xl">{headLine}</h1>
        <p
          className={`${style.clamp} text-xl text-left leading-text-line-height md:text-base`}
        >
          {details}
        </p>

        <NavLink
          path={`/media/news/${id}`}
          title="Continue Reading"
          rightIcon={
            <IoIosArrowForward size={22} className="ml-1 mt-0.5 text-sm" />
          }
          className="text-xl text-buttonColor font-semibold flex w-fit md:text-base 
          hover:text-lightGreen"
        />

        {/* <RouterLink
          className="text-xl text-buttonColor font-semibold flex w-fit md:text-base 
          hover:text-lightGreen"
          path={`/media/news/${id}`}
          title="Continue Reading"
          rightIcon={
            <IoIosArrowForward size={22} className="ml-1 mt-0.5 text-sm" />
          }
        /> */}
      </div>
    </div>
  );
};

export default CustomCard;
