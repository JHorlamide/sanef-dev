import React from "react";

export const DashboardMainView = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-gray-100 w-full h-screen ${className}`}>{children}</div>
  );
};

const DashboardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white flex flex-col pt-5 pl-10 py-7 w-full">
      {children}
    </div> //h-1/6  height: 16.666667%
  );
};

export default DashboardHeader;
