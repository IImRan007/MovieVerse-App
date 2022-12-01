import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getComedyMovies } from "../context/movies/MovieActions";

const ComedyResults = () => {
  const { comedyMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getComedyData = async () => {
      const data = await getComedyMovies();
      dispatch({ type: "GET_COMEDY", payload: data });
    };

    getComedyData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex justify-around flex-row flex-wrap">
          {comedyMovie &&
            comedyMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default ComedyResults;
