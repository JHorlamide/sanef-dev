import React from "react";
import Layout from "pages/Layout";
import Navbar from "components/Navbar/Navbar";
import { GALLERY } from "../content";
import Footer from "components/widgets/Footer";

const EventDetails = () => {
  return (
    <Layout>
      <header className="bg-gradient-to-r from-lightBlue to-darkBlue align-top pb-2">
        <Navbar />
      </header>

      <section className="container mx-auto pt-3 md:px-0">
        <p className="text-[12px]">Thursday, June 17, 2022</p>
        <h1 className="text-buttonColor text-[26px] leading-[39px] font-bold">
          Event Name
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-12 pb-10">
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

      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default EventDetails;
