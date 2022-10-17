import React from "react";
import RouterLink from "components/Navbar/NavLink/RouterLink";

export interface FooterContentProps {
  parentClassName?: string;
  headingClassName: string;
  contentClassName: string;
}

const FooterContentOne = ({
  parentClassName,
  headingClassName,
  contentClassName
}: FooterContentProps) => {
  return (
    <section className={parentClassName}>
      <h1 className={headingClassName}>Subscribe</h1>
      <RouterLink
        className={contentClassName}
        path={"/about-us"}
        title={"Subscribe to learn more about SANEF"}
      />
    </section>
  );
};

export default FooterContentOne;
