import React, { useEffect, useState } from "react";
import ReelRed from "../assets/MovieReelRed.png";
import Movies from "../assets/homeTheater.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons/faM";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [searchedTitle, setSearchedTitle] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

 

  const { title } = useParams();

  const navigate = useNavigate();

  const handleRedirect = (searchedTitle) => {
    navigate(`/search/${searchedTitle}`, { state: { searchedTitle } });
  };

  return (
    <div className="container home__nav">
      <nav>
        <div className="header__logo">
          <div className="header__logo--brand">
            <img
              src={ReelRed}
              className="header__logo--img"
              alt="MovieVue Reel"
            />
            <h1 className="header__logo--title black">
              <span>movie</span>
              <span className="red">Vu</span>
            </h1>
          </div>
        </div>
        <ul className="header__links">
          <li>
            <Link to="/search" className="black">
              Search Movies
            </Link>
          </li>
          
          <li className="contact">
            <Link to="assets/Brandon White Resume.pdf" target="_blank">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="row">
        <h2 className="home__tag">
          The best way to find your next <span className="red">favorite!</span>
        </h2>
        <h3>
          <span className="red">MovieVu</span> plays the hits
        </h3>

       

        <div className="home__movies">
          <div className="search__el">
            <input
              type="text"
              id="search-input"
              value={searchedTitle}
              placeholder="Search Movies..."
              onChange={(e) => setSearchedTitle(e.target.value)}
      
              onKeyDown={(event) => {

                if (event.key === "Enter") {
                  handleRedirect(searchedTitle);
                }
              }}
              className="home__search"
            />

            <button
              className="search__button"
              value={searchedTitle}
              style={{ width: "75px" }}
              onClick={() => handleRedirect(searchedTitle)}
            >
              <FontAwesomeIcon
                className="search"
                icon={faMagnifyingGlass}
                value={searchedTitle}
                style={{ fontSize: "20px" }}
                onClick={(e) => handleRedirect(searchedTitle)}
              />
            </button>
          </div>
          <img src={Movies} className="home__movies--img" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
