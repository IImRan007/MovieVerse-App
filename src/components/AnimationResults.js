import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";

const AnimationResults = () => {
  const { animationMovie, getAnimationMovies, loading } =
    useContext(MovieContext);

  useEffect(() => {
    getAnimationMovies();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex flex-row flex-wrap">
          {animationMovie &&
            animationMovie.map((item) => (
              <MovieList item={item} key={item.id} />
            ))}
        </div>
      </>
    );
  }
};

export default AnimationResults;
