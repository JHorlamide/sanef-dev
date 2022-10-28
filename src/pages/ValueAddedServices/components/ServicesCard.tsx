import React, { Fragment, useState } from "react";
import Image from "components/widgets/Image/Image";
import ServiceCardModal from "./ServiceCardModal";

interface ServiceDetails {
  heading: string;
  details: string;
}

interface ServiceCardProps {
  image: string;
  heading: string;
  details: string;
}

export const ServicesCardMobile = ({
  image,
  heading,
  details
}: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [serviceDetails, setServiceDetails] = useState<ServiceDetails>({
    heading: "",
    details: ""
  });

  const handleSetServiceDetails = ({ heading, details }: ServiceDetails) => {
    setIsOpen(true);
    setServiceDetails({ heading, details });
  };

  return (
    <Fragment>
      <ServiceCardModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        heading={serviceDetails.heading}
        details={serviceDetails.details}
      />

      <div
        className="md:hidden container bg-white shadow-lg rounded-xl py-8
        px-5 flex items-center space-x-6"
        onClick={() =>
          handleSetServiceDetails({ heading: heading, details: details })
        }
      >
        <div>
          <Image image={image} />
        </div>
        <p className="font-bold text-[20px] leading-[27px]">{heading}</p>
      </div>
    </Fragment>
  );
};

export const ServicesCardDesktop = ({
  image,
  heading,
  details
}: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [serviceDetails, setServiceDetails] = useState<ServiceDetails>({
    heading: "",
    details: ""
  });

  const handleSetServiceDetails = ({ heading, details }: ServiceDetails) => {
    setIsOpen(true);
    setServiceDetails({ heading, details });
  };

  return (
    <Fragment>
      <ServiceCardModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        heading={serviceDetails.heading}
        details={serviceDetails.details}
      />

      <div
        className="hidden md:flex container bg-white shadow-lg rounded-xl h-32 w-fit 
        px-5 items-center space-x-6 cursor-pointer"
        onClick={() =>
          handleSetServiceDetails({ heading: heading, details: details })
        }
      >
        <img src={image} alt="" />
        {/* <Image image={image} parentClassName="" imageClassName="" /> */}
        <div className="w-fit">
          <p className="font-bold text-[20px] leading-[27px]">{heading}</p>
        </div>
      </div>
    </Fragment>
  );
};
