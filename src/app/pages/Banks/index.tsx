import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import BankListTable from "./components/BankListTable";
import { DashboardMainView } from "app/components/Layout";
import { ADD_BANK } from "routes/ROUTES_CONSTANTS";
import BankHeader from "./components/BankHeader";
import useBank from "hooks/useBank";
import BankTableHeader from "./components/BankTableHeader";
import Pagination, { TableRecord } from "app/components/Pagination";

const BankManager = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [bankPerPage, setBankPerPage] = useState(20);
  const {
    loading,
    error,
    filteredBanks,
    totalPages,
    removeBank,
    setSearchTerm
  } = useBank(pageNumber, bankPerPage);

  return (
    <DashboardLayout>
      <BankHeader />

      <DashboardMainView className="h-screen">
        <BankTableHeader
          buttonText={"New Bank"}
          path={ADD_BANK}
          setSearchTerm={setSearchTerm}
          bankList={filteredBanks}
        />

        <BankListTable
          banks={filteredBanks}
          loading={loading}
          error={error}
          removeBank={removeBank}
        />

        <div className="flex justify-between mt-8">
          <TableRecord
            recordPerPage={bankPerPage}
            setRecordPerPate={setBankPerPage}
          />
          <Pagination
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
            totalPage={totalPages}
          />
        </div>
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default BankManager;
