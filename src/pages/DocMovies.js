import React from "react";
import Category from "../components/Category";
import DocResults from "../components/DocResults";

const DocMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Documentary Movies</h1>
      <DocResults />
    </>
  );
};

export default DocMovies;
