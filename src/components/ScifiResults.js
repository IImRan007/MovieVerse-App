import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const ScifiResults = () => {
  const { scifiMovie, getScifiMovies } = useContext(MovieContext);

  useEffect(() => {
    getScifiMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {scifiMovie &&
          scifiMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default ScifiResults;
