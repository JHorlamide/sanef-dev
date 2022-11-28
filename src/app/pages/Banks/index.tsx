import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import TableHeader from "app/components/TableHeader";
import BankListTable from "./components/BankListTable";
import { DashboardMainView } from "app/components/Layout";
import { ADD_BANK } from "routes/ROUTES_CONSTANTS";
import BankHeader from "./components/BankHeader";

const index = () => {
  return (
    <DashboardLayout>
      <BankHeader />

      <DashboardMainView className="h-screen">
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
