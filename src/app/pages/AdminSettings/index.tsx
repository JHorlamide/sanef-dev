import DashboardLayout from "../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import AdminHeader from "./Header";
import Setting from "./Settings";

const index = () => {
  return (
    <DashboardLayout>
      <AdminHeader />

      <DashboardMainView className="pl-10 py-5 h-screen">
        <Setting />
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default index;
