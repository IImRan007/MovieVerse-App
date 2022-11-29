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
  const [loading, setLoading] = useState(false);

  const getTrendingData = async () => {
    setLoading(true);

    const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

    const response = await axios.get(trendingUrl);
    const data = await response.data.results;
    setTrendingData(data);
    setLoading(false);
  };

  const getSearchedMovies = async (text) => {
    setLoading(true);

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;

    const response = await axios.get(searchUrl);
    const data = response.data.results;
    console.log(data);
    setSearchMovie(data);
    setLoading(false);
  };

  const getActionMovies = async () => {
    setLoading(true);

    const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`;

    const response = await axios.get(actionUrl);
    const data = await response.data.results;
    setActionMovie(data);
    setLoading(false);
  };

  const getAdventureMovies = async () => {
    setLoading(true);

    const adventureUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`;

    const response = await axios.get(adventureUrl);
    const data = await response.data.results;
    setAdventureMovie(data);
    setLoading(false);
  };

  const getAnimationMovies = async () => {
    setLoading(true);

    const animationUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`;

    const response = await axios.get(animationUrl);
    const data = await response.data.results;
    setAnimationMovie(data);
    setLoading(false);
  };

  const getComedyMovies = async () => {
    setLoading(true);

    const comedyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`;

    const response = await axios.get(comedyUrl);
    const data = await response.data.results;
    setComedyMovie(data);
    setLoading(false);
  };

  const getCrimeMovies = async () => {
    setLoading(true);

    const crimeUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`;

    const response = await axios.get(crimeUrl);
    const data = await response.data.results;
    setCrimeMovie(data);
    setLoading(false);
  };

  const getDocMovies = async () => {
    setLoading(true);

    const docUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`;

    const response = await axios.get(docUrl);
    const data = await response.data.results;
    setDocMovie(data);
    setLoading(false);
  };

  const getDramaMovies = async () => {
    setLoading(true);

    const dramaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`;

    const response = await axios.get(dramaUrl);
    const data = await response.data.results;
    setDramaMovie(data);
    setLoading(false);
  };

  const getHorrorMovies = async () => {
    setLoading(true);

    const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`;

    const response = await axios.get(horrorUrl);
    const data = await response.data.results;
    setHorrorMovie(data);
    setLoading(false);
  };

  const getScifiMovies = async () => {
    setLoading(true);

    const scifiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`;

    const response = await axios.get(scifiUrl);
    const data = await response.data.results;
    setScifiMovie(data);
    setLoading(false);
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
        loading,
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
