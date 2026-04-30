import './App.css';
import {BrowserRouter as Router , Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import Movie from './components/ui/Movie';
import MovieInfo from './pages/MovieInfo';
import Footer from './components/Footer'
import { useState } from 'react';

function App({movie} ) {
const [searchTitle, setSearchTitle] = useState([])


  const {imdbID } = useParams();


  return (
    <>
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} ></Route>
          <Route path="search/:title" element={<Search/>}></Route>

        <Route path={`search/${searchTitle || "alone"}`} element={<Search/>}></Route>
      <Route path={`search/${searchTitle}`}  element={<Movie movie={movie}/>  }></Route>
      <Route path={`movieInfo/:imdbID`}  element={<MovieInfo imdbID={imdbID} movie={movie}/>  }></Route>
        </Routes>
      </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
