import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const DocResults = () => {
  const { docMovie, getDocMovies } = useContext(MovieContext);

  useEffect(() => {
    getDocMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {docMovie &&
          docMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default DocResults;
