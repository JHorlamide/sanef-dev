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
        className="hidden md:flex md:w-full lg:w-fit bg-white shadow-lg rounded-xl items-center
        space-x-6 cursor-pointer px-5 h-36"
        onClick={() =>
          handleSetServiceDetails({ heading: heading, details: details })
        }
      >
        <Image
          image={image}
          // parentClassName="w-full"
          imageClassName="w-full m-0"
        />
        {/* <img src={image} alt="..." className="bg-center bg-cover" /> */}

        {/* <div className="max-w-xl"> */}
        <p className="w-full -ml-20 font-bold text-[20px] leading-[27px] md:whitespace-pre-line">
          {heading}
        </p>
        {/* </div> */}
      </div>
    </Fragment>
  );
};
