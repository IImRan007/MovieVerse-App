import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getMovies } from "../context/movies/MovieActions";

const CrimeResults = () => {
  const { crimeMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getCrimeData = async () => {
      const data = await getMovies("crime");
      dispatch({ type: "GET_CRIME", payload: data });
    };

    getCrimeData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex justify-around flex-row flex-wrap">
          {crimeMovie &&
            crimeMovie.map((item) => (
              <MovieList item={item} key={item.id} id={item.id} />
            ))}
        </div>
      </>
    );
  }
};

export default CrimeResults;
