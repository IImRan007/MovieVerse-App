import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";

const ComedyResults = () => {
  const { comedyMovie, getComedyMovies, loading } = useContext(MovieContext);

  useEffect(() => {
    getComedyMovies();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex flex-row flex-wrap">
          {comedyMovie &&
            comedyMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default ComedyResults;
