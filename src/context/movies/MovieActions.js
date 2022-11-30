import axios from "axios";

// Get trending movies
export const getTrendingData = async () => {
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

  const response = await axios.get(trendingUrl);
  const data = await response.data.results;
  console.log(data);
  return data;
};

//   Get searched movie results
export const getSearchedMovies = async (text) => {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`;

  const response = await axios.get(searchUrl);
  const data = response.data.results;
  return data;
};

//   Get action movies
export const getActionMovies = async () => {
  const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`;

  const response = await axios.get(actionUrl);
  const data = await response.data.results;
  return data;
};

//   Get adventure movies
export const getAdventureMovies = async () => {
  const adventureUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`;

  const response = await axios.get(adventureUrl);
  const data = await response.data.results;
  return data;
};

//   Get animation movies
export const getAnimationMovies = async () => {
  const animationUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`;

  const response = await axios.get(animationUrl);
  const data = await response.data.results;
  return data;
};

//   Get comedy movies
export const getComedyMovies = async () => {
  const comedyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`;

  const response = await axios.get(comedyUrl);
  const data = await response.data.results;
  return data;
};

//   Get crime movies
export const getCrimeMovies = async () => {
  const crimeUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`;

  const response = await axios.get(crimeUrl);
  const data = await response.data.results;
  return data;
};

//   Get documentary movies
export const getDocMovies = async () => {
  const docUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`;

  const response = await axios.get(docUrl);
  const data = await response.data.results;
  return data;
};

//   Get drama movies
export const getDramaMovies = async () => {
  const dramaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`;

  const response = await axios.get(dramaUrl);
  const data = await response.data.results;
  return data;
};

//   Get horror movies
export const getHorrorMovies = async () => {
  const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`;

  const response = await axios.get(horrorUrl);
  const data = await response.data.results;
  return data;
};

//   Get scifi movies
export const getScifiMovies = async () => {
  const scifiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`;

  const response = await axios.get(scifiUrl);
  const data = await response.data.results;
  return data;
};

export const fetchVideo = async (id) => {
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const response = await axios.get(videoUrl);
  const data = response.data;
  return data;
};
