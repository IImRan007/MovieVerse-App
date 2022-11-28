import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const CrimeResults = () => {
  const { crimeMovie, getCrimeMovies } = useContext(MovieContext);

  useEffect(() => {
    getCrimeMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {crimeMovie &&
          crimeMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default CrimeResults;
