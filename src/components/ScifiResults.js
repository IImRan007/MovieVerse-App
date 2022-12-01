import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getScifiMovies } from "../context/movies/MovieActions";

const ScifiResults = () => {
  const { scifiMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getScifiData = async () => {
      const data = await getScifiMovies();
      dispatch({ type: "GET_SCIFI", payload: data });
    };

    getScifiData();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex justify-around flex-row flex-wrap">
          {scifiMovie &&
            scifiMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default ScifiResults;
