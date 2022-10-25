import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLink, { BecomeAgent } from "./NavLink/NavLink";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import { Logo } from "assets/index";
import {
  HOME,
  ABOUT_US,
  OUR_PARTNERS,
  VALUE_ADDED_SERVICES,
  MEDIA,
  CONTACT_US,
  LOGIN,
  BECOME_AGENT
} from "routes/ROUTES_CONSTANTS";
import { Menu } from "assets/icons";
import { NAVIGATION } from "utils/constants";
import { CLOSE_ICON } from "assets/icons";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  const handleNavigate = () => {
    navigate(BECOME_AGENT);
  };

  const handleToggle = () => {
    setShow(!show);
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      {/* DESKTOP NAV */}
      <nav className="relative py-5 px-5 md:py-0 lg:py-0 md:px-10 lg:px-10">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* LOGO CONTAINER */}
          <Link to={HOME} arial-current="page">
            <img
              className="pt-5 w-14 md:pt-0 md:w-full lg:pt-0 lg:w-28 md:mt-5 lg:mt-5"
              src={Logo}
              alt="Sanef Logo"
            />
          </Link>

          {/* NAV LINK CONTAINER */}
          <div className="hidden justify-between items-center space-x-6 lg:flex lg:w-auto -mt-14 lg:mt-0">
            <div className="flex flex-col mt-4 text-[14px] font-bold lg:flex-row lg:space-x-4 lg:mt-0">
              <NavLink
                path={ABOUT_US}
                title={"About Us"}
                className={`text-white hover:text-buttonColor whitespace-nowrap block py-2 pr-4 pl-3`}
              />

              <NavLink
                path={OUR_PARTNERS}
                title={"Our Partners"}
                className={`text-white hover:text-buttonColor whitespace-nowrap block py-2 pr-4 pl-3`}
              />

              <NavLink
                path={VALUE_ADDED_SERVICES}
                title={"Value Added Services"}
                className={`text-white hover:text-buttonColor whitespace-nowrap block py-2 pr-4 pl-3`}
              />

              <NavLink
                path={MEDIA}
                title={"Media"}
                className={`text-white hover:text-buttonColor whitespace-nowrap block py-2 pr-4 pl-3`}
              />

              <NavLink
                path={CONTACT_US}
                title={"Contact"}
                className={`text-white hover:text-buttonColor whitespace-nowrap block py-2 pr-4 pl-3`}
              />

              {/* {NAVIGATION.map(({ id, path, title }) => (
                <NavLink
                  key={id}
                  path={path}
                  title={title}
                  className={`text-white hover:text-buttonColor whitespace-nowrap font-semibold block py-2 pr-4 pl-3`}
                />
              ))} */}
            </div>
          </div>

          {/* AUTH BUTTON */}
          <div className="hidden md:-mr-96 lg:mr-0 lg:flex lg:items-baseline space-x-10">
            <div className="block">
              <BecomeAgent
                path={BECOME_AGENT}
                title={"Become an Agent"}
                className={`px-4 py-2 border rounded-3xl font-bold bg-white hover:border-buttonColor
                whitespace-nowrap hover:text-white hover:bg-buttonColor`}
              />
            </div>

            {/* <CustomBtn
              className="px-4 py-2 border rounded-3xl font-bold bg-white text-dark 
              whitespace-nowrap hover:text-white hover:bg-buttonColor hover:border-buttonColor"
              onClick={handleNavigate}
            >
              Become an Agent
            </CustomBtn> */}

            <div>
              <NavLink
                title={"Login"}
                path={LOGIN}
                className="font-semibold text-white hover:text-buttonColor border-b-4 
                border-b-white hover:border-b-buttonColor"
              />

              {/* <hr className="border-2 border-white mt-1 hover:border-buttonColor" /> */}
            </div>
          </div>

          {/* MENU ICON */}
          <div className="flex md:flex lg:hidden">
            <img
              className="hover:cursor-pointer h-8 mt-[26px]"
              src={Menu}
              alt="menu icon"
              onClick={handleToggle}
            />
          </div>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="lg:hidden md:flex">
        <div
          className={`${
            toggleMenu ? "hidden" : ""
          } bg-mobile-nav-bg fixed top-0 right-0 left-0 bottom-0 z-10 bg-center bg-cover bg-no-repeat pt-16`}
        >
          <Transition
            show={show}
            enter="transform transition ease-in-out duration-2000"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-2000"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="flex justify-end mr-6 -mt-6 md:mr-9 md:-mt-5">
              <img
                className="w-10"
                src={CLOSE_ICON}
                alt="close-icon"
                onClick={handleToggle}
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="space-y-5 pb-10">
                {NAVIGATION.map((link) => (
                  <NavLink
                    key={link.id}
                    path={link.path}
                    title={link.title}
                    className={`text-white text-[14px] font-bold text-center whitespace-nowrap block py-2 pr-4 pl-3`}
                  />
                ))}
              </div>

              <hr className="border-3 w-64" />

              <div className="flex flex-col space-y-8 pt-10">
                <CustomBtn
                  className="px-4 py-2 border rounded-3xl font-bold bg-white text-dark"
                  onClick={handleNavigate}
                >
                  Become an Agent
                </CustomBtn>

                <NavLink
                  path={LOGIN}
                  title={"Login"}
                  className="text-center mx-auto w-12 font-semibold border-b-4 text-white"
                />
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
