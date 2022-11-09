import React, { useState } from "react";
import Layout from "website/Layout";
import Navbar from "components/layout/Navbar/Navbar";
import { GALLERY } from "../content";
import Footer from "components/layout/Footer";
import GalleryModal from "./GalleryModal";

const EventDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Layout>
      <header className="bg-gradient-to-r from-lightBlue to-darkBlue align-top pb-2">
        <Navbar />
      </header>

      <section className="container mx-auto pt-3 px-8 md:px-0">
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-col justify-start items-start">
            <p className="text-[12px]">Thursday, June 17, 2022</p>
            <h1 className="text-buttonColor text-[26px] leading-[39px] font-bold">
              Event Name
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
            {GALLERY.map((gallery) => (
              <>
                <GalleryModal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  image={gallery.image}
                />

                <div
                  key={gallery.id}
                  className="md:block relative bg w-full h-[353px] md:w-full md:h-[340px] rounded-xl
                  container mx-auto cursor-pointer"
                  onClick={handleModalOpen}
                >
                  <img
                    src={gallery.image}
                    alt="..."
                    className="absolute object-cover w-full h-full mix-blend-overlay rounded-xl"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default EventDetails;
