import { useEffect, useState } from "react";
import { fetchVideo } from "../context/movies/MovieActions";

const MovieList = ({ item, id }) => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const data = await fetchVideo(id);
        if (data) {
          setVideo(data[0]?.key);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideoData();
  }, [id]);

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-7">
      {item.poster_path && (
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt="poster"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">
          {item.original_title ? item.original_title : item.name}
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
            {video && (
              <a
                className="btn normal-case text-xl"
                href={`https://www.youtube.com/watch?v=${video}`}
                target="_blank"
                rel="noreferrer"
              >
                Play Trailer
              </a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
