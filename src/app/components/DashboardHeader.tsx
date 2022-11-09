import React from "react";

const DashboardHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col pl-10 py-4 w-full h-[112px]">{children}</div>
  );
};

export default DashboardHeader;
