import React, {useState} from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const Movie = ({movie}) => {

  const [pageData, setPageData] = useState([])

  const navigate = useNavigate();

  const imdb = movie.imdbID



    async function moviePage() {
    
    navigate(`/movieInfo/${imdb}`)
  }

  return (

    
    
    <div className="movie__card--container">

                  <div
                    className="movie__card"
                    key={movie.index}
                    onClick={() => moviePage()}
                  >
                    <div key={movie.imdbID}>
                      <img
                        src={movie.Poster}
                        alt=""
                        className="movie__card--img"
                      />
                      <p className="movie__card-title">{movie.Title} </p>
                      <p className="movie__card-year">{movie.Year}</p>
                    <span className="tooltip" data-tooltip="Click for More!">Learn More</span>
                    </div>
                  </div>
                </div>
  )
}

export default Movie;
