import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState([]);
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

  const getTrendingData = async () => {
    const response = await axios.get(url);
    const data = await response.data.results;
    console.log(data);
    setTrendingData(data);
  };

  return (
    <MovieContext.Provider
      value={{
        trendingData,
        getTrendingData,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
