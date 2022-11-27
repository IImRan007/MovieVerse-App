import { Link } from "react-router-dom";

const Navbar = () => {
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
          />
        </div>
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
