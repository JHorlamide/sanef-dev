import React from "react";
import RecentCard from "../../website/Home/components/RecentCard";
import { urlFor } from "lib/client";
import moment from "moment";
import { useData } from "hooks/useFetch";
import { NewsType } from "types/news";
import { GET_NEWS_QUERIES } from "utils/constants";

const RecentNews = () => {
  const { data } = useData<NewsType[]>(GET_NEWS_QUERIES);

  if (!data)
    return (
      <div className="container mx-auto text-center text-[28px] font-bold py-10">
        Loading news...
      </div>
    );

  return (
    <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-4 md:px-10 lg:px-16">
      {data.map((post: any) => (
        <RecentCard
          id={post._id}
          key={post._id}
          date={moment(post.date).format("LLL")}
          image={urlFor(post.image)}
          headLine={post.headLine}
          details={post.details}
          imgWidthHeight={"w-full h-72"}
        />
      ))}
    </div>
  );
};

export default RecentNews;
