import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/global";
import "./Upcoming.scss";

function Upcoming({ rendered }) {
  const { upcomingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "upcoming") {
      return upcomingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };

  return (
    <div className="upcoming-anime">
      <div className="upcoming-anime__display-box">{conditionalRender()}</div>
    </div>
  );
}

export default Upcoming;
