import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const HorrorResults = () => {
  const { horrorMovie, getHorrorMovies } = useContext(MovieContext);

  useEffect(() => {
    getHorrorMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {horrorMovie &&
          horrorMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default HorrorResults;
