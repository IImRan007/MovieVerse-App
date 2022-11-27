import React from "react";

const About = () => {
  return (
    <div className="absolute top-80 ml-8">
      <h1 className="text-6xl mb-4">MovieVerse</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search your favourite movies available on the internet.
        Made by
        <strong>
          <a
            href="https://github.com/IImRan007"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Mohd Imran
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  );
};

export default About;
