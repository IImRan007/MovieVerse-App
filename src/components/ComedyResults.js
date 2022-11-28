import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const ComedyResults = () => {
  const { comedyMovie, getComedyMovies } = useContext(MovieContext);

  useEffect(() => {
    getComedyMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {comedyMovie &&
          comedyMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default ComedyResults;
