import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";

const tableHeadCellList = [
  {
    id: 1,
    title: "Date"
  },
  {
    id: 2,
    title: "First Name"
  },
  {
    id: 3,
    title: "Surname"
  },
  {
    id: 4,
    title: "Business Name"
  },
  {
    id: 5,
    title: "State"
  },
  {
    id: 6,
    title: "LGA"
  },
  {
    id: 7,
    title: "Email"
  },
  {
    id: 8,
    title: "Choice of Super Agent"
  }
];

const TestTable = () => {
  const navigate = useNavigate();

  return (
    <Table>
      <Table.Head className="bg-white text-[10px] capitalize border-b-2">
        {tableHeadCellList.map((tableItem) => (
          <Table.HeadCell key={tableItem.id} className="font-medium w-fit">
            <div className="flex space-x-1">
              <p className="whitespace-nowrap">{tableItem.title}</p>
              <CustomBtn
                rightIcon={
                  <img src={FILTER_ICON} alt="filter icon" className="w-full" />
                }
              />
            </div>
          </Table.HeadCell>
        ))}
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {[1, 2, 3].map((item, idx) => (
          <Table.Row
            key={idx}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              11/12/2021
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell className="flex space-x-4">
              <CustomBtn
                rightIcon={
                  <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                }
                onClick={() => navigate(`/agents/edit/${idx}`)}
              />

              <CustomBtn
                rightIcon={
                  <img src={DELETE_ICON} alt="edit icon" className="w-4" />
                }
                // onClick={openModal}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default TestTable;
