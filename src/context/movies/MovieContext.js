import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);

  const getTrendingData = async () => {
    const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

    const response = await axios.get(trendingUrl);
    const data = await response.data.results;
    console.log(data);
    setTrendingData(data);
  };

  const getSearchedMovies = async (text) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;

    const response = await axios.get(searchUrl);
    const data = response.data.results;
    console.log(data);
    setSearchMovie(data);
  };

  return (
    <MovieContext.Provider
      value={{
        trendingData,
        searchMovie,
        getTrendingData,
        getSearchedMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
