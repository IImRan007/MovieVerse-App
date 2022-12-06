import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getMovies } from "../context/movies/MovieActions";

const AnimationResults = () => {
  const { animationMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getAnimationData = async () => {
      const data = await getMovies("animation");
      dispatch({ type: "GET_ANIMATION", payload: data });
    };

    getAnimationData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex justify-around flex-row flex-wrap">
          {animationMovie &&
            animationMovie.map((item) => (
              <MovieList item={item} key={item.id} id={item.id} />
            ))}
        </div>
      </>
    );
  }
};

export default AnimationResults;
