import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GovernmentHeader from "./GovernmentHeader";
import { IMG_PLACEHOLDER } from "assets/icons";
import DashboardLayout from "../../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { GOVERNMENTS } from "routes/ROUTES_CONSTANTS";
import toast from "react-hot-toast";
import { IUpdateGovernmentRequest } from "types/government";
import useGovernment from "hooks/useGovernmnet";
import { uploadImage } from "api/upload";
import { getGovernmentDetails } from "api/government";

const EditGovernment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { updateDetails } = useGovernment();
  const [imageUploadId, setImageUploadId] = useState("");
  const [governmentName, setGovernmentName] = useState<string | undefined>("");
  const [governmentLogo, setGovernmentLogo] = useState<string | any>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewLogo, setPreviewLogo] = useState<string>("");

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    getGovernmentDetails(id)
      .then((response) => {
        setGovernmentName(response.data.name);
        setGovernmentLogo(response.data.logo.imageUrl);
        setImageUploadId(response.data.logo._id);
      })
      .catch((error) => {
        console.log("Error getting government details", error.message);
      });
  }, [id]);

  useEffect(() => {
    if (!governmentLogo) {
      setPreviewLogo("");
      return;
    }

    if (typeof governmentLogo === "string") {
      setPreviewLogo("");
      return;
    }

    const objectUrl = URL.createObjectURL(governmentLogo);
    setPreviewLogo(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [governmentLogo]);

  const openFileInput = () => {
    hiddenFileInput.current?.click();
  };

  const handleGovernmentNameChange = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    setGovernmentName(e.target.value);
  };

  const isValidFileUploaded = (file: File) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = file.type.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const { files } = e.currentTarget;

    if (!files || !files[0]) {
      setErrorMessage("No file selected");
      return;
    }

    if (isValidFileUploaded(files[0])) {
      setGovernmentLogo(files[0]);

      const formData = new FormData();
      formData.append("image", files[0]);
      const response = await uploadImage(formData);

      if (response.status === "Success") {
        setImageUploadId(response.data._id);
        toast.success("Image Uploaded Successfully");
        return;
      }

      toast.error(response.data.message);
      setErrorMessage("");
      return;
    }

    setErrorMessage("File not accepted");
  };

  const validateSelectedFileSize = () => {
    const MAX_FILE_SIZE = 5120; // 5MB

    if (!governmentLogo) {
      setErrorMessage("Please choose a file");
      return;
    }

    const fileSizeKiloBytes = Number(governmentLogo.size / 1024);

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMessage("File size is greater than maximum limit");
      return;
    }

    setErrorMessage("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    validateSelectedFileSize();

    const updateObj: IUpdateGovernmentRequest = {
      id: id as string,
      name: governmentName as string,
      logo: imageUploadId
    };

    updateDetails(updateObj);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return (
    <DashboardLayout>
      <GovernmentHeader />

      <DashboardMainView className="pl-10 pt-10 h-screen">
        <div className="bg-white w-[690px] h-[451px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between px-5">
              <h1 className="text-[18px] font-bold">
                Government/MDA's Details
              </h1>

              <div className="flex justify-center">
                <p className="mr-3 font-medium">Active</p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input appearance-none w-11 -ml-10 rounded-full float-left 
                    h-5 align-top bg-buttonColor bg-no-repeat bg-contain focus:outline-none 
                    outline-buttonColor cursor-pointer shadow-sm border-buttonColor focus:outline-buttonColor"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>
            <hr className="border w-full" />
          </div>

          <form
            className="container mx-auto px-8 space-y-20"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-10">
              {/* Image Placeholder */}
              <div
                className="bg-white rounded-full w-[180px] h-[180px] shadow-lg 
                p-8 justify-center items-center"
              >
                {previewLogo ? (
                  <img
                    src={previewLogo}
                    alt="placeholder"
                    className="w-full h-full"
                  />
                ) : governmentLogo ? (
                  <img
                    src={governmentLogo}
                    alt="regulatorLogo"
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={IMG_PLACEHOLDER}
                    alt="placeholder"
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Form Input */}
              <div className="w-[390px] space-y-12">
                <div className="space-y-3">
                  <label htmlFor="governmentName">Name</label>
                  <CustomInput
                    id="governmentName"
                    className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                    inputProps={{
                      type: "text",
                      name: "governmentName",
                      value: governmentName,
                      onChange: handleGovernmentNameChange
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  {errorMessage && (
                    <p className="text-red-500 text-sm text-center">
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex">
                    <CustomBtn
                      className="text-buttonColor text-start font-semibold text-md mb-2 w-full outline-none"
                      onClick={openFileInput}
                      type="button"
                    >
                      Upload logo
                    </CustomBtn>

                    <p className="w-full text-md text-start whitespace-normal font-semibold text-gray-800">
                      {governmentLogo?.name}
                    </p>
                  </div>

                  <CustomInput
                    id="governmentLogo"
                    className="hidden border-none text-buttonColor font-semibold text-md"
                    inputProps={{
                      type: "file",
                      placeholder: "Upload logo",
                      name: "governmentLogo",
                      onChange: handleFileChange,
                      ref: hiddenFileInput
                    }}
                  />

                  <small>Formats accepted: PNG, JPG, GIF. Maximum 5MB.</small>
                </div>
              </div>
            </div>

            <div className="flex space-x-16">
              <CustomBtn
                className="bg-buttonColor px-20 py-3 rounded-full text-white font-semibold hover:bg-lightGreen"
                type="submit"
                onKeyDown={handlePress}
              >
                Update Changes
              </CustomBtn>

              <CustomBtn
                className="text-buttonColor font-semibold hover:text-lightGreen"
                type="button"
                onClick={() => navigate(GOVERNMENTS)}
              >
                Back
              </CustomBtn>
            </div>
          </form>
        </div>
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default EditGovernment;
