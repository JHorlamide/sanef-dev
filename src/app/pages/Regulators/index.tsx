import React from "react";
import DashboardLayout from "../../DashboardLayout";
import RegulatorHeader from "./components/RegulatorHeader";
import { DashboardMainView } from "app/components/Layout";
import TableHeader from "app/components/TableHeader";
import { ADD_REGULATOR } from "routes/ROUTES_CONSTANTS";
import RegulatorsListTable from "./components/RegulatorsListTable";

const index = () => {
  return (
    <DashboardLayout>
      <RegulatorHeader />

      <DashboardMainView className="pt-8 pl-10 pr-10 h-screen space-y-8">
        <TableHeader
          showFilter={false}
          buttonText={"New Regulator"}
          path={ADD_REGULATOR}
        />

        <RegulatorsListTable />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
