import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      navigate(`/search/${text}`);
      setText("");
    }
  };

  return (
    <div className="navbar bg-purple-800">
      <div className="md:flex-1">
        <Link
          to="/"
          className=" ml-10 normal-case text-xl text-white font-bold"
        >
          MovieVerse
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered "
              value={text}
              onChange={handleChange}
              spellCheck={true}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-ghost normal-case text-xl ml-2 text-white">
            Search
          </button>
        </div>
      </form>
      <div>
        <Link
          to="/about"
          className="btn btn-ghost normal-case text-xl ml-2 text-white"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
