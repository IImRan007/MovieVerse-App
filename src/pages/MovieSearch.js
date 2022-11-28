import Category from "../components/Category";
import SearchResults from "../components/SearchResults";

const MovieSearch = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Search Results</h1>
      <SearchResults />
    </>
  );
};

export default MovieSearch;
