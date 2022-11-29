import React from "react";
import Category from "../components/Category";
import DramaResults from "../components/DramaResults";

const DramaMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-3xl text-center font-bold m-7 ml-12 lg:text-5xl xl:text-5xl 2xl:text-5xl">
        Drama Movies
      </h1>
      <DramaResults />
    </>
  );
};

export default DramaMovies;
