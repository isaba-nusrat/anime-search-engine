import React, { useRef } from "react";
import audioFile from "../../assets/audio/anima-main-7426.mp3";
import image from "../../assets/images/icons8-sound.svg";
import "./SoundEffect.scss";

const SoundEffect = () => {
  const audioRef = useRef(null);

  const playSoundEffect = () => {
    audioRef.current.play();
  };

  return (
    <>
      <audio ref={audioRef} src={audioFile} preload="auto" />
      <div className="icon">
        <img src={image} height="50" width="70" onClick={playSoundEffect} />
      </div>
    </>
  );
};

export default SoundEffect;
