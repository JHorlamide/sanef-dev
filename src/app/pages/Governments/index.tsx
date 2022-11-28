import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import GovernmentHeader from "./components/GovernmentHeader";
import { DashboardMainView } from "app/components/Layout";
import TableHeader from "app/components/TableHeader";
import { ADD_GOVERNMENT } from "routes/ROUTES_CONSTANTS";
import GovernmentListTable from "./components/GovernmentListTable";

const index = () => {
  return (
    <DashboardLayout>
      <GovernmentHeader />

      <DashboardMainView className="h-screen">
        <TableHeader
          showFilter={false}
          buttonText={"New Government/MDA"}
          path={ADD_GOVERNMENT}
        />

        <GovernmentListTable />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
