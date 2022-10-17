import React from "react";
import Image from "components/widgets/Image/Image";

interface ServiceCardProps {
  image: string;
  text: string;
}

export const ServicesCardMobile = ({ image, text }: ServiceCardProps) => {
  return (
    <div className="md:hidden container bg-white shadow-lg rounded-xl py-8 px-5 flex items-center space-x-6">
      <div>
        <Image image={image} />
      </div>
      <p className="font-bold text-[20px] leading-[27px]">{text}</p>
    </div>
  );
};

export const ServicesCardDesktop = ({ image, text }: ServiceCardProps) => {
  return (
    <div className="hidden md:flex container bg-white shadow-lg rounded-xl h-32 w-fit  px-5 items-center space-x-6">
      <Image parentClassName="h-fit" image={image} />
      <p className="font-bold text-[20px] leading-[27px]">{text}</p>
    </div>
  );
};
