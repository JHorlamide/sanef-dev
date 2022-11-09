import React from "react";
import DashboardLayout from "../../DashboardLayout";
import DashboardHeader from "app/components/DashboardHeader";
import TableHeader from "app/components/TableHeader";
import Table from "app/components/Table";

const index = () => {
  return (
    <DashboardLayout>
      <section className="">
        <div className="bg-white w-full">
          <DashboardHeader>
            <h1 className="text-[32px] font-bold">Banks</h1>
            <p className="text-[14px]">Manage the entries on the Banks list</p>
          </DashboardHeader>
        </div>

        <div className="bg-gray-100 w0full py-8 pl-10 pr-10">
          <TableHeader />
        </div>

        <div className="">
          <Table />
        </div>
      </section>
    </DashboardLayout>
  );
};

export default index;
