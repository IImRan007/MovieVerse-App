import React from "react";
import Category from "../components/Category";
import ScifiResults from "../components/ScifiResults";

const ScifiMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-3xl sm: text-center font-bold m-7 ml-12 lg:text-5xl xl:text-5xl 2xl:text-5xl">
        Sci-fi Movies
      </h1>
      <ScifiResults />
    </>
  );
};

export default ScifiMovies;
