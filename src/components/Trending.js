import { useEffect, useContext } from "react";
import TrendingCard from "./TrendingCard";
import MovieContext from "../context/movies/MovieContext";

const Trending = () => {
  const { trendingData, getTrendingData } = useContext(MovieContext);

  useEffect(() => {
    getTrendingData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold m-7 ml-12">Trending</h1>
      <div className="flex flex-row flex-wrap">
        {trendingData &&
          trendingData.map((item) => (
            <TrendingCard item={item} key={item.id} />
          ))}
      </div>
    </>
  );
};

export default Trending;
