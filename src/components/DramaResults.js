import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const DramaResults = () => {
  const { dramaMovie, getDramaMovies } = useContext(MovieContext);

  useEffect(() => {
    getDramaMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {dramaMovie &&
          dramaMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default DramaResults;
