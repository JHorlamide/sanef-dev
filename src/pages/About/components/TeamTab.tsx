import { Tab } from "@headlessui/react";
import { BOARD_CONTENT } from "../content";
import BoardCard from "./BoardCard";
import { GROUP_SHAPE, GROUP_CIRCLE_COLORED } from "assets/icons";
import Image from "components/widgets/Image/Image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const TeamTab = () => {
  return (
    <div className="container mx-auto py-10">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center space-x-20 border-b-0">
          {Object.keys(BOARD_CONTENT).map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "text-md font-bold",
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className={"mt-20 md:mt-28"}>
          {Object.values(BOARD_CONTENT).map((members, index) => (
            <Tab.Panel
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:-gap-x-96 gap-y-16"
            >
              {members.map(
                ({ id, name, image, position, shortBio, fullBio }) => (
                  <BoardCard
                    key={id}
                    image={image}
                    name={name}
                    position={position}
                    shortBio={shortBio}
                    fullBio={fullBio}
                  />
                )
              )}

              <Image
                image={GROUP_SHAPE}
                parentClassName="hidden md:block absolute inset-y-0 -right-16 top-20"
                imageClassName="w-64"
              />

              <Image
                image={GROUP_CIRCLE_COLORED}
                parentClassName="hidden md:block absolute inset-y-0 -left-[6%] top-[22%]"
                imageClassName="w-[80%]"
              />

              <Image
                image={GROUP_CIRCLE_COLORED}
                parentClassName="hidden md:block absolute inset-y-0 -right-[4%] top-[92%]"
                imageClassName="w-[90%]"
              />

              <Image
                image={GROUP_SHAPE}
                parentClassName="hidden md:block absolute inset-y-0 -left-20 top-[52%]"
                imageClassName="w-80"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TeamTab;
