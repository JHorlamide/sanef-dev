import React from "react";

interface DashboardHeaderProps {
  heading: string;
  subHeading: string;
}

export const DashboardMainView = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-gray-100 pt-8 pl-10 pr-10 space-y-8 w-full ${className}`}
    >
      {children}
    </div>
  );
};

const DashboardHeader = ({ heading, subHeading }: DashboardHeaderProps) => {
  return (
    <div className="bg-white flex flex-col pt-5 pl-10 py-7 w-full">
      <h1 className="text-[32px] font-bold">{heading}</h1>
      <p className="text-[14px]">{subHeading}</p>
    </div> //h-1/6  height: 16.666667%
  );
};

export default DashboardHeader;
