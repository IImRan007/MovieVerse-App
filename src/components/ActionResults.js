import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const ActionResults = () => {
  const { actionMovie, getActionMovies } = useContext(MovieContext);

  useEffect(() => {
    getActionMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {actionMovie &&
          actionMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default ActionResults;
