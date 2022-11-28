import React from "react";
import Category from "../components/Category";
import ScifiResults from "../components/ScifiResults";

const ScifiMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Sci-fi Movies</h1>
      <ScifiResults />
    </>
  );
};

export default ScifiMovies;
