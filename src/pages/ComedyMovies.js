import React from "react";
import Category from "../components/Category";
import ComedyResults from "../components/ComedyResults";

const ComedyMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Comedy Movies</h1>
      <ComedyResults />
    </>
  );
};

export default ComedyMovies;
