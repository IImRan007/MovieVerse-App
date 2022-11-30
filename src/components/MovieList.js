import { useContext, useEffect } from "react";
import { fetchVideo } from "../context/movies/MovieActions";
import MovieContext from "../context/movies/MovieContext";

const MovieList = ({ item }) => {
  const { video, dispatch } = useContext(MovieContext);

  useEffect(() => {
    const fetchVideoData = async () => {
      const data = await fetchVideo(item.id);
      dispatch({ type: "GET_VIDEO", payload: data });
    };

    fetchVideoData();
  }, [item.id, dispatch]);

  console.log(video, "video");

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-7">
      {item.poster_path && (
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt="Shoes"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">
          {item.original_title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{item.overview}</p>
        {item.release_date && (
          <div className="card-actions justify-end">
            <p>Release Date:</p>
            <div className="badge badge-outline">{item.release_date}</div>
          </div>
        )}
        {item.vote_average && (
          <div className="card-actions justify-end">
            <p>Rating:</p>
            <div className="badge badge-outline">{item.vote_average}</div>
          </div>
        )}
        <div>
          <button>
            <a
              href={`https://www.youtube.com/watch?v=${video}`}
              target="_blank"
              rel="noreferrer"
            >
              Play Trailer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
