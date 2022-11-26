const Navbar = () => {
  return (
    <div className="navbar bg-gray-600">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          MovieVerse
        </a>
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
        <a href="/about" className="btn btn-ghost normal-case text-xl ml-2">
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
