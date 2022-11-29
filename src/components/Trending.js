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
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <h1 className="text-5xl font-bold m-7 ml-12">Trending Movies</h1>
        <div className="flex flex-row flex-wrap">
          {trendingData &&
            trendingData.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default Trending;
