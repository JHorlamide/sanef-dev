import React, { Fragment } from "react";
import Navbar from "components/Navbar/Navbar";
import Image from "components/widgets/Image/Image";
import style from "./style.module.css";
import { DOTS } from "assets/icons";
import { VAS_IMAGE_DESKTOP } from "assets/images";

import {
  ServicesCardMobile,
  ServicesCardDesktop
} from "./components/ServicesCard";
import { SERVICES } from "./content";
import Footer from "components/widgets/Footer";
import {
  ProductServicesMobile
  // ProductServicesDesktop
} from "./components/ProductServices";
import ProductServiceDesktop from "./components/ProductServiceDesktop";

const ValueAddedServices = () => {
  return (
    <Fragment>
      <section
        className={`${style.value_added_services_hero} bg-about-hero-mobile md:bg-about-hero-desktop bg-center bg-cover bg-no-repeat items-center w-full h-96 lg:h-[400px]`}
      >
        <Navbar />

        <div className="">
          <h1 className="text-white text-4xl text-center max-w-lg mx-auto my-10 font-extrabold lg:mt-5">
            Value Added Services
          </h1>
        </div>
      </section>

      <section className="relative p-10 -mt-28 md:-mt-10">
        <Image
          image={DOTS}
          parentClassName="absolute inset-y-0 -right-1 top-42 md:right-16 md:-top-32 lg:right-20 lg:-top-40"
          imageClassName="w-24 h-24 md:h-fit lg:h-fit"
        />
      </section>

      <section
        id="about-sanef-mobile"
        // className="relative mt-10 px-5 md:px-10 md:-mt-5 lg:px-40" // Old style
        className="relative mt-16 px-5 md:px-10 lg:px-40" // New style
      >
        <p className="text-lg text-center md:text-md md:-mt-10 lg:-mt-20">
          Shared Agent Network Expansion Facilities Limited (SANEF) provides
          strong support to expand the Agent Banking Ecosystem along these focus
          areas
        </p>
      </section>

      <section className="py-3 px-5 md:px-16 lg:px-28">
        {/* SERVICES MOBILE */}
        <div className="container mx-auto space-y-5 flex flex-col">
          {SERVICES.map((service) => (
            <ServicesCardMobile
              key={service.id}
              image={service.image}
              heading={service.heading}
              details={service.details}
            />
          ))}
        </div>

        {/* SERVICES DESKTOP */}
        <div className="container mx-auto md:flex justify-between items-center space-x-3 lg:py-6">
          {SERVICES.slice(0, 3).map((service) => (
            <ServicesCardDesktop
              key={service.id}
              image={service.image}
              heading={service.heading}
              details={service.details}
            />
          ))}
        </div>

        <div className="container mx-auto md:grid md:grid-cols-3 md:gap-5 lg:gap-0 py-5 lg:flex justify-between items-center space-x-3">
          {SERVICES.slice(3, 7).map((service) => (
            <ServicesCardDesktop
              key={service.id}
              image={service.image}
              heading={service.heading}
              details={service.details}
            />
          ))}
        </div>
      </section>

      {/* OUTCOME MOBILE VIEW */}
      <section className="md:hidden py-10">
        <section className="relative container mx-auto bg-white shadow-lg mt-28 md:mt-52 rounded-xl w-[335px] h-[310px] px-5">
          <h1 className="text-[20px] font-bold pt-20"> Outcomes:</h1>

          <div className="flex flex-col space-y-4 py-6">
            <div className="flex space-x-2 items-center">
              <hr className="text-black border-black py-2 px-2 -mb-4" />
              <p className="text-[18px] leading-[32px]">
                Increase Financial Access Points
              </p>
            </div>

            <div className="flex space-x-2 items-center">
              <hr className="text-black border-black py-2 px-2 -mb-4" />
              <p className="text-[18px] leading-[32px]">
                Drive Account/Wallet opening
              </p>
            </div>

            <div className="flex space-x-2 items-center">
              <hr className="text-black border-black py-2 px-2 -mb-4" />
              <p className="text-[18px] leading-[32px]">Agent Sustainability</p>
            </div>
          </div>

          <Image
            image={VAS_IMAGE_DESKTOP}
            parentClassName="absolute -top-56"
            imageClassName=""
          />
        </section>
      </section>

      {/* OUTCOME DESKTOP VIEW */}
      <section className="hidden md:block relative container mx-auto bg-white rounded-xl shadow-lg w-[995px] h-[310px] my-10 px-12">
        <h1 className="font-bold text-[20px] pt-16 ml-20">Outcomes:</h1>

        <div className="flex flex-col space-y-4 py-6">
          <div className="flex space-x-2 items-center">
            <hr className="text-black border-black py-2 px-2 -mb-4" />
            <p className="text-[18px] leading-[32px]">
              Increase Financial Access Points
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            <hr className="text-black border-black py-2 px-2 -mb-4" />
            <p className="text-[18px] leading-[32px]">
              Drive Account/Wallet opening
            </p>
          </div>

          <div className="flex space-x-2 items-center">
            <hr className="text-black border-black py-2 px-2 -mb-4" />
            <p className="text-[18px] leading-[32px]">Agent Sustainability</p>
          </div>
        </div>

        <Image
          image={VAS_IMAGE_DESKTOP}
          parentClassName="md:block absolute inset-x-0 left-[390px] md:top-20 lg:-top-10"
          imageClassName=""
        />
      </section>

      <div className="hidden md:block relative">
        {/* <Image
          image={VAS_IMAGE_DESKTOP}
          imageClassName="absolute w-[400px] right-20 -top-80 lg:-top-96 lg:right-40 lg:w-[600px]"
        /> */}
      </div>

      <section className="px-5 py-8 md:mt-44">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-[35px] leading-[48px] font-bold md:text-left lg:text-3xl">
              Products and Services
            </h1>
            <hr className="border-b-4 border-buttonColor w-16 mt-2" />
          </div>

          <div className="pt-10 lg:w-[672px] mx-auto">
            <p className="text-[18px] text-center leading[32px]">
              SANEF Agents offer the following Products and Services at the
              various Agent locations spread across the 774 Local Government
              Areas in Nigeria.
            </p>
          </div>
        </div>

        {/* PRODUCT AND SERVICES MOBILE VIEW */}
        <ProductServicesMobile />

        {/* PRODUCT AND SERVICES DESKTOP VIEW */}
        {/* <ProductServicesDesktop /> */}
        <ProductServiceDesktop />
      </section>

      <section>
        <Footer />
      </section>
    </Fragment>
  );
};

export default ValueAddedServices;
