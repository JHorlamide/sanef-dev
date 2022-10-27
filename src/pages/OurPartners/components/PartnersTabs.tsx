import React from "react";
import { Tab } from "@headlessui/react";
import Image from "components/widgets/Image/Image";
import { OUR_PARTNERS_LOGOS } from "../content";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const PartnersTabs = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const tabIndex = Number(queryParams.get("tabIndex"));
  return (
    <div
      className="hidden md:block w-full px-5 md:px-16 lg:px-60 mb-10 lg:mb-5
      lg:container-lg mt-20"
    >
      <Tab.Group defaultIndex={tabIndex ? tabIndex : 0}>
        <Tab.List className="flex justify-center items-center space-x-20 ">
          {Object.keys(OUR_PARTNERS_LOGOS).map((category, idx) => (
            <div className="flex space-x-14" key={idx}>
              <Tab
                className={({ selected }) =>
                  classNames(
                    `font-bold hover:text-lightGreen`,
                    "focus:outline-none",
                    selected
                      ? "text-buttonColor border-b-4 border-b-buttonColor"
                      : ""
                  )
                }
              >
                {category}
              </Tab>
            </div>
          ))}
        </Tab.List>

        <Tab.Panels className={"mt-16"}>
          {/* Banks */}
          <Tab.Panel className="grid grid-custom gap-y-10 gap-x-14 justify-center">
            {OUR_PARTNERS_LOGOS.Banks.map(({ id, name, logo }) => (
              <div key={id}>
                <Image
                  key={id}
                  image={logo}
                  alt={name}
                  parentClassName="container bg-white rounded-full shadow-md p-6"
                  imageClassName="w-28 m-0"
                />

                <p
                  className="text-center font-[500px] text-[12px] font-semibold 
                  whitespace-pre-line mt-5"
                >
                  {name}
                </p>
              </div>
            ))}
          </Tab.Panel>

          {/* Super Agents */}
          <Tab.Panel className="grid grid-custom gap-y-10 gap-x-14 justify-center">
            {OUR_PARTNERS_LOGOS["Super Agents"].map(({ id, name, logo }) => (
              <div key={id}>
                <Image
                  key={id}
                  image={logo}
                  alt={name}
                  parentClassName="container bg-white rounded-full shadow-md p-6"
                  imageClassName="w-28 m-0"
                />

                <p
                  className="text-center font-[500px] text-[12px] font-semibold 
                  whitespace-pre-line mt-5"
                >
                  {name}
                </p>
              </div>
            ))}
          </Tab.Panel>

          {/* Regulators */}
          <Tab.Panel
            className="grid grid-custom gap-y-10 gap-x-0 space-x-10 
            justify-center"
          >
            {OUR_PARTNERS_LOGOS.Regulators.map(({ id, name, logo }) => (
              <div key={id}>
                <Image
                  key={id}
                  image={logo}
                  alt={name}
                  parentClassName="container bg-white rounded-full shadow-md p-6"
                  imageClassName="w-28 m-0"
                />

                <p
                  className="text-center font-[500px] text-[12px] font-semibold 
                  whitespace-pre-line mt-5"
                >
                  {name}
                </p>
              </div>
            ))}
          </Tab.Panel>

          {/* Strategic Partners */}
          <Tab.Panel className="grid grid-custom gap-y-10 gap-x-14 justify-center">
            {OUR_PARTNERS_LOGOS["Strategic Partners"].map(
              ({ id, name, logo }) => (
                <div key={id}>
                  <Image
                    key={id}
                    image={logo}
                    alt={name}
                    parentClassName="container bg-white rounded-full shadow-md p-6"
                    imageClassName="w-28 m-0"
                  />

                  <p className="text-center font-[500px] text-[12px] font-semibold whitespace-pre-line mt-5">
                    {name}
                  </p>
                </div>
              )
            )}
          </Tab.Panel>

          {/* Government/MDA's */}
          <Tab.Panel className="grid grid-custom gap-y-10 gap-x-0 space-x-10 justify-center">
            {OUR_PARTNERS_LOGOS["Government/MDA'S"].map(
              ({ id, name, logo }) => (
                <div key={id}>
                  <Image
                    key={id}
                    image={logo}
                    alt={name}
                    parentClassName="container bg-white rounded-full shadow-md p-6"
                    imageClassName="w-28 m-0"
                  />

                  <p
                    className="text-center font-[500px] text-[12px] font-semibold 
                    whitespace-pre-line mt-5"
                  >
                    {name}
                  </p>
                </div>
              )
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default PartnersTabs;
