import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";

const DocResults = () => {
  const { docMovie, getDocMovies, loading } = useContext(MovieContext);

  useEffect(() => {
    getDocMovies();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex flex-row flex-wrap">
          {docMovie &&
            docMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default DocResults;
