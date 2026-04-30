import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Movie from '../components/ui/Movie';
import Header from '../components/Header';
import loadingTitles from "../assets/movieReel.png";




const MovieInfo = ({movie}) => {

    const {imdbID} = useParams()
    const navigate = useNavigate();
    const [loading, setLoading ] = useState(true)

    const [movieData, setMovieData] = useState([]);

    async function showInfo (){
        setLoading(true)
        const {data} = await axios.get(
            `https://www.omdbapi.com/?apikey=ac26afe9&i=${imdbID}&plot=full`)
            await  setMovieData(data)
            setLoading(false)
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() =>{


            setTimeout(() => {

                showInfo();
            }, 5000);
        
            
        },[])
        return (

            <> 
            <Header/>
            
    <div className="container">
            
        <div className="row">
        <div className="highlight">

            {
                loading ? new Array(1).fill(0).map((__, index) => 
                ( 
                      <div  key={index} className='highlight__skeleton ' >
                                    <img
                                      src={loadingTitles}
                                      alt=""
                                      className="highlight__skeleton--img"
                                    />
                                    <div className="highlight__text">
                                        <div className="highlight__skeleton-desc">
                                            <p className="product__title"></p>
                                            <p className="product__desc"></p>
                                            <p className="product__detail"></p>
                                        </div>
                                        <div className="highlight__skeleton--note">
                                            <p className="product__title"></p>
                                            <p className="product__title"></p>
                                        </div>
                                    </div>
                                  </div>
                )) : (

                    <>
            <img src={movieData.Poster} alt={`${movieData.Title} Image` }  className='highlight__img'/>
            <div className="highlight__desc">
                <h2 className='highlight__title'>{movieData.Title}</h2>
                <p>{movieData.Plot}</p>
                   <p> {movieData.rating}</p>
                
                <div className="highlight__desc-info">
                    
                    <p className='movie__card-year'>Runtime: {movieData.Runtime}</p>
                    <p className='movie__card-year'>Release:  {movieData.Year}</p>
                </div>
            </div>
            </>
                )
            } 
      
        </div>
        </div>
    </div>
            </>
  )
}

export default MovieInfo
