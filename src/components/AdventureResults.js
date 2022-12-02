import { useEffect, useContext } from "react";
import MovieList from "./MovieList";
import MovieContext from "../context/movies/MovieContext";
import Spinner from "./layouts/Spinner";
import { getAdventureMovies } from "../context/movies/MovieActions";

const AdventureResults = () => {
  const { adventureMovie, loading, dispatch } = useContext(MovieContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const getAdventureData = async () => {
      const data = await getAdventureMovies();
      dispatch({ type: "GET_ADVENTURE", payload: data });
    };

    getAdventureData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex justify-around flex-row flex-wrap">
          {adventureMovie &&
            adventureMovie.map((item) => (
              <MovieList item={item} key={item.id} id={item.id} />
            ))}
        </div>
      </>
    );
  }
};

export default AdventureResults;
