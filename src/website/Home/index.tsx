import React from "react";
import { DOTS, GROUP_SHAPE, LINE_1, LINE_2, GROUP_LINES } from "assets/icons";
import { ROLE_IMAGE_DESKTOP, ROLE_IMAGE_MOBILE } from "assets/images";
import { OUR_IMPACT_CARD_CONTENT } from "./content";
// import { RECENT_NEWS } from "./content";
import Footer from "components/layout/Footer";
import Image from "components/widgets/Image/Image";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";
import { ABOUT_US } from "routes/ROUTES_CONSTANTS";
import Layout from "website/Layout";

// CUSTOM COMPONENTS
import MobileNewTab from "components/common/MobileNewTab";
import OurImpactFooter from "./components/OurImpactFooter";
import OurImpactHeader from "./components/ImpactHeader";
import Carousel from "components/layout/Carousel/Carousel";
import RecentNews from "../../components/common/RecentNews";

const Home = () => {
  return (
    <Layout>
      <Carousel />

      {/* SHARED AGENT NETWORK  */}
      <section className="relative z-20 px-8 py-0">
        <div className="relative flex flex-col justify-center items-center py-8">
          <h1 className="text-center text-2xl font-bold md:text-3xl lg:text-4xl">
            {/* Shared Agent Network Facilities Limited (SANEF) */}
            Shared Agent Network Expansion Facilities Limited (SANEF)
          </h1>

          <hr className="border-b-4 border-buttonColor w-16 mt-2" />

          <p
            className="text-[18px] text-center my-5 md:my-8 md:max-w-4xl lg:my-6 
            lg:leading-text-line-height"
          >
            Incorporated in 2019, the Shared Agent Network Expansion Facilities
            (SANEF Limited) is an initiative of the Central Bank of Nigeria
            (CBN), supported by the Deposit Money Banks (DMBs), Nigeria
            Inter-Bank Settlement Systems (NIBSS) and Licensed Super-Agents.
          </p>

          <RouterLink
            className="text-buttonColor font-bold hover:text-lightGreen"
            path={ABOUT_US}
            title="Learn More"
          />

          <Image
            image={GROUP_SHAPE}
            parentClassName="absolute left-0 top-48"
            imageClassName="hidden md:block w-40 md:w-72"
            // imageClassName="hidden w-40 md:w-64 md:flex md:-mt-32 lg:w-72 lg:flex lg:-mt-40 lg:ml-20"
          />
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="flex flex-col justify-center items-center mt-16">
        <h1 className="text-center text-2xl font-bold">Our Impact</h1>
        <hr className="border-b-4 border-buttonColor w-16 mt-2" />
      </section>

      <section
        className="relative container mx-auto bg-white z-10 shadow-lg 
        rounded-xl mt-16 py-10"
      >
        {/* MD & LG -> FLEX CONTAINER */}
        <div
          className="space-y-8 md:space-y-0 md:mt-10 md:mx-10 md:flex 
          md:justify-evenly md:space-x-10 lg:mx-[80px] lg:grid lg:grid-cols-3
          lg:gap-x-10"
        >
          {/* ITEM 1 */}
          <OurImpactHeader
            headingText={OUR_IMPACT_CARD_CONTENT.SECOND_ITEM[0].headingText}
            content={OUR_IMPACT_CARD_CONTENT.SECOND_ITEM[0].content}
          />

          {/* MOBILE HORIZONTAL LINE 1 */}
          <Image
            image={LINE_2}
            parentClassName="flex justify-center md:hidden lg:hidden"
          />

          {/* ITEM 2 */}
          <OurImpactHeader
            headingText={OUR_IMPACT_CARD_CONTENT.SECOND_ITEM[1].headingText}
            content={OUR_IMPACT_CARD_CONTENT.SECOND_ITEM[1].content}
          />

          {/* MOBILE HORIZONTAL LINE 2 */}
          <Image
            image={LINE_2}
            parentClassName="flex justify-center md:hidden lg:hidden"
          />

          {/* ITEM 3 */}
          <OurImpactHeader
            headingText={OUR_IMPACT_CARD_CONTENT.SECOND_ITEM[2].headingText}
            content={OUR_IMPACT_CARD_CONTENT.SECOND_ITEM[2].content}
          />
        </div>

        {/* TAB & DESKTOP HORIZONTAL ROLE */}
        <Image
          image={LINE_1}
          parentClassName="hidden justify-center md:flex md:mt-10 md:mx-5 lg:flex lg:mt-10 lg:mx-auto"
        />

        {/* Impact Footer ==> Desktop */}
        <section
          className="hidden md:grid md:grid-cols-2 md:gap-4 md:px-10 lg:mx-10 
          lg:mt-6 lg:px-10 lg:grid lg:grid-cols-3 lg:gap-x-28"
        >
          {OUR_IMPACT_CARD_CONTENT.FIRST_ITEM.map((cardContent) => (
            <OurImpactFooter
              key={cardContent.id}
              image={cardContent.image}
              title={cardContent.title}
              firstList={cardContent.firstList}
              thirdList={cardContent.thirdList}
              secondList={cardContent.secondList}
              style={cardContent.style}
            />
          ))}
        </section>
      </section>

      {/* DOTS-2 */}
      <Image
        image={DOTS}
        parentClassName="relative"
        imageClassName="absolute w-24 -mt-20 md:-mt-5 md:inset-y-0 md:right-0 lg:inset-y-0 lg:right-16 lg:w-32"
      />

      {/* Impact Footer ==> Mobile */}
      <section className="bg-white mt-10 py-20 md:hidden lg:hidden">
        {OUR_IMPACT_CARD_CONTENT.FIRST_ITEM.map((cardContent) => (
          <OurImpactFooter
            key={cardContent.id}
            image={cardContent.image}
            title={cardContent.title}
            firstList={cardContent.firstList}
            thirdList={cardContent.thirdList}
            secondList={cardContent.secondList}
            style={cardContent.style}
          />
        ))}
      </section>

      <Image
        image={DOTS}
        parentClassName="relative md:hidden lg:hidden"
        imageClassName="z-0 absolute w-24 -mt-8 inset-y-0 left-[270px] md:left-72 right-0"
      />

      {/* OUR ROLE */}
      <section className="bg-orange-50 w-screen flex flex-col py-10 md:w-full md:flex-row-reverse md:justify-between md:px-10 md:py-20 md:mt-16 lg:px-24 lg:pt-28 lg:mt-28">
        <Image
          image={GROUP_LINES}
          parentClassName="relative md:hidden lg:hidden"
          imageClassName="absolute w-full inset-y-0 right-20 top-[75px]"
        />

        <div className="relative">
          {/* <Image
            image={ROLE_IMAGE_DESKTOP}
            imageClassName="hidden z-50 md:block md:w-screen md:-mt-16 md:ml-10 lg:w-full lg:-mt-24"
          /> */}

          <div className="">
            <img
              src={ROLE_IMAGE_DESKTOP}
              alt=""
              className="hidden z-50 md:block md:w-screen md:-mt-16 md:ml-10 lg:w-[530px] lg:h-[357.17px] lg:-mt-24"
            />
          </div>

          <Image
            image={ROLE_IMAGE_MOBILE}
            imageClassName="z-50 w-screen object-fill md:hidden lg:hidden"
          />

          {/* <div className="flex justify-center items-center">
            <img
              src={ROLE_IMAGE_MOBILE}
              alt=""
              className="z-50 w-screen object-fill md:hidden lg:hidden"
            />
          </div> */}
        </div>

        <div className="mt-10 flex flex-col justify-center items-center md:space-y-8 md:m-0 md:ml-0 md:justify-start md:items-start">
          <section className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <h1 className="text-center text-2xl font-bold md:text-left lg:text-3xl">
              Our Role In Enabling Financial Inclusion
            </h1>
            <hr className="border-b-4 border-buttonColor w-16 mt-2" />
          </section>

          <p className="text-md text-center mt-5 px-10 md:text-sm md:text-left md:px-0 lg:text-lg lg:max-w-xl">
            SANEF collaborates with partners to ensure Agents are present in all
            the 774 Local Government Areas to provide Financial Services to{" "}
            Nigerians by deepening Financial Inclusion.
          </p>

          <RouterLink
            className="text-white font-bold border-2 bg-buttonColor border-buttonColor 
            rounded-full px-6 py-3 mt-4 md:px-8 lg:px-16 hover:bg-lightGreen
            hover:border-lightGreen"
            path={"/about-us"}
            title="Learn More"
          />
        </div>
      </section>

      {/* RECENT NEWS */}
      <section className="bg-white flex flex-col justify-center items-center pt-14">
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-bold">Recent News</h1>
          <hr className="border-b-4 border-buttonColor w-16 mt-2" />
        </section>

        {/* MOBILE TAB */}
        <div className="md:hidden lg:hidden">
          <MobileNewTab />
        </div>

        {/* RECENT NEWS */}
        <RecentNews />
      </section>

      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default Home;
