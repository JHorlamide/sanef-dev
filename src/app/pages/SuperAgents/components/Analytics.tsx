import React from "react";
import { SMALL_VERTICAL_LINE } from "assets/icons";

const Analytics = () => {
  return (
    <div className="relative grid grid-cols-12  items-center border border-gray-200 px-8 bg-white h-[113px] rounded-lg shadow-md">
      <div className="col-span-6 flex flex-col space-y-1">
        <h1 className="text-buttonColor text-2xl font-bold">30000</h1>
        <p className="">Total Number of Super Agents</p>
      </div>

      <div className="absolute left-[450px] top-5">
        <img src={SMALL_VERTICAL_LINE} alt="" className="" />
      </div>

      <div className="col-span-6 flex flex-col space-y-1">
        <h1 className="text-buttonColor text-2xl font-bold">270</h1>
        <p>
          New Super Agents in <span className="font-semibold">December</span>
        </p>
      </div>
    </div>
  );
};

export default Analytics;
