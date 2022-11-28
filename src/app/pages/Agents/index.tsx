import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import AgentsHeader from "./components/AgentsHeader";
import { DashboardMainView } from "app/components/Layout";
import Analytics from "./components/Analytics";
import TableHeader from "app/components/TableHeader";
import { LONG_HORIZONTAL_LINE } from "assets/icons";
// import AgentListTable from "./components/AgentListTable";
import TestTable from "./components/TestTable";

import { ADD_AGENT } from "routes/ROUTES_CONSTANTS";

const index = () => {
  return (
    <DashboardLayout>
      <AgentsHeader />

      <DashboardMainView className="h-screen">
        <Analytics />

        <img src={LONG_HORIZONTAL_LINE} alt="" className="w-full" />

        <TableHeader
          showFilter={true}
          buttonText={"New Super Agent"}
          path={ADD_AGENT}
        />

        <TestTable />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
