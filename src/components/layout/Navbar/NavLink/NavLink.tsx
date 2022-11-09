import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import style from "../Navbar.module.scss";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface AppNavLinkProps {
  path: string;
  title: string;
  className: string;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
  handleClick?: () => void;
}

export const TestLink = ({
  path,
  title,
  leftIcon,
  rightIcon,
  className
}: AppNavLinkProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames(`${className}`, isActive ? "text-yellow-500" : "")
      }
      style={style}
    >
      {!!leftIcon && leftIcon}
      {title}
      {!!rightIcon && rightIcon}
    </NavLink>
  );
};

const AppNavLink = ({
  path,
  title,
  leftIcon,
  rightIcon,
  className,
  handleClick
}: AppNavLinkProps) => {
  const { pathname } = useLocation();
  let isActive = pathname === path ? true : false;
  // const isMatch = matchPath(path, pathname);

  // console.log(isMatch?.pattern.end);

  return (
    <Link
      to={path}
      className={`${className} ${isActive ? "text-yellow-500" : ""}`}
      onClick={handleClick}
    >
      {!!leftIcon && leftIcon}
      {title}
      {!!rightIcon && rightIcon}
    </Link>
  );
};

export const BecomeAgent = ({
  path,
  title,
  className,
  handleClick
}: AppNavLinkProps) => {
  const location = useLocation();
  const { pathname } = location;
  const isActive = pathname === path ? true : false;

  return (
    <Link
      to={path}
      className={`${className} ${
        isActive ? "text-white bg-yellow-500 border-yellow-500" : "text-black"
      }`}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
};

export default AppNavLink;
