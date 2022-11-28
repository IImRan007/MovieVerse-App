import ActionResults from "../components/ActionResults";
import Category from "../components/Category";

const ActionMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Action Movies</h1>
      <ActionResults />
    </>
  );
};

export default ActionMovies;
