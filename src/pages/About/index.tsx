import React from "react";
import Navbar from "components/Navbar/Navbar";
import Image from "components/widgets/Image/Image";
import { ABOUT_IMAGE_1 } from "assets/images";
import { GROUP_CIRCLE } from "assets/icons";
import { CARD_CONTENT } from "./content";
import CoreValueCard from "./components/CoreValueCard";
import style from "./style.module.css";
import TeamTab from "./components/TeamTab";
import Footer from "components/widgets/Footer";
import Layout from "pages/Layout";

const About = () => {
  return (
    <Layout>
      <section
        className={`${style.about_hero} relative bg-about-hero-mobile md:bg-about-hero-desktop
        bg-center bg-cover bg-no-repeat items-center h-96 lg:h-[400px]`}
      >
        <Navbar />

        <div className="">
          <h1 className="text-white text-4xl text-center max-w-lg mx-auto my-10 font-extrabold lg:mt-5">
            About Sanef
          </h1>
        </div>
      </section>

      <Image
        parentClassName="hidden lg:block absolute inset-y-0 right-0 top-32 aspect-auto"
        image={ABOUT_IMAGE_1}
      />

      {/* VISION & MISSION */}
      <section className="relative z-0 md:mt-10 px-32">
        <div className="lg:w-1/2 md:-mt-10 lg:-mt-0 px-5 md:px-0">
          <p className="text-lg text-left md:text-md lg:text-md md:leading-text-line-height">
            SANEF serves as an enabler in the Financial Inclusion ecosystem in
            Nigeria, collaborating with various Stakeholders to expand the
            frontiers of Financial Inclusion which includes Agent Expansion,
            Financial Literacy, Public Enlightenment, Policy Advocacy and
            Technological Solutions for Products and Services to increase Agent
            Business viability and Agent Network sustainability.
          </p>
        </div>

        {/* Vision & Mission Mobile Container */}
        <div
          id="vision-mission-container"
          className="flex flex-col space-y-8 mt-12 lg:mt-16 md:space-y-5 md:space-x-0 lg:flex-row lg:space-x-28"
        >
          {/* OUR VISION CONTAINER */}
          <div className="flex flex-col space-y-5 px-5 md:space-y-3 md:px-0 lg:w-full">
            <div
              className={`absolute w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 mt-2.5 md:mt-1 lg:mt-1 ml-[142px] md:ml-[90px] lg:ml-[142px] rounded-full bg-buttonColor`}
            ></div>
            <h1 className="relative text-4xl text-left font-bold flex md:text-2xl lg:text-4xl lg:text-justify">
              Our Vision
            </h1>

            <p className="text-xl md:text-md lg:text-md md:leading-text-line-height">
              To bring Financial Services closer to every Nigerian
            </p>
          </div>

          {/* OUR MISSION CONTAINER */}
          <div className="flex flex-col space-y-5 px-5 md:space-y-3 md:px-0 lg:w-full">
            <div
              className={`absolute w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 mt-2 lg:mt-1 ml-[169px] md:ml-[110px] lg:ml-[12%] rounded-full bg-buttonColor`}
            ></div>
            <h1 className="relative z-50 text-4xl text-left font-bold flex md:text-2xl lg:text-4xl lg:text-justify">
              Our Mission
            </h1>

            <p className="text-xl md:text-md lg:text-md md:leading-text-line-height">
              To collaborate with all Stakeholders in widening and deepening
              Financial Access Points and Services towards meeting the Financial
              Inclusion targets across all geopolitical zones in Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="py-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-left font-bold flex">Our Core Values</h1>
          <hr className="border-b-4 border-buttonColor w-16" />
        </div>

        {/* Mobile View */}
        <div className="container mx-auto md:hidden flex flex-col space-y-10 mt-12">
          {CARD_CONTENT.map(({ id, image, heading, content }) => (
            <CoreValueCard
              key={id}
              image={image}
              heading={heading}
              content={content}
            />
          ))}
        </div>

        {/* Desktop View */}
        <div className="relative hidden md:grid md:grid-cols-2 lg:flex lg:flex-col lg:justify-center lg:items-center mt-10 px-1 lg:gap-10 lg:px-0">
          {/*  */}
          <div className="z-50 md:grid md:grid-cols-1 md:gap-y-4 lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-4">
            {CARD_CONTENT.slice(0, 3).map(({ id, image, heading, content }) => (
              <CoreValueCard
                key={id}
                image={image}
                heading={heading}
                content={content}
              />
            ))}
          </div>

          <div className="z-50 md:grid md:grid-cols-1 md:gap-0 lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:gap-6">
            {CARD_CONTENT.slice(3).map(({ id, image, heading, content }) => (
              <CoreValueCard
                key={id}
                image={image}
                heading={heading}
                content={content}
              />
            ))}
          </div>

          <Image
            image={GROUP_CIRCLE}
            parentClassName="hidden md:block absolute inset-y-0 -right-0 top-52"
            imageClassName="w-80"
          />
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-left font-bold flex">Our Team</h1>
        </div>
      </section>

      {/* Team TAB */}
      <section className="py-10">
        <TeamTab />
      </section>

      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default About;
