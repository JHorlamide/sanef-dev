import React from "react";
import DashboardLayout from "../../DashboardLayout";
import DashboardHeader from "app/components/Layout";

const index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader
        heading="Strategic Partners"
        subHeading="Manage the entries on the Strategic Partners list"
      />
      {/* <h1 className="text-[32px] font-bold">Strategic Partners</h1>
        <p className="text-[14px]">
          Manage the entries on the Strategic Partners list
        </p>
      </DashboardHeader> */}

      <div className="bg-gray-100 w-full h-[85.333333%] pt-8 pl-10 pr-10 space-y-8"></div>
    </DashboardLayout>
  );
};

export default index;
