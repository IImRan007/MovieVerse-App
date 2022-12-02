import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getDocMovies } from "../context/movies/MovieActions";

const DocResults = () => {
  const { docMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getDocData = async () => {
      const data = await getDocMovies();
      dispatch({ type: "GET_DOC", payload: data });
    };

    getDocData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex justify-around flex-row flex-wrap">
          {docMovie &&
            docMovie.map((item) => (
              <MovieList item={item} key={item.id} id={item.id} />
            ))}
        </div>
      </>
    );
  }
};

export default DocResults;
