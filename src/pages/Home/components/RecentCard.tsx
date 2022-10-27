import React from "react";
import { RecentCardProps } from "types/card";
import RouterLink from "components/Navbar/NavLink/RouterLink";
import { IoIosArrowForward } from "react-icons/io";

const RecentCard = ({ image, date, title, content, icon }: RecentCardProps) => {
  return (
    <div className="flex flex-col justify-center items-start my-10 w-full lg:my-16">
      <div className="px-3">
        <img className="object-cover w-screen" src={image} alt="" />
      </div>

      <div className="ml-6 space-y-5 mb-10">
        <p className="text-md mt-5">{date}</p>
        <h1 className="text-2xl font-bold md:text-xl">{title}</h1>
        <p className="text-xl text-left leading-text-line-height md:text-base">
          {content}
        </p>

        <RouterLink
          className="text-xl text-buttonColor font-semibold flex w-fit md:text-base 
          hover:text-lightGreen"
          path="/continue-reading"
          title="Continue Reading"
          rightIcon={
            <IoIosArrowForward size={22} className="ml-1 mt-0.5 text-sm" />
          }
        />
      </div>
    </div>
  );
};

export default RecentCard;
