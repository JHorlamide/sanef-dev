import React from "react";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import Search from "app/components/Search";
import Filter from "./Filter";
import { DOWNLOAD_ICON } from "assets/icons";

const TableHeader = ({ showFilter }: { showFilter: boolean }) => {
  return (
    <div className="flex justify-between">
      {/* Filter & Search Component */}
      <div className="flex space-x-2">
        <Search />

        {showFilter && <Filter />}
      </div>

      {/* Download & New Bank Buttons */}
      <div className="flex space-x-2">
        <CustomBtn
          className="font-medium py-2 px-5 bg-white rounded-full text-buttonColor flex"
          leftIcon={
            <img
              src={DOWNLOAD_ICON}
              alt="download-icon"
              className="mt-0.5 mr-1"
            />
          }
        >
          Download CSV
        </CustomBtn>

        <CustomBtn className="font-medium py-2 px-8 bg-buttonColor rounded-full text-white">
          New Bank
        </CustomBtn>
      </div>
    </div>
  );
};

export default TableHeader;
