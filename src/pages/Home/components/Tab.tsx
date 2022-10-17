import { Tab } from "@headlessui/react";
import { RECENT_NEW } from "pages/Home/content";
import RecentCard from "pages/Home/components/RecentCard";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full max-w-md px-2 sm:px-0 mb-10">
      <Tab.Group>
        <Tab.Panels className="mt-2">
          {Object.values(RECENT_NEW).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              {posts.map(({ id, image, icon, title, content, date }) => (
                <RecentCard
                  key={id}
                  icon={icon}
                  date={date}
                  image={image}
                  title={title}
                  content={content}
                />
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>

        <Tab.List className="flex space-x-6 justify-center rounded-xl">
          {Object.keys(RECENT_NEW).map((category) => (
            <Tab
              key={category}
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
