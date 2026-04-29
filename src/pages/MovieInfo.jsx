import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Movie from '../components/ui/Movie';
import Header from '../components/Header';

const MovieInfo = ({movie}) => {

    const {imdbID} = useParams()
    

    const [movieData, setMovieData] = useState([]);

    async function showInfo (){
        const {data} = await axios.get(
            `https://www.omdbapi.com/?apikey=ac26afe9&i=${imdbID}&plot=full`)
          await  setMovieData(data)
          console.log(data)
        }
        
        useEffect(() => {
        showInfo();
        }, [])
        
        return (

            <> 
            <Header/>
            
    <div className="container">
        <div className="row">
        <div className="highlight">
        
            <img src={movieData.Poster} alt={`${movieData.Title} Image` } />
            <div className="highlight__desc">
                <h2>{movieData.Title}</h2>
                <p>{movieData.Plot}</p>
                   <p> {movieData.rating}</p>
                <div>
                </div>
                <p>{movieData.Runtime}</p>
                <p>Release:  {movieData.Year}</p>
            </div>
            {/* </div> */}
        {/*
                <div className="movie__preview">
                <Movie/>
                </div> */}
                <div>
                    {/* <Movie movie={movie}/> */}
                </div>
        </div>
        </div>
    </div>
            </>
  )
}

export default MovieInfo
