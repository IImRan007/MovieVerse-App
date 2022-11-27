import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MovieContext from "../context/movies/MovieContext";

const Navbar = () => {
  const [text, setText] = useState("");

  const { getSearchedMovies } = useContext(MovieContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchedMovies(text);
  };

  return (
    <div className="navbar bg-gray-600">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          MovieVerse
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              value={text}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div>
        <button className="btn btn-ghost normal-case text-xl ml-2">
          Search
        </button>
      </div>
      <div>
        <Link to="/about" className="btn btn-ghost normal-case text-xl ml-2">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
