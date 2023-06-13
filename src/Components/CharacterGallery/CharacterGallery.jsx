import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/global";
import { useEffect } from "react";

import "./CharacterGallery.scss";

function CharacterGallery() {
  const { id } = useParams();
  const { getCharacterPictures, pictures } = useGlobalContext();

  useEffect(() => {
    getCharacterPictures(id);
  }, []);

  const [index, setIndex] = useState(0);

  const handleImageClick = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="character-gallery">
        <div className="character-gallery__back-link">
          <Link to="/">Back</Link>
        </div>

        {pictures && pictures.length > 0 && (
          <div className="character-gallery__large-image">
            <img src={pictures[index]?.jpg.image_url} alt="" />
          </div>
        )}

        <div className="character-gallery__small-images">
          {pictures?.map((picture, i) => {
            return (
              <div
                className="image-container"
                key={i}
                onClick={() => handleImageClick(i)}
              >
                <img src={picture?.jpg?.image_url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CharacterGallery;
