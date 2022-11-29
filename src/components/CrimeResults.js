import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";

const CrimeResults = () => {
  const { crimeMovie, getCrimeMovies, loading } = useContext(MovieContext);

  useEffect(() => {
    getCrimeMovies();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex flex-row flex-wrap">
          {crimeMovie &&
            crimeMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default CrimeResults;
