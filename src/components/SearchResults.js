import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import { useParams } from "react-router-dom";
import Spinner from "./layouts/Spinner";
import { getSearchedMovies } from "../context/movies/MovieActions";

const SearchResults = () => {
  const { searchMovie, loading, dispatch } = useContext(MovieContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getSearchedData = async () => {
      const data = await getSearchedMovies(params.text);
      dispatch({ type: "GET_SEARCH", payload: data });
    };

    getSearchedData();
    // eslint-disable-next-line
  }, [params.text]);

  if (loading) {
    return <Spinner />;
  } else if (searchMovie.length === 0) {
    return (
      <h1 className="text-3xl sm: text-center font-bold m-7 ml-12 lg:text-5xl xl:text-5xl 2xl:text-5xl">{`No results found for: ${params.text}`}</h1>
    );
  } else {
    return (
      <>
        <h1 className="text-3xl sm: text-center font-bold m-7 ml-12 lg:text-5xl xl:text-5xl 2xl:text-5xl">{`Search results for: ${params.text}`}</h1>
        <div className="flex justify-around flex-row flex-wrap">
          {searchMovie &&
            searchMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default SearchResults;
