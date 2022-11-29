import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getHorrorMovies } from "../context/movies/MovieActions";

const HorrorResults = () => {
  const { horrorMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getHorrorData = async () => {
      const data = await getHorrorMovies();
      dispatch({ type: "GET_HORROR", payload: data });
    };

    getHorrorData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex flex-row flex-wrap">
          {horrorMovie &&
            horrorMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default HorrorResults;
