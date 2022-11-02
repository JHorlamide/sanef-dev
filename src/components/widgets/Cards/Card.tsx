import React from "react";
import { RecentCardProps } from "types/card";
import RouterLink from "components/Navbar/NavLink/RouterLink";
import { IoIosArrowForward } from "react-icons/io";

const CustomCard = ({ image, date, title, content, link }: RecentCardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-start my-10 w-full
      lg:flex-row lg:items-center lg:space-x-16 lg:pt-10 lg:my-16
      "
    >
      <div className="lg:hidden block px-3">
        <img
          className="object-cover w-screen md:h-[400px] rounded-xl"
          src={image}
          alt=""
        />
      </div>

      <img
        className="hidden lg:block object-cover w-screen lg:w-[484px] lg:h-[270px] lg:rounded-xl"
        src={image}
        alt=""
      />

      <div className="ml-6 space-y-5 mb-10 lg:max-w-lg lg:mb-0">
        <p className="text-md mt-5">{date}</p>
        <h1 className="text-2xl font-bold md:text-xl">{title}</h1>
        <p className="text-xl text-left leading-text-line-height md:text-base">
          {content}
        </p>

        <RouterLink
          className="text-xl text-buttonColor font-semibold flex w-fit md:text-base 
          hover:text-lightGreen"
          path={link}
          title="Continue Reading"
          rightIcon={
            <IoIosArrowForward size={22} className="ml-1 mt-0.5 text-sm" />
          }
        />
      </div>
    </div>
  );
};

export default CustomCard;
