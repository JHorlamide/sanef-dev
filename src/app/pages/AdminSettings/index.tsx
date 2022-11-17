import React from "react";
import DashboardLayout from "../../DashboardLayout";
import DashboardHeader from "app/components/Layout";

const index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader
        heading="Admin Settings"
        subHeading=" Manage your admin details and update your password"
      />

      <div className="bg-gray-100 w-full h-[85.333333%] pt-8 pl-10 pr-10 space-y-8"></div>
    </DashboardLayout>
  );
};

export default index;
