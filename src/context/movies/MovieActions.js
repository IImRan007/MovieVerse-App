import axios from "axios";

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

//   Get action movies
export const getActionMovies = async () => {
  try {
    const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`;

    const response = await axios.get(actionUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get adventure movies
export const getAdventureMovies = async () => {
  try {
    const adventureUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`;

    const response = await axios.get(adventureUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get animation movies
export const getAnimationMovies = async () => {
  try {
    const animationUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`;

    const response = await axios.get(animationUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get comedy movies
export const getComedyMovies = async () => {
  try {
    const comedyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`;

    const response = await axios.get(comedyUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get crime movies
export const getCrimeMovies = async () => {
  try {
    const crimeUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`;

    const response = await axios.get(crimeUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get documentary movies
export const getDocMovies = async () => {
  try {
    const docUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`;

    const response = await axios.get(docUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get drama movies
export const getDramaMovies = async () => {
  try {
    const dramaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`;

    const response = await axios.get(dramaUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get horror movies
export const getHorrorMovies = async () => {
  try {
    const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`;

    const response = await axios.get(horrorUrl);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//   Get scifi movies
export const getScifiMovies = async () => {
  try {
    const scifiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`;

    const response = await axios.get(scifiUrl);
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
