import React from "react";
import { Tab } from "@headlessui/react";
import Image from "components/widgets/Image/Image";
import { OUR_PARTNERS_LOGOS } from "../content";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const PartnersTabs = () => {
  return (
    <div className="hidden md:block w-full px-5 md:px-16 lg:px-28 mb-10 lg:mb-5 lg:w-full mt-20">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center space-x-20 ">
          {Object.keys(OUR_PARTNERS_LOGOS).map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "text-md font-bold",
                  "bg-secondaryColor ring-secondaryColor ring-opacity-60 ring-offset-1 focus:outline-none focus:ring-0",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              {category}
              <hr className={""} />
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className={"mt-16 px-48"}>
          {Object.values(OUR_PARTNERS_LOGOS).map((members, index) => (
            <Tab.Panel
              key={index}
              className="grid grid-cols-4 gap-y-4 gap-x-5 justify-items-center justify-center"
            >
              {members.map(({ id, name, logo }) => (
                <section key={id} className="lg:space-y-3">
                  <Image
                    image={logo}
                    alt={name}
                    parentClassName=""
                    imageClassName="container bg-white rounded-full w-40 p-2"
                  />

                  <p className="text-center font-semibold">{name}</p>
                </section>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default PartnersTabs;
