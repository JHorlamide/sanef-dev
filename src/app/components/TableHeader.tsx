import { useNavigate } from "react-router-dom";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import Search from "app/components/Search";
import Filter from "./Filter";
import { DOWNLOAD_ICON } from "assets/icons";

interface TableHeaderProps {
  buttonText: string;
  path: string;
  showFilter: boolean;
}

const TableHeader = ({ showFilter, buttonText, path }: TableHeaderProps) => {
  const navigate = useNavigate();

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
          className="font-medium py-2 px-5 bg-white rounded-full text-buttonColor flex transition 
          ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
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

export default TableHeader;
