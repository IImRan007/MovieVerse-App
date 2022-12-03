import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <p className="text-center mt-2 text-3xl font-bold  ">Categories</p>

      <div className="flex mt-7 justify-evenly flex-wrap">
        <Link to={`/action`}>
          <button className="btn bg-primary rounded-full">Action</button>
        </Link>
        <Link to="/adventure">
          <button className="btn bg-secondary rounded-full">Adventure</button>
        </Link>
        <Link to="/animation">
          <button className="btn bg-red-700 rounded-full">Animation</button>
        </Link>
        <Link to="/comedy">
          <button className="btn bg-rose-900 rounded-full">Comedy</button>
        </Link>
        <Link to="/crime">
          <button className="btn bg-emerald-800 rounded-full">Crime</button>
        </Link>
        <Link to="/documentary">
          <button className="btn bg-indigo-500 rounded-full">
            Documentary
          </button>
        </Link>
        <Link to="/drama">
          <button className="btn bg-fuchsia-600 rounded-full">Drama</button>
        </Link>
        <Link to="/horror">
          <button className="btn bg-blend-darken rounded-full">Horror</button>
        </Link>
        <Link to="/scifi">
          <button className="btn bg-blue-900 rounded-full">
            Science Fiction
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
