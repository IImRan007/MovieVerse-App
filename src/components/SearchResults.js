import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { searchMovie, getSearchedMovies } = useContext(MovieContext);
  const params = useParams();

  useEffect(() => {
    getSearchedMovies(params.text);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {searchMovie &&
          searchMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default SearchResults;
