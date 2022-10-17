import React from "react";

export interface CustomTextareaProps {
  id: string;
  className: string;
  boxProps: any;
}

const CustomTextarea = ({ id, className, boxProps }: CustomTextareaProps) => {
  return <textarea id={id} className={className} {...boxProps}></textarea>;
};

export default CustomTextarea;
