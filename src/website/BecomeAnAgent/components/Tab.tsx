import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "components/widgets/Image/Image";
import { CIRCLE, GROUP_CIRCLE_COLORED } from "assets/icons";
import style from "../BecomeAnAgent.module.css";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";
import { CHECK_LIST } from "assets/icons";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";
import { useNavigate } from "react-router-dom";

import { Combobox, Transition } from "@headlessui/react";
import { BsCheck2 } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { StateType } from "hooks/useStateLga";
import useStateLga from "hooks/useStateLga";
import { registerNewAgentByUser } from "api/agents";
import { IAgentRequest } from "types/agent";
import toast from "react-hot-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  businessName: string;
  superAgent: string;
  proposedAgencyService: string;
  preferredPhoneNumber: string;
  alternatePhoneNumber: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const FirstTabPanel = () => {
  return (
    <Fragment>
      <div className="sm:container space-y-5 md:w-[690px] md:justify-center mx-auto">
        <p className="text-center">
          Agent Banking is the provision of Financial Services to Customers by a
          third party (Agent) on behalf of a licensed Financial Institution
          and/or Licensed Super-Agent (Principal)
        </p>

        <p className="text-center">
          <span className="font-bold">Super Agents</span> are Companies licensed
          by the Central Bank of Nigeria (CBN) to recruit Agents for the purpose
          of Agency Banking i.e. provision of Financial Services within
          Communities on behalf of Banks.
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <RouterLink
          path="/our-partners?tabIndex=1"
          title=" View SANEF Super-Agent Partners"
          className="text-buttonColor font-bold text-center hover:text-lightGreen"
        />
      </div>

      {/* FLEX CONTAINER */}
      <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-5 md:justify-center py-16 md:mb-16 md:px-5">
        {/* 1st CONTAINER */}
        <div className="relative z-10 text-white bg-buttonColor rounded-xl w-full px-5 py-4 md:py-12 md:w-96">
          <div className="">
            <h1 className="font-bold">Requirements</h1>
            <div className="mt-2">
              <p className="">
                A Super-Agent shall be licensed by the CBN under the following
                requirements:
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex space-x-4 justify-center">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="flex">
                    Must be a company with an existing business, operational for
                    at least 12 months
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must be registered with the Corporate Affairs Commission
                    (CAC)
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must have a minimum Shareholders’ Fund, unimpaired by losses
                    of N250million
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must obtain a reference letter from a Financial Institution
                    (FI) as part of its documentation for license
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">Must have a minimum of 50 agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          parentClassName="md:hidden absolute -left-20 top-[380px]"
          imageClassName="w-fit"
          image={CIRCLE}
        />

        {/* 2nd CONTAINER */}
        <div
          className="relative overflow-hidden md:w-96 lg:w-[450px] md:h-52 z-10 
          bg-white rounded-xl shadow-lg px-5 py-12"
        >
          <h1 className="font-bold text-[24px]">
            To become a licensed Super-Agent, visit:{" "}
          </h1>

          <div className="mt-5">
            <a
              href="https://www.cbn.gov.ng"
              target={"_blank"}
              className="text-buttonColor text-[20px] font-bold hover:text-lightGreen"
              rel="noreferrer"
            >
              www.cbn.gov.ng
            </a>
          </div>
        </div>

        <img
          className="md:hidden w-fit absolute -right-0 top-[1001px]"
          src={GROUP_CIRCLE_COLORED}
          alt="circle-icon"
        />
      </div>
    </Fragment>
  );
};

const SecondTabPanel = () => {
  const navigate = useNavigate();
  const DEFAULT_STATE_TO_FETCH_LGA = "lagos";
  const [stateToFetchLGA, setStateToFetchLGA] = useState<string>("");

  const { statesList, LGAsList } = useStateLga(
    stateToFetchLGA ? stateToFetchLGA : DEFAULT_STATE_TO_FETCH_LGA
  );

  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<StateType>(statesList[0]);
  const [selectedLGA, setSelectedLGA] = useState(LGAsList && LGAsList[0]);
  const regex = new RegExp(`${query}`, "gi");

  const filterState =
    query === ""
      ? statesList
      : statesList.filter((state) => state.name.match(regex));

  const filterLGA =
    query === "" ? LGAsList : LGAsList?.filter((lga) => lga.match(regex));

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    superAgent: "",
    businessName: "",
    proposedAgencyService: "",
    preferredPhoneNumber: "",
    alternatePhoneNumber: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const agentObj: IAgentRequest = {
      email: formData.email,
      firstName: formData.firstName,
      surname: formData.lastName,
      businessName: formData.businessName,
      state: stateToFetchLGA,
      LGA: selectedLGA as string,
      approved: false,
      createdDate: new Date(),
      gender: formData.gender,
      choiceOfSuperAgent: formData.superAgent,
      preferredPhoneNumber: `+234${formData.preferredPhoneNumber}`,
      alternativePhoneNumber: `+234${formData.alternatePhoneNumber}`,
      proposedAgentService: formData.proposedAgencyService
    };

    console.log(agentObj);

    registerNewAgentByUser(agentObj)
      .then((response) => {
        toast.success(response.message);
        clearForm();
        navigate("/become-agent");
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message);
        }

        toast.error(error.message);
      });
    console.log({ state: selectedState, lga: selectedLGA, ...formData });
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      superAgent: "",
      businessName: "",
      proposedAgencyService: "",
      preferredPhoneNumber: "",
      alternatePhoneNumber: ""
    });
  };

  return (
    <Fragment>
      <div className="sm:container space-y-5 md:w-[690px] md:justify-center px-5 mx-auto">
        <p className="text-center">
          <span className="font-bold">SANEF Agents</span> are individuals or
          small businesses who provide financial services within communities on
          behalf of licensed financial institutions.
        </p>

        <p className="text-center">
          They are recruited and monitored by CBN licensed financial
          institutions/SANEF Super Agents to carry out financial transactions.
        </p>
      </div>

      {/* FLEX CONTAINER */}
      <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-x-6 lg:space-y-0 items-center md:items-start md:pb-24 mt-8">
        {/* 1st CONTAINER */}
        <div className="text-white bg-buttonColor rounded-xl w-full mx-5 md:mx-0 px-5 py-4 md:px-10 md:py-12 md:container lg:w-[450px]">
          <div className="">
            <h1 className="font-bold">Requirements</h1>

            <div className="mt-8 space-y-4">
              <div className="flex space-x-4 justify-start">
                <div className="block w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="flex">Must be able to read and write</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must have a functional computer or at least an android
                    enabled mobile phone
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must have an existing physical shop/business outlet
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    A copy of ID or equivalent (Driver’s license, National ID
                    card, Int’l passport, Voter’s card)
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    A Passport-sized photograph Proof of Address (Utility bills
                    e.g. PHCN, LAWMA, DStv, GOtv, StarTimes, etc.)
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Financial/Bank account detail or statements
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">At least 10,000 Naira startup capital.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd CONTAINER */}
        <div
          className={`${style.form_tab} bg-white md:rounded-2xl md:shadow-lg w-full lg:w-[700px]`}
        >
          <div className="flex flex-col space-y-1.5 justify-center px-5 mt-8 md:mt-10">
            <h1 className="font-bold text-[24px] text-center">
              Apply to become a SANEF Agent here
            </h1>

            <p className="text-[14px] text-center">
              Fill the application form below and a super agent will get in
              touch with you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-10 md:space-y-5 md:justify-center px-5 py-14 md:py-12 md:px-10 md:w-fit"
          >
            {/* FIRST & LAST NAME */}
            <div className="container flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4">
              <div className="space-y-2 w-full">
                <label htmlFor="firstName">First Name</label>
                <CustomInput
                  id="firstName"
                  className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                  inputProps={{
                    type: "text",
                    name: "firstName",
                    value: formData.firstName,
                    onChange: handleChange
                  }}
                />
              </div>

              <div className="space-y-2 w-full">
                <label htmlFor="lastName">Last Name</label>
                <CustomInput
                  id="lastName"
                  className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                  inputProps={{
                    type: "text",
                    name: "lastName",
                    value: formData.lastName,
                    onChange: handleChange
                  }}
                />
              </div>
            </div>

            {/* BUSINESS NAME */}
            <div className="container space-y-2">
              <label htmlFor="businessName">Business Name</label>
              <CustomInput
                id="businessName"
                className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                inputProps={{
                  type: "text",
                  name: "businessName",
                  value: formData.businessName,
                  onChange: handleChange
                }}
              />
            </div>

            {/* EMAIL & GENDER  */}
            <div className="container flex flex-col space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
              <div className="space-y-2 w-full">
                <label htmlFor="email">Email Address</label>
                <CustomInput
                  id="email"
                  className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                  inputProps={{
                    type: "text",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange
                  }}
                />
              </div>

              <div className="space-y-2 w-full">
                <label htmlFor="gender">Gender</label>
                <CustomSelect
                  id="gender"
                  className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                  selectProps={{
                    name: "gender",
                    value: formData.gender,
                    onChange: handleChange
                  }}
                  selectOptions={[
                    { value: "male", name: "Male" },
                    { value: "female", name: "Female" }
                  ]}
                  selectPlaceholder="Select a gender"
                />
              </div>
            </div>

            {/* PREFERRED & ALTERNATE PHONE NUMBER */}
            <div className="container flex flex-col space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
              <div className="space-y-2 w-full">
                <label htmlFor="preferredPhoneNumber">
                  Preferred Phone Number
                </label>

                <div>
                  <p className="z-10 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                    +234
                  </p>
                  <CustomInput
                    id="preferredPhoneNumber"
                    className="relative rounded-full border border-gray-300 outline-buttonColor
                    focus:border-buttonColor focus:ring-buttonColor py-3 w-full pl-24"
                    inputProps={{
                      type: "text",
                      name: "preferredPhoneNumber",
                      value: formData.preferredPhoneNumber,
                      onChange: handleChange
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2 w-full">
                <label htmlFor="alternatePhoneNumber">
                  Alternate Phone Number
                </label>

                <div>
                  <p className="z-10 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                    +234
                  </p>
                  <CustomInput
                    id="alternatePhoneNumber"
                    className="relative rounded-full border border-gray-300 outline-buttonColor 
                    focus:border-buttonColor focus:ring-buttonColor py-3 w-full pl-24"
                    inputProps={{
                      type: "text",
                      name: "alternatePhoneNumber",
                      value: formData.alternatePhoneNumber,
                      onChange: handleChange
                    }}
                  />
                </div>
              </div>
            </div>

            {/* STATE & LGA */}
            <div className="container flex flex-col space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
              <div className="space-y-2 w-full">
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
                                      selected ? "font-medium" : "font-normal"
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
                {/* <CustomSelect
                  id="state"
                  className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                  selectProps={{
                    name: "state",
                    value: formData.state,
                    onChange: handleChange
                  }}
                  selectOptions={[
                    { value: "lagos", name: "Lagos" },
                    { value: "abia", name: "Abia" },
                    { value: "abuja", name: "Abuja" }
                  ]}
                  selectPlaceholder="Select a state"
                /> */}
              </div>

              <div className="space-y-2 w-full">
                <label htmlFor="lga">LGA</label>
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
                                      selected ? "font-medium" : "font-normal"
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
                {/* <CustomSelect
                  id="lga"
                  className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                  selectProps={{
                    name: "lga",
                    value: formData.lga,
                    onChange: handleChange
                  }}
                  selectOptions={[
                    { value: "ifo", name: "Ifo LGA" },
                    { value: "eti Osa", name: "Eti Osa" }
                  ]}
                  selectPlaceholder="Select an LGA"
                /> */}
              </div>
            </div>

            {/* PREFERRED AGENCY SERVICES/BUSINESS NAME */}
            <div className="space-y-2">
              <label htmlFor="proposedAgencyService">
                Proposed Agency Services/Business Address
              </label>
              <CustomInput
                id="proposedAgencyService"
                className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
                inputProps={{
                  type: "text",
                  name: "proposedAgencyService",
                  value: formData.proposedAgencyService,
                  onChange: handleChange
                }}
              />
            </div>

            {/* PREFERRED SUPER AGENT */}
            <div className="space-y-2">
              <label htmlFor="superAgent">
                Choose Your Preferred Super Agent
              </label>
              <CustomSelect
                id="superAgent"
                className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor  py-3 w-full"
                selectProps={{
                  name: "superAgent",
                  value: formData.superAgent,
                  onChange: handleChange
                }}
                selectOptions={[
                  { value: "", name: "Business Name" },
                  { value: "my agent 1", name: "Flutterwave" }
                ]}
                selectPlaceholder="Business Name"
              />
            </div>

            <CustomBtn
              className="text-white font-semibold bg-buttonColor rounded-full py-3 px-5 w-full 
              hover:bg-lightGreen"
            >
              Submit Application
            </CustomBtn>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const AgentTab = () => {
  return (
    <div className="container-md mx-auto relative mt-16 md:-mt-16">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center space-x-20 border-b-0">
          <div className="flex space-x-14">
            <Tab
              className={({ selected }) =>
                classNames(
                  `text-[24px] font-bold hover:text-lightGreen`,
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              Super Agents
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  `text-[24px] font-bold hover:text-lightGreen`,
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              Agents
            </Tab>
          </div>
        </Tab.List>

        <Tab.Panels className={"mt-8 md:mt-12"}>
          <Tab.Panel className={"px-5"}>
            <FirstTabPanel />
          </Tab.Panel>

          <Tab.Panel>
            <SecondTabPanel />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AgentTab;
