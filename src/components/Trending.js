import axios from "axios";
import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);

  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    getTrendingData();
    // eslint-disable-next-line
  }, []);

  const getTrendingData = async () => {
    const response = await axios.get(url);
    const data = await response.data.results;
    console.log(data);
    setTrendingData(data);
  };

  return (
    <>
      <h1 className="text-5xl font-bold m-7">Trending</h1>
      <div className="flex flex-row flex-wrap">
        {trendingData &&
          trendingData.map((item) => (
            <TrendingCard item={item} key={item.id} />
          ))}
      </div>
    </>
  );
};

export default Trending;
