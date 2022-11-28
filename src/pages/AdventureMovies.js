import AdventureResults from "../components/AdventureResults";
import Category from "../components/Category";

const AdventureMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Adventure Movies</h1>
      <AdventureResults />
    </>
  );
};

export default AdventureMovies;
