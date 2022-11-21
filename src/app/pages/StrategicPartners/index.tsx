import React from "react";
import DashboardLayout from "../../DashboardLayout";
import StrategicPartnerHeader from "./components/StrategicPartnerHeader";
import { DashboardMainView } from "../../components/Layout";
import TableHeader from "app/components/TableHeader";
import { ADD_STRATEGIC_PARTNERS } from "routes/ROUTES_CONSTANTS";
import StrategicPartnerTable from "./components/StrategicPartnerTable";

const index = () => {
  return (
    <DashboardLayout>
      <StrategicPartnerHeader />

      <DashboardMainView className="h-screen">
        <TableHeader
          showFilter={false}
          buttonText={"New Partner"}
          path={ADD_STRATEGIC_PARTNERS}
        />

        <StrategicPartnerTable />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
