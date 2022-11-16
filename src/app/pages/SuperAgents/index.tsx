import React from "react";
import DashboardLayout from "../../DashboardLayout";
import Analytics from "./components/Analytics";
import SuperAgentHeader from "./components/SuperAgentHeader";
import { DashboardMainView } from "app/components/Layout";
import TableHeader from "app/components/TableHeader";
import SuperAgentList from "./components/SuperAgentList";
import { LONG_HORIZONTAL_LINE } from "assets/icons";
import { ADD_SUPER_AGENT } from "routes/ROUTES_CONSTANTS";

const index = () => {
  return (
    <DashboardLayout>
      <SuperAgentHeader />

      <DashboardMainView className="pt-8 pl-10 pr-10 space-y-8">
        <Analytics />

        <img src={LONG_HORIZONTAL_LINE} alt="" className="w-full" />
        <TableHeader
          showFilter={true}
          buttonText={"New Super Agent"}
          path={ADD_SUPER_AGENT}
        />

        <SuperAgentList />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
