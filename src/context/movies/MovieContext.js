import { createContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [trendingData, setTrendingData] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [actionMovie, setActionMovie] = useState([]);
  const [adventureMovie, setAdventureMovie] = useState([]);
  const [animationMovie, setAnimationMovie] = useState([]);
  const [comedyMovie, setComedyMovie] = useState([]);
  const [crimeMovie, setCrimeMovie] = useState([]);
  const [docMovie, setDocMovie] = useState([]);
  const [dramaMovie, setDramaMovie] = useState([]);
  const [horrorMovie, setHorrorMovie] = useState([]);
  const [scifiMovie, setScifiMovie] = useState([]);

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

  const getAnimationMovies = async () => {
    const animationUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`;

    const response = await axios.get(animationUrl);
    const data = await response.data.results;
    setAnimationMovie(data);
  };

  const getComedyMovies = async () => {
    const comedyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`;

    const response = await axios.get(comedyUrl);
    const data = await response.data.results;
    setComedyMovie(data);
  };

  const getCrimeMovies = async () => {
    const crimeUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`;

    const response = await axios.get(crimeUrl);
    const data = await response.data.results;
    setCrimeMovie(data);
  };

  const getDocMovies = async () => {
    const docUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`;

    const response = await axios.get(docUrl);
    const data = await response.data.results;
    setDocMovie(data);
  };

  const getDramaMovies = async () => {
    const dramaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`;

    const response = await axios.get(dramaUrl);
    const data = await response.data.results;
    setDramaMovie(data);
  };

  const getHorrorMovies = async () => {
    const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`;

    const response = await axios.get(horrorUrl);
    const data = await response.data.results;
    setHorrorMovie(data);
  };

  const getScifiMovies = async () => {
    const scifiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`;

    const response = await axios.get(scifiUrl);
    const data = await response.data.results;
    setScifiMovie(data);
  };

  return (
    <MovieContext.Provider
      value={{
        trendingData,
        searchMovie,
        actionMovie,
        adventureMovie,
        animationMovie,
        comedyMovie,
        crimeMovie,
        docMovie,
        dramaMovie,
        horrorMovie,
        scifiMovie,
        getTrendingData,
        getSearchedMovies,
        getActionMovies,
        getAdventureMovies,
        getAnimationMovies,
        getComedyMovies,
        getCrimeMovies,
        getDocMovies,
        getDramaMovies,
        getHorrorMovies,
        getScifiMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
