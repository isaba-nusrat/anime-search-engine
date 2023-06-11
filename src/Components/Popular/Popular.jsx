import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/global";
import "./Popular.scss";

function Popular() {
  const { popularAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img src={anime.images.jpg.large_image_url} alt="" />
          </Link>
        );
      });
    }
  };

  return (
    <div className="popular-anime">
      <div className="popular-anime__display-box">{conditionalRender()}</div>
    </div>
  );
}

export default Popular;
