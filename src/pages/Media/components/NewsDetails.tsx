import React from "react";
import Navbar from "components/Navbar/Navbar";
import Layout from "pages/Layout";
import { NEW_DETAILS_IMG, NEW_DETAILS_IMG_MOBILE } from "assets/images";
import { NEW_DETAILS } from "../content";

const NewsDetails = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-r from-lightBlue to-darkBlue align-top pb-2">
        <Navbar />
      </header>

      {/* MOBILE DISPLAY */}
      <div className="md:hidden">
        <img
          src={NEW_DETAILS_IMG_MOBILE}
          alt="..."
          className="object-cover bg-no-repeat w-screen"
        />
      </div>

      {/* DESKTOP DISPLAY */}
      <div className="hidden md:block">
        <img src={NEW_DETAILS_IMG} alt="..." className="object-cover" />
      </div>

      <section className="container mx-auto py-5 px-5 md:px-32">
        <p className="text-[12px]">{NEW_DETAILS.date}</p>
        <h1 className="text-buttonColor text-[26px] leading-[39px] font-bold">
          {NEW_DETAILS.heading}
        </h1>
        <p className="text-[18px] whitespace-pre-line pt-5">
          {NEW_DETAILS.content}
        </p>
      </section>
    </Layout>
  );
};

export default NewsDetails;
