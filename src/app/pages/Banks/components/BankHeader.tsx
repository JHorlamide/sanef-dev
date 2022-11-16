import React from "react";
import DashboardHeader from "app/components/Layout";

const BankHeader = () => {
  return (
    <DashboardHeader>
      <h1 className="text-[32px] font-bold">Banks</h1>
      <p className="text-[14px]">Manage the entries on the Banks list</p>
    </DashboardHeader>
  );
};

export default BankHeader;
