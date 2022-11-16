import React from "react";
import DashboardLayout from "../../DashboardLayout";
import TableHeader from "app/components/TableHeader";
import BankListTable from "./components/BankListTable";
import BankHeader from "./components/BankHeader";
import { DashboardMainView } from "app/components/Layout";
import { ADD_BANK } from "routes/ROUTES_CONSTANTS";

const index = () => {
  return (
    <DashboardLayout>
      <BankHeader />

      <DashboardMainView className="pt-8 pl-10 pr-10 space-y-8">
        <TableHeader
          showFilter={false}
          buttonText={"New Bank"}
          path={ADD_BANK}
        />

        <BankListTable />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
