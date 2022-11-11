import React from "react";
import DashboardLayout from "../../DashboardLayout";
import DashboardHeader from "app/components/DashboardHeader";

const index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader>
        <h1 className="text-[32px] font-bold">Admin Settings</h1>
        <p className="text-[14px]">
          Manage your admin details and update your password
        </p>
      </DashboardHeader>

      <div className="bg-gray-100 w-full h-[85.333333%] pt-8 pl-10 pr-10 space-y-8"></div>
    </DashboardLayout>
  );
};

export default index;
