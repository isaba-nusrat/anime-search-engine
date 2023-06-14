import React from "react";
import { useState } from "react";
import Popular from "../Popular/Popular";
import Upcoming from "../Upcoming/Upcoming";
import Airing from "../Airing/Airing";
import { useGlobalContext } from "../../context/global";

import animatedImage from "../../assets/images/nezuko.gif";

import "./Home.scss";

function Home() {
  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getPopularAnime,
    getUpcomingAnime,
    getAiringAnime,
  } = useGlobalContext();
  const [rendered, setRendered] = useState("popular");

  const switchComponents = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <div className="home">
      <header>
        <div className="home__logo">
          <img
            src={animatedImage}
            alt="Animated Image"
            className="animated-image"
            height="120"
            width="120"
          />
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>

        <div className="home__search-container">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular
            </button>
          </div>
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>
          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>

          <div className="filter-btn log-in">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
              className="log-in-btn"
            >
              LogIn
            </button>
          </div>
        </div>
      </header>
      {switchComponents()}
    </div>
  );
}

export default Home;
