import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";

const AdventureResults = () => {
  const { adventureMovie, getAdventureMovies, loading } =
    useContext(MovieContext);

  useEffect(() => {
    getAdventureMovies();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex flex-row flex-wrap">
          {adventureMovie &&
            adventureMovie.map((item) => (
              <MovieList item={item} key={item.id} />
            ))}
        </div>
      </>
    );
  }
};

export default AdventureResults;
