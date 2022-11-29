import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import { useParams } from "react-router-dom";
import Spinner from "./layouts/Spinner";

const SearchResults = () => {
  const { searchMovie, getSearchedMovies, loading } = useContext(MovieContext);
  const params = useParams();

  useEffect(() => {
    getSearchedMovies(params.text);
    // eslint-disable-next-line
  }, [params.text]);

  if (loading) {
    return <Spinner />;
  } else if (searchMovie.length === 0) {
    return <h1 className="text-5xl font-bold m-7 ml-12">No Results Found</h1>;
  } else {
    return (
      <>
        <h1 className="text-5xl font-bold m-7 ml-12">Search Results</h1>
        <div className="flex flex-row flex-wrap">
          {searchMovie &&
            searchMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default SearchResults;
