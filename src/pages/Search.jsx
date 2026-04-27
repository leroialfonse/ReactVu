import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import loadingTitles from "../assets/movieReel.png";

const Search = () => {
  const { title } = useParams();
  const location = useLocation();
  const { searchedTitle } = location.state || {};

  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTitle, setSearchTitle] = useState(title);
  const [sorted, setSorted] = useState([]);

  // firing the search if a user clicks the magnifying glass
  function onSearch() {
    setLoading(true);
    findMovies(setSearchTitle);
    setLoading(false);
  }

  // The fetch
  async function findMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=ac26afe9&s=${searchTitle || "alone"}`,
    );
   await setSearchMovies(data.Search.slice(0, 9));
  //  console.log(data.Search)
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      findMovies();
      onSearch();
      switchPage();
    }, 3000);
  }, []);

  async function sortMovies(filterOption) {
    await findMovies();

    if (filterOption === "NEWEST_TO_OLDEST") {
      setSearchMovies(searchMovies.sort((a, b) => b.Year - a.Year));
    } else if (filterOption === "OLDEST_TO_NEWEST") {
      setSearchMovies(searchMovies.sort((a, b) => a.Year - b.Year));
    }
  }

  async function switchPage(page) {
    // A good candidate for switch/case... maybe more pages too..
    try{
    if (page === "1") {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=ac26afe9&s=${searchTitle  || "alone"}&page=1`,
      );
      setSearchMovies(data.Search.slice(0, 9));
    } else if (page === "2") {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=ac26afe9&s=${searchTitle || "alone"}&page=2`,
      );
      // console.log(data)
      setSearchMovies(data.Search.slice(0, 9));
    } else if (page === "3") {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=ac26afe9&s=${searchTitle || "alone"}&page=3`,
      );
      setSearchMovies(data.Search.slice(0, 9));
      // console.log(data)
    }
  }
  catch (error ){
    alert ("Sorry! Couldn't find that !")
    console.error(error)
  }
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <section id="search">
            <label className="movie__search--label">Find Your Movie</label>

            <div className="input-wrap">
              <div className="input-container">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search Movies by Title..."
                  value={searchTitle || null}
                  onChange={(event) => setSearchTitle(event.target.value)}
                  onKeyDown={(event) => {
                    event.key === "Enter" && onSearch();

                    if (event.key === "Enter") {
                      onSearch();
                    }
                  }}

                  // onKeyPress={(event) => {
                  // Top Tech
                  // event.key === 'Enter' && onSearch();

                  // if( event.key === 'Enter') {)
                  //   onSearch();
                  // }

                  // Junior and Mid roles.
                  // onSearchKeyPress(event.key)
                />

                <FontAwesomeIcon
                  className="mag"
                  icon={faMagnifyingGlass}
                  onClick={() => onSearch()}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container results">
        <div className="results__header">
          <h2>Search Results:</h2>

          <div className="results__header--filter">
            <select
              name="movie filter"
              id="sort"
              onChange={(event) => sortMovies(event.target.value)}
            >
              <option value="" disabled defaultValue={"Sort by Release Year"}>
                Sort by Release Year
              </option>
              <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
              <option value="OLDEST_TO_NEWEST">Oldest to Newest</option>
            </select>
          </div>
        </div>
        <div className="page__select">
          <p>Page</p>
          <select
            name="page"
            id="selected"
            onChange={(event) => switchPage(event.target.value)}
          >
            <option value="" disabled selected defaultValue={"Select Page"}>
              Select Page
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        {/* Load the movies or the loading state skeleton. */}
        {loading ? (
          new Array(3).fill(0).map((__, index) => (
            <div className="grid">
              <div className="product__card" key={index}>
                <img
                  src={loadingTitles}
                  alt=""
                  className="product__card--img"
                />
                <p className="product__title"></p>
                
                <p className="product__detail"></p>
              </div>
              <div className="product__card">
                <img
                  src={loadingTitles}
                  alt=""
                  className="product__card--img"
                />
                <p className="product__title"></p>
                
                <p className="product__detail"></p>
              </div>
              <div className="product__card">
                <img
                  src={loadingTitles}
                  alt=""
                  className="product__card--img"
                />
                <p className="product__title"></p>
                
                <p className="product__detail"></p>
              </div>
            </div>
          ))
        ) : (
          <div className="movie__list">
            {searchMovies.map((movie, index) => (
              <>
                <div className="movie__card--container">
                  <div className="movie__card" key={index}>
                    <div key={movie.imdbID}>
                      <img
                        src={movie.Poster}
                        alt=""
                        className="movie__card--img"
                      />
                      <p className="movie__card-title">{movie.Title} </ p>
                      <p className="movie__card-year">{movie.Year}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </div>

      
    </>
  );
};

export default Search;
