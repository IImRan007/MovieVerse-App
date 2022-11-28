import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
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
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            value={text}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <Link to={`/search/${text}`}>
          <button className="btn btn-ghost normal-case text-xl ml-2">
            Search
          </button>
        </Link>
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
