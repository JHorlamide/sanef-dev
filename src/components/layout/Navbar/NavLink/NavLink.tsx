import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";

interface NavLinkProps {
  path: string;
  title: string;
  className: string;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
  handleClick?: () => void;
}

const NavLink = ({
  path,
  title,
  leftIcon,
  rightIcon,
  className,
  handleClick
}: NavLinkProps) => {
  const { pathname } = useLocation();
  let isActive = pathname === path ? true : false;
  const isMatch = matchPath(path, pathname);

  console.log({ pathname, path });

  console.log("isMatch: ", isMatch);

  return (
    <Link
      to={path}
      className={`${className} ${isActive ? "text-yellow-500" : "text-white"}`}
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
}: NavLinkProps) => {
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

export default NavLink;
