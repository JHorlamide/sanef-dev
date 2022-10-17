import React, { Fragment } from "react";
import Navbar from "components/Navbar/Navbar";
import style from "./style.module.css";
import Image from "components/widgets/Image/Image";
import { DOTS } from "assets/icons";
import { OUR_PARTNERS_LOGOS } from "./content";
import PartnersTabs from "./components/PartnersTabs";
import Footer from "components/widgets/Footer";

const index = () => {
  return (
    <Fragment>
      <section
        className={`${style.about_hero} bg-about-hero-mobile md:bg-about-hero-desktop bg-center bg-cover bg-no-repeat items-center w-full h-96 lg:h-full`}
      >
        <Navbar />

        <div className="lg:py-28">
          <h1 className="text-white text-4xl text-center max-w-lg mx-auto my-10 font-extrabold lg:-mt-5">
            Our Partners
          </h1>
        </div>
      </section>

      <section className="relative p-10 -mt-28 md:-mt-10">
        <Image
          image={DOTS}
          parentClassName="absolute inset-y-0 -right-4 top-42 lg:right-20 lg:-top-40"
          imageClassName="w-24 h-24 lg:h-fit"
        />
      </section>

      <section
        id="about-sanef-mobile"
        // className="relative mt-10 px-5 md:px-10 md:-mt-5 lg:px-40" // Old style
        className="relative mt-16 px-5 md:px-10 lg:px-40" // New style
      >
        <p className="text-lg text-center md:text-md md:-mt-10 lg:-mt-20">
          We collaborate with Ecosystem Stakeholders, Government/MDAs and
          Developmental Organizations in expanding the frontiers of Financial
          Inclusion and advancing Economic Empowerment.
        </p>
      </section>

      <section className="flex flex-col justify-center items-center mt-10 space-y-20 md:hidden lg:hidden">
        {/* BANK */}
        <div>
          <section className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <h1 className="text-center text-2xl font-bold md:text-left lg:text-3xl">
              Banks
            </h1>
            <hr className="border-b-4 border-buttonColor w-16 mt-2" />
          </section>

          {/* BANKS LOGOS */}
          <div className="overflow-x-auto space-x-8 flex mt-8">
            {OUR_PARTNERS_LOGOS.Banks.map((logo) => (
              <section key={logo.id} className="flex-shrink-0">
                <Image
                  imageClassName="flex-shrink-0 w-40"
                  image={logo.logo}
                  alt={logo.name}
                />
              </section>
            ))}
          </div>
        </div>

        {/* SUPER AGENT */}
        <div>
          <section className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <h1 className="text-center text-2xl font-bold md:text-left lg:text-3xl">
              Super Agent
            </h1>
            <hr className="border-b-4 border-buttonColor w-16 mt-2" />
          </section>

          <div className="overflow-x-auto space-x-8 flex">
            {OUR_PARTNERS_LOGOS["Super Agents"].map((logo) => (
              <section key={logo.id} className="flex-shrink-0">
                <Image
                  imageClassName="flex-shrink-0 w-40"
                  image={logo.logo}
                  alt={logo.name}
                />
              </section>
            ))}
          </div>
        </div>
      </section>

      <section>
        <PartnersTabs />
      </section>

      <section className="mt-16">
        <Footer />
      </section>
    </Fragment>
  );
};

export default index;
