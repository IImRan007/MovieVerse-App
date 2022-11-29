import ActionResults from "../components/ActionResults";
import Category from "../components/Category";

const ActionMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-3xl sm: text-center font-bold m-7 ml-12 lg:text-5xl xl:text-5xl 2xl:text-5xl">
        Action Movies
      </h1>
      <ActionResults />
    </>
  );
};

export default ActionMovies;
