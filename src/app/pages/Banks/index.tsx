import React from "react";
import DashboardLayout from "../../DashboardLayout";
import DashboardHeader from "app/components/DashboardHeader";
import TableHeader from "app/components/TableHeader";
import BankListTable from "./components/BankListTable";

const index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader>
        <h1 className="text-[32px] font-bold">Banks</h1>
        <p className="text-[14px]">Manage the entries on the Banks list</p>
      </DashboardHeader>

      <div className="bg-gray-100 w-full h-[85.333333%] pt-8 pl-10 pr-10 space-y-8">
        <TableHeader showFilter={false} />
        <div className="">
          <BankListTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default index;
