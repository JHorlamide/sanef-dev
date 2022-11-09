import React from "react";
import NavLink from "components/layout/Navbar/NavLink/NavLink";
import { LOGIN_LOGO } from "assets/images";
import { USER } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";

interface LinkItemProp {
  name: string;
  link: string;
}

const LinkItems: Array<LinkItemProp> = [
  {
    name: "Banks",
    link: "/banks"
  },
  {
    name: "Super Agents",
    link: "/super-agent"
  },
  {
    name: "Regulators",
    link: "/regulators"
  },
  {
    name: "Strategic Partners",
    link: "/strategic-partners"
  },
  {
    name: "Government/MDA's",
    link: "/government"
  },
  {
    name: "Agents",
    link: "/agents"
  }
];

const SidebarUserAuth = () => {
  return (
    <div className="flex justify-center items-center space-x-3 mt-5">
      <div className="">
        <img src={USER} alt="user-icon" className="" />
      </div>

      <div className="flex flex-col justify-start">
        <p className="">
          Welcome back, <span className="font-bold">Ihechukwu Ibeji</span>
        </p>
        <CustomBtn className="font-bold text-buttonColor text-start">
          Logout
        </CustomBtn>
      </div>
    </div>
  );
};

const HorizontalRule = () => {
  return (
    <div className="w-full">
      <hr className="w-full" />
    </div>
  );
};

const SidebarFooter = () => {
  return (
    <div className="container mx-auto flex justify-center items-center mt-32">
      <p className="text-gray-400 text-[12px] text-justify">
        © 2022. Shared Agent Network Expansion Facilities. <br /> All right
        reserved
      </p>
    </div>
  );
};

const SidebarContent = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="mx-5 w-[114px] h-[96px] my-2">
        <img src={LOGIN_LOGO} alt="..." className="w-full h-full" />
      </div>

      {/* Horizontal Rule */}
      <HorizontalRule />

      {/* Sidebar User Banner */}
      <SidebarUserAuth />

      {/* Sidebar Links */}
      <div className="px-10 py-8 flex flex-col space-y-5">
        {LinkItems.map((item, idx) => (
          <NavLink
            key={idx}
            path={item.link}
            title={item.name}
            className="font-semibold text-[16px] text-gray-500 hover:text-buttonColor"
          />
        ))}
      </div>

      {/* Horizontal Rule */}
      <HorizontalRule />

      {/* Sidebar Links */}
      <div className="px-10 py-8 flex flex-col space-y-5">
        <NavLink
          path={"/admin-setting"}
          title={"Admin Settings"}
          className="font-semibold text-[16px] text-gray-500 hover:text-buttonColor"
        />
      </div>

      {/* SidebarFooter */}
      <SidebarFooter />
    </div>
  );
};

export default SidebarContent;
