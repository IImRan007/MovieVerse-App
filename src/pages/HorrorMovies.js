import React from "react";
import Category from "../components/Category";
import HorrorResults from "../components/HorrorResults";

const HorrorMovies = () => {
  return (
    <>
      <Category />
      <h1 className="text-5xl font-bold m-7 ml-12">Horror Movies</h1>
      <HorrorResults />
    </>
  );
};

export default HorrorMovies;
