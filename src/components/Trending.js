import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getTrendingData } from "../context/movies/MovieActions";

const Trending = () => {
  const { loading, trendingData, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getTrendingMovies = async () => {
      const data = await getTrendingData();
      dispatch({ type: "GET_TRENDING", payload: data });
    };

    getTrendingMovies();
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <h1 className="text-3xl sm: text-center font-bold m-7 ml-12 lg:text-5xl xl:text-5xl 2xl:text-5xl">
          Trending Movies
        </h1>
        <div className="flex justify-around flex-row flex-wrap">
          {trendingData &&
            trendingData.map((item) => (
              <MovieList item={item} key={item.id} id={item.id} />
            ))}
        </div>
      </>
    );
  }
};

export default Trending;
