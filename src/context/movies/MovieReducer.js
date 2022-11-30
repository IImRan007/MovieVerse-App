const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRENDING":
      return {
        ...state,
        trendingData: action.payload,
        loading: false,
      };
    case "GET_ACTION":
      return {
        ...state,
        actionMovie: action.payload,
        loading: false,
      };
    case "GET_ADVENTURE":
      return {
        ...state,
        adventureMovie: action.payload,
        loading: false,
      };
    case "GET_ANIMATION":
      return {
        ...state,
        animationMovie: action.payload,
        loading: false,
      };
    case "GET_COMEDY":
      return {
        ...state,
        comedyMovie: action.payload,
        loading: false,
      };
    case "GET_CRIME":
      return {
        ...state,
        crimeMovie: action.payload,
        loading: false,
      };
    case "GET_DOC":
      return {
        ...state,
        docMovie: action.payload,
        loading: false,
      };
    case "GET_DRAMA":
      return {
        ...state,
        dramaMovie: action.payload,
        loading: false,
      };
    case "GET_HORROR":
      return {
        ...state,
        horrorMovie: action.payload,
        loading: false,
      };
    case "GET_SCIFI":
      return {
        ...state,
        scifiMovie: action.payload,
        loading: false,
      };
    case "GET_SEARCH":
      return {
        ...state,
        searchMovie: action.payload,
        loading: false,
      };
    case "GET_VIDEO":
      return {
        ...state,
        video: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default MovieReducer;
