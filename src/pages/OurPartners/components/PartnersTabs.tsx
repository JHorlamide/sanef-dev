import React from "react";
import { Tab } from "@headlessui/react";
import Image from "components/widgets/Image/Image";
import { OUR_PARTNERS_LOGOS } from "../content";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const PartnersTabs = () => {
  return (
    <div className="hidden md:block w-full px-5 md:px-16 lg:px-60 mb-10 lg:mb-5 lg:container-lg mt-20">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center space-x-20 ">
          {Object.keys(OUR_PARTNERS_LOGOS).map((category, idx) => (
            <div className="flex space-x-14" key={idx}>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "font-bold",
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
          {Object.values(OUR_PARTNERS_LOGOS).map((members, index) => (
            <Tab.Panel
              key={index}
              className="grid grid-cols-4 gap-y-10 gap-x-0 justify-items-center"
            >
              {members.map(({ id, name, logo }) => (
                <div
                  className="flex flex-col justify-center items-center md:space-y-5"
                  key={id}
                >
                  <Image
                    image={logo}
                    alt={name}
                    parentClassName="container bg-white rounded-full p-6"
                    imageClassName=" w-32"
                  />

                  <p className="text-center font-[500px] text-[14px] font-semibold">
                    {name}
                  </p>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default PartnersTabs;
