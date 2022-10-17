import React from "react";
import { FooterContentProps } from "./FooterContentOne";

const FooterContentTwo = ({
  parentClassName,
  headingClassName,
  contentClassName
}: FooterContentProps) => {
  return (
    <div className={parentClassName}>
      <p className={contentClassName}>Follow us on social media</p>
      <h1 className={headingClassName}>E D Q P C</h1>
    </div>
  );
};

export default FooterContentTwo;
