import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import { DOWNLOAD_ICON, SEARCH_ICON } from "assets/icons";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { CSVLink } from "react-csv";

interface BankTableHeaderProps {
  buttonText: string;
  path: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  bankList: Array<any>;
}

const BankTableHeader = ({
  buttonText,
  path,
  setSearchTerm,
  bankList
}: BankTableHeaderProps) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setSearchTerm(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const csvData = bankList.map((item) => {
    return {
      id: item._id,
      name: item.name,
      logo: item.logo.imageUrl,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    };
  });

  return (
    <div className="flex justify-between">
      {/* Filter & Search Component */}
      <div className="flex space-x-2">
        <div className="relative flex flex-col space-y-2">
          <CustomInput
            id="password"
            className="rounded-full border border-gray-300 outline-buttonColor 
            focus:border-buttonColor focus:ring-buttonColor py-2 px-10"
            inputProps={{
              type: "text",
              name: "password",
              value: searchValue,
              placeholder: "Search",
              onChange: handleSearchInput
            }}
          />

          <div className="absolute inset-y-0 top-1 left-3">
            <img src={SEARCH_ICON} alt="" />
          </div>
        </div>
      </div>

      {/* Download & New Bank Buttons */}
      <div className="flex space-x-2">
        <CustomBtn
          className="font-medium py-2 px-5 bg-white rounded-full text-buttonColor flex transition 
          ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
          leftIcon={
            <img
              src={DOWNLOAD_ICON}
              alt="download-icon"
              className="mt-0.5 mr-1"
            />
          }
          // onClick={() => download()}
        >
          <CSVLink data={csvData} filename="banks.csv">
            Download CSV
          </CSVLink>
        </CustomBtn>

        <CustomBtn
          className="font-medium py-2 px-8 bg-buttonColor rounded-full text-white hover:bg-lightGreen"
          onClick={() => navigate(path)}
        >
          {buttonText}
        </CustomBtn>
      </div>
    </div>
  );
};

export default BankTableHeader;
