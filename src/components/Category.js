import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="flex mt-7 justify-evenly flex-wrap">
      <Link to={`/action`}>
        <button className="btn bg-primary rounded-full">Action</button>
      </Link>
      <Link to="/adventure">
        <button className="btn bg-secondary rounded-full">Adventure</button>
      </Link>
      <button className="btn bg-red-700 rounded-full">Animation</button>
      <button className="btn bg-rose-900 rounded-full">Comedy</button>
      <button className="btn bg-emerald-800 rounded-full">Crime</button>
      <button className="btn bg-indigo-500 rounded-full">Documentary</button>
      <button className="btn bg-fuchsia-600 rounded-full">Drama</button>
      <button className="btn bg-blend-darken rounded-full">Horror</button>
      <button className="btn bg-blue-900 rounded-full">Science Fiction</button>
    </div>
  );
};

export default Category;
