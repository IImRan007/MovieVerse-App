const TrendingCard = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-7">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
          alt="Shoes"
        />
      </figure>
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
      </div>
    </div>
  );
};

export default TrendingCard;
