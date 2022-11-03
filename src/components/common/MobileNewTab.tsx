import { Tab } from "@headlessui/react";
// import { RECENT_NEWS } from "pages/Home/content";
import CustomCard from "components/widgets/Cards/Card";
import { useData } from "hooks/useFetch";
import { GET_NEWS_QUERIES } from "utils/constants";
import { NewsType } from "types/news";
import moment from "moment";
import { urlFor } from "lib/client";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileNewTab() {
  const { data } = useData<NewsType[]>(GET_NEWS_QUERIES);

  if (!data)
    return (
      <div className="container mx-auto text-[28px] font-bold">Loading...</div>
    );

  return (
    <div className="md:hidden w-full max-w-md px-2 sm:px-0 mb-10">
      <Tab.Group>
        <Tab.Panels className="mt-2">
          {data.map((post) => (
            <Tab.Panel
              key={post._id}
              className={classNames(
                "rounded-xl bg-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <CustomCard
                key={post._id}
                id={post._id}
                date={moment(post.date).format("LLL")}
                image={urlFor(post.image).toString()}
                headLine={post.headLine}
                details={post.details}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>

        <Tab.List className="flex space-x-6 justify-center rounded-xl">
          {data.map((category) => (
            <Tab
              key={category._id}
              className={({ selected }) =>
                classNames(
                  "w-10 rounded-lg py-1 text-sm",
                  "ring-opacity-60 ring-offset-2 ring-gray-blue-500 focus:outline-none focus:ring-2",
                  selected ? "bg-green-500 px-10 shadow" : "bg-gray-200"
                )
              }
            ></Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
