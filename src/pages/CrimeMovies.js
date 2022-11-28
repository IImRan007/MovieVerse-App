import React from "react";
import Category from "../components/Category";
import CrimeResults from "../components/CrimeResults";

const CrimeMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Crime Movies</h1>
      <CrimeResults />
    </>
  );
};

export default CrimeMovies;
