import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const Trending = () => {
  const { trendingData, getTrendingData } = useContext(MovieContext);

  useEffect(() => {
    getTrendingData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold m-7 ml-12">Trending Movies</h1>
      <div className="flex flex-row flex-wrap">
        {trendingData &&
          trendingData.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default Trending;
