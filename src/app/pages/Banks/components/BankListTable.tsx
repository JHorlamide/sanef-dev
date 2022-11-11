import React, { Fragment } from "react";
import { Table } from "flowbite-react";
import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import Pagination, { TableRecord } from "app/components/Pagination";

const BankListTable = () => {
  return (
    <Fragment>
      {" "}
      <Table>
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
          <Table.Row className="bg-white">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
              Apple MacBook Pro 17"
            </Table.Cell>

            <Table.Cell className="w-[700px]">Sliver</Table.Cell>

            <Table.Cell className="flex space-x-6">
              <CustomBtn
                rightIcon={
                  <img src={EDIT_ICON} alt="edit icon" className="w-6" />
                }
              />

              <CustomBtn
                rightIcon={
                  <img src={DELETE_ICON} alt="edit icon" className="w-6" />
                }
              />
            </Table.Cell>
          </Table.Row>
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
