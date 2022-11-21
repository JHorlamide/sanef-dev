import React from "react";
import { useNavigate } from "react-router-dom";
import AgentsHeader from "./AgentsHeader";
import DashboardLayout from "../../../DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { AGENTS } from "routes/ROUTES_CONSTANTS";
import useSuperAgentForm from "../../SuperAgents/useSuperAgentForm";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";

const AddAgents = () => {
  const navigate = useNavigate();
  const {
    companyData,
    // companyLogo,
    // errorMessage,
    // previewLogo,
    // hiddenFileInput,
    handleSubmit,
    // handleFileChange,
    handlePress,
    // openFileInput,
    handleCompanyDataChange
  } = useSuperAgentForm({});

  return (
    <DashboardLayout>
      <AgentsHeader />

      <DashboardMainView className="pl-10 py-5 h-auto">
        <div className="bg-white w-[690px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <h1 className="text-[18px] font-bold pl-10">New Agent</h1>
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
                    <label htmlFor="surname">Surname</label>
                    <CustomInput
                      id="surname"
                      className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor py-3 w-full mt-8"
                      inputProps={{
                        type: "text",
                        name: "surname",
                        value: companyData.companyName,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Business name */}
              <div className="space-y-3 w-full">
                <label htmlFor="companyAddress">Business name</label>
                <CustomInput
                  id="companyAddress"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                  inputProps={{
                    type: "text",
                    name: "companyAddress",
                    value: companyData.companyAddress,
                    onChange: handleCompanyDataChange
                  }}
                />
              </div>

              {/* Email & Gender */}
              <div className="flex space-x-6">
                {/* Form Input */}
                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="email">Email</label>
                    <CustomInput
                      id="email"
                      className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                      focus:ring-buttonColor py-3 w-full mt-8"
                      inputProps={{
                        type: "text",
                        name: "email",
                        value: companyData.companyName,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>

                {/* Form Input */}
                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="surname">Gender</label>
                    <CustomSelect
                      id="designation"
                      className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor
                      focus:ring-buttonColor py-3 w-full"
                      selectProps={{
                        name: "designation",
                        value: companyData.designation,
                        onChange: handleCompanyDataChange
                      }}
                      selectOptions={[
                        { value: "male", name: "Male" },
                        { value: "female", name: "Female" }
                      ]}
                      selectPlaceholder="Select gender"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex space-x-6">
                <div className="space-y-3 w-full">
                  <label className="" htmlFor="phoneNumber">
                    Preferred Phone Number
                  </label>

                  <div>
                    <p className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                      +234
                    </p>

                    <CustomInput
                      id="phoneNumber"
                      className="relative rounded-full border border-gray-300 outline-buttonColor
                      focus:border-buttonColor focus:ring-buttonColor py-3 w-full px-24"
                      inputProps={{
                        type: "text",
                        name: "phoneNumber",
                        value: companyData.phoneNumber,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-3 w-full">
                  <label className="" htmlFor="phoneNumber">
                    Alternate Phone Number
                  </label>

                  <div>
                    <p className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                      +234
                    </p>

                    <CustomInput
                      id="phoneNumber"
                      className="relative rounded-full border border-gray-300 outline-buttonColor
                      focus:border-buttonColor focus:ring-buttonColor py-3 w-full px-24"
                      inputProps={{
                        type: "text",
                        name: "phoneNumber",
                        value: companyData.phoneNumber,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* State & LGA */}
              <div className="flex space-x-6">
                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="state">State</label>
                    <CustomSelect
                      id="state"
                      className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor
                      focus:ring-buttonColor py-3 w-full"
                      selectProps={{
                        name: "state",
                        value: companyData.designation,
                        onChange: handleCompanyDataChange
                      }}
                      selectOptions={[
                        { value: "male", name: "Male" },
                        { value: "female", name: "Female" }
                      ]}
                      selectPlaceholder="Select gender"
                    />
                  </div>
                </div>

                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="lga">LGA</label>
                    <CustomSelect
                      id="lga"
                      className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor
                      focus:ring-buttonColor py-3 w-full"
                      selectProps={{
                        name: "designation",
                        value: companyData.designation,
                        onChange: handleCompanyDataChange
                      }}
                      selectOptions={[
                        { value: "male", name: "Male" },
                        { value: "female", name: "Female" }
                      ]}
                      selectPlaceholder="Select gender"
                    />
                  </div>
                </div>
              </div>

              {/* Proposed Agency Service/Business Address */}
              <div className="space-y-3 w-full">
                <label htmlFor="proposedAgency">
                  Proposed Agency Service/Business Address
                </label>
                <CustomInput
                  id="proposedAgency"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                  inputProps={{
                    type: "text",
                    name: "proposedAgency",
                    value: companyData.companyAddress,
                    onChange: handleCompanyDataChange
                  }}
                />
              </div>

              {/* Choice of Super Agent */}
              <div className="space-y-3 w-full">
                <label htmlFor="choiceOfSuperAgent">
                  Choice of Super Agent
                </label>
                <CustomInput
                  id="choiceOfSuperAgent"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                  inputProps={{
                    type: "text",
                    name: "choiceOfSuperAgent",
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
                Add Super Agent
              </CustomBtn>

              <CustomBtn
                className="text-buttonColor font-semibold"
                type="button"
                onClick={() => navigate(AGENTS)}
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

export default AddAgents;
