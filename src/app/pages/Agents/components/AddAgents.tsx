import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import AgentsHeader from "./AgentsHeader";
import DashboardLayout from "../../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { AGENTS } from "routes/ROUTES_CONSTANTS";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";
import useAgentForm from "../useAgentForm";
import useStateLga from "hooks/useStateLga";

import { Combobox, Transition } from "@headlessui/react";
import { BsCheck2 } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { StateType } from "hooks/useStateLga";

const AddAgents = () => {
  const DEFAULT_STATE_TO_FETCH_LGA = "lagos";
  const navigate = useNavigate();
  const [stateToFetchLGA, setStateToFetchLGA] = useState<string>("");

  const { statesList, LGAsList } = useStateLga(
    stateToFetchLGA ? stateToFetchLGA : DEFAULT_STATE_TO_FETCH_LGA
  );

  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<StateType>(statesList[0]);
  const [selectedLGA, setSelectedLGA] = useState(LGAsList && LGAsList[0]);
  const { agentData, handleSubmit, handlePress, handleCompanyDataChange } =
    useAgentForm(stateToFetchLGA, selectedLGA);
  const regex = new RegExp(`${query}`, "gi");

  const filterState =
    query === ""
      ? statesList
      : statesList.filter((state) => state.name.match(regex));

  const filterLGA =
    query === "" ? LGAsList : LGAsList?.filter((lga) => lga.match(regex));

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
                        value: agentData.firstName,
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
                        value: agentData.surname,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Business name */}
              <div className="space-y-3 w-full">
                <label htmlFor="businessName">Business name</label>
                <CustomInput
                  id="businessName"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                  inputProps={{
                    type: "text",
                    name: "businessName",
                    value: agentData.businessName,
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
                        value: agentData.email,
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>

                {/* Form Input */}
                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="gender">Gender</label>
                    <CustomSelect
                      id="gender"
                      className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor
                      focus:ring-buttonColor py-3 w-full"
                      selectProps={{
                        name: "gender",
                        value: agentData.gender,
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
                  <label className="" htmlFor="preferredPhoneNumber">
                    Preferred Phone Number
                  </label>

                  <div>
                    <p className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                      +234
                    </p>

                    <CustomInput
                      id="preferredPhoneNumber"
                      className="relative rounded-full border border-gray-300 outline-buttonColor
                      focus:border-buttonColor focus:ring-buttonColor py-3 w-full pl-24"
                      inputProps={{
                        type: "text",
                        name: "preferredPhoneNumber",
                        value: agentData.preferredPhoneNumber,
                        placeholder: "8023004029",
                        onChange: handleCompanyDataChange
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-3 w-full">
                  <label className="" htmlFor="alternativePhoneNumber">
                    Alternate Phone Number
                  </label>

                  <div>
                    <p className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                      +234
                    </p>

                    <CustomInput
                      id="alternativePhoneNumber"
                      className="relative rounded-full border border-gray-300 outline-buttonColor
                      focus:border-buttonColor focus:ring-buttonColor py-3 w-full pl-24"
                      inputProps={{
                        type: "text",
                        name: "alternativePhoneNumber",
                        value: agentData.alternativePhoneNumber,
                        placeholder: "8023334029",
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
                    <Combobox value={selectedState} onChange={setSelectedState}>
                      <div className="relative mt-1">
                        <Combobox.Input
                          placeholder="Search States"
                          className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor
                          focus:ring-buttonColor py-3 w-full"
                          displayValue={(state: any) => {
                            setStateToFetchLGA(state);
                            return state;
                          }}
                          onChange={(event) => setQuery(event.target.value)}
                        />

                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiOutlineChevronDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>

                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={() => setQuery("")}
                        >
                          <Combobox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md 
                              bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 
                              focus:outline-none sm:text-sm"
                          >
                            {filterState.length === 0 && query !== "" ? (
                              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                              </div>
                            ) : (
                              filterState.map((state, index) => (
                                <Combobox.Option
                                  key={state.id}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-buttonColor text-white"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={state?.id}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {state.name}
                                      </span>
                                      {selected ? (
                                        <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active
                                              ? "text-white"
                                              : "text-buttonColor"
                                          }`}
                                        >
                                          <BsCheck2
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))
                            )}
                          </Combobox.Options>
                        </Transition>
                      </div>
                    </Combobox>
                  </div>
                </div>

                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="LGA">LGA</label>
                    <Combobox value={selectedLGA} onChange={setSelectedLGA}>
                      <div className="relative mt-1">
                        <Combobox.Input
                          placeholder="Search LGA"
                          className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor
                          focus:ring-buttonColor py-3 w-full"
                          displayValue={(lga: any) => lga}
                          onChange={(event) => setQuery(event.target.value)}
                        />

                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiOutlineChevronDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>

                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={() => setQuery("")}
                        >
                          <Combobox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md 
                              bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 
                              focus:outline-none sm:text-sm"
                          >
                            {filterLGA?.length === 0 && query !== "" ? (
                              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                              </div>
                            ) : (
                              filterLGA?.map((lga, index) => (
                                <Combobox.Option
                                  key={index}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-buttonColor text-white"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={lga}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {lga}
                                      </span>
                                      {selected ? (
                                        <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active
                                              ? "text-white"
                                              : "text-buttonColor"
                                          }`}
                                        >
                                          <BsCheck2
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))
                            )}
                          </Combobox.Options>
                        </Transition>
                      </div>
                    </Combobox>
                  </div>
                </div>
              </div>

              {/* Proposed Agency Service/Business Address */}
              <div className="space-y-3 w-full">
                <label htmlFor="proposedAgentService">
                  Proposed Agency Service/Business Address
                </label>
                <CustomInput
                  id="proposedAgentService"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                  inputProps={{
                    type: "text",
                    name: "proposedAgentService",
                    value: agentData.proposedAgentService,
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
                    value: agentData.choiceOfSuperAgent,
                    onChange: handleCompanyDataChange
                  }}
                />
              </div>

              {/* <AuthComplete /> */}
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
