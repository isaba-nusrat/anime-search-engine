import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function AnimeItem() {
  const { id } = useParams();

  //state
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  //destructure anime
  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  //get anime based on id
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getAnime(id);
  }, []);

  return (
    <div className="anime-item">
      <h1>{title}</h1>
      <div className="anime-item__wrapper">
        <div className="anime-item__container">
          <div className="anime-item__images">
            <img src={images?.jpg.large_image_url} alt="anime-item-image" />
          </div>
          <div className="anime-item__details">
            <p>
              <span>Aired:</span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span>Rating:</span>
              <span>{rating}</span>
            </p>
            <p>
              <span>Rank:</span>
              <span>{rank}</span>
            </p>
            <p>
              <span>Score:</span>
              <span>{score}</span>
            </p>
            <p>
              <span>Scored By:</span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span>Popularity:</span>
              <span>{popularity}</span>
            </p>
            <p>
              <span>Status:</span>
              <span>{status}</span>
            </p>
            <p>
              <span>Source:</span>
              <span>{source}</span>
            </p>
            <p>
              <span>Season:</span>
              <span>{season}</span>
            </p>
            <p>
              <span>Duration:</span>
              <span>{duration}</span>
            </p>
          </div>
        </div>

        <p className="description">
          {showDetails ? synopsis : synopsis?.substring(0, 450) + "..."}
          <button
            onClick={() => {
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? "Show Less" : "Read More"}{" "}
          </button>
        </p>
      </div>
      <h3 className="anime-item__title">Trailer</h3>
      <div className="anime-item__trailer-container">
        {trailer?.embed_url && (
          <iframe
            src={trailer.embed_url}
            title={title}
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default AnimeItem;
