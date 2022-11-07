import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import CustomCard from "components/widgets/Cards/Card";
import { GALLERY } from "../content";
import { useData } from "hooks/useFetch";
import moment from "moment";
import { urlFor } from "lib/client";
import { NewsType } from "types/news";
import { GET_NEWS_QUERIES } from "utils/constants";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const NewsTab = () => {
  const { data } = useData<NewsType[]>(GET_NEWS_QUERIES);

  if (!data)
    return (
      <div className="container mx-auto text-[28px] text-center font-bold h-80">
        Loading News...
      </div>
    );

  return (
    <div className="container mx-auto">
      {data.map((post) => (
        <CustomCard
          key={post._id}
          id={post._id}
          date={moment(post.date).format("LLL")}
          image={urlFor(post.image)}
          headLine={post.headLine}
          details={post.details}
        />
      ))}
    </div>
  );
};

const GalleryTab = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/media/gallery/${id}`);
  };

  return (
    <Fragment>
      <div className="container mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {GALLERY.map((gallery) => (
            <div
              key={gallery.id}
              className="md:block relative bg-gradient-to-t from-gradientBackground to-gray-500 
              bg w-[353px] h-[353px] md:w-full md:h-[340px] rounded-xl cursor-pointer container mx-auto"
              onClick={() => handleNavigate(gallery.id)}
            >
              <img
                src={gallery.image}
                alt="..."
                className="absolute object-cover w-full h-full mix-blend-overlay rounded-xl"
              />

              <div className="absolute text-white space-y-3 bottom-8 left-10">
                <p className="text-[12px]">{gallery.date}</p>
                <h1 className="text-[28px] font-bold hover:text-buttonColor">
                  {gallery.eventName}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const MediaTab = () => {
  return (
    <div className="container-md mx-auto relative mt-16 md:-mt-16">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center space-x-20 border-b-0">
          <div className="flex space-x-14">
            <Tab
              className={({ selected }) =>
                classNames(
                  `text-[24px] font-bold hover:text-lightGreen`,
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              News
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  `text-[24px] font-bold hover:text-lightGreen`,
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              Gallery
            </Tab>
          </div>
        </Tab.List>

        <Tab.Panels className={"mt-8 md:mt-12"}>
          <Tab.Panel className={"px-5"}>
            <NewsTab />
          </Tab.Panel>

          <Tab.Panel>
            <GalleryTab />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MediaTab;
