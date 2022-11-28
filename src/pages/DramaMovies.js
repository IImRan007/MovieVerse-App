import React from "react";
import Category from "../components/Category";
import DramaResults from "../components/DramaResults";

const DramaMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Drama Movies</h1>
      <DramaResults />
    </>
  );
};

export default DramaMovies;
