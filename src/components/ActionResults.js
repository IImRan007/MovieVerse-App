import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getActionMovies } from "../context/movies/MovieActions";

const ActionResults = () => {
  const { actionMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getActionData = async () => {
      const data = await getActionMovies();
      dispatch({ type: "GET_ACTION", payload: data });
    };

    getActionData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex justify-around flex-row flex-wrap">
          {actionMovie &&
            actionMovie.map((item) => <MovieList item={item} key={item.id} />)}
        </div>
      </>
    );
  }
};

export default ActionResults;
