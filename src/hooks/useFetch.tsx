import { useState, useEffect } from "react";
import { client } from "lib/client";

export const useData = <T extends unknown>(fetchQuery: string) => {
  const [state, setState] = useState<T>();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await client.fetch(fetchQuery);
      setState(data);
    };

    dataFetch();
  }, [fetchQuery]);

  return { data: state };
};

// const useFetch = <T extends unknown>(fetchQuery: string) => {
//   const [state, setState] = useState<T>();

//   useEffect(() => {
//     const fetchNews = async () => {
//       const newsData = await client.fetch(fetchQuery);
//       setState(newsData);
//     };

//     fetchNews();
//   }, [fetchQuery]);

//   return { date: state };
// };

// export default useFetch;
