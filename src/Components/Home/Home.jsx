import React from "react";
import { useState, useEffect } from "react";
import Popular from "../Popular/Popular";
import Upcoming from "../Upcoming/Upcoming";
import Airing from "../Airing/Airing";
import { useGlobalContext } from "../../context/global";
import { Link } from "react-router-dom";
import SoundEffect from "../SoundEffect/SoundEffect";
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
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, []);

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

  const handleLinkClick = (event) => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="home">
      <header>
        <div className="home__logo">
          <h1>
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>

        <div className="home__search-container">
          <SoundEffect />
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                handleLinkClick();
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
              <button type="submit" onClick={handleLinkClick()}>
                Search
              </button>
            </div>
          </form>
          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                handleLinkClick();
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
                handleLinkClick();
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>
          {!user ? (
            <div className="filter-btn log-in">
              <Link to="/signin/form">
                <button className="log-in-btn">LogIn</button>
              </Link>
            </div>
          ) : (
            <div className="filter-btn log-in">
              <button className="log-in-btn" onClick={handleLogOut}>
                LogOut
              </button>
            </div>
          )}
        </div>
      </header>
      {switchComponents()}
    </div>
  );
}

export default Home;
