import React from "react";
import Layout from "pages/Layout";
import Navbar from "components/Navbar/Navbar";
import { GALLERY } from "../content";

const EventDetails = () => {
  return (
    <Layout>
      <header className="bg-newBackground align-top pb-2">
        <Navbar />
      </header>

      <section className="container mx-auto py-5 px-5 md:px-0">
        <p className="text-[12px]">Thursday, June 17, 2022</p>
        <h1 className="text-buttonColor text-[26px] leading-[39px] font-bold">
          Event Name
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-16">
          {GALLERY.map((gallery) => (
            <div
              key={gallery.id}
              className="md:block relative bg w-[353px] h-[353px] md:w-full md:h-[340px] rounded-xl
              cursor-pointer container mx-auto"
            >
              <img
                src={gallery.image}
                alt="..."
                className="absolute object-cover w-full h-full mix-blend-overlay rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default EventDetails;
