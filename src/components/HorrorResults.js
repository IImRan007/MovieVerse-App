import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";

const HorrorResults = () => {
  const { horrorMovie, getHorrorMovies, loading } = useContext(MovieContext);

  useEffect(() => {
    getHorrorMovies();
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
