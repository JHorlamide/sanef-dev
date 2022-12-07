import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Table } from "flowbite-react";
import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import DeleteModal from "app/components/DeleteModal";
import { IGovernment } from "types/government";

export interface GovernmentListTableListProps {
  filteredGovernments: IGovernment[];
  loading: boolean;
  error: string;
  removeGovernment: (governmentId: string | undefined) => void;
}

const GovernmentListTable = ({
  loading,
  error,
  filteredGovernments,
  removeGovernment
}: GovernmentListTableListProps) => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const [governmentId, setGovernmentId] = useState<string | undefined>("");
  const [governmentName, setGovernmentName] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id: string | undefined, name: string) {
    setGovernmentId(id);
    setGovernmentName(name);
    setIsOpen(true);
  }

  return (
    <Fragment>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        actionText={"Delete"}
        modalHeading={"Delete Government/MDA"}
        subText={`${governmentName} will be delete`}
        deleteAction={() => removeGovernment(governmentId)}
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
          {loading && (
            <div className="container mx-auto my-8">
              <Spinner
                color="success"
                aria-label="spinner"
                className="text-buttonColor"
                size={"xl"}
              />
            </div>
          )}

          {error && (
            <div className="container mx-auto my-10">
              <h1 className="text-start text-md">
                Can't load banks at the moment. Please try again later
              </h1>
            </div>
          )}

          {filteredGovernments.length <= 0 && (
            <div className="container flex items-center justify-center py-10 mx-auto ml-[150px]">
              <h1 className="font-semibold">
                Your government\MDAs record is empty!
              </h1>
            </div>
          )}

          {filteredGovernments.map((government) => (
            <Table.Row key={government._id} className="bg-white">
              <Table.Cell className="font-medium text-gray-900 whitespace-nowrap">
                <img
                  src={government.logo?.imageUrl}
                  alt={government.logo?.key}
                  className="w-[39.52px] h-[40px]"
                />
              </Table.Cell>

              <Table.Cell className="w-[600px]">{government.name}</Table.Cell>

              <Table.Cell className="flex space-x-6">
                <CustomBtn
                  rightIcon={
                    <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() =>
                    navigate(`/governments/edit/${government._id}`)
                  }
                />

                <CustomBtn
                  rightIcon={
                    <img src={DELETE_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => openModal(government._id, government.name)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default GovernmentListTable;
