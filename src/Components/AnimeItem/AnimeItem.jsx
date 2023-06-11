import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function AnimeItem() {
  const { id } = useParams();

  //state
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

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

  return <div>AnimeItem</div>;
}

export default AnimeItem;
