import React from "react";
import { RecentCardProps } from "types/card";
import RouterLink from "components/Navbar/NavLink/RouterLink";

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
          className="text-xl text-buttonColor font-semibold flex md:text-base"
          path="/continue-reading"
          title="Continue Reading"
          rightIcon={<img className="ml-3 w-2" src={icon} alt="" />}
        />
      </div>
    </div>
  );
};

export default RecentCard;
