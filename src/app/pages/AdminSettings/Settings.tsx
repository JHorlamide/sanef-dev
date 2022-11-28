import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { AGENTS } from "routes/ROUTES_CONSTANTS";
import useSuperAgentForm from "../SuperAgents/useSuperAgentForm";
import { LONG_HORIZONTAL_LINE } from "assets/icons";
import DeleteModal from "app/components/DeleteModal";

const Settings = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { companyData, handleSubmit, handlePress, handleCompanyDataChange } =
    useSuperAgentForm({});

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <React.Fragment>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        actionText={"Request Password Reset"}
        modalHeading={"Update Password"}
        subText={"You will receive a password reset link in your mailbox"}
      />

      <div className="pl-10 py-5 h-auto">
        <div className="bg-white w-[690px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <h1 className="text-[18px] font-bold pl-10">Admin Settings</h1>
            <hr className="border w-full" />
          </div>

          <form
            className="container mx-auto px-8 space-y-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-5">
              {/* First name & Surname */}
              <div className="flex space-x-6">
                <div className="w-[390px]">
                  <div className="space-y-3">
                    <label htmlFor="firstName">First name</label>
                    <CustomInput
                      id="firstName"
                      className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor py-3 w-full mt-8"
                      inputProps={{
                        type: "text",
                        name: "firstName",
                        value: companyData.companyName,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>

                <div className="w-[390px]">
                  <div className="space-y-3">
                    <label htmlFor="lastName">Last Name</label>
                    <CustomInput
                      id="lastName"
                      className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                      focus:ring-buttonColor py-3 w-full mt-8"
                      inputProps={{
                        type: "text",
                        name: "lastName",
                        value: companyData.companyName,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Business name */}
              <div className="space-y-3 w-full">
                <label htmlFor="email">Email Address</label>
                <CustomInput
                  id="email"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                  focus:ring-buttonColor py-3 w-full mt-8"
                  inputProps={{
                    type: "email",
                    name: "email",
                    value: companyData.companyAddress,
                    onChange: handleCompanyDataChange
                  }}
                />
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
                onClick={() => navigate(AGENTS)}
              >
                Back
              </CustomBtn>
            </div>

            <div className="">
              <img src={LONG_HORIZONTAL_LINE} alt="horizontal-line" />
            </div>

            <div className="">
              <CustomBtn
                className="text-buttonColor text-[14px] font-semibold"
                onClick={openModal}
              >
                Update Password
              </CustomBtn>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Settings;
