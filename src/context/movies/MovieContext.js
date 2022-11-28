import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [adventureMovie, setAdventureMovie] = useState([]);

  const getTrendingData = async () => {
    const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

    const response = await axios.get(trendingUrl);
    const data = await response.data.results;
    setTrendingData(data);
  };

  const getSearchedMovies = async (text) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;

    const response = await axios.get(searchUrl);
    const data = response.data.results;
    setSearchMovie(data);
  };

  const getActionMovies = async () => {
    const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`;

    const response = await axios.get(actionUrl);
    const data = await response.data.results;
    setActionMovie(data);
  };

  const getAdventureMovies = async () => {
    const adventureUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`;

    const response = await axios.get(adventureUrl);
    const data = await response.data.results;
    setAdventureMovie(data);
  };

  return (
    <MovieContext.Provider
      value={{
        trendingData,
        searchMovie,
        actionMovie,
        adventureMovie,
        getTrendingData,
        getSearchedMovies,
        getActionMovies,
        getAdventureMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
