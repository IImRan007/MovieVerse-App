import axios from "axios";
import GenreNumber from "../../GenreNumber";

// Get trending movies
export const getTrendingData = async () => {
  try {
    const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

    const response = await axios.get(trendingUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get searched movie results
export const getSearchedMovies = async (text) => {
  try {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;

    const response = await axios.get(searchUrl);
    const data = response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get movies
export const getMovies = async (genre) => {
  try {
    const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${GenreNumber[genre]}`;

    const response = await axios.get(actionUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get video trailer
export const fetchVideo = async (id) => {
  try {
    const videoUrl = `http://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`;

    const response = await axios.get(videoUrl);
    const data = response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};
