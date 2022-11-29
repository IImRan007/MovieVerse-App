import AnimationResults from "../components/AnimationResults";
import Category from "../components/Category";

const AnimationMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-3xl sm: text-center font-bold m-7 ml-12 lg:text-5xl xl:text-5xl 2xl:text-5xl">
        Animation Movies
      </h1>
      <AnimationResults />
    </>
  );
};

export default AnimationMovies;
