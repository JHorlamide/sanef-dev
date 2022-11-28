import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Spinner } from "flowbite-react";

import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import Pagination, { TableRecord } from "app/components/Pagination";
import DeleteModal from "app/components/DeleteModal";
import { useGetBanksQuery } from "redux/api/bankApiSlice";

const BankListTable = () => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError } = useGetBanksQuery();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Fragment>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        actionText={"Delete"}
        modalHeading={"Delete Bank"}
        subText={"CitiBank will be delete"}
      />

      <Table hoverable={true}>
        <Table.Head className="bg-white text-[12px] w-full capitalize space-x-3 border-b-2">
          <Table.HeadCell className="font-light">
            Logo
            <CustomBtn
              rightIcon={
                <img src={FILTER_ICON} alt="filter icon" className="w-1.5" />
              }
              className="ml-2"
            />
          </Table.HeadCell>

          <Table.HeadCell className="font-light">
            Name
            <CustomBtn
              rightIcon={
                <img src={FILTER_ICON} alt="filter icon" className="w-1.5" />
              }
              className="ml-2"
            />
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {isLoading && (
            <div className="container mx-auto my-8">
              <Spinner
                color="success"
                aria-label="spinner"
                className="text-buttonColor"
                size={"xl"}
              />
            </div>
          )}

          {isError && (
            <div className="container mx-auto my-10">
              <h1 className="text-start text-md">
                Can't load banks at the moment. Please try again later
              </h1>
            </div>
          )}

          {data?.data?.banks.map((bank: any, idx: any) => (
            <Table.Row key={idx} className="bg-white">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Apple MacBook Pro 17"
              </Table.Cell>

              <Table.Cell className="w-[600px]">{bank.name}</Table.Cell>

              <Table.Cell className="flex space-x-6">
                <CustomBtn
                  rightIcon={
                    <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => navigate(`/banks/edit/${idx}`)}
                />

                <CustomBtn
                  rightIcon={
                    <img src={DELETE_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={openModal}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="flex justify-between mt-8">
        <TableRecord />
        <Pagination />
      </div>
    </Fragment>
  );
};

export default BankListTable;
