import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const AdventureResults = () => {
  const { adventureMovie, getAdventureMovies } = useContext(MovieContext);

  useEffect(() => {
    getAdventureMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {adventureMovie &&
          adventureMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default AdventureResults;
