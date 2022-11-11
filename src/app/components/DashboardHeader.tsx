import React from "react";

const DashboardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white flex flex-col pl-10 h-[14.666667%] w-full">
      {children}
    </div> //h-1/6  height: 16.666667%
  );
};

export default DashboardHeader;
