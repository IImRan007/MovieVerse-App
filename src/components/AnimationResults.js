import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";

const AnimationResults = () => {
  const { animationMovie, getAnimationMovies } = useContext(MovieContext);

  useEffect(() => {
    getAnimationMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {animationMovie &&
          animationMovie.map((item) => <MovieList item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default AnimationResults;
