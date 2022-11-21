import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import Pagination, { TableRecord } from "app/components/Pagination";
import DeleteModal from "app/components/DeleteModal";

const GovernmentListTable = () => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);

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
        modalHeading={"Delete Government/MDA"}
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
          {[1, 2, 3].map((item, idx) => (
            <Table.Row key={idx} className="bg-white">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Apple MacBook Pro 17"
              </Table.Cell>

              <Table.Cell className="w-[600px]">Sliver</Table.Cell>

              <Table.Cell className="flex space-x-6">
                <CustomBtn
                  rightIcon={
                    <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => navigate(`/governments/edit/${idx}`)}
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

export default GovernmentListTable;
