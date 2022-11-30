import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialState = {
    trendingData: [],
    searchMovie: [],
    actionMovie: [],
    adventureMovie: [],
    animationMovie: [],
    comedyMovie: [],
    crimeMovie: [],
    docMovie: [],
    dramaMovie: [],
    horrorMovie: [],
    scifiMovie: [],
    video: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
