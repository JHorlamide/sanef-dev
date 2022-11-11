import React from "react";
import { Menu } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

const Test = () => {
  return (
    <Menu>
      <Menu.Button
        className={"flex space-x-3 py-2 px-2 rounded-lg bg-white mx-1 -mt-2"}
      >
        <p className="">10</p>
        <IoIosArrowDown size={22} />
      </Menu.Button>
      <Menu.Items className={"flex flex-col space-y-3 bg-white rounded-lg"}>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default Test;
